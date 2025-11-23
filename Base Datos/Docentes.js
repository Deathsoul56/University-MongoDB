show dbs

use university

show collections

db.docentes.insertMany([
{
    "rut": "9157739-9",
    "datos_personales":
    {
        "nombre": "Isaac Newton",
        "fecha_nacimiento": ISODate("1643-01-04"),
        "correo": "isaac_newton@cambridge.uk",
        "telefono": "975949566",
        "direccion": "Westminster Abbey"
    },

    "datos_academicos":
    {
        "año_contratacion": 2022,
        "departamento": "Ciencias Básicas",
        "cargo": ["Rector", "Académico", "Investigador"],
        "dedicación": "Tiempo completo",
        "grado_académico": "Doctor en Ciencias Físicas",
        "areas_de_especialización": ["Física", "Filosofía", "Química", "Teología",
                                     "Matemáticas", "Astronomía", "Economía"],
        "categoría": "Profesor titular"
    },

    "cursos":[
    {
        "codigo": "MAT111",
        "nombre": "Cálculo I",
        "año": 2022,
        "semestre": 1,
        "secciones": 3,
        "modalidad": "Presencial"
    },
    {
        "codigo": "MAT112",
        "nombre": "Algebra I",
        "año": 2022,
        "semestre": 1,
        "secciones": [1,2],
        "modalidad": "Presencial"
    },
    {
        "codigo": "MAT121",
        "nombre": "Cálculo II",
        "año": 2022,
        "semestre": 2,
        "secciones": 3,
        "modalidad": "Presencial"
    },
    {
        "codigo": "MAT122",
        "nombre": "Algebra Lineal",
        "año": 2022,
        "semestre": 2,
        "secciones": 2,
        "modalidad": "Presencial"
    }],

    "Horarios": [
    {
      "dia": "Lunes",
      "bloque_horario": [1,2],
      "curso": "MAT111",
      "año": 2022,
      "semestre": 1,
      "seccion": 3
    },
    {
      "dia": "Lunes",
      "bloque_horario": [4,5],
      "curso": "MAT112",
      "año": 2022,
      "semestre": 1,
      "seccion": 1
    },
    {
      "dia": "Martes",
      "bloque_horario": [1,2],
      "curso": "MAT112",
      "año": 2022,
      "semestre": 1,
      "seccion": 2
    },
    {
      "dia": "Lunes",
      "bloque_horario": [1,2],
      "curso": "MAT121",
      "año": 2022,
      "semestre": 2,
      "seccion": 3
    },
    {
      "dia": "Martes",
      "bloque_horario": [1,2],
      "curso": "MAT122",
      "año": 2022,
      "semestre": 2,
      "seccion": 2
    }],

    "Publicaciones": [
    {
        "titulo": "De analysi per aequationes numero terminorum infinitas",
        "año": 1711,
        "tipo_de_publicación": "Libro"
    },
    {
        "titulo": "Method of Fluxions ",
        "año": 1736,
        "tipo_de_publicación": "Libro"
    }]

},

/*-------------------------------------------------------------------------------*/
{
  "rut": "18934562-3",
  "datos_personales": {
    "nombre": "Marie Curie",
    "fecha_nacimiento": ISODate("1867-11-07"),
    "correo": "marie_curie@sorbonne.fr",
    "telefono": "969847321",
    "direccion": "1 Rue Pierre et Marie Curie, Paris"
  },
  "datos_academicos": {
    "año_contratacion": 2021,
    "departamento": "Ciencias Naturales",
    "cargo": ["Profesora", "Investigadora"],
    "dedicación": "Medio tiempo",
    "grado_académico": "Doctora en Física",
    "areas_de_especialización": ["Física", "Química", "Radioactividad"],
    "categoría": "Profesora asociada"
  },
  "cursos": [
    {
      "codigo": "FIS221",
      "nombre": "Física Nuclear",
      "año": 2022,
      "semestre": 2,
      "secciones": 1,
      "modalidad": "Virtual"
    },
    {
      "codigo": "QUI332",
      "nombre": "Química Radioactiva",
      "año": 2023,
      "semestre": 1,
      "secciones": [1, 2],
      "modalidad": "Presencial"
    }
  ],
  "Horarios": [
    {
      "dia": "Miércoles",
      "bloque_horario": [3, 4, 5],
      "curso": "FIS221",
      "año": 2022,
      "semestre": 2,
      "seccion": 1
    },
    {
      "dia": "Jueves",
      "bloque_horario": [1, 2],
      "curso": "QUI332",
      "año": 2023,
      "semestre": 1,
      "seccion": 1
    },
    {
      "dia": "Viernes",
      "bloque_horario": [1, 2],
      "curso": "QUI332",
      "año": 2023,
      "semestre": 1,
      "seccion": 2
    }
  ],
  "Publicaciones": [
    {
      "titulo": "Investigaciones sobre los fenómenos radiactivos",
      "año": 1904,
      "tipo_de_publicación": "Artículo"
    },
    {
      "titulo": "Tratado de Radioactividad",
      "año": 1911,
      "tipo_de_publicación": "Libro"
    }
  ]
},

{
  "rut": "25874123-6",
  "datos_personales": {
    "nombre": "Virginia Woolf",
    "fecha_nacimiento": ISODate("1882-01-25"),
    "correo": "virginia_woolf@bloomsbury.com",
    "telefono": "925057212",
    "direccion": "22 Hyde Park Gate, London"
  },
  "datos_academicos": {
    "año_contratacion": 1917,
    "departamento": "Humanidades",
    "cargo": ["Profesora", "Escritora"],
    "dedicación": "Tiempo parcial",
    "grado_acadmico": "Licenciatura en Letras",
    "areas_de_especialización": ["Literatura", "Feminismo", "Psicología"],
    "categoría": "Profesora adjunta"
  },
  "cursos": [
    {
      "codigo": "LIT301",
      "nombre": "Literatura Inglesa del Siglo XX",
      "año": 2023,
      "semestre": 1,
      "secciones": 2,
      "modalidad": "Híbrida"
    },
    {
      "codigo": "FEM412",
      "nombre": "Teoría Feminista",
      "año": 2023,
      "semestre": 2,
      "secciones": 1,
      "modalidad": "Presencial"
    }
  ],
  "Horarios": [
    {
      "dia": "Martes",
      "bloque_horario": [3, 4, 5],
      "curso": "LIT301",
      "año": 2023,
      "semestre": 1,
      "seccion": 1
    },
    {
      "dia": "Jueves",
      "bloque_horario": [1, 2],
      "curso": "LIT301",
      "año": 2023,
      "semestre": 1,
      "seccion": 2
    },
    {
      "dia": "Viernes",
      "bloque_horario": [3, 4],
      "curso": "FEM412",
      "año": 2023,
      "semestre": 2,
      "seccion": 1
    }
  ],
  "Publicaciones": [
    {
      "titulo": "Una Habitación Propia",
      "año": 1929,
      "tipo_de_publicación": "Novela"
    },
    {
      "titulo": "Al Faro",
      "año": 1927,
      "tipo_de_publicación": "Novela"
    }
  ]
},

{
  "rut": "18594861-7",
  "datos_personales": {
    "nombre": "Pablo Picasso",
    "fecha_nacimiento": ISODate("1881-10-25"),
    "correo": "pablo_picasso@atelier.fr",
    "telefono": "955361331",
    "direccion": "7 Rue des Grands-Augustins, Paris"
  },
  "datos_academicos": {
    "año_contratacion": 1904,
    "departamento": "Artes Visuales",
    "cargo": ["Profesor", "Artista"],
    "dedicación": "Tiempo parcial",
    "grado_acadmico": "Autodidacta",
    "areas_de_especialización": ["Pintura", "Escultura", "Cerámica"],
    "categoria": "Profesor invitado"
  },
  "cursos": [
    {
      "codigo": "ART201",
      "nombre": "Historia del Arte Moderno",
      "año": 2023,
      "semestre": 1,
      "secciones": 1,
      "modalidad": "Presencial"
    },
    {
      "codigo": "ESC312",
      "nombre": "Escultura Contemporánea",
      "año": 2023,
      "semestre": 2,
      "secciones": 2,
      "modalidad": "Taller"
    }
  ],
  "Horarios": [
    {
      "dia": "Lunes",
      "bloque_horario": [3, 4, 5],
      "curso": "ART201",
      "año": 2023,
      "semestre": 1,
      "seccion": 1
    },
    {
      "dia": "Miércoles",
      "bloque_horario": [1, 2, 3, 4, 5],
      "curso": "ESC312",
      "año": 2023,
      "semestre": 2,
      "seccion": 1
    },
    {
      "dia": "Viernes",
      "bloque_horario": [1, 2, 3, 4, 5],
      "curso": "ESC312",
      "año": 2023,
      "semestre": 2,
      "seccion": 2
    }
  ],
  "Exposiciones": [
    {
      "titulo": "Les Demoiselles d'Avignon",
      "año": 1907,
      "lugar": "París"
    },
    {
      "titulo": "Guernica",
      "año": 1937,
      "lugar": "París"
    }
  ]
},

/*-------------------------------------------------------------------------------*/
{
  "rut": "17824895-2",
  "datos_personales": {
    "nombre": "Albert Einstein",
    "fecha_nacimiento": ISODate("1879-03-14"),
    "correo": "albert_einstein@princeton.edu",
    "telefono": "987654321",
    "direccion": "112 Mercer Street, Princeton, New Jersey"
  },
  "datos_academicos": {
    "año_contratacion": 1933,
    "departamento": "Física Teórica",
    "cargo": ["Profesor Emérito", "Investigador"],
    "dedicación": "Tiempo completo",
    "grado_academico": "Doctor en Física",
    "areas_de_especialización": ["Física Teórica", "Relatividad", "Mecánica Cuántica"],
    "categoría": "Profesor Emérito"
  },
  "cursos": [
    {
      "codigo": "FIS401",
      "nombre": "Teoría de la Relatividad",
      "año": 2023,
      "semestre": 1,
      "secciones": 1,
      "modalidad": "Presencial"
    },
    {
      "codigo": "FIS402",
      "nombre": "Fundamentos de Mecánica Cuántica",
      "año": 2023,
      "semestre": 2,
      "secciones": 1,
      "modalidad": "Presencial"
    }
  ],
  "Horarios": null,
  "Publicaciones": [
    {
      "titulo": "Sobre la electrodinámica de los cuerpos en movimiento",
      "año": 1905,
      "tipo_de_publicación": "Artículo"
    },
    {
      "titulo": "¿La inercia de un cuerpo depende de su contenido de energía?",
      "año": 1905,
      "tipo_de_publicación": "Artículo"
    }
  ]
},

/*-------------------------------------------------------------------------------*/
{
  "rut": "15673890-4",
  "datos_personales": {
    "nombre": "Rosalind Franklin",
    "fecha_nacimiento": ISODate("1920-07-25"),
    "correo": "rosalind_franklin@kcl.ac.uk",
    "telefono": "924488402",
    "direccion": "King's College London, Strand, London WC2R 2LS, UK"
  },
  "datos_academicos": {
    "año_contratacion": 1951,
    "departamento": "Biofísica",
    "cargo": ["Investigadora Principal", "Profesora Asociada"],
    "dedicación": "Tiempo completo",
    "grado_academico": "Doctora en Química Física",
    "areas_de_especialización": ["Cristalografía de rayos X", "Estructura del ADN", "Virología"],
    "categoría": "Profesora Investigadora"
  },
  "cursos": [
    {
      "codigo": "BIO301",
      "nombre": "Técnicas de Cristalografía en Biología",
      "año": 2023,
      "semestre": 1,
      "secciones": 2,
      "modalidad": "Presencial"
    },
    {
      "codigo": "BIO402",
      "nombre": "Biología Molecular Avanzada",
      "año": 2023,
      "semestre": 2,
      "secciones": 1,
      "modalidad": "Híbrido"
    }
  ],
  "Horarios": [
    {
      "dia": "Lunes",
      "bloque_horario": [2, 3],
      "curso": "BIO301",
      "año": 2023,
      "semestre": 1,
      "seccion": 1
    },
    {
      "dia": "Miércoles",
      "bloque_horario": [4, 5],
      "curso": "BIO301",
      "año": 2023,
      "semestre": 1,
      "seccion": 2
    },
    {
      "dia": "Jueves",
      "bloque_horario": [1, 2, 3],
      "curso": "BIO402",
      "año": 2023,
      "semestre": 2,
      "seccion": 1
    }
  ],
  "Publicaciones": [
    {
      "titulo": "Molecular Configuration in Sodium Thymonucleate",
      "año": 1953,
      "tipo_de_publicación": "Artículo científico",
      "revista": "Nature"
    },
    {
      "titulo": "The structure of sodium thymonucleate fibres. I. The influence of water content",
      "año": 1953,
      "tipo_de_publicación": "Artículo científico",
      "revista": "Acta Crystallographica"
    }
  ]
},

/*-------------------------------------------------------------------------------*/
{
  "rut": "20987654-3",
  "datos_personales": {
    "nombre": "Stephen Hawking",
    "fecha_nacimiento": ISODate("1942-01-08"),
    "correo": "stephen_hawking@cam.ac.uk",
    "telefono": "906682141",
    "direccion": "Centre for Theoretical Cosmology, Cambridge CB3 0WA, UK"
  },
  "datos_academicos": {
    "año_contratacion": 1979,
    "departamento": "Física Teórica y Matemática Aplicada",
    "cargo": ["Profesor Lucasiano de Matemáticas", "Investigador"],
    "dedicación": "Tiempo completo",
    "grado_academico": "Doctor en Física Teórica",
    "areas_de_especialización": ["Cosmología", "Relatividad General", "Agujeros Negros", "Física Cuántica"],
    "categoría": "Profesor Emérito"
  },
  "cursos": [
    {
      "codigo": "FIS501",
      "nombre": "Cosmología Avanzada",
      "año": 2023,
      "semestre": 1,
      "secciones": 1,
      "modalidad": "Virtual"
    },
    {
      "codigo": "FIS502",
      "nombre": "Teoría de Agujeros Negros",
      "año": 2023,
      "semestre": 2,
      "secciones": 1,
      "modalidad": "Virtual"
    }
  ],
  "Horarios": null,
  "Publicaciones": [
    {
      "titulo": "Una breve historia del tiempo",
      "año": 1988,
      "tipo_de_publicación": "Libro"
    },
    {
      "titulo": "El universo en una cáscara de nuez",
      "año": 2001,
      "tipo_de_publicación": "Libro"
    },
    {
      "titulo": "Particle Creation by Black Holes",
      "año": 1975,
      "tipo_de_publicación": "Artículo científico",
      "revista": "Communications in Mathematical Physics"
    }
  ]
},

/*-------------------------------------------------------------------------------*/
{
  "rut": "17654321-8",
  "datos_personales": {
    "nombre": "Jane Goodall",
    "fecha_nacimiento": ISODate("1934-04-03"),
    "correo": "jane_goodall@janegoodall.org",
    "telefono": "982252618",
    "direccion": "Jane Goodall Institute, 1595 Spring Hill Road, Suite 550, Vienna, VA 22182, USA"
  },
  "datos_academicos": {
    "año_contratacion": 1965,
    "departamento": "Primatología y Antropología",
    "cargo": ["Profesora Visitante", "Investigadora"],
    "dedicación": "Tiempo parcial",
    "grado_academico": "Doctora en Etología",
    "areas_de_especialización": ["Primatología", "Conservación", "Comportamiento Animal", "Antropología"],
    "categoría": "Profesora Honoraria"
  },
  "cursos": [
    {
      "codigo": "BIO601",
      "nombre": "Primatología y Conservación",
      "año": 2023,
      "semestre": 1,
      "secciones": 1,
      "modalidad": "Híbrida"
    },
    {
      "codigo": "ANT502",
      "nombre": "Ética en la Investigación de Campo",
      "año": 2023,
      "semestre": 2,
      "secciones": 1,
      "modalidad": "Virtual"
    }
  ],
  "Horarios": null,
  "Publicaciones": [
    {
      "titulo": "In the Shadow of Man",
      "año": 1971,
      "tipo_de_publicación": "Libro"
    },
    {
      "titulo": "Through a Window: My Thirty Years with the Chimpanzees of Gombe",
      "año": 1990,
      "tipo_de_publicación": "Libro"
    },
    {
      "titulo": "Chimpanzee Food Choices and Used Tools in the Gombe National Park",
      "año": 1964,
      "tipo_de_publicación": "Artículo científico",
      "revista": "Nature"
    }
  ]
},

/*-------------------------------------------------------------------------------*/
{
  "rut": "14785236-5",
  "datos_personales": {
    "nombre": "Craig Venter",
    "fecha_nacimiento": ISODate("1946-10-14"),
    "correo": "craig_venter@jcvi.org",
    "telefono": "927631012",
    "direccion": "J. Craig Venter Institute, 4120 Capricorn Lane, La Jolla, CA 92037, USA"
  },
  "datos_academicos": {
    "año_contratacion": 1998,
    "departamento": "Genómica y Biología Sintética",
    "cargo": ["Investigador Principal", "Profesor Adjunto"],
    "dedicación": "Tiempo completo",
    "grado_academico": "Doctor en Fisiología y Farmacología",
    "areas_de_especialización": ["Genómica", "Biología Sintética", "Microbiología", "Biotecnología"],
    "categoría": "Profesor Investigador"
  },
  "cursos": [
    {
      "codigo": "BIO701",
      "nombre": "Genómica Avanzada",
      "año": 2023,
      "semestre": 1,
      "secciones": 1,
      "modalidad": "Híbrida"
    },
    {
      "codigo": "BIO702",
      "nombre": "Fundamentos de Biología Sintética",
      "año": 2023,
      "semestre": 2,
      "secciones": 1,
      "modalidad": "Virtual"
    }
  ],
  "Horarios": null,
  "Publicaciones": [
    {
      "titulo": "The Sequence of the Human Genome",
      "año": 2001,
      "tipo_de_publicación": "Artículo científico",
      "revista": "Science"
    },
    {
      "titulo": "Creation of a Bacterial Cell Controlled by a Chemically Synthesized Genome",
      "año": 2010,
      "tipo_de_publicación": "Artículo científico",
      "revista": "Science"
    },
    {
      "titulo": "A Life Decoded: My Genome: My Life",
      "año": 2007,
      "tipo_de_publicación": "Libro"
    }
  ]
},

/*-------------------------------------------------------------------------------*/
{
  "rut": "13579246-8",
  "datos_personales": {
    "nombre": "Elena Rodríguez",
    "fecha_nacimiento": ISODate("1975-09-18"),
    "correo": "elena.rodriguez@universidad.cl",
    "telefono": "931784085",
    "direccion": "Av. Beauchef 851, Santiago, Región Metropolitana, Chile"
  },
  "datos_academicos": {
    "año_contratacion": 2010,
    "departamento": "Ingeniería Industrial",
    "cargo": ["Investigadora Principal", "Profesora Asociada"],
    "dedicación": "Tiempo completo",
    "grado_academico": "Doctora en Ciencias de la Ingeniería",
    "areas_de_especialización": ["Procesos Industriales", "Optimización de Sistemas",
                                 "Industria 4.0", "Gestión de Operaciones"],
    "categoría": "Profesora Investigadora"
  },
  "cursos": [
    {
      "codigo": "ING601",
      "nombre": "Optimización de Procesos Industriales",
      "año": 2023,
      "semestre": 1,
      "secciones": 1,
      "modalidad": "Presencial"
    },
    {
      "codigo": "ING702",
      "nombre": "Industria 4.0 y Transformación Digital",
      "año": 2023,
      "semestre": 2,
      "secciones": 1,
      "modalidad": "Híbrida"
    }
  ],
  "Horarios": null,
  "Publicaciones": [
    {
      "titulo": "Implementación de tecnologías de Industria 4.0 en procesos de manufactura: un estudio de caso en Chile",
      "año": 2021,
      "tipo_de_publicación": "Artículo científico",
      "revista": "Journal of Industrial Engineering and Management"
    },
    {
      "titulo": "Optimización multifuncional para la planificación de la producción en industrias de proceso continuo",
      "año": 2018,
      "tipo_de_publicación": "Artículo científico",
      "revista": "Computers & Industrial Engineering"
    },
    {
      "titulo": "Gestión de la Cadena de Suministro en la Era Digital",
      "año": 2022,
      "tipo_de_publicación": "Libro"
    }
  ]
},

/*-------------------------------------------------------------------------------*/
{
    "rut": "18594861-7",
    "datos_personales": {
        "nombre": "Sofia García",
        "fecha_nacimiento": ISODate("1985-03-21"),
        "correo": "sofia.garcia@uc.cl",
        "telefono": "960763540",
        "direccion": "Av. Providencia 2121, Santiago, Región Metropolitana, Chile"
    },
    "datos_academicos": {
        "año_contratacion": 2018,
        "departamento": "Música",
        "cargo": ["Profesora", "Compositora"],
        "dedicación": "Tiempo completo",
        "grado_académico": "Doctora en Música",
        "areas_de_especialización": ["Teoría musical", "Composición electroacústica",
                                     "Música contemporánea", "Análisis musical"],
        "categoria": "Profesor asistente"
    },
    "cursos": [
        {
            "codigo": "MUS301",
            "nombre": "Análisis de la música del siglo XX",
            "año": 2023,
            "semestre": 1,
            "secciones": 1,
            "modalidad": "Presencial"
        },
        {
            "codigo": "MUS402",
            "nombre": "Composición electroacústica I",
            "año": 2023,
            "semestre": 2,
            "secciones": 1,
            "modalidad": "Taller"
        }
    ],
    "Horarios": [
        {
            "dia": "Martes",
            "bloque_horario": [3, 4, 5],
            "curso": "MUS301",
            "año": 2023,
            "semestre": 1,
            "seccion": 1
        },
        {
            "dia": "Jueves",
            "bloque_horario": [1, 2, 3, 4, 5],
            "curso": "MUS402",
            "año": 2023,
            "semestre": 2,
            "seccion": 1
        }
    ],
    "Obras": [
        {
            "titulo": "Paisajes Sonoros Urbanos",
            "año": 2020,
            "tipo_de_obra": "Composición electroacústica"
        },
        {
            "titulo": "Interacciones",
            "año": 2022,
            "tipo_de_obra": "Composición para conjunto de cámara y electrónica"
        }
    ],
    "Proyectos": [
        {
            "titulo": "Investigación sobre la percepción de la música electroacústica en jóvenes",
            "año": 2023,
            "estado": "En curso"
        }
    ]
},


/*-------------------------------------------------------------------------------*/
{
    "rut": "8244198-0",
    "datos_personales": {
        "nombre": "Martín Ramírez",
        "fecha_nacimiento": ISODate("1972-11-05"),
        "correo": "martin.ramirez@uchile.cl",
        "telefono": "965074084",
        "direccion": "Av. Bernardo O'Higgins 340, Santiago, Región Metropolitana, Chile"
    },
    "datos_academicos": {
        "año_contratacion": 2005,
        "departamento": "Matemáticas",
        "cargo": ["Investigador Principal", "Profesor Titular"],
        "dedicación": "Tiempo completo",
        "grado_académico": "Doctor en Matemáticas",
        "areas_de_especialización": ["Teoría de números algebraica",
                                     "Geometría algebraica", "Códigos correctores de errores"],
        "categoria": "Investigador Senior"
    },
    "cursos": [
        {
            "codigo": "MAT501",
            "nombre": "Teoría de números algebraicos",
            "año": 2023,
            "semestre": 1,
            "secciones": 1,
            "modalidad": "Seminario"
        },
        {
            "codigo": "MAT602",
            "nombre": "Curvas elípticas y aplicaciones",
            "año": 2023,
            "semestre": 2,
            "secciones": 1,
            "modalidad": "Seminario"
        }
    ],
    "Horarios": null,
    "Proyectos": [
        {
            "titulo": "Estudio de las curvas elípticas sobre cuerpos finitos y sus aplicaciones en criptografía",
            "año": 2022,
            "financiamiento": "Fondecyt",
            "estado": "En curso"
        }
    ],
    "Publicaciones": [
        {
            "titulo": "On the distribution of points on certain hyperelliptic curves",
            "año": 2010,
            "revista": "Journal of Number Theory"
        },
        {
            "titulo": "Algebraic curves over finite fields with many rational points",
            "año": 2015,
            "revista": "Finite Fields and Their Applications"
        },
        {
            "titulo": "Codes from algebraic curves and their applications",
            "año": 2018,
            "libro": "Handbook of Coding Theory"
        }
    ]
},

/*-------------------------------------------------------------------------------*/
{
    "rut": "6692662-1", // Replace with the actual RUT
    "datos_personales": {
        "nombre": "Jorge Luis Borges",
        "fecha_nacimiento": ISODate("1899-09-24"),
        "correo": "jorgeluisborges@argentina.com",
        "telefono": "928221652",
        "direccion": "Buenos Aires, Argentina"
    },
    "datos_academicos": {
        "año_contratacion": 1955,
        "departamento": "Humanidades",
        "cargo": ["Profesor", "Escritor"],
        "dedicación": "Tiempo parcial",
        "grado_academico": "Doctor en Letras",
        "areas_de_especialización": ["Literatura hispanoamericana", "Ficción corta", "Poesía", "Ensayo"],
        "categoría": "Profesor titular"
    },
    "cursos": [
        {
            "codigo": "LIT201",
            "nombre": "Historia de la Literatura Hispanoamericana",
            "año": 2023,
            "semestre": 1,
            "secciones": 1,
            "modalidad": "Presencial"
        }
    ],
    "Horarios": [
        {
            "dia": "Miércoles",
            "bloque_horario": [3, 4, 5],
            "curso": "LIT201",
            "año": 2023,
            "semestre": 1,
            "seccion": 1
        }
    ],
    "Obras": [
        {
            "titulo": "Ficciones",
            "año": 1944,
            "genero": "Cuento"
        },
        {
            "titulo": "El Aleph",
            "año": 1949,
            "genero": "Cuento"
        }
    ],
    "Premios": [
        {
            "nombre": "Premio Miguel de Cervantes",
            "año": 1980
        }
    ]
},

/*-------------------------------------------------------------------------------*/
{
    "rut": "8178061-7",
    "datos_personales": {
        "nombre": "María Teresa Ruiz",
        "fecha_nacimiento": ISODate("1953-07-24"),
        "correo": "maria.ruiz@uchile.cl",
        "telefono": "956206032",
        "direccion": "Santiago, Chile"
    },
    "datos_academicos": {
        "año_contratacion": 1985,
        "departamento": "Educación",
        "cargo": ["Profesora Titular", "Investigadora"],
        "dedicación": "Tiempo completo",
        "grado_academico": "Doctora en Educación",
        "areas_de_especialización": ["Pedagogía crítica", "Educación inclusiva", "Formación docente"],
        "categoria": "Investigadora Senior"
    },
    "cursos": [
        {
            "codigo": "PED301",
            "nombre": "Pedagogía Crítica y Sociedad",
            "año": 2023,
            "semestre": 1,
            "secciones": 1,
            "modalidad": "Seminario"
        },
        {
            "codigo": "PED402",
            "nombre": "Diseño Universal para el Aprendizaje",
            "año": 2023,
            "semestre": 2,
            "secciones": 1,
            "modalidad": "Taller"
        }
    ],
    "Horarios": [
        {
            "dia": "Martes",
            "bloque_horario": [1,3],
            "curso": "PED301",
            "año": 2023,
            "semestre": 1,
            "seccion": 1
        },
        {
            "dia": "Jueves",
            "bloque_horario": [3,4],
            "curso": "PED402",
            "año": 2023,
            "semestre": 2,
            "seccion": 1
        }
    ],
    "ProyectosInvestigacion": [
        {
            "titulo": "Impacto de la pandemia en la formación docente inicial",
            "año": 2020,
            "financiamiento": "Fondecyt",
            "estado": "Finalizado"
        }
    ],
    "Publicaciones": [
        {
            "titulo": "La inclusión educativa en Chile: desafíos y oportunidades",
            "año": 2018,
            "editorial": "LOM",
            "tipo": "Libro"
        },
        {
            "titulo": "Pedagogía crítica y transformación social",
            "año": 2022,
            "revista": "Revista de Educación",
            "volumen": 55,
            "numero": 2,
            "paginas": 123-145
        }
    ],
    "DireccionesTesis": [
        {
            "nombreEstudiante": "Juan Pérez",
            "tituloTesis": "La participación estudiantil en la toma de decisiones escolares",
            "año": 2022
        }
    ]
},

/*-------------------------------------------------------------------------------*/
{
    "rut": "9854746-0",
    "datos_personales": {
        "nombre": "Ana María Gutiérrez",
        "fecha_nacimiento": ISODate("1970-11-05"),
        "correo": "ana.gutierrez@uc.cl",
        "telefono": "975218870",
        "direccion": "Santiago, Chile"
    },
    "datos_academicos": {
        "año_contratacion": 2000,
        "departamento": "Artes Visuales",
        "cargo": ["Profesora Titular", "Artista Visual"],
        "dedicación": "Tiempo completo",
        "grado_academico": "Doctora en Artes Visuales",
        "areas_de_especialización": ["Arte contemporáneo", "Performance", "Videoarte", "Teoría del arte"],
        "categoria": "Investigadora Senior"
    },
    "cursos": [
        {
            "codigo": "ART301",
            "nombre": "Historia del Arte Contemporáneo",
            "año": 2023,
            "semestre": 1,
            "secciones": 1,
            "modalidad": "Seminario"
        },
        {
            "codigo": "ART402",
            "nombre": "Performance y Acción Artística",
            "año": 2023,
            "semestre": 2,
            "modalidad": "Taller"
        }
    ],
    "Horarios": [
        {
            "dia": "Miércoles",
            "bloque_horario": [],
            "curso": "ART301",
            "año": 2023,
            "semestre": 1,
            "seccion": 1
        },
        {
            "dia": "Viernes",
            "bloque_horario": [],
            "curso": "ART402",
            "año": 2023,
            "semestre": 2,
            "seccion": 1
        }
    ],
    "ExposicionesIndividuales": [
        {
            "titulo": "Cuerpos en tránsito",
            "año": 2015,
            "lugar": "Galería Nacional de Bellas Artes, Santiago"
        }
    ],
    "ParticipacionesColectivas": [
        {
            "titulo": "Bienal de Santiago",
            "año": 2019,
            "lugar": "Santiago"
        }
    ],
    "ProyectosInvestigacion": [
        {
            "titulo": "El cuerpo como medio expresivo en el arte contemporáneo",
            "año": 2021,
            "financiamiento": "FONDART",
            "estado": "Finalizado"
        }
    ],
    "Publicaciones": [
        {
            "titulo": "Performance y política en Chile",
            "año": 2017,
            "editorial": "Universidad de Chile",
            "tipo": "Libro"
        }
    ],
    "DireccionesTesis": [
        {
            "nombreEstudiante": "Sofía Ramírez",
            "tituloTesis": "La videoinstalación como herramienta de activismo feminista",
            "año": 2022
        }
    ]
},

/*-------------------------------------------------------------------------------*/
{
    "rut": "7515374-0",
    "datos_personales": {
        "nombre": "Pedro Ramírez",
        "fecha_nacimiento": ISODate("1975-03-21"),
        "correo": "pedro.ramirez@uchile.cl",
        "telefono": "963630680",
        "direccion": "Santiago, Chile"
    },
    "datos_academicos": {
        "año_contratacion": 2010,
        "departamento": "Astronomía",
        "cargo": ["Investigador Principal", "Profesor Asociado"],
        "dedicación": "Tiempo completo",
        "grado_academico": "Doctor en Astrofísica",
        "areas_de_especialización": ["Galaxias activas", "Agujeros negros supermasivos", "Cosmología observacional"],
        "categoria": "Investigador Senior"
    },
    "cursos": [
        {
            "codigo": "AST301",
            "nombre": "Introducción a la Astrofísica",
            "año": 2023,
            "semestre": 1,
            "secciones": 1,
            "modalidad": "Seminario"
        }
    ],
    "Horarios": null,
    "ProyectosInvestigacion": [
        {
            "titulo": "Formación y evolución de los agujeros negros supermasivos",
            "año": 2018,
            "financiamiento": "Fondecyt",
            "estado": "En curso"
        }
    ],
    "Publicaciones": [
        {
            "titulo": "La relación entre los agujeros negros supermasivos y las galaxias anfitrionas",
            "año": 2015,
            "revista": "Astrophysical Journal",
            "volumen": 800,
            "numero": 2,
            "paginas": 123-145
        }
    ],
    "Observatorios": [
        {
            "nombre": "Observatorio Paranal",
            "telescopio": "Very Large Telescope (VLT)"
        }
    ]
}

])

/*-------------------------------------------------------------------------------*/

db.docentes.deleteMany({})