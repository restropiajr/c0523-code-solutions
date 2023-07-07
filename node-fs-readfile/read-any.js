import { readFile } from 'node:fs/promises';

async function readAnyFile() {
  const filePath = new URL(process.argv[2], import.meta.url);
  const contents = await readFile(filePath, { encoding: 'utf8' });
  console.log(contents);
}

try {
  await readAnyFile();
} catch (error) {
  console.error('Error:', error.message);
}
