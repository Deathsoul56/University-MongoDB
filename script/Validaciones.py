"""
Validaciones de consistencia para la base de datos `university`.
Ejecutar con: py "Base Datos/Validaciones.py"

Requisitos: pymongo
  py -m pip install pymongo
"""

import re
import sys
from collections import defaultdict
from pymongo import MongoClient

# Ajusta la URI si tu MongoDB no está en localhost:27017
MONGO_URI = "mongodb://localhost:27017"
DB_NAME = "university"


def conectar():
    try:
        client = MongoClient(MONGO_URI, serverSelectionTimeoutMS=5000)
        client.admin.command("ping")
        return client[DB_NAME]
    except Exception as e:
        print(f"ERROR: No se pudo conectar a MongoDB en {MONGO_URI}")
        print(f"Detalle: {e}")
        sys.exit(1)


def imprimir_resultado(titulo, errores, consejo=None):
    print(f"\n--- {titulo} ---")
    if not errores:
        print("OK. No se encontraron problemas.")
    else:
        print(f"SE ENCONTRARON {len(errores)} PROBLEMA(S):")
        for i, e in enumerate(errores, 1):
            print(f"  {i}. {e}")
        if consejo:
            print(f"Consejo: {consejo}")


def parsear_codigo(codigo):
    """Devuelve (prefijo, numero) si el código cumple LETRAS+NÚMEROS, sino None."""
    match = re.fullmatch(r"([A-Za-z]+)([0-9]+)", str(codigo))
    if match:
        return match.group(1), int(match.group(2))
    return None


# ============================================================
# 1. VALIDACIONES DE courses
# ============================================================

def validar_courses(db):
    cursos = list(db.courses.find({}, {"Código": 1, "Nombre": 1, "Facultad": 1, "Créditos": 1, "_id": 0}))
    codigos = [c.get("Código") for c in cursos]

    # 1.1 Códigos únicos
    conteo = defaultdict(int)
    for c in codigos:
        conteo[c] += 1
    dup_codes = [f"Código '{c}' repetido {n} veces." for c, n in conteo.items() if n > 1]
    imprimir_resultado(
        "courses: códigos únicos",
        dup_codes,
        "Elimina o renombra los cursos con código duplicado."
    )

    # 1.2 Formato de código y número >= 100
    formato_invalido = []
    for c in cursos:
        codigo = c.get("Código")
        parsed = parsear_codigo(codigo)
        if parsed is None:
            formato_invalido.append(
                f"Código '{codigo}' ({c.get('Nombre')}) no cumple el formato LETRAS+NÚMEROS."
            )
        elif parsed[1] < 100:
            formato_invalido.append(
                f"Código '{codigo}' ({c.get('Nombre')}) tiene número menor que 100."
            )
    imprimir_resultado(
        "courses: formato de código y número >= 100",
        formato_invalido,
        "Todos los códigos deben tener el formato LETRAS+NÚMEROS y el número debe ser >= 100."
    )

    # 1.3 Sin saltos numéricos por prefijo
    saltos = []
    por_prefijo = defaultdict(list)
    for c in cursos:
        parsed = parsear_codigo(c.get("Código", ""))
        if parsed:
            por_prefijo[parsed[0]].append(parsed[1])

    for prefijo, nums in por_prefijo.items():
        nums_unicos = sorted(set(nums))
        if len(nums_unicos) < 2:
            continue
        for i in range(nums_unicos[0], nums_unicos[-1] + 1):
            if i not in nums_unicos:
                saltos.append(
                    f"Falta código {prefijo}{i} (prefijo {prefijo}, entre {nums_unicos[0]} y {nums_unicos[-1]})."
                )
    imprimir_resultado(
        "courses: sin saltos numéricos por prefijo",
        saltos,
        "Si existe un rango de números para un prefijo, deben existir todos los códigos intermedios."
    )

    # 1.4 Cursos no repetidos en diferentes facultades
    por_nombre = defaultdict(lambda: {"facultades": set(), "codigos": set()})
    for c in cursos:
        nombre = c.get("Nombre")
        por_nombre[nombre]["facultades"].add(c.get("Facultad"))
        por_nombre[nombre]["codigos"].add(c.get("Código"))

    repetidos = [
        f"Curso '{nombre}' aparece en facultades: {', '.join(sorted(v['facultades']))} "
        f"(códigos: {', '.join(sorted(v['codigos']))})."
        for nombre, v in por_nombre.items()
        if len(v["facultades"]) > 1
    ]
    imprimir_resultado(
        "courses: nombres de curso no repetidos entre facultades",
        repetidos,
        "Un curso con el mismo nombre debe pertenecer a una sola facultad."
    )

    # 1.5 Nombres no vacíos y créditos válidos
    datos_invalidos = []
    for c in cursos:
        nombre = c.get("Nombre")
        if not nombre or str(nombre).strip() == "":
            datos_invalidos.append(f"Código '{c.get('Código')}' tiene nombre vacío.")
        creditos = c.get("Créditos")
        if not isinstance(creditos, (int, float)) or creditos <= 0:
            datos_invalidos.append(
                f"Código '{c.get('Código')}' ({nombre}) tiene créditos inválidos: {creditos}."
            )
    imprimir_resultado(
        "courses: nombres y créditos válidos",
        datos_invalidos,
        "Todo curso debe tener nombre no vacío y créditos numéricos mayores a 0."
    )

    return set(codigos)


