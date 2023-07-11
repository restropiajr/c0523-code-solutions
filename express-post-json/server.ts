import express from 'express';

type Grade = {
  id: number;
  name: string;
  course: string;
  score: number;
};

let nextId = 1;
const grades: Record<number, Grade> = {};
const gradesArray: Grade[] = [];

const app = express();

app.use(express.json());

app.get('/api/grades', (req, res) => {
  res.json(gradesArray);
});

app.post('/api/grades', (req, res) => {
  const { name, course, score } = req.body;

  const newGrade: Grade = {
    id: nextId,
    name,
    course,
    score,
  };

  grades[nextId] = newGrade;
  gradesArray.push(newGrade);
  nextId++;

  res.status(201).json(newGrade);
});

app.listen(8080, () => {
  console.log('Listening on Port 8080');
});
