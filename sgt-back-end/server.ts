import express from 'express';
import ClientError from './client-error.js';
import errorMiddleware from './error-middleware.js';
import pg from 'pg';

const app = express();

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false,
  },
});

type Grade = {
  gradeId: number;
  name: string;
  course: string;
  score: number;
  createdAt: string;
};

app.use(express.json());

app.get('/api/grades', async (req, res, next) => {
  try {
    const sql = `
          select *
          from "grades"
    `;
    const result = await db.query(sql);
    const grades: Grade[] = result.rows;
    res.status(200).json(grades);
  } catch (error) {
    next(error);
  }
});

app.post('/api/grades', async (req, res, next) => {
  try {
    const { name, course, score } = req.body;
    if (!name) {
      throw new ClientError(400, 'name is a required field.');
    }
    if (!course) {
      throw new ClientError(400, 'course is a required field.');
    }
    if (!score) {
      throw new ClientError(400, 'score is a required field.');
    }
    if (!(Number(score) >= 0 && Number(score) <= 100)) {
      throw new ClientError(400, 'score is not an integer between 0 to 100.');
    }
    const sql = `
          insert into "grades" ("name", "course", "score")
          values ($1, $2, $3)
          returning *;
    `;
    const params = [name, course, Number(score)];
    const result = await db.query(sql, params);
    const grade: Grade = result.rows[0];
    res.status(201).json(grade);
  } catch (error) {
    next(error);
  }
});

app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const gradeId = Number(req.params.gradeId);
    const { name, course, score } = req.body;
    if (!name) {
      throw new ClientError(400, 'name is a required field.');
    }
    if (!course) {
      throw new ClientError(400, 'course is a required field.');
    }
    if (!score) {
      throw new ClientError(400, 'score is a required field.');
    }
    if (!(Number(score) >= 0 && Number(score) <= 100)) {
      throw new ClientError(400, 'score is not an integer between 0 to 100.');
    }
    if (Number(gradeId) <= 0) {
      throw new ClientError(400, 'gradeId must be a positive integer.');
    }
    const sql = `
          update "grades"
          set "name" = $1, "course" = $2, score = $3
          where "gradeId" = $4
          returning *;
    `;
    const params = [name, course, Number(score), gradeId];
    const result = await db.query(sql, params);
    const grade: Grade = result.rows[0];
    if (!grade) {
      throw new ClientError(404, 'grade does not exist in the database.');
    }
    res.status(200).json(grade);
  } catch (error) {
    next(error);
  }
});

app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const gradeId = Number(req.params.gradeId);
    if (Number(gradeId) <= 0) {
      throw new ClientError(400, 'gradeId must be a positive integer.');
    }
    const sql = `
          delete from "grades"
          where "gradeId" = $1
          returning *;
    `;
    const params = [Number(gradeId)];
    const result = await db.query(sql, params);
    const grade: Grade = result.rows[0];
    if (!grade) {
      throw new ClientError(404, 'grade does not exist in the database.');
    }
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('Listening to Port 8080!');
});
