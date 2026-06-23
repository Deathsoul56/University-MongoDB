---
name: curriculum-grid
description: Use when the user asks to create, modify, or extend curriculum grids (mallas curriculares) in Documentacion/Universidad.tex, especially changing the number of semesters, adding/removing courses, or applying the visual malla style.
---

# Curriculum Grid Skill

## Purpose

Help maintain the curriculum grids (`mallas curriculares`) in `Documentacion/Universidad.tex`. The document now styles undergraduate degrees as 10-semester programs (5 years) using a visual grid of colored semester boxes.

## Files involved

- `Documentacion/Universidad.tex` — the main LaTeX report.
- `Base Datos/Cursos.js` — generated seed file with available courses, codes, faculties and departments.
- `Documentacion/Universidad.xlsx` — source of truth for courses (sheet `Facultades`).

## How to locate the grids

The section **Carreras Universitarias** starts around:

```latex
%============================================
\section{Carreras Universitarias}
%============================================
```

Each degree is a `\subsection{DEGREE NAME}` containing a `mallasection` environment with a `tabular` that holds 10 `\semestrebox{N}{...}` entries (5 rows × 2 columns).

There are also global references to the 10-semester model:

- `\subsection{Sistema de Créditos}`: bullet that says `10 semestres (5 años)`.
- `\subsection{Requisitos de Graduación}`: bullet `Completar los 10 semestres de idioma`.
- The TikZ diagram titled `Flujo de Estudios (10 Semestres)` with nodes `S1` ... `S10`.
- The language catalog (`Catálogo de Idiomas`) lists 10 levels per language.
- The course catalog has a subsection `Cursos de Titulación`.

## Visual malla format

Use this exact pattern for every degree:

```latex
\subsection{Nombre de la Carrera}

\begin{mallasection}
\renewcommand{\arraystretch}{1.0}
\begin{tabular}{@{}p{0.48\linewidth}@{\hspace{0.04\linewidth}}p{0.48\linewidth}@{}}
    \semestrebox{1}{Curso A\\ Curso B\\ ...\\ Idioma} &
    \semestrebox{2}{Curso C\\ Curso D\\ ...\\ Idioma} \\[2mm]
    \semestrebox{3}{...} &
    \semestrebox{4}{...} \\[2mm]
    \semestrebox{5}{...} &
    \semestrebox{6}{...} \\[2mm]
    \semestrebox{7}{...} &
    \semestrebox{8}{...} \\[2mm]
    \semestrebox{9}{...} &
    \semestrebox{10}{...}
\end{tabular}
\end{mallasection}
```

Rules for the format:

- Each `\semestrebox{N}{...}` contains courses separated by `\\`.
- Always include `Idioma` in every semester unless the degree explicitly omits it.
- Do not add blank lines between `\semestrebox` entries inside the table.
- Use `&` to separate the two columns and `\\[2mm]` to end each row.

## Rules when extending from 6 to 10 semesters

1. **Update global texts first** (if not already done)
   - Change `6 semestres (3 años)` to `10 semestres (5 años)`.
   - Change `Completar los 6 semestres de idioma` to `Completar los 10 semestres de idioma`.
   - The TikZ diagram should show 10 semesters (`S1`...`S10`) in two rows of five, plus a row of 10 language levels (`I`...`X`).
   - Extend each language list from 6 to 10 levels (`Inglés I` ... `Inglés X`, etc.).
   - Add a `Cursos de Titulación` subsection under the course catalog.

2. **Extend every degree subsection**
   - Keep the existing `Semestre 1` through `Semestre 6` courses unless the user asks otherwise.
   - Add `Semestre 7` through `Semestre 10`.
   - Convert the whole degree to the visual `mallasection` + `semestrebox` format.
   - Each semester should have 5–7 courses.

3. **Course selection guidelines**
   - Prefer courses that already exist in `Base Datos/Cursos.js` or `Documentacion/Universidad.xlsx`.
   - Use advanced / specialization courses for semesters 7–8.
   - Use electives, internships, seminars, and thesis-related courses for semesters 9–10.
   - Use the generic courses from `Cursos de Titulación` when needed: `Seminario de Titulación I/II`, `Práctica Profesional`, `Tesis I/II`, `Proyecto de Titulación`, `Trabajo de Titulación`.
   - For engineering degrees, typical late courses include: `Inteligencia Artificial`, `Sistemas Distribuidos`, `Seguridad Informática`, `Gestión de Proyectos`.
   - For science degrees, typical late courses include: `Seminario de Investigación`, `Tesis I/II`, `Práctica Profesional`, `Electivo de Especialidad`.
   - For arts/education degrees, typical late courses include: `Taller de Titulación`, `Práctica Docente I/II/III`, `Seminario de Investigación`, `Proyecto de Graduación`.

4. **Consistency checks**
   - After editing, grep for remaining occurrences of `6 semestres` outside actual grid blocks.
   - Verify the TikZ diagram still compiles and fits on the page.
   - Compile `Documentacion/Universidad.tex` to check for LaTeX errors.

## Suggested workflow

1. Read `Documentacion/Universidad.tex` to understand the current grids.
2. Read `Base Datos/Cursos.js` (or `Documentacion/Universidad.xlsx`) to pick real course names/codes.
3. Apply global changes (text + diagram + language catalog) if needed.
4. Convert/extend each degree one by one. If there are many degrees, ask the user whether to process all automatically or degree-by-degree.
5. Run `pdflatex Documentacion/Universidad.tex` to verify.

## Output format

Do not use the old `\begin{multicols}{2}` + `\textbf{Semestre N}` + `itemize` style for new or updated grids. Use the `mallasection` + `semestrebox` format shown above.
