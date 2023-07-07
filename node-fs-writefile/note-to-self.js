import { writeFile } from 'node:fs/promises';

async function notetoSelf() {
  const note = String(process.argv[2]);
  await writeFile('note.txt', `${note}\n`);
}

try {
  await notetoSelf();
} catch (error) {
  console.log('Error:', error.message);
}
