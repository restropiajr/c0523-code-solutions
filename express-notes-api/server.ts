import express from 'express';
import { readFile, writeFile } from 'node:fs/promises';

const app = express();

type Note = {
  id: number;
  content: string;
};

type Notes = Record<number, Note>;

type Data = {
  nextId: number;
  notes: Notes;
};

async function readNotes(): Promise<Data> {
  const jsonData = await readFile('./data.json', 'utf8');
  return JSON.parse(jsonData);
}

async function writeNotes(data: Data) {
  const jsonUpdatedData = JSON.stringify(data, null, 2);
  await writeFile('./data.json', jsonUpdatedData);
}

app.use(express.json());

app.get('/api/notes', async (req, res) => {
  try {
    const data = await readNotes();
    const { notes } = data;
    const notesArray: Note[] = [];

    for (const id in notes) {
      notesArray.push(notes[id]);
    }

    res.status(200).json(notesArray);
  } catch (error) {
    console.error('Error Message:', error);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.get('/api/notes/:id', async (req, res) => {
  try {
    const data = await readNotes();
    const { notes } = data;
    const noteId = Number(req.params.id);

    if (noteId < 0) {
      res.status(400).json({
        error: `Id ${noteId} is invalid. Please provide a positive integer.`,
      });
      return;
    }

    if (!(noteId in notes)) {
      res.status(404).json({ error: `Id - ${noteId} cannot be found.` });
      return;
    }

    res.status(200).json(notes[noteId]);
  } catch (error) {
    console.error('Error Message:', error);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.post('/api/notes', async (req, res) => {
  try {
    const data = await readNotes();
    let { nextId, notes } = data;
    const { content } = req.body;

    if (!content) {
      res.status(400).json({ error: `content is a required field.` });
      return;
    }

    const updatedId = nextId;

    nextId++;

    const updatedData = {
      nextId,
      notes: {
        ...notes,
        [updatedId]: {
          id: updatedId,
          content,
        },
      },
    };

    await writeNotes(updatedData);
    res.status(201).json({ content, id: updatedId });
  } catch (error) {
    console.error('Error Message:', error);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.delete('/api/notes/:id', async (req, res) => {
  try {
    const data = await readNotes();
    const noteId = Number(req.params.id);

    if (noteId < 0) {
      res.status(400).json({
        error: `Id ${noteId} is invalid. Please provide a positive integer.`,
      });
      return;
    }

    if (!(noteId in data.notes)) {
      res.status(404).json({ error: `Id - ${noteId} cannot be found.` });
      return;
    }

    delete data.notes[noteId];
    await writeNotes(data);
    res.sendStatus(204);
  } catch (error) {
    console.error('Error Message:', error);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.put('/api/notes/:id', async (req, res) => {
  try {
    const data = await readNotes();
    const { nextId, notes } = data;
    const noteId = Number(req.params.id);
    const { content } = req.body;

    if (noteId < 0) {
      res.status(400).json({
        error: `Id ${noteId} is invalid. Please provide a positive integer.`,
      });
      return;
    }

    if (!content) {
      res.status(400).json({ error: `content is a required field.` });
      return;
    }

    if (!(noteId in data.notes)) {
      res.status(404).json({ error: `Id - ${noteId} cannot be found.` });
      return;
    }

    const updatedData = {
      nextId,
      notes: {
        ...notes,
        [noteId]: {
          id: noteId,
          content,
        },
      },
    };

    await writeNotes(updatedData);
    res.status(200).json({ content, id: noteId });
  } catch (error) {
    console.error('Error Message:', error);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.listen(8080, () => {
  console.log('Listening to Port 8080!');
});
