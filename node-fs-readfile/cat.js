import { readFile } from 'node:fs/promises';

async function readCatAnyFiles() {
  const files = process.argv.slice(2);

  const promises = files.map((file) => readFile(file, 'utf8'));

  const fileContents = await Promise.all(promises);
  fileContents.forEach((fileContent) => {
    console.log(fileContent);
  });
}

try {
  await readCatAnyFiles();
} catch (error) {
  console.error('Error:', error);
}
