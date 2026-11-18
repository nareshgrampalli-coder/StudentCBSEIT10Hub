---
name: format-study-module
description: Convert pasted or unformatted CBSE student-study text into a clean, exam-ready Markdown module with a title, quick index, bold key terms, underlined session headings, and properly indented lists.
---

# Format Study Module

Use this skill when the user provides raw study content or asks to create another CBSE study module.

## Workflow

1. Ask for the module topic and filename only if they are not provided.
2. Read or paste the supplied source content exactly as the factual source.
3. Preserve all facts, questions, answers, examples, and technical terminology.
4. Do not invent, remove, or silently correct the meaning of educational content.
5. Create or update the requested Markdown file.
6. Verify the final file for headings, lists, indentation, and broken pasted sentences.

## Required Markdown structure

Use this structure unless the user requests another format:

```markdown
# **<Subject or Module Title>**

## <u>Quick Index</u>

- [Session 1: <Session title>](#session-1-session-title)
- [Session 2: <Session title>](#session-2-session-title)

## <u>Session 1: <Session title></u>

### 1. <Question?>

**Answer:**

<Answer content>

- **<Key term>:** <Definition or explanation>
- **<Key term>:** <Definition or explanation>
```

## Formatting rules

- Format the document title in bold inside a level-one heading.
- Underline session headings with `<u>...</u>`.
- Number questions sequentially across the entire module.
- Place `**Answer:**` before every answer.
- Bold important terms, names, formulas, and short definitions.
- Convert comma-separated or pasted-together lists into bullet or numbered lists.
- Indent nested list items by two spaces for Markdown sub-items.
- Use numbered lists for ordered processes or types.
- Use bullet lists for definitions and examples.
- Add blank lines around headings, paragraphs, lists, and code blocks.
- Keep paragraphs short and easy for students to scan.
- Split run-together text without changing the original meaning.
- Preserve question and answer numbering unless the source is unordered.

## Source cleanup

Fix only presentation problems such as:

- Missing spaces after punctuation
- Missing list markers
- Missing headings or answer labels
- Repeated spaces
- Incorrectly joined words
- HTML entity artifacts such as `&amp;`
- Malformed headings

Do not change:

- Factual information
- Technical spellings
- Exam terminology
- The user's intended meaning

If the source is ambiguous or incomplete, retain it and flag the uncertain section clearly with `[Needs review]` instead of guessing.

## Verification

Before finishing:

1. Check that every question has an answer section.
2. Check that sessions and question numbers are sequential.
3. Check that the Quick Index links match the generated heading anchors.
4. Check for whitespace errors with `git diff --check`.
5. Summarize the created or updated file.
