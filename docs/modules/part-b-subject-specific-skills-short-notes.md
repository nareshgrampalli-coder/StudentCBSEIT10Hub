---
layout: default
title: Part B Subject Specific Skills Short Notes
permalink: /modules/part-b-subject-specific-skills-short-notes.html
---

# **Part B: Subject Specific Skills — Concept Notes**

## <u>Quick Index</u>

- [Unit 1: Digital Documentation](#unit-1-digital-documentation)
- [Unit 2: Electronic Spreadsheet](#unit-2-electronic-spreadsheet)
- [Unit 3: Database Management System](#unit-3-database-management-system)
- [Unit 4: Maintain a Healthy, Safe and Secure Working Environment](#unit-4-maintain-a-healthy-safe-and-secure-working-environment)

## <u>Unit 1: Digital Documentation</u>

Digital documentation is the planned creation, editing, formatting, reviewing, and sharing of electronic documents using a word processor such as LibreOffice Writer.

```text
Plan -> Create -> Format -> Review -> Finalize -> Share/Publish
```

### Styles

A **style** stores a reusable group of formatting properties. Changing the style updates every element that uses it, unlike manual formatting.

| Style category | Controls |
|---|---|
| **Paragraph** | Alignment, spacing, indentation, borders, tabs |
| **Character** | Font, size, colour, emphasis |
| **Page** | Margins, page size, header, footer, columns |
| **Frame** | Position and formatting of text frames |
| **List** | Bullet and numbering appearance |
| **Table** | Borders, background, alignment, and text layout |

Writer's Fill Format tool applies an existing style to selected content. A custom style can be created from selected formatting or modified to match house standards.

```text
Change style definition
          |
          v
All linked paragraphs update consistently
```

### Images and drawing objects

Images may be inserted from a file, copied, dragged into a document, or linked to an external file.

- **Embedded image:** Stored within the document.
- **Linked image:** Uses an external image file, so the source and document should be kept together when moved.

Important operations:

| Operation | Meaning |
|---|---|
| **Resize** | Changes displayed dimensions. |
| **Crop** | Hides unwanted outer portions without necessarily changing the original image file. |
| **Filter** | Changes visual properties such as colour, blur, or sharpening. |
| **Arrange** | Controls front-to-back order. |
| **Group** | Treats several selected objects as one unit for movement or resizing. |

### Anchoring and wrapping

**Anchoring** attaches an object to a document reference:

```text
Anchor target
   ├── Page
   ├── Paragraph
   ├── Character
   └── Frame
```

**Text wrapping** controls how text flows around the object. For example, text can wrap around an image, remain above and below it, or pass in a selected direction.

Anchor controls what the object follows; wrap controls how surrounding text behaves.

### Table of contents and headings

A **Table of Contents (TOC)** is generated from heading styles. A logical hierarchy is essential:

```text
Heading 1: Main chapter
  Heading 2: Section
    Heading 3: Subtopic
```

Avoid manually making text look like a heading. Applying actual heading styles allows Writer to create and update the TOC automatically.

### Templates and review

A **template** is a reusable starting document containing layout, styles, text, and sometimes placeholders. It saves time and enforces a consistent appearance.

- **Track Changes:** Records additions, deletions, and formatting for review.
- **Accept/Reject:** Finalizes individual or grouped tracked changes.
- **Compare Documents:** Shows differences between an original and a revised version.
- **Comments:** Add reviewer questions or explanations without changing document content.

---

## <u>Unit 2: Electronic Spreadsheet</u>

A spreadsheet organizes data in cells and supports calculations, analysis, decision-making, and charts.

```text
Raw data -> Clean structure -> Formula/Analysis -> Result -> Decision
```

### Data consolidation

**Consolidation** combines values from several ranges, worksheets, or files into one summary. Operations may include sum, average, count, maximum, or minimum.

```text
North sales + South sales + West sales
                  |
                  v
           Total sales sheet
```

The source ranges should use compatible labels and organization. The consolidated result changes when the sources change only if links are enabled appropriately.

### Subtotals, grouping, and outlines

**Subtotals** calculate summary values for sorted groups. For example, records sorted by Department can produce a total sales value for each department and a grand total.

```text
Department A
  Record 1
  Record 2
  Subtotal A
Department B
  Record 3
  Subtotal B
Grand Total
```

**Grouping and outlining** hide or reveal levels of rows and columns. They improve readability without deleting detailed data.

### What-if analysis

```text
Changed input -> Calculation -> Changed result
```

| Tool | Purpose |
|---|---|
| **Scenario** | Stores different sets of input values for comparison. |
| **Multiple Operations** | Shows the effect of one or two changing variables on a formula. |
| **Goal Seek** | Finds the input value needed to produce a desired formula result. |

Example: if a profit formula depends on units sold, Goal Seek can determine the number of units required to obtain a target profit.

### Macros

A **macro** is a recorded or programmed sequence of instructions used to automate repeated work. It can format cells, enter data, or perform a set of operations.

```text
Repeated manual steps -> Record macro -> Run one command
```

Macros may contain executable code. Therefore, enable and run macros only from trusted documents.

### Hyperlinks and data linking

A hyperlink connects a cell or text to:

- Another worksheet or cell.
- A file or folder.
- A web page.
- An email address.

A **relative link** stores the path relative to the current document, while an **absolute link** contains a complete path or URL. Relative linking is useful when a group of files is moved together while preserving the same folder structure.

### Sharing and review

**Track Changes** records who made which modification. Reviewers can accept or reject changes. **Comments** are explanatory notes attached to cells and do not normally alter the cell value.

A registered data source can connect Calc to external database data for analysis and reporting.

---

## <u>Unit 3: Database Management System</u>

A database stores related data in an organized form. A **DBMS** provides tools to define structures, enter and update data, retrieve information, enforce rules, and protect data.

```text
Application/User -> DBMS -> Database tables -> Storage
                       |
                  Security and rules
```

### Data and information

- **Data:** Unprocessed facts, such as `Asha`, `18`, and `92`.
- **Information:** Data organized to provide meaning, such as “Asha scored 92 out of 100.”
- **Database:** Organized collection of related data.
- **DBMS:** Software that manages the database.

```text
Raw data + Context + Processing = Information
```

### Relational model

An **RDBMS** represents data as tables. Each table stores records for one type of entity.

```text
STUDENT                         COURSE
StudentID (PK)                 CourseID (PK)
Name                           CourseName
CourseID (FK) ----------------> CourseID
```

- **Entity:** A real-world object, such as student, book, or product.
- **Attribute/field:** One property, such as name or price.
- **Record/row:** One complete entity instance.
- **Table:** Collection of records with the same attributes.

### Keys and relationships

| Key | Role |
|---|---|
| **Primary key** | Uniquely identifies each record in a table. |
| **Candidate key** | Any field or field combination that could uniquely identify records. |
| **Alternate key** | Candidate key not selected as the primary key. |
| **Foreign key** | Refers to the primary key of a related table. |

Relationships connect related tables and reduce duplication:

```text
One teacher <------> One staff account       (one-to-one)
One class   <------> Many students          (one-to-many)
Many students <----> Many activities        (many-to-many)
```

Many-to-many relationships are commonly represented using a connecting table.

### Data types

| Category | Purpose |
|---|---|
| **Text** | Names, addresses, IDs, and descriptions |
| **Numeric** | Values used in arithmetic |
| **Date/time** | Dates, times, or timestamps |
| **Currency** | Monetary values |
| **Boolean** | True/false or yes/no |
| **Binary** | Images or other binary files |

Using the correct data type prevents invalid values and makes sorting, searching, and calculations reliable.

### Database objects

- **Table:** Stores records.
- **Query:** Selects, filters, sorts, calculates, or updates data.
- **Form:** Provides a user-friendly interface for working with records.
- **Report:** Presents selected records in a formatted and printable layout.

```text
Table -> Query -> Form or Report -> User
```

### Basic SQL idea

SQL describes data to retrieve rather than how the DBMS should search for it.

```sql
SELECT StudentName, Marks
FROM Students
WHERE Marks >= 50
ORDER BY Marks DESC;
```

- `SELECT` chooses fields.
- `FROM` identifies the table.
- `WHERE` filters records.
- `ORDER BY` sorts the result.
- `INSERT`, `UPDATE`, and `DELETE` modify records.

---

## <u>Unit 4: Maintain a Healthy, Safe and Secure Working Environment</u>

A healthy workplace protects people, equipment, data, and the surrounding environment. Safety requires both formal rules and careful daily behaviour.

```text
Identify hazard -> Assess risk -> Control hazard -> Report -> Review
```

### Health, safety, and security policy

An organization policy states responsibilities, safety rules, reporting procedures, emergency arrangements, and training requirements.

- **Health hazard:** May cause illness.
- **Safety hazard:** May cause immediate injury or damage.
- **Security risk:** May cause theft, unauthorized access, or loss.
- **Emergency:** A serious situation needing immediate action.

### Common workplace hazards

| Hazard | Example | Control |
|---|---|---|
| **Physical** | Noise, poor lighting, exposed cables | Maintenance, guards, warning signs |
| **Electrical** | Damaged plug or overloaded socket | Switch off safely and report |
| **Slips/trips** | Wet floor or trailing wire | Clean spills and organize cables |
| **Ergonomic** | Awkward posture or repeated movement | Adjust workstation and take breaks |
| **Fire** | Flammable material near heat | Storage, alarms, and safe evacuation |
| **Information** | Weak password or unattended screen | Access control and screen locking |

### Ergonomics

**Ergonomics** fits the workplace to the worker so that tasks can be completed safely and efficiently.

```text
Screen: top near eye level
Back: supported by chair
Forearms/wrists: relaxed and supported
Feet: flat on floor or footrest
Position: change regularly
```

Long periods in one posture can lead to muscle strain, back pain, wrist injury, or eye discomfort. Good practices include appropriate seating, neutral wrists, proper screen distance, reduced glare, and short regular breaks.

### Air, water, waste, and quality

Workplace quality includes clean drinking water, proper ventilation, controlled noise, suitable lighting, hygienic surroundings, and responsible waste disposal. Electrical waste, batteries, chemicals, and confidential paper need suitable separate handling.

### Accident and emergency response

```text
Stay calm -> Warn others -> Protect from danger -> Contact help
            -> Evacuate -> First aid -> Report -> Prevent recurrence
```

During an evacuation:

1. Follow the alarm and trained wardens.
2. Use marked escape routes and stairs.
3. Do not collect belongings or use lifts during a fire.
4. Move to the assembly point.
5. Report missing persons.
6. Return only after official clearance.

### Fire extinguisher awareness

An extinguisher works only when the correct type is selected and used by a trained person. The major extinguisher agents include water, foam, CO₂, dry powder, and wet chemical; each suits different fire types.

```text
If the fire is unsafe or smoke is spreading:
Raise alarm -> Evacuate -> Call emergency services
```

Do not fight a fire when an exit is not safely available, smoke prevents visibility, or the correct equipment and training are unavailable.

### First aid and CPR

**First aid** is immediate assistance given until professional medical care arrives. First aiders should protect themselves, check danger, call emergency services, and provide only the care for which they are trained.

**CPR (Cardiopulmonary Resuscitation)** supports a person whose heart and normal breathing have stopped. Its steps, compression rate, and AED use should follow current recognized training. In an emergency, call the local emergency service and follow trained dispatcher instructions.