# ============================================================
# 2. VALIDACIONES DE students
# ============================================================

def validar_students(db, codigos_courses):
    estudiantes = list(db.students.find(
        {},
        {"rut": 1, "datos_personales.nombre": 1, "cursos": 1, "_id": 0}
    ))

    # 2.1 RUTs únicos
    conteo_ruts = defaultdict(list)
    for e in estudiantes:
        conteo_ruts[e.get("rut")].append(e.get("datos_personales", {}).get("nombre"))
    dup_ruts = [
        f"RUT '{rut}' repetido {len(nombres)} veces ({', '.join(n for n in nombres if n)})."
        for rut, nombres in conteo_ruts.items()
        if len(nombres) > 1
    ]
    imprimir_resultado(
        "students: RUTs únicos",
        dup_ruts,
        "Cada estudiante debe tener un RUT único."
    )

    # 2.2 Cursos inscritos existen en courses
    cursos_invalidos = []
    for e in estudiantes:
        nombre = e.get("datos_personales", {}).get("nombre")
        rut = e.get("rut")
        for curso in e.get("cursos", []):
            codigo = curso.get("codigo")
            if codigo not in codigos_courses:
                cursos_invalidos.append(
                    f"Estudiante '{nombre}' (RUT {rut}) tiene curso inexistente: {codigo} - {curso.get('nombre')}."
                )
    imprimir_resultado(
        "students: cursos inscritos existen en courses",
        cursos_invalidos,
        "Todo curso en students.cursos.codigo debe existir en courses.Código."
    )

    # 2.3 Estados de cursos válidos
    estados_validos = {"Aprobado", "Reprobado", "Cursando"}
    estados_invalidos = []
    for e in estudiantes:
        nombre = e.get("datos_personales", {}).get("nombre")
        rut = e.get("rut")
        for curso in e.get("cursos", []):
            estado = curso.get("estado")
            if estado not in estados_validos:
                estados_invalidos.append(
                    f"Estudiante '{nombre}' (RUT {rut}) tiene estado '{estado}' en curso {curso.get('codigo')}."
                )
    imprimir_resultado(
        "students: estados de cursos válidos",
        estados_invalidos,
        "Los estados permitidos son: Aprobado, Reprobado, Cursando."
    )

    # 2.4 Cursos duplicados en mismo año/semestre para un estudiante
    duplicados = []
    for e in estudiantes:
        rut = e.get("rut")
        vistos = defaultdict(int)
        for curso in e.get("cursos", []):
            clave = (curso.get("codigo"), curso.get("año"), curso.get("semestre"))
            vistos[clave] += 1
        for (codigo, anio, semestre), count in vistos.items():
            if count > 1:
                duplicados.append(
                    f"Estudiante RUT {rut} tiene {count} veces el curso {codigo} en {anio}-{semestre}."
                )
    imprimir_resultado(
        "students: sin cursos duplicados en mismo año/semestre",
        duplicados,
        "Un estudiante no debería tener el mismo curso repetido en el mismo año y semestre."
    )


