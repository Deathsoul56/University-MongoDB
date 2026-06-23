# Agent guidance for University-MongoDB

## What this repo is

A MongoDB academic exercise (non-relational DB for a fictional university). There is no package manager, build step, test suite, or CI. Seed data lives in `Base Datos/`, utility scripts live in `script/`, and the report source lives in `Documentacion/`.

## How to run the scripts

- Scripts are written for the MongoDB shell (`mongosh` or the legacy `mongo` shell). Run with:
  - `mongosh < "Base Datos/Alumnos.js"`
  - `mongosh < "Base Datos/Docentes.js"`
  - `mongosh < "Base Datos/Cursos.js"`
  - `mongosh < "Base Datos/University.js"`
- Some commands use legacy helpers (`ISODate`, `ObjectId`, `show dbs`, `show collections`) that `mongosh` supports.
- The path contains a space (`Base Datos`), so quote it when running from a shell.

## Database and collections

- Main database: `university`
- Collections: `students`, `docentes`, `courses`
- `console.js` is a separate tutorial that uses database `school` and collection `students`. It can be run standalone.

## Data loading order and destructive operations

1. Load seed data first: `Alumnos.js`, `Docentes.js`, `Cursos.js` (order among them does not matter).
2. `Docentes.js` ends with `db.docentes.deleteMany({})`, so the `docentes` collection is always empty after the script finishes. Re-running it just repeats the insert-then-wipe cycle. This appears to be intentional for resetting, not a bug.
3. `University.js` contains only read-only queries and aggregations against the already-loaded data.
4. `Validaciones.py` checks data consistency across collections (course-code gaps, duplicate course names across faculties, student/teacher course references, unique RUTs, etc.). Run it after seeding: `py "script/Validaciones.py"`. Requires `pymongo`.
5. `console.js` uses hardcoded `ObjectId` values for `school.students`. Those IDs will only match if you run the file from scratch on a fresh `school` database.

## Sync courses from Excel

- `Documentacion/Universidad.xlsx` is the source of truth for courses. The sheet `Facultades` lists every course with its code, department, and faculty.
- Run `py "script/SincronizarCursos.py" --dry-run` to preview changes.
- Run `py "script/SincronizarCursos.py" --yes` to insert new courses, update changed ones, and remove MongoDB courses that are no longer in the Excel (it warns if those codes are still referenced in `students` or `docentes`).
- Add `--keep-missing` to keep MongoDB courses that are not in the Excel.
- Add `--update-js` to also regenerate `Base Datos/Cursos.js` from the Excel, so re-running the seed script restores the same courses.
- Use `--mongo-only` to list courses present in MongoDB but missing from the Excel.
- New courses get `Créditos: 30` by default (override with `--default-credits`).

## Sync project files to DataGrip

- `script/SincronizarDataGrip.py` copies the MongoDB shell files from `Base Datos/` into the DataGrip console folder so both copies stay identical.
- Run `py "script/SincronizarDataGrip.py" --dry-run` to preview differences.
- Run `py "script/SincronizarDataGrip.py" --yes` to copy changed files.
- Add `--backup` to keep a timestamped backup of the DataGrip files before overwriting.

## OpenCode skills

- `.opencode/skills/curriculum-grid/SKILL.md` contains guidance for editing or extending curriculum grids (`mallas curriculares`) in `Documentacion/Universidad.tex`, including changing from 6 to 10 semesters.

## Conventions and quirks

- Field naming is inconsistent between collections:
  - `students` uses lowercase Spanish keys (`datos_personales`, `datos_academicos`, `cursos`, etc.).
  - `docentes` uses Spanish keys with capitalized nested arrays (`Horarios`, `Publicaciones`).
  - `courses` uses capitalized Spanish keys (`Código`, `Nombre`, `Facultad`, `Departamento`, `Créditos`).
- Course codes are duplicated in both `students.cursos` and `courses.Código`; they are not formally referenced.
- `students.cursos` is an embedded array per student, not a separate collection.

## Documentation

- `Documentacion/Universidad.tex` is the LaTeX report source. Build artifacts (`*.aux`, `*.log`, `*.synctex.gz`, `*.toc`) are already ignored by `.gitignore`.
