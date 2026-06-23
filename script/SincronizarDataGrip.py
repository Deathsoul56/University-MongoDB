"""
Copia los archivos de consola del proyecto hacia la carpeta de consolas de DataGrip.

Esto mantiene los archivos .js de MongoDB que usas en DataGrip actualizados con las
versiones que están en el repositorio (Base Datos/).

Uso:
  py "script/SincronizarDataGrip.py" --dry-run
  py "script/SincronizarDataGrip.py" --yes
"""

import argparse
import filecmp
import shutil
import sys
from datetime import datetime
from pathlib import Path

ARCHIVOS_DEFAULT = [
    "Alumnos.js",
    "Docentes.js",
    "Cursos.js",
    "University.js",
    "console.js",
]

ORIGEN_DEFAULT = Path(__file__).resolve().parent.parent / "Base Datos"
DESTINO_DEFAULT = Path(
    r"C:\Users\rafa_\AppData\Roaming\JetBrains\DataGrip2026.1\consoles\db\d673dd66-9560-4124-aa0a-dd4d794b5362"
)


def sincronizar(origen, destino, archivos, dry_run=False, backup=False, yes=False):
    if not origen.exists():
        print(f"ERROR: No existe la carpeta de origen: {origen}")
        return False

    if not destino.exists():
        print(f"ERROR: No existe la carpeta de destino: {destino}")
        return False

    a_copiar = []
    iguales = []
    no_encontrados = []

    for nombre in archivos:
        src = origen / nombre
        dst = destino / nombre

        if not src.exists():
            no_encontrados.append(nombre)
            continue

        if dst.exists() and filecmp.cmp(str(src), str(dst), shallow=False):
            iguales.append(nombre)
        else:
            a_copiar.append((src, dst, nombre))

    print(f"\nOrigen:  {origen}")
    print(f"Destino: {destino}")
    print(f"\nArchivos iguales (sin cambios): {len(iguales)}")
    for nombre in sorted(iguales):
        print(f"  {nombre}")

    if no_encontrados:
        print(f"\nArchivos no encontrados en origen: {len(no_encontrados)}")
        for nombre in sorted(no_encontrados):
            print(f"  {nombre}")

    if not a_copiar:
        print("\nNo hay archivos que copiar.")
        return True

    print(f"\nArchivos a copiar/sobrescribir: {len(a_copiar)}")
    for src, dst, nombre in a_copiar:
        if dst.exists():
            print(f"  {nombre}: sobrescribir destino")
        else:
            print(f"  {nombre}: crear en destino")

    if dry_run:
        print("\n[MODO SIMULACIÓN] No se copió nada.")
        return True

    if not yes:
        respuesta = input("\n¿Copiar los archivos? [s/N]: ").strip().lower()
        if respuesta not in ("s", "si", "sí"):
            print("Operación cancelada.")
            return True

    if backup:
        marca = datetime.now().strftime("%Y%m%d_%H%M%S")
        for src, dst, nombre in a_copiar:
            if dst.exists():
                backup_path = destino / f"{nombre}.{marca}.bak"
                shutil.copy2(str(dst), str(backup_path))
        print(f"\nBackups creados en: {destino} (extensión .{marca}.bak)")

    for src, dst, nombre in a_copiar:
        shutil.copy2(str(src), str(dst))

    print(f"\nCopiados {len(a_copiar)} archivo(s) a DataGrip.")
    return True


def main():
    parser = argparse.ArgumentParser(
        description="Copia los archivos de consola del proyecto a la carpeta de consolas de DataGrip."
    )
    parser.add_argument(
        "--origen",
        type=Path,
        default=ORIGEN_DEFAULT,
        help=f"Carpeta de origen. Por defecto: {ORIGEN_DEFAULT}",
    )
    parser.add_argument(
        "--destino",
        type=Path,
        default=DESTINO_DEFAULT,
        help=f"Carpeta de destino en DataGrip. Por defecto: {DESTINO_DEFAULT}",
    )
    parser.add_argument(
        "--archivos",
        nargs="+",
        default=ARCHIVOS_DEFAULT,
        help=f"Lista de archivos a sincronizar. Por defecto: {ARCHIVOS_DEFAULT}",
    )
    parser.add_argument(
        "--backup",
        action="store_true",
        help="Crea una copia de seguridad de los archivos destino antes de sobrescribirlos.",
    )
    parser.add_argument(
        "--yes", "-y",
        action="store_true",
        help="Copia sin pedir confirmación.",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Muestra qué se copiaría sin hacer cambios.",
    )
    args = parser.parse_args()

    exit_code = 0 if sincronizar(
        args.origen, args.destino, args.archivos, args.dry_run, args.backup, args.yes
    ) else 1
    sys.exit(exit_code)


if __name__ == "__main__":
    main()
