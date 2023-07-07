import { readFile, writeFile } from 'node:fs/promises';

// Reading data from data.json
async function readNotes() {
  const jsonData = await readFile('./data.json', 'utf8');
  const data = JSON.parse(jsonData);
  const notes = [];

  for (const note in data.notes) {
    notes.push(`${note}: ${data.notes[note]}`);
  }
  notes.forEach((note) => console.log(note));
}

// Creating data to data.json
async function createNotes() {
  const jsonData = await readFile('./data.json', 'utf8');
  const data = JSON.parse(jsonData);
  const currentId = data.nextId;
  const updatedId = currentId + 1;

  const updatedData = {
    nextId: updatedId,
    notes: {
      ...data.notes,
      [currentId]: process.argv[3],
    },
  };

  const jsonUpdatedData = JSON.stringify(updatedData, null, 2);
  await writeFile('./data.json', jsonUpdatedData);
}

// Deleting data from data.json
async function deleteNotes() {
  const jsonData = await readFile('./data.json', 'utf8');
  const data = JSON.parse(jsonData);

  delete data.notes[process.argv[3]];

  const jsonUpdatedData = JSON.stringify(data, null, 2);
  await writeFile('./data.json', jsonUpdatedData);
}

// Updating data from data.json
async function updateNotes() {
  const jsonData = await readFile('./data.json', 'utf8');
  const data = JSON.parse(jsonData);

  data.notes[process.argv[3]] = process.argv[4];

  const jsonUpdatedData = JSON.stringify(data, null, 2);
  await writeFile('./data.json', jsonUpdatedData);
}

try {
  switch (process.argv[2]) {
    case 'read':
      await readNotes();
      break;
    case 'create':
      await createNotes();
      break;
    case 'delete':
      await deleteNotes();
      break;
    case 'update':
      await updateNotes();
      break;
    default:
      console.log(`"${process.argv[2]}" is an invalid command.`);
  }
} catch (error) {
  console.log('Error:', error);
}