# ============================================================
# 3. VALIDACIONES DE docentes
# ============================================================

def validar_docentes(db, codigos_courses):
    docentes = list(db.docentes.find(
        {},
        {
            "rut": 1,
            "datos_personales.nombre": 1,
            "datos_academicos.departamento": 1,
            "datos_academicos.categoría": 1,
            "datos_academicos.categoria": 1,
            "cursos": 1,
            "Horarios": 1,
            "_id": 0
        }
    ))

    # 3.1 RUTs únicos
    conteo_ruts = defaultdict(list)
    for d in docentes:
        conteo_ruts[d.get("rut")].append(d.get("datos_personales", {}).get("nombre"))
    dup_ruts = [
        f"RUT '{rut}' repetido {len(nombres)} veces ({', '.join(n for n in nombres if n)})."
        for rut, nombres in conteo_ruts.items()
        if len(nombres) > 1
    ]
    imprimir_resultado(
        "docentes: RUTs únicos",
        dup_ruts,
        "Cada docente debe tener un RUT único."
    )

    # 3.2 Cursos dictados existen en courses
    cursos_invalidos = []
    for d in docentes:
        nombre = d.get("datos_personales", {}).get("nombre")
        rut = d.get("rut")
        for curso in d.get("cursos", []):
            codigo = curso.get("codigo")
            if codigo not in codigos_courses:
                cursos_invalidos.append(
                    f"Docente '{nombre}' (RUT {rut}) dicta curso inexistente: {codigo} - {curso.get('nombre')}."
                )
    imprimir_resultado(
        "docentes: cursos dictados existen en courses",
        cursos_invalidos,
        "Todo curso en docentes.cursos.codigo debe existir en courses.Código."
    )

    # 3.3 Horarios consistentes con cursos dictados
    horarios_inconsistentes = []
    for d in docentes:
        nombre = d.get("datos_personales", {}).get("nombre")
        rut = d.get("rut")
        cursos_dictados = {c.get("codigo") for c in d.get("cursos", [])}
        for h in d.get("Horarios", []):
            curso_horario = h.get("curso")
            if curso_horario not in cursos_dictados:
                horarios_inconsistentes.append(
                    f"Docente '{nombre}' (RUT {rut}) tiene horario para curso {curso_horario} que no dicta."
                )
    imprimir_resultado(
        "docentes: horarios consistentes con cursos dictados",
        horarios_inconsistentes,
        "Cada entrada de Horarios.curso debe coincidir con algún docentes.cursos.codigo."
    )

    # 3.4 Datos académicos mínimos
    datos_invalidos = []
    for d in docentes:
        nombre = d.get("datos_personales", {}).get("nombre", "(sin nombre)")
        da = d.get("datos_academicos", {})
        if not da.get("departamento") or str(da.get("departamento")).strip() == "":
            datos_invalidos.append(f"Docente '{nombre}' no tiene departamento.")
        if not da.get("categoría") and not da.get("categoria"):
            datos_invalidos.append(f"Docente '{nombre}' no tiene categoría.")
    imprimir_resultado(
        "docentes: departamento y categoría presentes",
        datos_invalidos,
        "Todo docente debe tener departamento y categoría definidos."
    )


# ============================================================
# Ejecución principal
# ============================================================

def main():
    db = conectar()
    print("=" * 60)
    print(" VALIDACIONES DE CONSISTENCIA - UNIVERSITY")
    print("=" * 60)

    codigos_courses = validar_courses(db)
    validar_students(db, codigos_courses)
    validar_docentes(db, codigos_courses)

    print("\n" + "=" * 60)
    print(" FIN DE VALIDACIONES")
    print("=" * 60)


if __name__ == "__main__":
    main()
