import express from 'express';

type Grade = {
  id: number;
  name: string;
  course: string;
  score: number;
};

type Grades = {
  [key: number]: Grade;
};

const grades: Grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95,
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100,
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92,
  },
};

const app = express();

app.get('/api/grades', (req, res) => {
  const gradesArray: Grade[] = [];

  for (const id in grades) {
    gradesArray.push(grades[id]);
  }

  res.json(gradesArray);
});

app.delete('/api/grades/:id', (req, res) => {
  const gradeId: number = Number(req.params.id);

  if (gradeId in grades) {
    delete grades[gradeId];
    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }
});

app.listen(8080, () => {
  console.log('Listening on Port 8080');
});
