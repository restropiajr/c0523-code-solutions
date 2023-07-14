# sql-mutations-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the SQL _CRUD_ operations?
  Create - Insert
  Read - Select
  Update - Update
  Delete - Delete

- How do you add a row to a SQL table?
  INSERT INTO your_table_name (column1, column2, column3, ...)
  VALUES (value1, value2, value3, ...)
  returning \*;

- How do you add multiple rows to a SQL table at once?
  INSERT INTO your_table_name (column1, column2, column3)
  VALUES (value1, value2, value3),
  (value4, value5, value6),
  (value7, value8, value9)
  returning \*;

- How do you update rows in a database table?
  UPDATE your_table_name
  SET column1 = new_value1, column2 = new_value2
  WHERE condition
  returning \*;

- How do you delete rows from a database table?
  DELETE FROM your_table_name
  WHERE condition
  returning \*;

- Why is it important to include a `where` clause in your `update` and `delete` statements?
  Including a WHERE clause in your UPDATE and DELETE statements is important to ensure that you modify or delete only the intended rows. Without a WHERE clause, the statement would update or delete all rows in the table, which can have unintended consequences.

- How do you accidentally delete or update all rows in a table?
  Accidentally deleting or updating all rows in a table can occur if you forget to include a WHERE clause or mistakenly provide a condition that matches all rows. It is crucial to be cautious and double-check your statements before executing them to avoid such unintended actions. Regularly backing up your data is also recommended as a safety measure.

- How do you get back the modified row without a separate `select` statement?
  returning \*

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
