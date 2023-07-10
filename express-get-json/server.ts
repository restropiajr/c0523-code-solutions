import express from 'express';

type Grade = {
  id: number;
  name: string;
  course: string;
  score: number;
};

type Grades = {
  [key: string]: Grade;
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
  type GradesArray = Grade[];
  const gradesArray: GradesArray = [];

  for (const key in grades) {
    gradesArray.push(grades[key]);
  }

  res.json(gradesArray);
});

app.listen(8080, () => {
  console.log(`Express server listening on port 8080`);
});
