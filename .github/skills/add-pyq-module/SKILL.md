---
name: add-pyq-module
description: Add a CBSE Class 10 previous year question paper module and homepage link, format it consistently, research and verify answers, and preserve the supplied paper content.
---

# Add Previous Year Question Paper Module

Use this skill when the user provides CBSE PYQ content as pasted text or an attachment and asks to add it to this study website.

## Required inputs

Use values from the supplied paper:

- Academic session or year
- Subject name and subject code
- Exam date
- Series
- Question paper code and set
- Time allowed and maximum marks
- General instructions
- Question paper content

Ask for missing information only when it cannot be determined safely from the supplied source.

## Workflow

1. Read the attachment or pasted source exactly as the factual source.
2. Preserve every question, option, blank, sub-question, instruction and answer included in the source.
3. Identify the academic year and set from the paper.
4. Create a Markdown filename using this pattern:
   `previous-year-question-paper-class-10-<subject-slug>-<year>.md`
5. Follow the module structure used by existing study modules:
   - Jekyll front matter
   - Bold title in a level-one heading
   - Quick Index
   - Underlined section headings
   - Sequentially numbered questions
   - `**Answer:**` before every answer
   - Bullet or numbered lists for options and processes
6. Add the new page to the Previous Year Question Paper table on `docs/index.html`.
7. Cross-check objective answers and subjective solutions using reliable sources where available.
8. Prefer official CBSE answer keys, marking schemes or solved copies that match the exact question paper code and set.
9. Record the solved-answer reference with a link on the module page.
10. Whenever an answer is not readily available in the supplied source, research it before deciding that it is unavailable.
11. Search for matching educational sources using the exact subject, academic year, question paper code and set number.
12. Cross-check every researched answer against at least two relevant sources or one official/authoritative source matching the paper.
13. If an answer still cannot be verified after research, mark it clearly as `[Answer not provided in source]`; never invent or guess an answer.
14. For an answer found through research, include the exact verified option or concise answer text without silently changing the supplied question.
15. Add the research reference used for the update to the module's solved-answer reference or answer-key status.

## Filename convention

Use lowercase, hyphen-separated names:

- `previous-year-question-paper-class-10-it-402-2025-26.md`
- `previous-year-question-paper-class-10-science-086-2024-25.md`

The Jekyll permalink and homepage link must use the matching `.html` URL:

- `permalink: /modules/previous-year-question-paper-class-10-it-402-2025-26.html`
- `modules/previous-year-question-paper-class-10-it-402-2025-26.html`

## Markdown structure

```markdown
---
layout: default
title: CBSE Class 10 <Subject> Previous Year Question Paper <Year>
permalink: /modules/previous-year-question-paper-class-10-<subject-slug>-<year>.html
---

# **CBSE Class 10 <Subject> (<Code>) Previous Year Question Paper <Year>**

## <u>Quick Index</u>

- [Question Paper Details](#question-paper-details)
- [Section A: Objective Type Questions](#section-a-objective-type-questions)
- [Section B: Subjective Type Questions](#section-b-subjective-type-questions)

## <u>Question Paper Details</u>

**Exam Date:** ...

**Series:** ...

**Question Paper Code:** ...

**Subject:** ...

**Time Allowed:** ...

**Maximum Marks:** ...

**Solved answer reference:** [Source title](https://...)

## <u>Section A: Objective Type Questions</u>

### 1. <Question>

**Answer:** ...

## <u>Section B: Subjective Type Questions</u>

### 1. <Question>

**Answer:**

<Answer content>
```

## Formatting rules

- Preserve official abbreviations and subject terminology.
- Add blank lines around all headings, paragraphs, lists and tables.
- Convert pasted run-on text into headings, paragraphs and proper lists without changing meaning.
- Use numbered lists for ordered processes and answer sets.
- Use bullets for options, examples and causes.
- Indent sub-question answer content consistently.
- Use `<u>...</u>` around session and section headings.
- Normalize HTML entities such as `&amp;` only as presentation cleanup.
- Do not silently remove, correct or contradict educational content.
- If source text is ambiguous or incomplete, retain the uncertain portion and mark `[Needs review]`.

## Answer research rules

- Match all of the following before applying an answer:
  - Subject
  - Academic year
  - Question paper code
  - Set number
- When the answer is missing from the supplied text, perform focused research before marking it unavailable.
- Search using distinctive question wording plus the subject, year, paper code and set.
- Confirm the answer is from the exact paper and set, not a similar question or another year.
- Treat option-answer posts and AI summaries as supporting references, not automatic proof.
- Prefer an official marking scheme or multiple matching independent sources.
- Add a source link on the page for the answer key or solved paper.
- Keep unverified answers clearly marked instead of guessing.

## Homepage update

Add one row to the `Previous Year Question Paper` table:

```html
<tr>
  <th scope="row"><academic year></th>
  <td><subject and code></td>
  <td><a href="modules/<matching-filename>.html">Open question paper</a></td>
</tr>
```

Add a row for each new year without duplicating an existing academic-year/subject entry.

## Verification

Before finishing:

1. Confirm the question and sub-question numbering is sequential.
2. Confirm all answers are marked or contain `[Answer not provided in source]`.
3. Confirm every answer option or answer reference matches the same paper code and set.
4. Confirm the Quick Index links match generated heading anchors.
5. Confirm the homepage link points to the correct `.html` page.
6. Run `git diff --check`.
7. Build the Jekyll site with:
   `bundle exec jekyll build --source docs --destination _site`
