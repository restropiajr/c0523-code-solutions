import express from 'express';

type NextId = number;
type Grade = {
  id: number;
  name: string;
  course: string;
  score: number;
};
type GradesArray = object[];

let nextId: NextId = 1;
const gradesArray: GradesArray = [];

const app = express();
const jsonMiddleware = express.json();

app.use(jsonMiddleware);

app.get('/api/grades', (req, res) => {
  res.json(gradesArray);
});

app.post('/api/grades', (req, res) => {
  // Request from client has been parsed by jsonMiddleware and can now be accessed through req.body
  const newGrade: Grade = req.body;

  // Create a property called id and assign it with the value of nextId afterwards increment by 1
  newGrade.id = nextId;
  nextId++;

  // Push the newGrade into the gradesArray
  gradesArray.push(newGrade);

  // Sends back to client that the object was created with status of 201 and reprints out the gradesArray to confirm it was added
  res.status(201).json(gradesArray);
});

app.listen(8080, () => {
  console.log('Listening on Port 8080');
});
