# **Electronic Spreadsheet – Class 10: Questions and Answers**

## <u>Quick Index</u>

- [Chapter 4: Analyse Data using Scenarios and Goal Seek](#chapter-4-analyse-data-using-scenarios-and-goal-seek)
- [Chapter 5: Using Macros in Spreadsheet](#chapter-5-using-macros-in-spreadsheet)
- [Chapter 6: Linking Spreadsheet Data](#chapter-6-linking-spreadsheet-data)
- [Chapter 7: Share and Review a Spreadsheet](#chapter-7-share-and-review-a-spreadsheet)

## <u>Chapter 4: Analyse Data using Scenarios and Goal Seek</u>

### 1. What is consolidating data?

**Answer:**

**Consolidate** is a function used to combine information from multiple sheets of a spreadsheet into one location and summarize the information.

It allows users to view and compare a variety of data in a single spreadsheet to identify:

- Trends
- Relationships
- Summary results

### 2. What are subtotals in LibreOffice Calc?

**Answer:**

The **Subtotal** tool in Calc automatically groups data and applies a common summary function, such as:

- Sum
- Average
- Count
- Other summary functions

Any suitable summary function can be used for each column according to the data-analysis requirement.

### 3. What is Group and Outline in LibreOffice Calc?

**Answer:**

**Group and Outline** creates an outline of selected data and groups rows or columns together.

- A **minus sign (-)** collapses the group and hides the data.
- A **plus sign (+)** expands the group and displays the data.

To group data:

1. Select the rows or columns to be grouped.
2. Open `Data > Group and Outline`.

### 4. What is a scenario?

**Answer:**

A **scenario** is a tool used to test “what-if” questions.

A scenario contains a set of values that can be used within spreadsheet calculations. Each scenario is given a name, and several scenarios can be created on the same sheet.

### 5. What is the purpose of Multiple Operations in what-if analysis?

**Answer:**

The **Multiple Operations** tool creates a formula array that displays a list of results.

It applies a formula to alternative values and uses two arrays of cells:

- One array contains the input values.
- The second array contains the formula and displays the results.

### 6. What do you mean by Goal Seek?

**Answer:**

After entering values and creating a formula, **Goal Seek** predicts or calculates the input needed to obtain a required output.

It helps find the input value that produces a specific result by changing the input values in a formula.

## <u>Chapter 5: Using Macros in Spreadsheet</u>

### 7. What are macros? How can we record a macro?

**Answer:**

A **macro** is a set of instructions that can be used repeatedly to save time.

It may contain a sequence of commands or keystrokes.

**Steps to record a macro**

1. Enter the required data.
2. Before performing the operation, select `Tools > Macro > Record Macro`.
3. Repeat the actions to be recorded.
4. Select **Stop Recording** from the drop-down menu.
5. Save the macro by giving it a name.

### 8. What do you mean by a macro used as a function?

**Answer:**

If a predefined function is not available, a macro can be created to perform calculations according to a requirement.

The macro can be used like a function and is then called a **macro function**.

## <u>Chapter 6: Linking Spreadsheet Data</u>

### 9. What are hyperlinks in LibreOffice Calc?

**Answer:**

A **hyperlink** is a clickable link that opens another location.

It can point to:

- A location in the same spreadsheet
- Another spreadsheet
- Another document

### 10. Differentiate between relative and absolute hyperlinks.

**Answer:**

- **Absolute hyperlink:** Stores the complete file location.

  Example:

  ```text
  C:\Users\ADMIN\Downloads\try.ods
  ```

  If the file is moved from this location, the hyperlink may stop working.

- **Relative hyperlink:** Stores the file location relative to the current spreadsheet.

  Example:

  ```text
  Admin\Downloads\try.ods
  ```

  It depends on the location of the active spreadsheet.

### 11. What is the advantage of sharing worksheet data?

**Answer:**

Advantages of sharing worksheet data include:

- Faster data entry
- Easy collaboration between users
- Simpler editing and updating by multiple users

### 12. Write the steps to register a data source in `*.odb` format.

**Answer:**

1. Select `Tools > Options > LibreOffice Base > Databases`.
2. Click **New** to open the **Create Database Link** dialog box.
3. Enter the location of the database file.
4. Type a name for the registered database and click **OK**.

## <u>Chapter 7: Share and Review a Spreadsheet</u>

### 13. Explain the features and use of Record Changes.

**Answer:**

LibreOffice Calc provides **Record Changes** to keep track of modifications and the time at which data was updated.

Features include:

- Tracking changes made by other users
- Reviewing changes before finalizing a worksheet
- Collaborating on a single sheet

### 14. What is the purpose of adding comments?

**Answer:**

Authors and reviewers can add **comments** to explain proposed changes, corrections, or suggestions.

### 15. Explain the features of accepting or rejecting changes.

**Answer:**

The change-recording mechanism allows the original author to review each recorded modification and accept or reject it.

**Steps**

1. Open the modified worksheet.
2. Select `Edit > Changes > Accept or Reject`.
3. Review each modification one by one.
4. Accept or reject each change individually.
5. Use **Accept All** or **Reject All** if all changes are to be processed together.
