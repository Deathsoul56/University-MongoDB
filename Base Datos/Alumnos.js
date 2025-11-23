show dbs

use university

show collections

db.students.insertMany([
{
    "rut": "16483921-9",
    "datos_personales":
    {
        "nombre": "Bob Esponja",
        "fecha_nacimiento": ISODate("1999-05-01"),
        "genero": "Masculino",
        "direccion": "Barrio Residencial, Fondo de Bikini",
        "correo": "bob_esponja@gmail.com",
        "telefono": 919359566
    },

    "datos_academicos":
    {
        "carrera": "Ingeniería Civil Informática",
        "codigo_carrera": "INF",
        "año_ingreso": 2022,
        "estado": "Alumno Activo",
        "PGA": null,
        "cambios_carrera": null,
        "cambios_universidad": null,
        "asignaturas_convalidadas": null,
        "creditos_aprobados": 150,
        "becas": "Beca Estatal"
    },

    "financiamiento":
    {
        "porcentaje_beca": 0.8,
        "porcentaje_pago_directo": 0.2,
        "cuotas_impagas": null
    },

    "datos_extracurriculares":
    {
        "deportes":[
        {
            "nombre": "surf",
            "año-semestre": ["2022-1","2022-2"]
        },
        {
            "nombre": "golf",
            "año-semestre": ["2022-1"],
        }],
        "fraternidad": "Los Cascarudos"
    },

    "cursos":[
    {
        "codigo": "MAT103",
        "nombre": "Cálculo I",
        "año": 2022,
        "semestre": 1,
        "creditos": 30,
        "seccion": 3,
        "estado": "Aprobado"

    },
    {
        "codigo": "MAT115",
        "nombre": "Algebra",
        "año": 2022,
        "semestre": 1,
        "creditos": 30,
        "seccion": 3,
        "estado": "Aprobado"

    },
    {
        "codigo": "CIC100",
        "nombre": "Introducción a la Ingeniería",
        "año": 2022,
        "semestre": 1,
        "creditos": 30,
        "seccion": 2,
        "estado": "Aprobado"

    },
    {
        "codigo": "INF100",
        "nombre": "Introducción a la Programación",
        "año": 2022,
        "semestre": 1,
        "creditos": 30,
        "seccion": 1,
        "estado": "Aprobado"

    },
    {
        "codigo": "ENG100",
        "nombre": "Ingles I",
        "año": 2022,
        "semestre": 1,
        "creditos": 30,
        "seccion": 3,
        "estado": "Aprobado"

    },
    {
        "codigo": "MAT104",
        "nombre": "Cálculo II",
        "año": 2022,
        "semestre": 2,
        "creditos": 30,
        "seccion": 3,
        "estado": "Cursando"

    },
    {
        "codigo": "MAT116",
        "nombre": "Algebra Lineal",
        "año": 2022,
        "semestre": 2,
        "creditos": 30,
        "seccion": 3,
        "estado": "Cursando"

    },
    {
        "codigo": "QUI101",
        "nombre": "Química General I",
        "año": 2022,
        "semestre": 2,
        "creditos": 30,
        "seccion": 1,
        "estado": "Cursando"

    },
    {
        "codigo": "INF101",
        "nombre": "Programación",
        "año": 2022,
        "semestre": 2,
        "creditos": 30,
        "seccion": 2,
        "estado": "Cursando"

    },
    {
        "codigo": "ENG101",
        "nombre": "Ingles II",
        "año": 2022,
        "semestre": 2,
        "creditos": 30,
        "seccion": 3,
        "estado": "Cursando"

    }]
},

/*--------------------------------------------------------------------------------------------------*/
{
    "rut": "17894562-9",
    "datos_personales":
    {
        "nombre": "Patricio Estrella",
        "fecha_nacimiento": ISODate("1998-05-05"),
        "genero": "Masculino",
        "direccion": "Barrio Residencial, Fondo de Bikini",
        "correo": "patricio_estrella@gmail.com",
        "telefono": 923456789
    },

    "datos_academicos":
    {
        "carrera": "Ingeniería Civil Informática",
        "codigo_carrera": "INF",
        "año_ingreso": 2022,
        "estado": "Alumno Activo",
        "PGA": null,
        "cambios_carrera": null,
        "cambios_universidad":
        {
            "antigua_universidad": "Universidad Stanford",
            "semestre_ingreso": 1
        },
        "asignaturas_convalidadas": ["ENG100", "ENG101"],
        "creditos_aprobados": 0,
        "becas": "Beca Estatal"
    },

    "financiamiento":
    {
        "porcentaje_beca": 0.75,
        "porcentaje_pago_directo": 0.25,
        "cuotas_impagas": 1
    },

    "datos_extracurriculares":
    {
        "deportes":[
        {
            "nombre": "boxeo",
            "año-semestre": ["2022-1", "2022-2"]
        }],
        "fraternidad": "Rocosos"
    },

    "cursos":[
    {
        "codigo": "MAT103",
        "nombre": "Cálculo I",
        "año": 2022,
        "semestre": 1,
        "creditos": 30,
        "seccion": 3,
        "estado": "Aprobado"

    },
    {
        "codigo": "MAT115",
        "nombre": "Algebra",
        "año": 2022,
        "semestre": 1,
        "creditos": 30,
        "seccion": 3,
        "estado": "Aprobado"

    },
    {
        "codigo": "CIC100",
        "nombre": "Introducción a la Ingeniería",
        "año": 2022,
        "semestre": 1,
        "creditos": 30,
        "seccion": 1,
        "estado": "Aprobado"

    },
    {
        "codigo": "INF100",
        "nombre": "Introducción a la Programación",
        "año": 2022,
        "semestre": 1,
        "creditos": 30,
        "seccion": 2,
        "estado": "Aprobado"

    },
        {
        "codigo": "MAT104",
        "nombre": "Cálculo II",
        "año": 2022,
        "semestre": 2,
        "creditos": 30,
        "seccion": 3,
        "estado": "Cursando"

    },
    {
        "codigo": "MAT116",
        "nombre": "Algebra Lineal",
        "año": 2022,
        "semestre": 2,
        "creditos": 30,
        "seccion": 3,
        "estado": "Cursando"

    },
    {
        "codigo": "FIS101",
        "nombre": "Física Mecánica",
        "año": 2022,
        "semestre": 2,
        "creditos": 30,
        "seccion": 2,
        "estado": "Cursando"

    },
    {
        "codigo": "INF101",
        "nombre": "Programación",
        "año": 2022,
        "semestre": 2,
        "creditos": 30,
        "seccion": 1,
        "estado": "Cursando"

    },
    {
        "codigo": "INF106",
        "nombre": "Arquitectura de Computadores",
        "año": 2022,
        "semestre": 2,
        "creditos": 30,
        "seccion": 1,
        "estado": "Cursando"

    }]
},

/*--------------------------------------------------------------------------------------------------*/
{
    "rut": "14376931-4",
    "datos_personales": {
        "nombre": "Arenita Mejillas",
        "fecha_nacimiento": ISODate("1995-08-17"),
        "genero": "Femenino",
        "direccion": "Cúpula de Cristal, Fondo de Bikini",
        "correo": "arenita_mejillas@gmail.com",
        "telefono": 981804542
    },
    "datos_academicos": {
        "carrera": "Licenciatura en Biología",
        "codigo_carrera": "BIO",
        "año_ingreso": 2020,
        "estado": "Alumno Activo",
        "PGA": 6.8,
        "cambios_carrera":
        {
            "carrera_anterior": "Ciencias Físicas",
            "carrera_nueva": "Ciencias Biológicas",
            "año_cambio": 2021,
            "semestre_cambio": 1

        },
        "cambios_universidad": null,
        "asignaturas_convalidadas": null,
        "creditos_aprobados": 90,
        "becas": "Beca Talento Regional"
    },
    "financiamiento": {
        "porcentaje_beca": 0.95,
        "porcentaje_pago_directo": 0.05,
        "cuotas_impagas": 0
    },
    "datos_extracurriculares": {
        "deportes": [
            {
                "nombre": "Karate",
                "año-semestre": ["2020-1", "2020-2", "2021-1"]
            },
            {
                "nombre": "Surf",
                "año-semestre": ["2020-1", "2021-1"]
            },
            {
                "nombre": "Natacion",
                "año-semestre": ["2021-1"]
            }
        ],
        "fraternidad": "Los Texanos"
    },
    "cursos": [
        {
            "codigo": "MAT103",
            "nombre": "Cálculo I",
            "año": 2020,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "MAT115",
            "nombre": "Algebra",
            "año": 2020,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "FIS100",
            "nombre": "Introducción a la Física",
            "año": 2020,
            "semestre": 1,
            "creditos": 30,
            "seccion": 2,
            "estado": "Aprobado"
        },
        {
            "codigo": "CBC100",
            "nombre": "Introducción a las Ciencias",
            "año": 2020,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "ENG100",
            "nombre": "Ingles I",
            "año": 2020,
            "semestre": 1,
            "creditos": 30,
            "seccion": 3,
            "estado": "Aprobado"
        },
        {
            "codigo": "MAT104",
            "nombre": "Cálculo II",
            "año": 2020,
            "semestre": 2,
            "creditos": 30,
            "seccion": 2,
            "estado": "Aprobado"
        },
        {
            "codigo": "MAT116",
            "nombre": "Algebra Lineal",
            "año": 2020,
            "semestre": 2,
            "creditos": 30,
            "seccion": 3,
            "estado": "Aprobado"
        },
        {
            "codigo": "MAT103",
            "nombre": "Física Mecánica",
            "año": 2020,
            "semestre": 2,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "QUI101",
            "nombre": "Química General I",
            "año": 2020,
            "semestre": 2,
            "creditos": 30,
            "seccion": 2,
            "estado": "Aprobado"
        },
        {
            "codigo": "ENG101",
            "nombre": "Ingles II",
            "año": 2020,
            "semestre": 2,
            "creditos": 30,
            "seccion": 3,
            "estado": "Aprobado"
        },
        {
            "codigo": "BIO100",
            "nombre": "Introducción a las Biología",
            "año": 2021,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "ENG102",
            "nombre": "Ingles III",
            "año": 2021,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "INF101",
            "nombre": "Programación",
            "año": 2021,
            "semestre": 1,
            "creditos": 30,
            "seccion": 2,
            "estado": "Aprobado"
        },
        {
            "codigo": "QUI102",
            "nombre": "Química General II",
            "año": 2021,
            "semestre": 1,
            "creditos": 30,
            "seccion": 3,
            "estado": "Aprobado"
        },
        {
          "codigo": "BIO101",
          "nombre": "Biología General I",
          "año": 2021,
          "semestre": 2,
          "creditos": 30,
          "seccion": 3,
          "estado": "Aprobado"
        },
        {
          "codigo": "BIO112",
          "nombre": "Bioestadística I",
          "año": 2021,
          "semestre": 2,
          "creditos": 30,
          "seccion": 3,
          "estado": "Aprobado"
        },
        {
          "codigo": "MAT127",
          "nombre": "Ecuaciones Diferenciales Ordinarias I",
          "año": 2021,
          "semestre": 2,
          "creditos": 30,
          "seccion": 2,
          "estado": "Aprobado"
        },
        {
          "codigo": "BIO114",
          "nombre": "Bioquímica",
          "año": 2021,
          "semestre": 2,
          "creditos": 30,
          "seccion": 3,
          "estado": "Aprobado"
        },
        {
          "codigo": "ENG103",
          "nombre": "Ingles IV",
          "año": 2021,
          "semestre": 2,
          "creditos": 30,
          "seccion": 1,
          "estado": "Aprobado"
        },
        {
          "codigo": "BIO102",
          "nombre": "Biología General II",
          "año": 2022,
          "semestre": 1,
          "creditos": 30,
          "seccion": 3,
          "estado": "Aprobado"
        },
        {
          "codigo": "BIO113",
          "nombre": "Bioestadística II",
          "año": 2022,
          "semestre": 1,
          "creditos": 30,
          "seccion": 1,
          "estado": "Aprobado"
        },
        {
          "codigo": "BIO119",
          "nombre": "Microbiología General",
          "año": 2022,
          "semestre": 1,
          "creditos": 30,
          "seccion": 1,
          "estado": "Aprobado"
        },
        {
          "codigo": "BIO116",
          "nombre": "Genética",
          "año": 2022,
          "semestre": 1,
          "creditos": 30,
          "seccion": 3,
          "estado": "Aprobado"
        },
        {
          "codigo": "ENG104",
          "nombre": "Ingles V",
          "año": 2022,
          "semestre": 1,
          "creditos": 30,
          "seccion": 3,
          "estado": "Aprobado"
        },
        {
          "codigo": "BIO106",
          "nombre": "Diversidad Vegetal I",
          "año": 2022,
          "semestre": 2,
          "creditos": 30,
          "seccion": 3,
          "estado": "Cursando"
        },
        {
          "codigo": "BIO109",
          "nombre": "Diversidad Animal I",
          "año": 2022,
          "semestre": 2,
          "creditos": 30,
          "seccion": 2,
          "estado": "Cursando"
        },
        {
          "codigo": "BIO119",
          "nombre": "Microbiología General",
          "año": 2022,
          "semestre": 2,
          "creditos": 30,
          "seccion": 3,
          "estado": "Cursando"
        },
        {
          "codigo": "BIO117",
          "nombre": "Genoma",
          "año": 2022,
          "semestre": 2,
          "creditos": 30,
          "seccion": 3,
          "estado": "Cursando"
        },
        {
          "codigo": "ENG105",
          "nombre": "Ingles VI",
          "año": 2022,
          "semestre": 1,
          "creditos": 30,
          "seccion": 1,
          "estado": "Cursando"
        }]
},

/*--------------------------------------------------------------------------------------------------*/
{
    "rut": "19808255-4",
    "datos_personales":
    {
        "nombre": "Calamardo Tentáculos",
        "fecha_nacimiento": ISODate("1994-10-22"),
        "genero": "Masculino",
        "direccion": "Barrio Residencial, Fondo de Bikini",
        "correo": "calamardo_tentaculos@gmail.com",
        "telefono": 919572536
    },

    "datos_academicos":
    {
        "carrera": "Artes Musicales",
        "codigo_carrera": "AMU",
        "año_ingreso": 2021,
        "estado": "Alumno Activo",
        "PGA": 5.6,
        "cambios_carrera": null,
        "cambios_universidad": null,
        "asignaturas_convalidadas": null,
        "creditos_aprobados": 0,
        "becas": "Beca Artistica"
    },

    "financiamiento":
    {
        "porcentaje_beca": 0.6,
        "porcentaje_pago_directo": 0.4,
        "cuotas_impagas": 1
    },

    "datos_extracurriculares":
    {
        "deportes":[
        {
            "nombre": "Carrera de larga distancia",
            "año-semestre": ["2021-1", "2021-2", "2022-1", "2022-2"]
        }],
        "fraternidad": "Los Cascarudos"
    },

    "cursos":[
    {
        "codigo": "AMU100",
        "nombre": "Introduccion a la Audicion Musical",
        "año": 2021,
        "semestre": 1,
        "creditos": 30,
        "seccion": 3,
        "estado": "Aprobado"

    },
    {
        "codigo": "AMU101",
        "nombre": "Historia de la Musica I",
        "año": 2021,
        "semestre": 1,
        "creditos": 30,
        "seccion": 3,
        "estado": "Aprobado"

    },
    {
        "codigo": "AMU109",
        "nombre": "Taller de Teclado I",
        "año": 2021,
        "semestre": 1,
        "creditos": 30,
        "seccion": 1,
        "estado": "Aprobado"

    },
    {
        "codigo": "AMU113",
        "nombre": "Taller de Guitarra I",
        "año": 2021,
        "semestre": 1,
        "creditos": 30,
        "seccion": 1,
        "estado": "Aprobado"

    },
    {
        "codigo": "ENG100",
        "nombre": "Ingles I",
        "año": 2021,
        "semestre": 1,
        "creditos": 30,
        "seccion": 2,
        "estado": "Aprobado"
    },
    {
        "codigo": "AMU105",
        "nombre": "Armonía I",
        "año": 2021,
        "semestre": 2,
        "creditos": 30,
        "seccion": 1,
        "estado": "Aprobado"
    },
    {
        "codigo": "AMU102",
        "nombre": "Historia de la Musica II",
        "año": 2021,
        "semestre": 2,
        "creditos": 30,
        "seccion": 1,
        "estado": "Aprobado"
    },
    {
        "codigo": "AMU110",
        "nombre": "Taller de Teclado II",
        "año": 2021,
        "semestre": 2,
        "creditos": 30,
        "seccion": 2,
        "estado": "Aprobado"
    },
    {
        "codigo": "AMU114",
        "nombre": "Taller de Guitarra II",
        "año": 2021,
        "semestre": 2,
        "creditos": 30,
        "seccion": 2,
        "estado": "Aprobado"
    },
    {
        "codigo": "AMU120",
        "nombre": "Lenguaje Musical I",
        "año": 2021,
        "semestre": 2,
        "creditos": 30,
        "seccion": 2,
        "estado": "Aprobado"
    },
    {
        "codigo": "ENG101",
        "nombre": "Ingles II",
        "año": 2021,
        "semestre": 2,
        "creditos": 30,
        "seccion": 2,
        "estado": "Aprobado"
    },
    {
        "codigo": "AMU105",
        "nombre": "Armonía II",
        "año": 2022,
        "semestre": 1,
        "creditos": 30,
        "seccion": 1,
        "estado": "Reprobado"
    },
    {
        "codigo": "AMU102",
        "nombre": "Historia de la Musica III",
        "año": 2022,
        "semestre": 1,
        "creditos": 30,
        "seccion": 2,
        "estado": "Aprobado"
    },
    {
        "codigo": "AMU110",
        "nombre": "Taller de Teclado II",
        "año": 2022,
        "semestre": 1,
        "creditos": 30,
        "seccion": 3,
        "estado": "Aprobado"
    },
    {
        "codigo": "AMU114",
        "nombre": "Taller de Guitarra II",
        "año": 2022,
        "semestre": 1,
        "creditos": 30,
        "seccion": 2,
        "estado": "Aprobado"
    },
    {
        "codigo": "AMU121",
        "nombre": "Lenguaje Musical II",
        "año": 2022,
        "semestre": 1,
        "creditos": 30,
        "seccion": 3,
        "estado": "Aprobado"
    },
    {
        "codigo": "ENG102",
        "nombre": "Ingles III",
        "año": 2022,
        "semestre": 1,
        "creditos": 30,
        "seccion": 1,
        "estado": "Aprobado"
    },
    {
        "codigo": "AMU105",
        "nombre": "Armonía II",
        "año": 2022,
        "semestre": 2,
        "creditos": 30,
        "seccion": 1,
        "estado": "Cursando"
    },
    {
        "codigo": "AMU102",
        "nombre": "Historia de la Musica IV",
        "año": 2022,
        "semestre": 2,
        "creditos": 30,
        "seccion": 2,
        "estado": "Cursando"
    },
    {
        "codigo": "AMU110",
        "nombre": "Taller de Teclado III",
        "año": 2022,
        "semestre": 2,
        "creditos": 30,
        "seccion": 1,
        "estado": "Cursando"
    },
    {
        "codigo": "AMU114",
        "nombre": "Taller de Guitarra III",
        "año": 2022,
        "semestre": 2,
        "creditos": 30,
        "seccion": 2,
        "estado": "Cursando"
    },
    {
        "codigo": "AMU121",
        "nombre": "Lenguaje Musical III",
        "año": 2022,
        "semestre": 2,
        "creditos": 30,
        "seccion": 3,
        "estado": "Cursando"
    },
    {
        "codigo": "ENG103",
        "nombre": "Ingles IV",
        "año": 2022,
        "semestre": 2,
        "creditos": 30,
        "seccion": 1,
        "estado": "Cursando"
    }]
},

/*--------------------------------------------------------------------------------------------------*/
{
    "rut": "17135964-3",
    "datos_personales":
    {
        "nombre": "Calamarino Tentáculos",
        "fecha_nacimiento": ISODate("1994-10-22"),
        "genero": "Masculino",
        "direccion": "Condominio Abraham Lincoln, Fondo de Bikini",
        "correo": "calamarino_tentaculos@gmail.com",
        "telefono": 946832915
    },

    "datos_academicos":
    {
        "carrera": "Artes Musicales",
        "codigo_carrera": "AMU",
        "año_ingreso": 2020,
        "estado": "Alumno Activo",
        "PGA": 6.4,
        "cambios_carrera":null,
        "cambios_universidad":
        {
            "antigua_universidad": "Universidad Oxford",
            "semestre_ingreso": 1
        },
        "asignaturas_convalidadas": ["ENG100", "ENG101"],
        "creditos_aprobados": 0,
        "becas": "Beca Artistica"
    },

    "financiamiento":
    {
        "porcentaje_beca": 0.2,
        "porcentaje_pago_directo": 0.8,
        "cuotas_impagas": 1
    },

    "datos_extracurriculares":
    {
        "deportes": null,
        "fraternidad": "Alta Gamma"
    },

    "cursos":[
    {
        "codigo": "AMU100",
        "nombre": "Introduccion a la Audicion Musical",
        "año": 2020,
        "semestre": 1,
        "creditos": 30,
        "seccion": 3,
        "estado": "Aprobado"

    },
    {
        "codigo": "AMU101",
        "nombre": "Historia de la Musica I",
        "año": 2020,
        "semestre": 1,
        "creditos": 30,
        "seccion": 3,
        "estado": "Aprobado"

    },
    {
        "codigo": "AMU109",
        "nombre": "Taller de Teclado I",
        "año": 2020,
        "semestre": 1,
        "creditos": 30,
        "seccion": 1,
        "estado": "Aprobado"

    },
    {
        "codigo": "AMU113",
        "nombre": "Taller de Guitarra I",
        "año": 2020,
        "semestre": 1,
        "creditos": 30,
        "seccion": 1,
        "estado": "Aprobado"

    },
    {
        "codigo": "AMU117",
        "nombre": "Taller Vocal I",
        "año": 2020,
        "semestre": 1,
        "creditos": 30,
        "seccion": 2,
        "estado": "Aprobado"

    }]
},

/*--------------------------------------------------------------------------------------------------*/
{
    "rut": "19697000-2",
    "datos_personales": {
        "nombre": "Perlita Cangrejo",
        "fecha_nacimiento": ISODate("2000-03-15"),
        "genero": "Femenino",
        "direccion": "Calle del Tesoro 281, Fondo de Bikini",
        "correo": "perlita_cangrejo@gmail.com",
        "telefono": 980415623
    },
    "datos_academicos": {
        "carrera": "Ingeniería Civil Mecánica",
        "codigo_carrera": "MEC",
        "año_ingreso": 2022,
        "estado": "Alumno Activo",
        "PGA": null,
        "cambios_carrera": null,
        "cambios_universidad": null,
        "asignaturas_convalidadas": null,
        "creditos_aprobados": 0,
        "becas": "Beca de Trabajadora"
    },
    "financiamiento": {
        "porcentaje_beca": 0.7,
        "porcentaje_pago_directo": 0.3,
        "cuotas_impagas": null
    },
    "datos_extracurriculares": {
        "deportes": [
            {
                "nombre": "natación",
                "año-semestre": ["2022-1", "2022-2"]
            },
            {
                "nombre": "volleyball",
                "año-semestre": ["2022-2"]
            }
        ],
        "fraternidad": "Las Sirenas Doradas"
    },
    "cursos": [
        {
            "codigo": "MAT103",
            "nombre": "Cálculo I",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 2,
            "estado": "Aprobado"
        },
        {
            "codigo": "MAT115",
            "nombre": "Algebra",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "ICV117",
            "nombre": "Dibujo Industrial",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "CIC100",
            "nombre": "Introducción a la Ingeniería",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 2,
            "estado": "Aprobado"
        },
        {
            "codigo": "ENG100",
            "nombre": "Ingles I",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "MAT104",
            "nombre": "Cálculo II",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 1,
            "estado": "Cursando"
        },
        {
            "codigo": "FIS101",
            "nombre": "Física Mecánica",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 2,
            "estado": "Cursando"
        },
        {
            "codigo": "QUI101",
            "nombre": "Química General I",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 2,
            "estado": "Cursando"
        },
        {
            "codigo": "INF101",
            "nombre": "Programación",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 3,
            "estado": "Cursando"
        },
        {
            "codigo": "ENG101",
            "nombre": "Ingles II",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 2,
            "estado": "Cursando"
        }
    ]
},

/*--------------------------------------------------------------------------------------------------*/
{
    "rut": "20169506-6",
    "datos_personales": {
        "nombre": "Sheldon Plankton",
        "fecha_nacimiento": ISODate("1997-11-30"),
        "genero": "Masculino",
        "direccion": "Cubeta de Chum 123, Fondo de Bikini",
        "correo": "sheldon_plankton@gmail.com",
        "telefono": 974853158
    },
    "datos_academicos": {
        "carrera": "Ingeniería Civil Informática",
        "codigo_carrera": "INF",
        "año_ingreso": 2021,
        "estado": "Alumno Activo",
        "PGA": 6.2,
        "cambios_carrera": {
            "carrera_anterior": "Química",
            "carrera_nueva": "Ingeniería Civil Informática",
            "año_cambio": 2022,
            "semestre_cambio": 1
        },
        "cambios_universidad": null,
        "asignaturas_convalidadas": ["QUI101", "QUI102"],
        "creditos_aprobados": 60,
        "becas": "Beca Talento Científico"
    },
    "financiamiento": {
        "porcentaje_beca": 0.5,
        "porcentaje_pago_directo": 0.5,
        "cuotas_impagas": 0
    },
    "datos_extracurriculares": {
        "deportes": [
            {
                "nombre": "ajedrez",
                "año-semestre": ["2021-1", "2021-2", "2022-1", "2022-2"]
            },
            {
                "nombre": "robótica",
                "año-semestre": ["2022-1", "2022-2"]
            }
        ],
        "fraternidad": "Valde de Carnada"
    },
    "cursos": [
        {
            "codigo": "MAT103",
            "nombre": "Cálculo I",
            "año": 2021,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "MAT115",
            "nombre": "Algebra",
            "año": 2021,
            "semestre": 1,
            "creditos": 30,
            "seccion": 2,
            "estado": "Aprobado"
        },
        {
            "codigo": "QUI101",
            "nombre": "Química General I",
            "año": 2021,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "CBC100",
            "nombre": "Introducción a las Ciencias",
            "año": 2021,
            "semestre": 1,
            "creditos": 30,
            "seccion": 3,
            "estado": "Aprobado"
        },
        {
            "codigo": "MAT104",
            "nombre": "Cálculo II",
            "año": 2021,
            "semestre": 2,
            "creditos": 30,
            "seccion": 2,
            "estado": "Aprobado"
        },
        {
            "codigo": "MAT116",
            "nombre": "Algebra Lineal",
            "año": 2021,
            "semestre": 2,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "QUI102",
            "nombre": "Química General II",
            "año": 2021,
            "semestre": 2,
            "creditos": 30,
            "seccion": 2,
            "estado": "Aprobado"
        },
        {
            "codigo": "ENG100",
            "nombre": "Ingles I",
            "año": 2021,
            "semestre": 2,
            "creditos": 30,
            "seccion": 3,
            "estado": "Aprobado"
        },
        {
            "codigo": "INF100",
            "nombre": "Introducción a la Programación",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "INF101",
            "nombre": "Programación",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 2,
            "estado": "Aprobado"
        },
        {
            "codigo": "CIC100",
            "nombre": "Introducción a la Ingeniería",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "ENG101",
            "nombre": "Ingles II",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 2,
            "estado": "Aprobado"
        },
        {
            "codigo": "INF102",
            "nombre": "Programación Avanzada",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 1,
            "estado": "Cursando"
        },
        {
            "codigo": "MAT130",
            "nombre": "Probabilidad y Estadística",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 3,
            "estado": "Cursando"
        },
        {
            "codigo": "ENG102",
            "nombre": "Ingles III",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 2,
            "estado": "Cursando"
        }
    ]
},

/*--------------------------------------------------------------------------------------------------*/
{
    "rut": "20987654-3",
    "datos_personales": {
        "nombre": "Larry Langosta",
        "fecha_nacimiento": ISODate("1996-07-20"),
        "genero": "Masculino",
        "direccion": "Playa Goo Lagoon 476, Fondo de Bikini",
        "correo": "larry_langosta@gmail.com",
        "telefono": 957812085
    },
    "datos_academicos": {
        "carrera": "Pedagogía en Educación Física",
        "codigo_carrera": "PEF",
        "año_ingreso": 2020,
        "estado": "Alumno Activo",
        "PGA": 5.8,
        "cambios_carrera": null,
        "cambios_universidad": {
            "antigua_universidad": "Universidad del Pacífico",
            "semestre_ingreso": 3
        },
        "asignaturas_convalidadas": null,
        "creditos_aprobados": 150,
        "becas": "Beca Deportiva"
    },
    "financiamiento": {
        "porcentaje_beca": 0.6,
        "porcentaje_pago_directo": 0.4,
        "cuotas_impagas": 1
    },
    "datos_extracurriculares": {
        "deportes": [
            {
                "nombre": "levantamiento de pesas",
                "año-semestre": ["2020-2", "2021-1", "2021-2", "2022-1", "2022-2"]
            },
            {
                "nombre": "surf",
                "año-semestre": ["2020-1", "2020-2", "2021-1", "2021-2", "2022-1", "2022-2"]
            }
        ],
        "fraternidad": "Los Músculos Marinos"
    },
    "cursos": [
        {
            "codigo": "PED101",
            "nombre": "Taller Pedagógico I",
            "año": 2020,
            "semestre": 1,
            "creditos": 30,
            "seccion": 2,
            "estado": "Aprobado"
        },
        {
            "codigo": "PEF100",
            "nombre": "Bases Biológicas de la Actividad Física",
            "año": 2020,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Reprobado"
        },
        {
            "codigo": "PEF102",
            "nombre": "Expresión y Creatividad Corporal",
            "año": 2020,
            "semestre": 1,
            "creditos": 30,
            "seccion": 3,
            "estado": "Aprobado"
        },
        {
            "codigo": "PEF103",
            "nombre": "Fundamentos de la Motricidad Humana",
            "año": 2020,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "PED106",
            "nombre": "Educación, Sociedad y Desarrollo Humano",
            "año": 2020,
            "semestre": 1,
            "creditos": 30,
            "seccion": 3,
            "estado": "Aprobado"
        },
        {
            "codigo": "PEF104",
            "nombre": "Evolución de la Educación Física",
            "año": 2020,
            "semestre": 1,
            "creditos": 30,
            "seccion": 2,
            "estado": "Aprobado"
        },
        {
            "codigo": "PED102",
            "nombre": "Taller Pedagógico II",
            "año": 2020,
            "semestre": 2,
            "creditos": 30,
            "seccion": 1,
            "estado": "Reprobado"
        },
        {
            "codigo": "PEF100",
            "nombre": "Bases Biológicas de la Actividad Física",
            "año": 2020,
            "semestre": 2,
            "creditos": 30,
            "seccion": 3,
            "estado": "Aprobado"
        },
        {
            "codigo": "PEF101",
            "nombre": "Epistemología de la Educación Física",
            "año": 2020,
            "semestre": 2,
            "creditos": 30,
            "seccion": 2,
            "estado": "Reprobado"
        },
        {
            "codigo": "PEF106",
            "nombre": "Anatomía Humana Funcional",
            "año": 2020,
            "semestre": 2,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "PED105",
            "nombre": "Psicología Educativa",
            "año": 2020,
            "semestre": 2,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "PEF110",
            "nombre": "Gimnasia Rítmica",
            "año": 2020,
            "semestre": 2,
            "creditos": 30,
            "seccion": 2,
            "estado": "Aprobado"
        },
         {
            "codigo": "PED102",
            "nombre": "Taller Pedagógico II",
            "año": 2021,
            "semestre": 1,
            "creditos": 30,
            "seccion": 2,
            "estado": "Aprobado"
        },
        {
            "codigo": "PEF101",
            "nombre": "Epistemología de la Educación Física",
            "año": 2021,
            "semestre": 1,
            "creditos": 30,
            "seccion": 2,
            "estado": "Aprobado"
        },
        {
            "codigo": "PEF105",
            "nombre": "Expresión Corporal",
            "año": 2021,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "PEF108",
            "nombre": "Aprendizaje de la Motricidad Humana",
            "año": 2021,
            "semestre": 1,
            "creditos": 30,
            "seccion": 3,
            "estado": "Aprobado"
        },
        {
            "codigo": "PED107",
            "nombre": "Identidad Profesional Docente",
            "año": 2021,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "PEF111",
            "nombre": "Gimnasia Artística",
            "año": 2021,
            "semestre": 1,
            "creditos": 30,
            "seccion": 3,
            "estado": "Aprobado"
        },
        {
            "codigo": "PED103",
            "nombre": "Taller Pedagógico III",
            "año": 2021,
            "semestre": 2,
            "creditos": 30,
            "seccion": 3,
            "estado": "Aprobado"
        },
        {
            "codigo": "PEF109",
            "nombre": "Danza Tradicional Chilena",
            "año": 2021,
            "semestre": 2,
            "creditos": 30,
            "seccion": 3,
            "estado": "Aprobado"
        },
        {
            "codigo": "PED108",
            "nombre": "Construccion del Ser Docente y rol Pedagogico",
            "año": 2021,
            "semestre": 2,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "PEF119",
            "nombre": "Biomecánica del Movimiento Humano",
            "año": 2021,
            "semestre": 2,
            "creditos": 30,
            "seccion": 1,
            "estado": "Reprobado"
        },
        {
            "codigo": "PEF120",
            "nombre": "Fisiología General y Bioenergética de la actividad Física",
            "año": 2021,
            "semestre": 2,
            "creditos": 30,
            "seccion": 2,
            "estado": "Aprobado"
        },
        {
            "codigo": "PEF112",
            "nombre": "Atletismo",
            "año": 2021,
            "semestre": 2,
            "creditos": 30,
            "seccion": 2,
            "estado": "Aprobado"
        },
        {
            "codigo": "PED104",
            "nombre": "Taller Pedagógico IV",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "PEF119",
            "nombre": "Biomecánica del Movimiento Humano",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 3,
            "estado": "Aprobado"
        },
        {
            "codigo": "PEF121",
            "nombre": "Fisiología en la actividad Física",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 2,
            "estado": "Aprobado"
        },
        {
            "codigo": "PEF122",
            "nombre": "Desarrollo de las Capacidades Físicas",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 2,
            "estado": "Aprobado"
        },
        {
            "codigo": "PED109",
            "nombre": "Evaluación de los Aprendizajes",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 3,
            "estado": "Aprobado"
        },
        {
            "codigo": "PEF113",
            "nombre": "Natación",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "PED111",
            "nombre": "Teorías y Diseños Curriculares",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "PEF123",
            "nombre": "Nutrición para la Actividad Física y la Salud",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "PEF124",
            "nombre": "Motricidad en la infancia",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 3,
            "estado": "Aprobado"
        },
        {
            "codigo": "PEF125",
            "nombre": "Didáctica de la educación física",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 3,
            "estado": "Aprobado"
        },
        {
            "codigo": "PEF126",
            "nombre": "Didáctica de la Gimnasia",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 2,
            "estado": "Aprobado"
        },
        {
            "codigo": "PED110",
            "nombre": "Investigación Acción en la Escuela",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        }
    ]
},

/*--------------------------------------------------------------------------------------------------*/
{
    "rut": "21098765-4",
    "datos_personales": {
        "nombre": "Karen Computadora",
        "fecha_nacimiento": ISODate("1999-12-05"),
        "genero": "Femenino",
        "direccion": "Laboratorio Submarino 789, Fondo de Bikini",
        "correo": "karen_computadora@gmail.com",
        "telefono": 998765432
    },
    "datos_academicos": {
        "carrera": "Ingeniería Civil Industrial",
        "codigo_carrera": "IND",
        "año_ingreso": 2020,
        "estado": "Alumno Activo",
        "PGA": 6.7,
        "cambios_carrera": null,
        "cambios_universidad": null,
        "asignaturas_convalidadas": null,
        "creditos_aprobados": 180,
        "becas": "Beca de Excelencia Académica"
    },
    "financiamiento": {
        "porcentaje_beca": 0.9,
        "porcentaje_pago_directo": 0.1,
        "cuotas_impagas": 0
    },
    "datos_extracurriculares": {
        "deportes": [
            {
                "nombre": "ajedrez electrónico",
                "año-semestre": ["2020-1", "2020-2", "2021-1", "2021-2", "2022-1", "2022-2"]
            },
            {
                "nombre": "e-sports",
                "año-semestre": ["2021-1", "2021-2", "2022-1", "2022-2"]
            }
        ],
        "fraternidad": "Las Circuitos Integrados"
    },
    "cursos": [
        {
            "codigo": "MAT103",
            "nombre": "Cálculo I",
            "año": 2020,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "MAT115",
            "nombre": "Algebra",
            "año": 2020,
            "semestre": 1,
            "creditos": 30,
            "seccion": 2,
            "estado": "Aprobado"
        },
        {
            "codigo": "FIS100",
            "nombre": "Introducción a la Física",
            "año": 2020,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "CIC100",
            "nombre": "Introducción a la Ingeniería",
            "año": 2020,
            "semestre": 1,
            "creditos": 30,
            "seccion": 3,
            "estado": "Aprobado"
        },
        {
            "codigo": "ENG100",
            "nombre": "Ingles I",
            "año": 2020,
            "semestre": 1,
            "creditos": 30,
            "seccion": 2,
            "estado": "Aprobado"
        },
        {
            "codigo": "MAT104",
            "nombre": "Cálculo II",
            "año": 2020,
            "semestre": 2,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "MAT116",
            "nombre": "Algebra Lineal",
            "año": 2020,
            "semestre": 2,
            "creditos": 30,
            "seccion": 2,
            "estado": "Aprobado"
        },
        {
            "codigo": "FIS101",
            "nombre": "Física Mecánica",
            "año": 2020,
            "semestre": 2,
            "creditos": 30,
            "seccion": 3,
            "estado": "Aprobado"
        },
        {
            "codigo": "INF100",
            "nombre": "Introducción a la Programación",
            "año": 2020,
            "semestre": 2,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "ENG101",
            "nombre": "Ingles II",
            "año": 2020,
            "semestre": 2,
            "creditos": 30,
            "seccion": 2,
            "estado": "Aprobado"
        },
        {
            "codigo": "MAT105",
            "nombre": "Cálculo III",
            "año": 2021,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "FIS104",
            "nombre": "Electromagnetismo I",
            "año": 2021,
            "semestre": 1,
            "creditos": 30,
            "seccion": 2,
            "estado": "Aprobado"
        },
        {
            "codigo": "IND100",
            "nombre": "Investigación de Operaciones I",
            "año": 2021,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "INF101",
            "nombre": "Programación",
            "año": 2021,
            "semestre": 1,
            "creditos": 30,
            "seccion": 3,
            "estado": "Aprobado"
        },
        {
            "codigo": "ENG102",
            "nombre": "Ingles III",
            "año": 2021,
            "semestre": 1,
            "creditos": 30,
            "seccion": 2,
            "estado": "Aprobado"
        },
        {
            "codigo": "MAT130",
            "nombre": "Probabilidad y Estadística",
            "año": 2021,
            "semestre": 2,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "IND101",
            "nombre": "Investigación de Operaciones II",
            "año": 2021,
            "semestre": 2,
            "creditos": 30,
            "seccion": 2,
            "estado": "Aprobado"
        },
        {
            "codigo": "IND102",
            "nombre": "Gestión de Operaciones I",
            "año": 2021,
            "semestre": 2,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "FEN100",
            "nombre": "Economía I",
            "año": 2021,
            "semestre": 2,
            "creditos": 30,
            "seccion": 3,
            "estado": "Aprobado"
        },
        {
            "codigo": "IND103",
            "nombre": "Gestión de Operaciones II",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "IND104",
            "nombre": "Control de Calidad",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 2,
            "estado": "Aprobado"
        },
        {
            "codigo": "FEN101",
            "nombre": "Economía II",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "IND105",
            "nombre": "Simulación y Optimización",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 1,
            "estado": "Cursando"
        },
        {
            "codigo": "IND106",
            "nombre": "Ingeniería Económica",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 2,
            "estado": "Cursando"
        }
    ]
},

/*--------------------------------------------------------------------------------------------------*/
{
    "rut": "22109876-5",
    "datos_personales": {
        "nombre": "Gary el Caracol",
        "fecha_nacimiento": ISODate("2001-05-10"),
        "genero": "Masculino",
        "direccion": "Casa de Bob Esponja, Fondo de Bikini",
        "correo": "gary_caracol@gmail.com",
        "telefono": 914763708
    },
    "datos_academicos": {
        "carrera": "Licenciatura en Astronomía",
        "codigo_carrera": "AST",
        "año_ingreso": 2020,
        "estado": "Alumno Activo",
        "PGA": null,
        "cambios_carrera": null,
        "cambios_universidad": null,
        "asignaturas_convalidadas": null,
        "creditos_aprobados": 0,
        "becas": "Beca de Alimentación"
    },
    "financiamiento": {
        "porcentaje_beca": 0.4,
        "porcentaje_pago_directo": 0.6,
        "cuotas_impagas": 0
    },
    "datos_extracurriculares": {
        "deportes": [
            {
                "nombre": "carrera de caracoles",
                "año-semestre": ["2020-1","2020-2","2021-2"]
            }
        ],
        "fraternidad": "Los Moluscos Brillantes"
    },
    "cursos": [
        {
            "codigo": "MAT103",
            "nombre": "Cálculo I",
            "año": 2020,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "MAT115",
            "nombre": "Algebra",
            "año": 2020,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "AST100",
            "nombre": "Introducción a la Astronomía",
            "año": 2020,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "FIS100",
            "nombre": "Introducción a la Física",
            "año": 2020,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": 'Aprobado'
        },
        {
            "codigo": "CBC100",
            "nombre": "Introducción a las Ciencias",
            "año": 2020,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "ENG100",
            "nombre": "Ingles I",
            "año": 2020,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "MAT104",
            "nombre": "Cálculo II",
            "año": 2020,
            "semestre": 2,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "MAT116",
            "nombre": "Algebra Lineal",
            "año": 2020,
            "semestre": 2,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "AST101",
            "nombre": "Astronomía I",
            "año": 2020,
            "semestre": 2,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "INF100",
            "nombre": "Programación",
            "año": 2020,
            "semestre": 2,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "QUI101",
            "nombre": "Química General I",
            "año": 2020,
            "semestre": 2,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "ENG101",
            "nombre": "Ingles II",
            "año": 2020,
            "semestre": 2,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "MAT105",
            "nombre": "Cálculo III",
            "año": 2021,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "MAT133",
            "nombre": "Probabilidad y Estadística",
            "año": 2021,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "AST102",
            "nombre": "Astronomía II",
            "año": 2021,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "FIS101",
            "nombre": "Física Mecánica",
            "año": 2021,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "INF102",
            "nombre": "Programación Avanzada",
            "año": 2021,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "CBC101",
            "nombre": "Laboratorio I",
            "año": 2021,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "ENG102",
            "nombre": "Ingles III",
            "año": 2021,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "MAT130",
            "nombre": "Ecuaciones Diferenciales Ordinarias I",
            "año": 2021,
            "semestre": 2,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "MAT134",
            "nombre": "Análisis Multivariado",
            "año": 2021,
            "semestre": 2,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "AST106",
            "nombre": "Astrofísica General",
            "año": 2021,
            "semestre": 2,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "FIS106",
            "nombre": "Electromagnetismo I",
            "año": 2021,
            "semestre": 2,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "AST104",
            "nombre": "Astronomía Practica I",
            "año": 2021,
            "semestre": 2,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "CBC102",
            "nombre": "Laboratorio II",
            "año": 2021,
            "semestre": 2,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "ENG103",
            "nombre": "Ingles IV",
            "año": 2021,
            "semestre": 2,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "MAT108",
            "nombre": "Variable Compleja",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "MAT109",
            "nombre": "Cálculo de Variaciones",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "AST107",
            "nombre": "Astrofísica Estelar",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "AST105",
            "nombre": "Astronomía Practica II",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "FIS108",
            "nombre": "Electrodinámica I",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "CBC103",
            "nombre": "Laboratorio III",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "ENG104",
            "nombre": "Ingles V",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "MAT107",
            "nombre": "Calculo Numérico",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 1,
            "estado": "Cursando"
        },
        {
            "codigo": "FIS104",
            "nombre": "Mecánica Clásica I",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 1,
            "estado": "Cursando"
        },
        {
            "codigo": "AST108",
            "nombre": "Astrofísica Galáctica",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 1,
            "estado": "Cursando"
        },
        {
            "codigo": "FIS110",
            "nombre": "Termodinámica",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 1,
            "estado": "Cursando"
        },
        {
            "codigo": "FIS114",
            "nombre": "Óptica",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 1,
            "estado": "Cursando"
        },
        {
            "codigo": "CBC104",
            "nombre": "Laboratorio IV",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 1,
            "estado": "Cursando"
        },
        {
            "codigo": "ENG105",
            "nombre": "Ingles VI",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 1,
            "estado": "Cursando"
        }
    ]
},

/*--------------------------------------------------------------------------------------------------*/
{
    "rut": "19894992-2",
    "datos_personales": {
        "nombre": "Sirenita Cascabel",
        "fecha_nacimiento": ISODate("1998-09-15"),
        "genero": "Femenino",
        "direccion": "Arrecife de Coral 456, Fondo de Bikini",
        "correo": "sirenita_cascabel@gmail.com",
        "telefono": 981467381
    },
    "datos_academicos": {
        "carrera": "Licenciatura en Biología",
        "codigo_carrera": "BIO",
        "año_ingreso": 2021,
        "estado": "Alumno Activo",
        "PGA": 5.9,
        "cambios_carrera": {
            "carrera_anterior": "Licenciatura en Astronomía",
            "carrera_nueva": "Licenciatura en Biología",
            "año_cambio": 2022,
            "semestre_cambio": 1
        },
        "cambios_universidad": null,
        "asignaturas_convalidadas": ["CBC100", "QUI101"],
        "creditos_aprobados": 180,
        "becas": "Beca de Mérito Académico"
    },
    "financiamiento": {
        "porcentaje_beca": 0.7,
        "porcentaje_pago_directo": 0.3,
        "cuotas_impagas": 0
    },
    "datos_extracurriculares": {
        "deportes": [
            {
                "nombre": "natación sincronizada",
                "año-semestre": ["2021-1", "2021-2", "2022-1", "2022-2"]
            },
            {
                "nombre": "buceo",
                "año-semestre": ["2021-1", "2021-2", "2022-1", "2022-2"]
            }
        ],
        "fraternidad": "Las Sirenas de Coral"
    },
    "cursos": [
        {
            "codigo": "MAT103",
            "nombre": "Cálculo I",
            "año": 2021,
            "semestre": 1,
            "creditos": 30,
            "seccion": 2,
            "estado": "Reprobado"
        },
        {
            "codigo": "MAT115",
            "nombre": "Algebra",
            "año": 2021,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "AST100",
            "nombre": "Introducción a la Astronomía",
            "año": 2021,
            "semestre": 1,
            "creditos": 30,
            "seccion": 3,
            "estado": "Aprobado"
        },
        {
            "codigo": "CBC100",
            "nombre": "Introducción a las Ciencias",
            "año": 2021,
            "semestre": 1,
            "creditos": 30,
            "seccion": 2,
            "estado": "Aprobado"
        },
        {
            "codigo": "FIS100",
            "nombre": "Introducción a la Física",
            "año": 2021,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "FRA100",
            "nombre": "Frances I",
            "año": 2021,
            "semestre": 1,
            "creditos": 30,
            "seccion": 3,
            "estado": "Aprobado"
        },
        {
            "codigo": "MAT103",
            "nombre": "Cálculo I",
            "año": 2021,
            "semestre": 2,
            "creditos": 30,
            "seccion": 1,
            "estado": "Reprobado"
        },
        {
            "codigo": "MAT116",
            "nombre": "Algebra Lineal",
            "año": 2021,
            "semestre": 2,
            "creditos": 30,
            "seccion": 2,
            "estado": "Reprobado"
        },
        {
            "codigo": "AST101",
            "nombre": "Astronomía I",
            "año": 2021,
            "semestre": 2,
            "creditos": 30,
            "seccion": 3,
            "estado": "Aprobado"
        },
        {
            "codigo": "INF101",
            "nombre": "Programación",
            "año": 2021,
            "semestre": 2,
            "creditos": 30,
            "seccion": 1,
            "estado": "Reprobado"
        },
        {
            "codigo": "QUI101",
            "nombre": "Química General I",
            "año": 2021,
            "semestre": 2,
            "creditos": 30,
            "seccion": 2,
            "estado": "Aprobado"
        },
        {
            "codigo": "FRA101",
            "nombre": "Frances II",
            "año": 2021,
            "semestre": 2,
            "creditos": 30,
            "seccion": 3,
            "estado": "Aprobado"
        },
        {
            "codigo": "MAT103",
            "nombre": "Cálculo I",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "BIO100",
            "nombre": "Introducción a la Biología",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 2,
            "estado": "Aprobado"
        },
        {
            "codigo": "QUI100",
            "nombre": "Introducción a las Química",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 3,
            "estado": "Aprobado"
        },
        {
            "codigo": "BIO103",
            "nombre": "Ambiente y Vida",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "FRA102",
            "nombre": "Frances III",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 2,
            "estado": "Aprobado"
        },
        {
            "codigo": "MAT104",
            "nombre": "Cálculo II",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 3,
            "estado": "Cursando"
        },
        {
            "codigo": "BIO101",
            "nombre": "Biología General I",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 1,
            "estado": "Cursando"
        },
        {
            "codigo": "QUI101",
            "nombre": "Química General I",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 2,
            "estado": "Cursando"
        },
        {
            "codigo": "BIO132",
            "nombre": "Zoología",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 3,
            "estado": "Cursando"
        },
        {
            "codigo": "BIO104",
            "nombre": "Biología Celular",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 1,
            "estado": "Cursando"
        },
        {
            "codigo": "FRA103",
            "nombre": "Frances IV",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 2,
            "estado": "Cursando"
        }

    ]
},

/*--------------------------------------------------------------------------------------------------*/
{
    "rut": "20543210-K",
    "datos_personales": {
        "nombre": "Don Cangrejo Jr.",
        "fecha_nacimiento": ISODate("2000-07-22"),
        "genero": "Masculino",
        "direccion": "Avenida del Dinero 23, Fondo de Bikini",
        "correo": "don_cangrejo_jr@gmail.com",
        "telefono": 901585244
    },
    "datos_academicos": {
        "carrera": "Ingeniería Comercial",
        "codigo_carrera": "FEN",
        "año_ingreso": 2022,
        "estado": "Alumno en Proceso de Matrícula",
        "PGA": null,
        "cambios_carrera": null,
        "cambios_universidad": null,
        "asignaturas_convalidadas": null,
        "creditos_aprobados": 0,
        "becas": null
    },
    "financiamiento": {
        "porcentaje_beca": 0,
        "porcentaje_pago_directo": 1,
        "cuotas_impagas": null
    },
    "datos_extracurriculares": {
        "deportes": null,
        "fraternidad": null
    },
    "cursos": [
        {
            "codigo": "MAT103",
            "nombre": "Cálculo I",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 3,
            "estado": "Aprobado"
        },
        {
            "codigo": "MAT116",
            "nombre": "Algebra",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "CIC100",
            "nombre": "Introducción a la Ingeniería",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 3,
            "estado": "Aprobado"
        },
        {
            "codigo": "CIC101",
            "nombre": "Introducción a la Innovación",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 2,
            "estado": "Aprobado"
        },
        {
            "codigo": "INF100",
            "nombre": "Introducción a la Programación",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 2,
            "estado": "Aprobado"
        },
        {
            "codigo": "GER100",
            "nombre": "Alemán I",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "MAT104",
            "nombre": "Cálculo II",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 3,
            "estado": "Cursando"
        },
        {
            "codigo": "MAT116",
            "nombre": "Algebra Lineal",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 2,
            "estado": "Cursando"
        },
        {
            "codigo": "FEN100",
            "nombre": "Economía I",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 3,
            "estado": "Cursando"
        },
        {
            "codigo": "INF101",
            "nombre": "Programación",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 1,
            "estado": "Cursando"
        },
        {
            "codigo": "INF103",
            "nombre": "Tecnologías de la información",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 1,
            "estado": "Cursando"
        },
        {
            "codigo": "GER101",
            "nombre": "Alemán II",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 2,
            "estado": "Cursando"
        }
    ]
},

/*--------------------------------------------------------------------------------------------------*/
{
    "rut": "20038869-0",
    "datos_personales": {
        "nombre": "Vicente Plano",
        "fecha_nacimiento": ISODate("2002-02-28"),
        "genero": "Masculino",
        "direccion": "Muelle Azul, Fondo de Bikini",
        "correo": "pepe_pescador@gmail.com",
        "telefono": 930374212
    },
    "datos_academicos": {
        "carrera": "Artes Teatrales",
        "codigo_carrera": "ATE",
        "año_ingreso": 2022,
        "estado": "Alumno Activo",
        "PGA": null,
        "cambios_carrera": null,
        "cambios_universidad": null,
        "asignaturas_convalidadas": null,
        "creditos_aprobados": 0,
        "becas": "Beca Talento Acuático"
    },
    "financiamiento": {
        "porcentaje_beca": 0.5,
        "porcentaje_pago_directo": 0.5,
        "cuotas_impagas": 0
    },
    "datos_extracurriculares": {
        "deportes": [
            {
                "nombre": "pesca deportiva",
                "año-semestre": ["2022-1"]
            }
        ],
        "fraternidad": "Pescadores Unidos"
    },
    "cursos": [
            {
            "codigo": "ATE100",
            "nombre": "Acción y Teatralidad",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 2,
            "estado": "Aprobado"
        },
        {
            "codigo": "ATE101",
            "nombre": "Actuación I: Improvisación Teatral",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 3,
            "estado": "Aprobado"
        },
        {
            "codigo": "ATE108",
            "nombre": "Movimiento I: Preparación Corporal",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "ATE113",
            "nombre": "Voz I: Percepción Vocal",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 2,
            "estado": "Aprobado"
        },
        {
            "codigo": "ATE121",
            "nombre": "Teoría de la Representación",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 3,
            "estado": "Aprobado"
        },
        {
            "codigo": "ATE139",
            "nombre": "Historia del Teatro I",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Reprobado"
        },
        {
            "codigo": "AMU100",
            "nombre": "Introducción a la Audición Musical",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 2,
            "estado": "Aprobado"
        },
        {
            "codigo": "GER100",
            "nombre": "Alemán I",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 3,
            "estado": "Aprobado"
        },
        {
            "codigo": "ATE102",
            "nombre": "Actuación II: Acción y Relato",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 1,
            "estado": "Cursando"
        },
        {
            "codigo": "ATE109",
            "nombre": "Movimiento II: Acción y Espacio",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 2,
            "estado": "Cursando"
        },
        {
            "codigo": "ATE114",
            "nombre": "Voz II: Acción y Palabra",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 3,
            "estado": "Reprobado"
        },
        {
            "codigo": "ATE122",
            "nombre": "Análisis Dramatúrgico I",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 1,
            "estado": "Cursando"
        },
        {
            "codigo": "ATE140",
            "nombre": "Historia del Teatro I",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 2,
            "estado": "Cursando"
        },
        {
            "codigo": "ATE143",
            "nombre": "Apreciación y Teorías del Arte",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 3,
            "estado": "Cursando"
        },
        {
            "codigo": "ATE144",
            "nombre": "Taller de Escenotécnica",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 1,
            "estado": "Cursando"
        },
        {
            "codigo": "GER101",
            "nombre": "Alemán II",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 2,
            "estado": "Cursando"
        }
    ]
},

/*--------------------------------------------------------------------------------------------------*/
{
    "rut": "21024567-8",
    "datos_personales": {
        "nombre": "Estela Marina",
        "fecha_nacimiento": ISODate("2001-07-15"),
        "genero": "Femenino",
        "direccion": "Playa Estrella 4084, Fondo de Bikini",
        "correo": "estela_marina@gmail.com",
        "telefono": 912345678
    },
    "datos_academicos": {
        "carrera": "Pedagogía en Ingles",
        "codigo_carrera": "PIN",
        "año_ingreso": 2022,
        "estado": "Alumno Activo",
        "PGA": 6.1,
        "cambios_carrera": null,
        "cambios_universidad": null,
        "asignaturas_convalidadas": null,
        "creditos_aprobados": 90,
        "becas": "Beca de Pedagogía"
    },
    "financiamiento": {
        "porcentaje_beca": 0.75,
        "porcentaje_pago_directo": 0.25,
        "cuotas_impagas": 0
    },
    "datos_extracurriculares": {
        "deportes": [
            {
                "nombre": "natación",
                "año-semestre": ["2022-1", "2022-2"]
            },
            {
                "nombre": "buceo",
                "año-semestre": ["2022-2"]
            }
        ],
        "fraternidad": "Exploradores Marinos"
    },
    "cursos": [
        {
            "codigo": "ENG100",
            "nombre": "Ingles I",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 2,
            "estado": "Aprobado"
        },
        {
            "codigo": "PIN100",
            "nombre": "Fonética Inglesa I",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "PIN104",
            "nombre": "Gramática Inglesa I",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 3,
            "estado": "Aprobado"
        },
        {
            "codigo": "PED106",
            "nombre": "Educación, Sociedad y Desarrollo Humano",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "PIN103",
            "nombre": "Taller de Vocabulario",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 2,
            "estado": "Aprobado"
        },
        {
            "codigo": "PIN116",
            "nombre": "Taller de Pronunciación",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 3,
            "estado": "Aprobado"
        },
        {
            "codigo": "ENG101",
            "nombre": "Ingles II",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 1,
            "estado": "Cursando"
        },
        {
            "codigo": "PIN101",
            "nombre": "Fonética Inglesa II",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 2,
            "estado": "Cursando"
        },
        {
            "codigo": "PIN105",
            "nombre": "Gramática Inglesa II",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 3,
            "estado": "Cursando"
        },
        {
            "codigo": "PED101",
            "nombre": "Taller Pedagógico I",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 1,
            "estado": "Cursando"
        },
        {
            "codigo": "PED107",
            "nombre": "Identidad Profesional Docente",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 2,
            "estado": "Cursando"
        },
        {
            "codigo": "PIN117",
            "nombre": "Sistema Fonémico de la Lengua Inglesa",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 3,
            "estado": "Cursando"
        }
    ]
},
/*--------------------------------------------------------------------------------------------------*/
{
    "rut": "19860931-5",
    "datos_personales": {
        "nombre": "Luisa Fernández",
        "fecha_nacimiento": ISODate("1998-08-16"),
        "genero": "Femenino",
        "direccion": "Av. Libertad 1234, Santiago",
        "correo": "luisa.fernandez@gmail.com",
        "telefono": 945548320
    },
    "datos_academicos": {
        "carrera": "Ingeniería Civil Industrial",
        "codigo_carrera": "IND",
        "año_ingreso": 2022,
        "estado": "Alumno Activo",
        "PGA": null,
        "cambios_carrera": null,
        "cambios_universidad": null,
        "asignaturas_convalidadas": null,
        "creditos_aprobados": 0,
        "becas": null
    },
    "financiamiento": {
        "porcentaje_beca": 0,
        "porcentaje_pago_directo": 1,
        "cuotas_impagas": null
    },
    "datos_extracurriculares": {
        "deportes": [],
        "fraternidad": "Las Industriosas"
    },
    "cursos": [
        {
            "codigo": "MAT103",
            "nombre": "Cálculo I",
            "año": 2020,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "MAT115",
            "nombre": "Algebra",
            "año": 2020,
            "semestre": 1,
            "creditos": 30,
            "seccion": 2,
            "estado": "Aprobado"
        },
        {
            "codigo": "FIS100",
            "nombre": "Introducción a la Física",
            "año": 2020,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "CIC100",
            "nombre": "Introducción a la Ingeniería",
            "año": 2020,
            "semestre": 1,
            "creditos": 30,
            "seccion": 3,
            "estado": "Aprobado"
        },
        {
            "codigo": "ENG100",
            "nombre": "Ingles I",
            "año": 2020,
            "semestre": 1,
            "creditos": 30,
            "seccion": 2,
            "estado": "Aprobado"
        },
        {
            "codigo": "MAT104",
            "nombre": "Cálculo II",
            "año": 2020,
            "semestre": 2,
            "creditos": 30,
            "seccion": 1,
            "estado": "Cursando"
        },
        {
            "codigo": "MAT116",
            "nombre": "Algebra Lineal",
            "año": 2020,
            "semestre": 2,
            "creditos": 30,
            "seccion": 2,
            "estado": "Cursando"
        },
        {
            "codigo": "FIS101",
            "nombre": "Física Mecánica",
            "año": 2020,
            "semestre": 2,
            "creditos": 30,
            "seccion": 3,
            "estado": "Cursando"
        },
        {
            "codigo": "INF100",
            "nombre": "Introducción a la Programación",
            "año": 2020,
            "semestre": 2,
            "creditos": 30,
            "seccion": 1,
            "estado": "Cursando"
        },
        {
            "codigo": "ENG101",
            "nombre": "Ingles II",
            "año": 2020,
            "semestre": 2,
            "creditos": 30,
            "seccion": 2,
            "estado": "Cursando"
        }
    ]

},

/*--------------------------------------------------------------------------------------------------*/
{
    "rut": "20008948-0",
    "datos_personales": {
        "nombre": "Carlos Mendoza",
        "fecha_nacimiento": ISODate("1995-04-03"),
        "genero": "Masculino",
        "direccion": "Calle Einstein 567, Concepción",
        "correo": "carlos.mendoza@gmail.com",
        "telefono": 948548828
    },
    "datos_academicos": {
        "carrera": "Licenciatura en Física",
        "codigo_carrera": "FIS",
        "año_ingreso": 2022,
        "estado": "Alumno Activo",
        "PGA": null,
        "cambios_carrera": null,
        "cambios_universidad": null,
        "asignaturas_convalidadas": null,
        "creditos_aprobados": 0,
        "becas": null
    },
    "financiamiento": {
        "porcentaje_beca": 0,
        "porcentaje_pago_directo": 1,
        "cuotas_impagas": null
    },
    "datos_extracurriculares": {
        "deportes": [],
        "fraternidad": "Los Cuánticos"
    },
    "cursos": [
        {
            "codigo": "MAT103",
            "nombre": "Cálculo I",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 2,
            "estado": "Aprobado"
        },
        {
            "codigo": "MAT115",
            "nombre": "Algebra",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "QUI100",
            "nombre": "Introducción a las Química",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 3,
            "estado": "Aprobado"
        },
        {
            "codigo": "CBC100",
            "nombre": "Introducción a las Ciencias",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 2,
            "estado": "Aprobado"
        },
        {
            "codigo": "FIS100",
            "nombre": "Introducción a la Física",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "ENG100",
            "nombre": "Ingles I",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 3,
            "estado": "Aprobado"
        },
        {
            "codigo": "MAT104",
            "nombre": "Cálculo II",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 1,
            "estado": "Cursando"
        },
        {
            "codigo": "MAT116",
            "nombre": "Algebra Lineal",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 2,
            "estado": "Cursando"
        },
        {
            "codigo": "FIS101",
            "nombre": "Física Mecánica",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 3,
            "estado": "Cursando"
        },
        {
            "codigo": "INF100",
            "nombre": "Introducción a la Programación",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 1,
            "estado": "Cursando"
        },
        {
            "codigo": "QUI101",
            "nombre": "Química General I",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 2,
            "estado": "Cursando"
        },
        {
            "codigo": "ENG101",
            "nombre": "Ingles II",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 3,
            "estado": "Cursando"
        }
    ]
},

/*--------------------------------------------------------------------------------------------------*/
{   "rut": "19446902-0",
    "datos_personales": {
        "nombre": "Ana María Soto",
        "fecha_nacimiento": ISODate("1999-04-21"),
        "genero": "Femenino",
        "direccion": "Pasaje de los Colores 789, Valparaíso",
        "correo": "anamaria.soto@gmail.com",
        "telefono": 952385664
    },
    "datos_academicos": {
        "carrera": "Artes Visuales",
        "codigo_carrera": "AVI",
        "año_ingreso": 2022,
        "estado": "Alumno Activo",
        "PGA": null,
        "cambios_carrera": null,
        "cambios_universidad": null,
        "asignaturas_convalidadas": null,
        "creditos_aprobados": 0,
        "becas": null
    },
    "financiamiento": {
        "porcentaje_beca": 0,
        "porcentaje_pago_directo": 1,
        "cuotas_impagas": null
    },
    "datos_extracurriculares": {
        "deportes": [],
        "fraternidad": "Los Pinceles"
    },
    "cursos": [
        {
            "codigo": "AVI100",
            "nombre": "Dibujo I",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "AVI106",
            "nombre": "Color I",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 3,
            "estado": "Aprobado"
        },
        {
            "codigo": "AVI108",
            "nombre": "Volumen I",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 2,
            "estado": "Aprobado"
        },
        {
            "codigo": "AVI113",
            "nombre": "Forma y Espacio I",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Reprobado"
        },
        {
            "codigo": "AVI115",
            "nombre": "Grafica I",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 3,
            "estado": "Aprobado"
        },
        {
            "codigo": "AVI117",
            "nombre": "Historia del Arte I",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 2,
            "estado": "Aprobado"
        },
        {
            "codigo": "ENG100",
            "nombre": "Ingles I",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "AVI101",
            "nombre": "Dibujo II",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 2,
            "estado": "Cursando"
        },
        {
            "codigo": "AVI107",
            "nombre": "Color II",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 1,
            "estado": "Cursando"
        },
        {
            "codigo": "AVI109",
            "nombre": "Volumen II",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 3,
            "estado": "Cursando"
        },
        {
            "codigo": "AVI113",
            "nombre": "Forma y Espacio I",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 2,
            "estado": "Cursando"
        },
        {
            "codigo": "AVI116",
            "nombre": "Grafica II",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 1,
            "estado": "Cursando"
        },
        {
            "codigo": "AVI118",
            "nombre": "Historia del Arte II",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 3,
            "estado": "Cursando"
        },
        {
            "codigo": "AVI123",
            "nombre": "Teoría del Arte",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 2,
            "estado": "Cursando"
        },
        {
            "codigo": "ENG101",
            "nombre": "Ingles II",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 1,
            "estado": "Cursando"
        }
    ]
},

/*--------------------------------------------------------------------------------------------------*/
{
    "rut": "19788771-0",
    "datos_personales": {
        "nombre": "Javier Rojas",
        "fecha_nacimiento": ISODate("1997-09-05"),
        "genero": "Masculino",
        "direccion": "Av. Construcción 4321, La Serena",
        "correo": "javier.rojas@gmail.com",
        "telefono": 985511564
    },
    "datos_academicos": {
        "carrera": "Ingeniería Civil",
        "codigo_carrera": "ICV",
        "año_ingreso": 2022,
        "estado": "Alumno Activo",
        "PGA": null,
        "cambios_carrera": null,
        "cambios_universidad": null,
        "asignaturas_convalidadas": null,
        "creditos_aprobados": 0,
        "becas": null
    },
    "financiamiento": {
        "porcentaje_beca": 0,
        "porcentaje_pago_directo": 1,
        "cuotas_impagas": null
    },
    "datos_extracurriculares": {
        "deportes": [],
        "fraternidad": "Los Constructores"
    },
    "cursos": [
        {
            "codigo": "MAT103",
            "nombre": "Cálculo I",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 2,
            "estado": "Aprobado"
        },
        {
            "codigo": "MAT115",
            "nombre": "Algebra",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "CIC100",
            "nombre": "Introducción a la Ingeniería",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 3,
            "estado": "Aprobado"
        },
        {
            "codigo": "CIC101",
            "nombre": "Introducción a la Innovación",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 2,
            "estado": "Aprobado"
        },
        {
            "codigo": "FIS100",
            "nombre": "Introducción a la Física",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "ENG100",
            "nombre": "Ingles I",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 3,
            "estado": "Aprobado"
        },
        {
            "codigo": "MAT104",
            "nombre": "Cálculo II",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 1,
            "estado": "Cursando"
        },
        {
            "codigo": "MAT116",
            "nombre": "Algebra Lineal",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 3,
            "estado": "Cursando"
        },
        {
            "codigo": "INF101",
            "nombre": "Programación",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 2,
            "estado": "Cursando"
        },
        {
            "codigo": "QUI101",
            "nombre": "Química General I",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 2,
            "estado": "Cursando"
        },
        {
            "codigo": "FIS101",
            "nombre": "Física Mecánica",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 3,
            "estado": "Cursando"
        },
        {
            "codigo": "ENG101",
            "nombre": "Ingles II",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 1,
            "estado": "Cursando"
        }
    ]
},

/*--------------------------------------------------------------------------------------------------*/
{   "rut": "20069378-7",
    "datos_personales": {
        "nombre": "Valentina Castro",
        "fecha_nacimiento": ISODate("2001-06-15"),
        "genero": "Femenino",
        "direccion": "Av. Los Peces 234, Fondo de Bikini",
        "correo": "valentina.castro@gmail.com",
        "telefono": 912488854
    },
    "datos_academicos": {
        "carrera": "Pedagogía en Ingles",
        "codigo_carrera": "PIN",
        "año_ingreso": 2020,
        "estado": "Alumno Activo",
        "PGA": 6.3,
        "cambios_carrera": null,
        "cambios_universidad": null,
        "asignaturas_convalidadas": null,
        "creditos_aprobados": 900,
        "becas": "Beca de Pedagogía"
    },
    "financiamiento": {
        "porcentaje_beca": 0.8,
        "porcentaje_pago_directo": 0.2,
        "cuotas_impagas": 0
    },
    "datos_extracurriculares": {
        "deportes": [
            {
                "nombre": "volleyball",
                "año-semestre": ["2020-1", "2020-2", "2021-1", "2021-2"]
            }
        ],
        "fraternidad": "Los Maestroa"
    },
    "cursos": [
        // Semestre 1 - 2020
        {
            "codigo": "ENG100",
            "nombre": "Ingles I",
            "año": 2020,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "PIN100",
            "nombre": "Fonética Inglesa I",
            "año": 2020,
            "semestre": 1,
            "creditos": 30,
            "seccion": 2,
            "estado": "Aprobado"
        },
        {
            "codigo": "PIN104",
            "nombre": "Gramática Inglesa I",
            "año": 2020,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "PED106",
            "nombre": "Educación, Sociedad y Desarrollo Humano",
            "año": 2020,
            "semestre": 1,
            "creditos": 30,
            "seccion": 3,
            "estado": "Aprobado"
        },
        {
            "codigo": "PIN103",
            "nombre": "Taller de Vocabulario",
            "año": 2020,
            "semestre": 1,
            "creditos": 30,
            "seccion": 2,
            "estado": "Aprobado"
        },
        {
            "codigo": "PIN116",
            "nombre": "Taller de Pronunciación",
            "año": 2020,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        // Semestre 2 - 2020
        {
            "codigo": "ENG101",
            "nombre": "Ingles II",
            "año": 2020,
            "semestre": 2,
            "creditos": 30,
            "seccion": 2,
            "estado": "Aprobado"
        },
        {
            "codigo": "PIN101",
            "nombre": "Fonética Inglesa II",
            "año": 2020,
            "semestre": 2,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "PIN105",
            "nombre": "Gramática Inglesa II",
            "año": 2020,
            "semestre": 2,
            "creditos": 30,
            "seccion": 3,
            "estado": "Aprobado"
        },
        {
            "codigo": "PED101",
            "nombre": "Taller Pedagógico I",
            "año": 2020,
            "semestre": 2,
            "creditos": 30,
            "seccion": 2,
            "estado": "Aprobado"
        },
        {
            "codigo": "PED107",
            "nombre": "Identidad Profesional Docente",
            "año": 2020,
            "semestre": 2,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "PIN117",
            "nombre": "Sistema Fonémico de la Lengua Inglesa",
            "año": 2020,
            "semestre": 2,
            "creditos": 30,
            "seccion": 2,
            "estado": "Aprobado"
        },
        // Semestre 3 - 2021
        {
            "codigo": "ENG102",
            "nombre": "Ingles III",
            "año": 2021,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "PIN102",
            "nombre": "Fonética Inglesa III",
            "año": 2021,
            "semestre": 1,
            "creditos": 30,
            "seccion": 2,
            "estado": "Aprobado"
        },
        {
            "codigo": "PIN108",
            "nombre": "Morfosintaxis I",
            "año": 2021,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "PED102",
            "nombre": "Taller Pedagógico II",
            "año": 2021,
            "semestre": 1,
            "creditos": 30,
            "seccion": 3,
            "estado": "Aprobado"
        },
        {
            "codigo": "PED108",
            "nombre": "Construccion del Ser Docente y rol Pedagogico",
            "año": 2021,
            "semestre": 1,
            "creditos": 30,
            "seccion": 2,
            "estado": "Aprobado"
        },
        {
            "codigo": "PIN110",
            "nombre": "Introducción a la Didáctica del Idioma Inglés",
            "año": 2021,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        // Semestre 4 - 2021
        {
            "codigo": "ENG103",
            "nombre": "Ingles IV",
            "año": 2021,
            "semestre": 2,
            "creditos": 30,
            "seccion": 2,
            "estado": "Aprobado"
        },
        {
            "codigo": "PIN109",
            "nombre": "Morfosintaxis II",
            "año": 2021,
            "semestre": 2,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "PED109",
            "nombre": "Evaluación de los Aprendizajes",
            "año": 2021,
            "semestre": 2,
            "creditos": 30,
            "seccion": 3,
            "estado": "Aprobado"
        },
        {
            "codigo": "PIN107",
            "nombre": "Análisis de la Gramática",
            "año": 2021,
            "semestre": 2,
            "creditos": 30,
            "seccion": 2,
            "estado": "Aprobado"
        },
        {
            "codigo": "PED105",
            "nombre": "Psicología Educativa",
            "año": 2021,
            "semestre": 2,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "PED103",
            "nombre": "Taller Pedagógico III",
            "año": 2021,
            "semestre": 2,
            "creditos": 30,
            "seccion": 2,
            "estado": "Aprobado"
        },
        // Semestre 5 - 2022
        {
            "codigo": "ENG104",
            "nombre": "Ingles V",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "PED110",
            "nombre": "Investigación Acción en la Escuela",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 2,
            "estado": "Aprobado"
        },
        {
            "codigo": "PIN106",
            "nombre": "Escritura Académica",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 3,
            "estado": "Aprobado"
        },
        {
            "codigo": "PIN112",
            "nombre": "Didáctica del Idioma Inglés I",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "PIN111",
            "nombre": "Literatura Contemporánea en Lengua Inglesa",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 2,
            "estado": "Aprobado"
        },
        {
            "codigo": "PED104",
            "nombre": "Taller Pedagógico IV",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 3,
            "estado": "Aprobado"
        },
        // Semestre 6 - 2022
        {
            "codigo": "ENG105",
            "nombre": "Ingles VI",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 1,
            "estado": "Cursando"
        },
        {
            "codigo": "PIN113",
            "nombre": "Didáctica del Idioma Inglés II",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 2,
            "estado": "Cursando"
        },
        {
            "codigo": "PED111",
            "nombre": "Teorías y Diseños Curriculares",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 3,
            "estado": "Cursando"
        },
        {
            "codigo": "PIN118",
            "nombre": "Entonación de la Lengua Inglesa",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 1,
            "estado": "Cursando"
        },
        {
            "codigo": "PIN119",
            "nombre": "Orientación Educacional",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 2,
            "estado": "Cursando"
        },
        {
            "codigo": "PIN120",
            "nombre": "Lingüística Aplicada I",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 3,
            "estado": "Cursando"
        }
    ]
},

/*--------------------------------------------------------------------------------------------------*/
{
    "rut": "20009327-5",
    "datos_personales": {
        "nombre": "Rodrigo Pérez",
        "fecha_nacimiento": ISODate("2001-03-15"),
        "genero": "Masculino",
        "direccion": "Av. Circuito 789, Santiago",
        "correo": "rodrigo.perez@gmail.com",
        "telefono": 912345678
    },
    "datos_academicos": {
        "carrera": "Ingeniería Civil Electrónica",
        "codigo_carrera": "IEL",
        "año_ingreso": 2022,
        "estado": "Alumno Activo",
        "PGA": 4.8,
        "cambios_carrera": null,
        "cambios_universidad": null,
        "asignaturas_convalidadas": null,
        "creditos_aprobados": 90,
        "becas": null
    },
    "financiamiento": {
        "porcentaje_beca": 0,
        "porcentaje_pago_directo": 1,
        "cuotas_impagas": 0
    },
    "datos_extracurriculares": {
        "deportes": [
            {
                "nombre": "ajedrez",
                "año-semestre": ["2022-1", "2022-2"]
            }
        ],
        "fraternidad": "Los Circuitos"
    },
    "cursos": [
        {
            "codigo": "MAT103",
            "nombre": "Cálculo I",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 2,
            "estado": "Reprobado"
        },
        {
            "codigo": "MAT115",
            "nombre": "Algebra",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "CIC100",
            "nombre": "Introducción a la Ingeniería",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 3,
            "estado": "Aprobado"
        },
        {
            "codigo": "INF100",
            "nombre": "Introducción a la Programación",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 2,
            "estado": "Reprobado"
        },
        {
            "codigo": "FIS100",
            "nombre": "Introducción a la Física",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "ENG100",
            "nombre": "Ingles I",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 3,
            "estado": "Aprobado"
        },
        {
            "codigo": "MAT103",
            "nombre": "Cálculo I",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 1,
            "estado": "Cursando"
        },
        {
            "codigo": "MAT116",
            "nombre": "Algebra Lineal",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 2,
            "estado": "Cursando"
        },
        {
            "codigo": "INF100",
            "nombre": "Introducción a la Programación",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 3,
            "estado": "Cursando"
        },
        {
            "codigo": "IEL100",
            "nombre": "Electrónica",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 1,
            "estado": "Cursando"
        },
        {
            "codigo": "QUI101",
            "nombre": "Química General I",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 2,
            "estado": "Cursando"
        },
        {
            "codigo": "ENG101",
            "nombre": "Ingles II",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 3,
            "estado": "Cursando"
        }
    ]
},

/*--------------------------------------------------------------------------------------------------*/
{
    "rut": "18892255-4",
    "datos_personales": {
        "nombre": "Camila Vargas",
        "fecha_nacimiento": ISODate("1995-11-23"),
        "genero": "Femenino",
        "direccion": "Av. Los Químicos 567, Santiago",
        "correo": "camila.vargas@gmail.com",
        "telefono": 940166055
    },
    "datos_academicos": {
        "carrera": "Licenciatura en Química",
        "codigo_carrera": "QUI",
        "año_ingreso": 2022,
        "estado": "Alumno Activo",
        "PGA": null,
        "cambios_carrera": null,
        "cambios_universidad": null,
        "asignaturas_convalidadas": null,
        "creditos_aprobados": 180,
        "becas": "Beca Científica"
    },
    "financiamiento": {
        "porcentaje_beca": 0.6,
        "porcentaje_pago_directo": 0.4,
        "cuotas_impagas": 0
    },
    "datos_extracurriculares": {
        "deportes": [
            {
                "nombre": "volleyball",
                "año-semestre": ["2022-1", "2022-2"]
            }
        ],
        "fraternidad": "Las Químicas"
    },
    "cursos": [
        {
            "codigo": "MAT103",
            "nombre": "Cálculo I",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 2,
            "estado": "Aprobado"
        },
        {
            "codigo": "MAT115",
            "nombre": "Algebra",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "QUI100",
            "nombre": "Introducción a las Química",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 3,
            "estado": "Aprobado"
        },
        {
            "codigo": "CBC100",
            "nombre": "Introducción a las Ciencias",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 2,
            "estado": "Aprobado"
        },
        {
            "codigo": "FIS100",
            "nombre": "Introducción a la Física",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "ENG100",
            "nombre": "Ingles I",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 3,
            "estado": "Aprobado"
        },
        {
            "codigo": "MAT104",
            "nombre": "Cálculo II",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 1,
            "estado": "Cursando"
        },
        {
            "codigo": "MAT116",
            "nombre": "Algebra Lineal",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 2,
            "estado": "Cursando"
        },
        {
            "codigo": "QUI101",
            "nombre": "Química General I",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 3,
            "estado": "Cursando"
        },
        {
            "codigo": "INF100",
            "nombre": "Programación",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 1,
            "estado": "Cursando"
        },
        {
            "codigo": "CBC101",
            "nombre": "Laboratorio I",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 2,
            "estado": "Cursando"
        },
        {
            "codigo": "ENG101",
            "nombre": "Ingles II",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 3,
            "estado": "Cursando"
        }
    ]
},

/*--------------------------------------------------------------------------------------------------*/
{
    "rut": "19927245-4",
    "datos_personales": {
        "nombre": "Felipe Muñoz",
        "fecha_nacimiento": ISODate("1997-06-15"),
        "genero": "Masculino",
        "direccion": "Av. Los Bytes 567, Santiago",
        "correo": "felipe.munoz@gmail.com",
        "telefono": 945678123
    },
    "datos_academicos": {
        "carrera": "Ingeniería Civil Informática",
        "codigo_carrera": "INF",
        "año_ingreso": 2022,
        "estado": "Alumno Activo",
        "PGA": null,
        "cambios_carrera": null,
        "cambios_universidad": null,
        "asignaturas_convalidadas": null,
        "creditos_aprobados": 90,
        "becas": "Beca Vocación de Ingeniero"
    },
    "financiamiento": {
        "porcentaje_beca": 0.7,
        "porcentaje_pago_directo": 0.3,
        "cuotas_impagas": 0
    },
    "datos_extracurriculares": {
        "deportes": [
            {
                "nombre": "ajedrez",
                "año-semestre": ["2022-1", "2022-2"]
            }
        ],
        "fraternidad": "Los Programadores"
    },
    "cursos": [
        {
            "codigo": "MAT103",
            "nombre": "Cálculo I",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 2,
            "estado": "Aprobado"
        },
        {
            "codigo": "MAT115",
            "nombre": "Algebra",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "CIC100",
            "nombre": "Introducción a la Ingeniería",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 3,
            "estado": "Aprobado"
        },
        {
            "codigo": "INF100",
            "nombre": "Introducción a la Programación",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 2,
            "estado": "Aprobado"
        },
        {
            "codigo": "CIC101",
            "nombre": "Introducción a la Innovación",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 2,
            "estado": "Aprobado"
        },
        {
            "codigo": "FRA100",
            "nombre": "Frances I",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "MAT104",
            "nombre": "Cálculo II",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 3,
            "estado": "Cursando"
        },
        {
            "codigo": "MAT116",
            "nombre": "Algebra Lineal",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 2,
            "estado": "Cursando"
        },
        {
            "codigo": "FIS101",
            "nombre": "Física Mecánica",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 1,
            "estado": "Cursando"
        },
        {
            "codigo": "INF101",
            "nombre": "Programación",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 3,
            "estado": "Cursando"
        },
        {
            "codigo": "QUI101",
            "nombre": "Química General I",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 3,
            "estado": "Cursando"
        },
        {
            "codigo": "FRA101",
            "nombre": "Frances II",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 2,
            "estado": "Cursando"
        }
    ]
},

/*--------------------------------------------------------------------------------------------------*/
{
    "rut": "19806539-0",
    "datos_personales":
    {
        "nombre": "Isabella Contreras",
        "fecha_nacimiento": ISODate("2001-03-15"),
        "genero": "Femenino",
        "direccion": "Av. Providencia 1234, Santiago",
        "correo": "isabella.contreras@universidad.cl",
        "telefono": 956789012
    },

    "datos_academicos":
    {
        "carrera": "Artes Literarias",
        "codigo_carrera": "ALI",
        "año_ingreso": 2022,
        "estado": "Alumno Activo",
        "PGA": null,
        "cambios_carrera": null,
        "cambios_universidad": null,
        "asignaturas_convalidadas": null,
        "creditos_aprobados": 240,
        "becas": "Beca de Excelencia Académica"
    },

    "financiamiento":
    {
        "porcentaje_beca": 0.7,
        "porcentaje_pago_directo": 0.3,
        "cuotas_impagas": null
    },

    "datos_extracurriculares":
    {
        "deportes": [],
        "fraternidad": null
    },

    "cursos":[
    {
        "codigo": "ALI100",
        "nombre": "Introduccion a la Teoria Literaria",
        "año": 2022,
        "semestre": 1,
        "creditos": 30,
        "seccion": 1,
        "estado": "Aprobado"
    },
    {
        "codigo": "ALI101",
        "nombre": "Introducción a la Literatura",
        "año": 2022,
        "semestre": 1,
        "creditos": 30,
        "seccion": 1,
        "estado": "Aprobado"
    },
    {
        "codigo": "ALI106",
        "nombre": "Poesia I",
        "año": 2022,
        "semestre": 1,
        "creditos": 30,
        "seccion": 2,
        "estado": "Aprobado"
    },
    {
        "codigo": "ALI110",
        "nombre": "Cuentos I",
        "año": 2022,
        "semestre": 1,
        "creditos": 30,
        "seccion": 3,
        "estado": "Aprobado"
    },
    {
        "codigo": "ALI114",
        "nombre": "Obras Dramatúrgicas I",
        "año": 2022,
        "semestre": 1,
        "creditos": 30,
        "seccion": 2,
        "estado": "Aprobado"
    },
    {
        "codigo": "ALI118",
        "nombre": "Novelas I",
        "año": 2022,
        "semestre": 1,
        "creditos": 30,
        "seccion": 1,
        "estado": "Aprobado"
    },
    {
        "codigo": "ENG100",
        "nombre": "Ingles I",
        "año": 2022,
        "semestre": 1,
        "creditos": 30,
        "seccion": 2,
        "estado": "Aprobado"
    },
    {
        "codigo": "ALI107",
        "nombre": "Poesia II",
        "año": 2022,
        "semestre": 2,
        "creditos": 30,
        "seccion": 1,
        "estado": "Cursando"
    },
    {
        "codigo": "ALI111",
        "nombre": "Cuentos II",
        "año": 2022,
        "semestre": 2,
        "creditos": 30,
        "seccion": 1,
        "estado": "Cursando"
    },
    {
        "codigo": "ALI115",
        "nombre": "Obras Dramatúrgicas II",
        "año": 2022,
        "semestre": 2,
        "creditos": 30,
        "seccion": 3,
        "estado": "Cursando"
    },
    {
        "codigo": "ALI119",
        "nombre": "Novelas II",
        "año": 2022,
        "semestre": 2,
        "creditos": 30,
        "seccion": 1,
        "estado": "Cursando"
    },
    {
        "codigo": "ENG101",
        "nombre": "Ingles II",
        "año": 2022,
        "semestre": 2,
        "creditos": 30,
        "seccion": 2,
        "estado": "Cursando"
    }]
},
/*--------------------------------------------------------------------------------------------------*/
{
    "rut": "20070231-K",
    "datos_personales":
    {
        "nombre": "Matías Herrera",
        "fecha_nacimiento": ISODate("2001-06-15"),
        "genero": "Masculino",
        "direccion": "Av. Los Profesores 456, Santiago",
        "correo": "matias.herrera@universidad.cl",
        "telefono": 945678123
    },

    "datos_academicos":
    {
        "carrera": "Pedagogía en Matemáticas",
        "codigo_carrera": "PEM",
        "año_ingreso": 2021,
        "estado": "Alumno Activo",
        "PGA": 5.1,
        "cambios_carrera": null,
        "cambios_universidad": null,
        "asignaturas_convalidadas": null,
        "creditos_aprobados": 150,
        "becas": "Beca Vocación de Profesor"
    },

    "financiamiento":
    {
        "porcentaje_beca": 0.7,
        "porcentaje_pago_directo": 0.3,
        "cuotas_impagas": null
    },

    "datos_extracurriculares":
    {
        "deportes": [],
        "fraternidad": "Los Maestroa"
    },

    "cursos":[
    {
        "codigo": "PEM100",
        "nombre": "Introducción a la Enseñanza de la Matemáticas",
        "año": 2021,
        "semestre": 1,
        "creditos": 30,
        "seccion": 2,
        "estado": "Aprobado"
    },
    {
        "codigo": "MAT103",
        "nombre": "Cálculo I",
        "año": 2021,
        "semestre": 1,
        "creditos": 30,
        "seccion": 1,
        "estado": "Aprobado"
    },
    {
        "codigo": "MAT115",
        "nombre": "Algebra",
        "año": 2021,
        "semestre": 1,
        "creditos": 30,
        "seccion": 3,
        "estado": "Reprobado"
    },
    {
        "codigo": "MAT101",
        "nombre": "Aritmética y Combinatoria",
        "año": 2021,
        "semestre": 1,
        "creditos": 30,
        "seccion": 2,
        "estado": "Aprobado"
    },
    {
        "codigo": "MAT124",
        "nombre": "Geometría I",
        "año": 2021,
        "semestre": 1,
        "creditos": 30,
        "seccion": 1,
        "estado": "Aprobado"
    },
    {
        "codigo": "PED106",
        "nombre": "Educación, Sociedad y Desarrollo Humano",
        "año": 2021,
        "semestre": 1,
        "creditos": 30,
        "seccion": 3,
        "estado": "Aprobado"
    },
    {
        "codigo": "ENG100",
        "nombre": "Ingles I",
        "año": 2021,
        "semestre": 1,
        "creditos": 30,
        "seccion": 2,
        "estado": "Aprobado"
    },
    {
        "codigo": "PEM101",
        "nombre": "Aprendizaje de las Ciencias",
        "año": 2021,
        "semestre": 2,
        "creditos": 30,
        "seccion": 1,
        "estado": "Aprobado"
    },
    {
        "codigo": "MAT104",
        "nombre": "Cálculo II",
        "año": 2021,
        "semestre": 2,
        "creditos": 30,
        "seccion": 3,
        "estado": "Reprobado"
    },
    {
        "codigo": "MAT115",
        "nombre": "Algebra",
        "año": 2021,
        "semestre": 2,
        "creditos": 30,
        "seccion": 2,
        "estado": "Aprobado"
    },
    {
        "codigo": "MAT116",
        "nombre": "Algebra Lineal",
        "año": 2021,
        "semestre": 2,
        "creditos": 30,
        "seccion": 1,
        "estado": "Aprobado"
    },
    {
        "codigo": "MAT125",
        "nombre": "Geometría II",
        "año": 2021,
        "semestre": 2,
        "creditos": 30,
        "seccion": 3,
        "estado": "Aprobado"
    },
    {
        "codigo": "PED101",
        "nombre": "Taller Pedagógico I",
        "año": 2021,
        "semestre": 2,
        "creditos": 30,
        "seccion": 1,
        "estado": "Aprobado"
    },
    {
        "codigo": "PEM104",
        "nombre": "Didáctica de la Matemática",
        "año": 2021,
        "semestre": 2,
        "creditos": 30,
        "seccion": 2,
        "estado": "Aprobado"
    },
    {
        "codigo": "ENG101",
        "nombre": "Ingles II",
        "año": 2021,
        "semestre": 2,
        "creditos": 30,
        "seccion": 3,
        "estado": "Reprobado"
    },
    {
        "codigo": "PEM102",
        "nombre": "Teoría del Aprendizaje",
        "año": 2022,
        "semestre": 1,
        "creditos": 30,
        "seccion": 2,
        "estado": "Aprobado"
    },
    {
        "codigo": "MAT105",
        "nombre": "Cálculo III",
        "año": 2022,
        "semestre": 1,
        "creditos": 30,
        "seccion": 1,
        "estado": "Aprobado"
    },
    {
        "codigo": "MAT104",
        "nombre": "Cálculo II",
        "año": 2022,
        "semestre": 1,
        "creditos": 30,
        "seccion": 3,
        "estado": "Aprobado"
    },
    {
        "codigo": "MAT117",
        "nombre": "Algebra Abstracta",
        "año": 2022,
        "semestre": 1,
        "creditos": 30,
        "seccion": 2,
        "estado": "Reprobado"
    },
    {
        "codigo": "MAT135",
        "nombre": "Probabilidad y Estadística",
        "año": 2022,
        "semestre": 1,
        "creditos": 30,
        "seccion": 1,
        "estado": "Aprobado"
    },
    {
        "codigo": "PED102",
        "nombre": "Taller Pedagógico II",
        "año": 2022,
        "semestre": 1,
        "creditos": 30,
        "seccion": 3,
        "estado": "Aprobado"
    },
    {
        "codigo": "PEM105",
        "nombre": "Didáctica de la Geometría",
        "año": 2022,
        "semestre": 1,
        "creditos": 30,
        "seccion": 2,
        "estado": "Aprobado"
    },
    {
        "codigo": "ENG101",
        "nombre": "Ingles II",
        "año": 2022,
        "semestre": 1,
        "creditos": 30,
        "seccion": 1,
        "estado": "Aprobado"
    },
    {
        "codigo": "PED100",
        "nombre": "Gestión Escolar",
        "año": 2022,
        "semestre": 2,
        "creditos": 30,
        "seccion": 3,
        "estado": "Cursando"
    },
    {
        "codigo": "MAT107",
        "nombre": "Calculo Numérico",
        "año": 2022,
        "semestre": 2,
        "creditos": 30,
        "seccion": 1,
        "estado": "Cursando"
    },
    {
        "codigo": "MAT117",
        "nombre": "Algebra Abstracta",
        "año": 2022,
        "semestre": 2,
        "creditos": 30,
        "seccion": 2,
        "estado": "Cursando"
    },
    {
        "codigo": "MAT118",
        "nombre": "Estructuras Algebraicas",
        "año": 2022,
        "semestre": 2,
        "creditos": 30,
        "seccion": 3,
        "estado": "Cursando"
    },
    {
        "codigo": "PED107",
        "nombre": "Identidad Profesional Docente",
        "año": 2022,
        "semestre": 2,
        "creditos": 30,
        "seccion": 1,
        "estado": "Cursando"
    },
    {
        "codigo": "PED103",
        "nombre": "Taller Pedagógico III",
        "año": 2022,
        "semestre": 2,
        "creditos": 30,
        "seccion": 2,
        "estado": "Cursando"
    },
    {
        "codigo": "PEM107",
        "nombre": "Didáctica de la Estadística y las Probabilidades",
        "año": 2022,
        "semestre": 2,
        "creditos": 30,
        "seccion": 1,
        "estado": "Cursando"
    },
    {
        "codigo": "ENG102",
        "nombre": "Ingles III",
        "año": 2022,
        "semestre": 2,
        "creditos": 30,
        "seccion": 3,
        "estado": "Cursando"
    }]
},
/*--------------------------------------------------------------------------------------------------*/
{
    "rut": "19965731-3",
    "datos_personales": {
        "nombre": "Martín González",
        "fecha_nacimiento": ISODate("1997-05-12"),
        "genero": "Masculino",
        "direccion": "Av. Los Científicos 123, Santiago",
        "correo": "martin.gonzalez@gmail.com",
        "telefono": 912345678
    },
    "datos_academicos": {
        "carrera": "Licenciatura en Física",
        "codigo_carrera": "FIS",
        "año_ingreso": 2021,
        "estado": "Alumno Activo",
        "PGA": 4.9,
        "cambios_carrera": null,
        "cambios_universidad": null,
        "asignaturas_convalidadas": null,
        "creditos_aprobados": 180,
        "becas": "Beca Vocación Científica"
    },
    "financiamiento": {
        "porcentaje_beca": 0.8,
        "porcentaje_pago_directo": 0.2,
        "cuotas_impagas": 0
    },
    "datos_extracurriculares": {
        "deportes": [
            {
                "nombre": "ajedrez",
                "año-semestre": ["2021-1", "2021-2", "2022-1", "2022-2"]
            }
        ],
        "fraternidad": "Los Cuánticos"
    },
    "cursos": [
        {
            "codigo": "MAT103",
            "nombre": "Cálculo I",
            "año": 2021,
            "semestre": 1,
            "creditos": 30,
            "seccion": 2,
            "estado": "Aprobado"
        },
        {
            "codigo": "MAT115",
            "nombre": "Algebra",
            "año": 2021,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Reprobado"
        },
        {
            "codigo": "QUI100",
            "nombre": "Introducción a las Química",
            "año": 2021,
            "semestre": 1,
            "creditos": 30,
            "seccion": 3,
            "estado": "Aprobado"
        },
        {
            "codigo": "CBC100",
            "nombre": "Introducción a las Ciencias",
            "año": 2021,
            "semestre": 1,
            "creditos": 30,
            "seccion": 2,
            "estado": "Aprobado"
        },
        {
            "codigo": "FIS100",
            "nombre": "Introducción a la Física",
            "año": 2021,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "CHI100",
            "nombre": "Chino I",
            "año": 2021,
            "semestre": 1,
            "creditos": 30,
            "seccion": 3,
            "estado": "Aprobado"
        },
        {
            "codigo": "MAT115",
            "nombre": "Algebra",
            "año": 2021,
            "semestre": 2,
            "creditos": 30,
            "seccion": 2,
            "estado": "Aprobado"
        },
        {
            "codigo": "MAT104",
            "nombre": "Cálculo II",
            "año": 2021,
            "semestre": 2,
            "creditos": 30,
            "seccion": 1,
            "estado": "Reprobado"
        },
        {
            "codigo": "FIS101",
            "nombre": "Física Mecánica",
            "año": 2021,
            "semestre": 2,
            "creditos": 30,
            "seccion": 3,
            "estado": "Aprobado"
        },
        {
            "codigo": "INF100",
            "nombre": "Programación",
            "año": 2021,
            "semestre": 2,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "QUI101",
            "nombre": "Química General I",
            "año": 2021,
            "semestre": 2,
            "creditos": 30,
            "seccion": 2,
            "estado": "Aprobado"
        },
        {
            "codigo": "CHI101",
            "nombre": "Chino II",
            "año": 2021,
            "semestre": 2,
            "creditos": 30,
            "seccion": 3,
            "estado": "Aprobado"
        },
        {
            "codigo": "MAT104",
            "nombre": "Cálculo II",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "MAT130",
            "nombre": "Probabilidad y Estadística",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 3,
            "estado": "Aprobado"
        },
        {
            "codigo": "FIS102",
            "nombre": "Mecánica Solidos Rígidos I",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "FIS104",
            "nombre": "Electromagnetismo I",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 2,
            "estado": "Reprobado"
        },
        {
            "codigo": "INF101",
            "nombre": "Programación Avanzada",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 3,
            "estado": "Aprobado"
        },
        {
            "codigo": "CBC101",
            "nombre": "Laboratorio I",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 1,
            "estado": "Aprobado"
        },
        {
            "codigo": "CHI102",
            "nombre": "Chino III",
            "año": 2022,
            "semestre": 1,
            "creditos": 30,
            "seccion": 2,
            "estado": "Aprobado"
        },
        {
            "codigo": "MAT105",
            "nombre": "Cálculo III",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 1,
            "estado": "Cursando"
        },
        {
            "codigo": "FIS103",
            "nombre": "Mecánica Solidos Rígidos II",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 3,
            "estado": "Cursando"
        },
        {
            "codigo": "FIS104",
            "nombre": "Electromagnetismo I",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 1,
            "estado": "Cursando"
        },
        {
            "codigo": "FIS105",
            "nombre": "Mecánica Clásica I",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 2,
            "estado": "Cursando"
        },
        {
            "codigo": "FIS106",
            "nombre": "Ondas y Vibraciones",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 3,
            "estado": "Cursando"
        },
        {
            "codigo": "CBC102",
            "nombre": "Laboratorio II",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 1,
            "estado": "Cursando"
        },
        {
            "codigo": "CHI103",
            "nombre": "Chino IV",
            "año": 2022,
            "semestre": 2,
            "creditos": 30,
            "seccion": 2,
            "estado": "Cursando"
        }
    ]
},
/*--------------------------------------------------------------------------------------------------*/
{
    "rut": "20069841-K",
    "datos_personales":
    {
        "nombre": "Catalina Ramírez",
        "fecha_nacimiento": ISODate("2002-03-22"),
        "genero": "Femenino",
        "direccion": "Calle Los Escritores 789, Santiago",
        "correo": "catalina.ramirez@universidad.cl",
        "telefono": 932456789
    },

    "datos_academicos":
    {
        "carrera": "Artes Literarias",
        "codigo_carrera": "ALI",
        "año_ingreso": 2021,
        "estado": "Alumno Activo",
        "PGA": 5.8,
        "cambios_carrera": null,
        "cambios_universidad": null,
        "asignaturas_convalidadas": null,
        "creditos_aprobados": 180,
        "becas": "Beca de Excelencia Académica"
    },

    "financiamiento":
    {
        "porcentaje_beca": 0.6,
        "porcentaje_pago_directo": 0.4,
        "cuotas_impagas": null
    },

    "datos_extracurriculares":
    {
        "deportes": [
        {
            "nombre": "tenis",
            "año-semestre": ["2021-1", "2021-2", "2022-1", "2022-2"]
        }],
        "fraternidad": "Los Cascarudos"
    },

    "cursos":[
    {
        "codigo": "ALI100",
        "nombre": "Introduccion a la Teoria Literaria",
        "año": 2021,
        "semestre": 1,
        "creditos": 30,
        "seccion": 2,
        "estado": "Aprobado"
    },
    {
        "codigo": "ALI101",
        "nombre": "Introducción a la Literatura",
        "año": 2021,
        "semestre": 1,
        "creditos": 30,
        "seccion": 1,
        "estado": "Aprobado"
    },
    {
        "codigo": "ALI105",
        "nombre": "Taller de Lectura y Escritura Academica",
        "año": 2021,
        "semestre": 1,
        "creditos": 30,
        "seccion": 3,
        "estado": "Reprobado"
    },
    {
        "codigo": "ALI106",
        "nombre": "Poesia I",
        "año": 2021,
        "semestre": 1,
        "creditos": 30,
        "seccion": 2,
        "estado": "Aprobado"
    },
    {
        "codigo": "ALI110",
        "nombre": "Cuentos I",
        "año": 2021,
        "semestre": 1,
        "creditos": 30,
        "seccion": 1,
        "estado": "Aprobado"
    },
    {
        "codigo": "ALI114",
        "nombre": "Obras Dramatúrgicas I",
        "año": 2021,
        "semestre": 1,
        "creditos": 30,
        "seccion": 3,
        "estado": "Aprobado"
    },
    {
        "codigo": "ALI118",
        "nombre": "Novelas I",
        "año": 2021,
        "semestre": 1,
        "creditos": 30,
        "seccion": 2,
        "estado": "Aprobado"
    },
    {
        "codigo": "ENG100",
        "nombre": "Ingles I",
        "año": 2021,
        "semestre": 1,
        "creditos": 30,
        "seccion": 1,
        "estado": "Aprobado"
    },
    {
        "codigo": "PEL100",
        "nombre": "Literatura Universal: Letras Clásicas y Medievales",
        "año": 2021,
        "semestre": 2,
        "creditos": 30,
        "seccion": 3,
        "estado": "Aprobado"
    },
    {
        "codigo": "PEL105",
        "nombre": "Literatura Española: Medioevo y Siglo de Oro",
        "año": 2021,
        "semestre": 2,
        "creditos": 30,
        "seccion": 2,
        "estado": "Aprobado"
    },
    {
        "codigo": "ALI105",
        "nombre": "Taller de Lectura y Escritura Academica",
        "año": 2021,
        "semestre": 2,
        "creditos": 30,
        "seccion": 1,
        "estado": "Aprobado"
    },
    {
        "codigo": "ALI107",
        "nombre": "Poesia II",
        "año": 2021,
        "semestre": 2,
        "creditos": 30,
        "seccion": 3,
        "estado": "Aprobado"
    },
    {
        "codigo": "ALI111",
        "nombre": "Cuentos II",
        "año": 2021,
        "semestre": 2,
        "creditos": 30,
        "seccion": 2,
        "estado": "Reprobado"
    },
    {
        "codigo": "ALI115",
        "nombre": "Obras Dramatúrgicas II",
        "año": 2021,
        "semestre": 2,
        "creditos": 30,
        "seccion": 1,
        "estado": "Aprobado"
    },
    {
        "codigo": "ALI119",
        "nombre": "Novelas II",
        "año": 2021,
        "semestre": 2,
        "creditos": 30,
        "seccion": 3,
        "estado": "Aprobado"
    },
    {
        "codigo": "ENG101",
        "nombre": "Ingles II",
        "año": 2021,
        "semestre": 2,
        "creditos": 30,
        "seccion": 2,
        "estado": "Aprobado"
    },
    {
        "codigo": "PEL106",
        "nombre": "Literatura Universal Moderna y Contemporánea",
        "año": 2022,
        "semestre": 1,
        "creditos": 30,
        "seccion": 1,
        "estado": "Aprobado"
    },
    {
        "codigo": "PEL107",
        "nombre": "Literatura Española: Moderna y Contemporánea",
        "año": 2022,
        "semestre": 1,
        "creditos": 30,
        "seccion": 3,
        "estado": "Aprobado"
    },
    {
        "codigo": "PEL112",
        "nombre": "Literatura Latinoamericana I",
        "año": 2022,
        "semestre": 1,
        "creditos": 30,
        "seccion": 2,
        "estado": "Aprobado"
    },
    {
        "codigo": "ALI111",
        "nombre": "Cuentos II",
        "año": 2022,
        "semestre": 1,
        "creditos": 30,
        "seccion": 1,
        "estado": "Aprobado"
    },
    {
        "codigo": "ALI108",
        "nombre": "Poesia III",
        "año": 2022,
        "semestre": 1,
        "creditos": 30,
        "seccion": 3,
        "estado": "Aprobado"
    },
    {
        "codigo": "ALI112",
        "nombre": "Cuentos III",
        "año": 2022,
        "semestre": 1,
        "creditos": 30,
        "seccion": 2,
        "estado": "Reprobado"
    },
    {
        "codigo": "ALI116",
        "nombre": "Obras Dramatúrgicas III",
        "año": 2022,
        "semestre": 1,
        "creditos": 30,
        "seccion": 1,
        "estado": "Aprobado"
    },
    {
        "codigo": "ALI120",
        "nombre": "Novelas III",
        "año": 2022,
        "semestre": 1,
        "creditos": 30,
        "seccion": 3,
        "estado": "Aprobado"
    },
    {
        "codigo": "ENG102",
        "nombre": "Ingles III",
        "año": 2022,
        "semestre": 1,
        "creditos": 30,
        "seccion": 2,
        "estado": "Aprobado"
    },
    {
        "codigo": "PEL120",
        "nombre": "Historia de la Lengua Española",
        "año": 2022,
        "semestre": 2,
        "creditos": 30,
        "seccion": 1,
        "estado": "Cursando"
    },
    {
        "codigo": "PEL115",
        "nombre": "Literatura Infantil y Juvenil",
        "año": 2022,
        "semestre": 2,
        "creditos": 30,
        "seccion": 3,
        "estado": "Cursando"
    },
    {
        "codigo": "PEL113",
        "nombre": "Literatura Latinoamericana II",
        "año": 2022,
        "semestre": 2,
        "creditos": 30,
        "seccion": 2,
        "estado": "Cursando"
    },
    {
        "codigo": "ALI112",
        "nombre": "Cuentos III",
        "año": 2022,
        "semestre": 2,
        "creditos": 30,
        "seccion": 1,
        "estado": "Cursando"
    },
    {
        "codigo": "ALI109",
        "nombre": "Poesia IV",
        "año": 2022,
        "semestre": 2,
        "creditos": 30,
        "seccion": 3,
        "estado": "Cursando"
    },
    {
        "codigo": "ALI113",
        "nombre": "Cuentos IV",
        "año": 2022,
        "semestre": 2,
        "creditos": 30,
        "seccion": 2,
        "estado": "Cursando"
    },
    {
        "codigo": "ALI117",
        "nombre": "Obras Dramatúrgicas IV",
        "año": 2022,
        "semestre": 2,
        "creditos": 30,
        "seccion": 1,
        "estado": "Cursando"
    },
    {
        "codigo": "ALI121",
        "nombre": "Novelas IV",
        "año": 2022,
        "semestre": 2,
        "creditos": 30,
        "seccion": 3,
        "estado": "Cursando"
    },
    {
        "codigo": "ENG103",
        "nombre": "Ingles IV",
        "año": 2022,
        "semestre": 2,
        "creditos": 30,
        "seccion": 2,
        "estado": "Cursando"
    }]
}
/*--------------------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------*/

]);

db.students.deleteMany({})

db.version()
