# sql-join-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a foreign key?
  A foreign key is a column or a set of columns in a database table that references the primary key of another table. It establishes a relationship between the two tables based on the values stored in those columns. The foreign key ensures referential integrity and enables the enforcement of constraints between related tables.

- How do you join two SQL tables? (Provide at least two syntaxes.)
  from "table"
  join "table" using "foreign key"

- How do you temporarily rename columns or tables in a SQL statement?
  using as

- How do you create a one-to-many relationship between two tables?
  To create a one-to-many relationship between two tables, you typically define a foreign key in the "many" table that references the primary key in the "one" table.

- How do you create a many-to-many relationship between two tables?
  To create a many-to-many relationship between two tables, you typically use a junction or associative table that connects the two tables via their primary keys.

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
