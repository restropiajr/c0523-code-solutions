const books = [
  {
    isbn: '9780061120084',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
  },
  {
    isbn: '9780451524935',
    title: '1984',
    author: 'George Orwell',
  },
  {
    isbn: '9780743273565',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
  },
];

console.log('value of books:', books);
console.log('typeof books:', typeof books);

console.log('value of JSON.stringify(books):', JSON.stringify(books));
console.log('typeof JSON.stringify(books):', typeof JSON.stringify(books));

const studentJSON = '{"id":51130, "name":"Roland Estropia Jr."}';

console.log('value of studentJSON:', studentJSON);
console.log('typeof studentJSON:', typeof studentJSON);

console.log('value of JSON.parse(studentJSON):', JSON.parse(studentJSON));
console.log('typeof JSON.parse(studentJSON):', typeof JSON.parse(studentJSON));
