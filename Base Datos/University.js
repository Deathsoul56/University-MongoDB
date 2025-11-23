show dbs

use university
show collections

db.students.find({})


db.students.find({"datos_academicos.codigo_carrera": "INF"})

db.students.find(
  {"datos_academicos.codigo_carrera": "INF"},
  {"datos_personales.nombre": 1, "rut": 1, "_id": 0}
)

// Todos los Alumnos que tengan algun Calculo dentro de sus cursos en el año 2022
db.students.find({
  "cursos": {
    $elemMatch: {
      "nombre": /Cálculo/,
      "año": 2022
    }
  }
})

// Todos los Alumnos que tengan algun el curso MAT103
db.students.find({
  "cursos": {
    $elemMatch: {
      "codigo": "MAT103"
    }
  }
})

// Los cursos que 2020 semestre 1 de alumno Larry Langosta
db.students.find(
  {
    "datos_personales.nombre": "Larry Langosta",
    "cursos": {
      $elemMatch: {
        "año": 2020,
        "semestre": 1
      }
    }
  },
  {
    "datos_personales.nombre": 1, "cursos": 1, "rut": 1, "_id": 0
  }
)


db.students.find({
  "cursos": {
    $elemMatch: {
      "estado": "Cursando"
    }
  }
},
{"datos_personales.nombre": 1, "rut": 1, "_id": 0, "cursos": 1})


db.students.find({"rut": "17894562-8"})



db.students.find(
  {},
  {"datos_personales.nombre": 1, "datos_academicos.carrera": 1,"rut": 1, "_id": 0}
)

db.docentes.find(
    {},
    {rut: 1, "datos_personales.nombre": 1,"_id": 0}
)






// Selecionar todos los cursos del año: 2021 y semestre: 2
db.students.aggregate([
  {
    $match: {
      "cursos.año": 2021,
      "cursos.semestre": 2
    }
  },
  {
    $project: {
      _id: 0,
      rut: 1,
      nombre: "$datos_personales.nombre",
      cursos: {
        $filter: {
          input: "$cursos",
          as: "curso",
          cond: {
            $and: [
              { $eq: ["$$curso.año", 2021] },
              { $eq: ["$$curso.semestre", 2] }
            ]
          }
        }
      }
    }
  }
])


// Todos los Alumnos que aprobaron Frances II
db.students.find(
    {
        "cursos": {
            $elemMatch: {
                "nombre": "Frances II",
                "estado": "Aprobado"
            }
        }
    },
    {
        "datos_personales.nombre": 1,
        "datos_academicos.carrera": 1,
        "_id": 0
    }
);

// Todos los Alumnos que han cursodo o estan cursando Frances II
db.students.find(
    {
        "cursos": {
            $elemMatch: {
                "nombre": "Frances II"
            }
        }
    },
    {
        "datos_personales.nombre": 1,
        "datos_academicos.carrera": 1,
        "_id": 0
    }
);


// Todos los mienbros de la Fraternidad: Los Cascarudos
db.students.find({
    "datos_extracurriculares.fraternidad": "Los Cascarudos"
})

db.students.find(
    { "datos_extracurriculares.fraternidad": "Los Cascarudos" },
    {
        "rut": 1,
        "datos_personales.nombre": 1,
        "datos_academicos.carrera": 1,
        "_id": 0
    }
)

db.students.find({
    "datos_extracurriculares.fraternidad": "Los Cascarudos"
}).pretty()



// Ver todas las fraternidades existentes
db.students.find(
    { "datos_extracurriculares.fraternidad": { $exists: true, $ne: null } },
    {
        "rut": 1,
        "datos_personales.nombre": 1,
        "datos_extracurriculares.fraternidad": 1,
        "_id": 0
    }
)