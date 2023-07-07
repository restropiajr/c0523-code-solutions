import { readFile } from 'node:fs/promises';

async function readCatAnyFiles() {
  const fileArray = process.argv.slice(2);

  const promiseArray = fileArray.map(async (file) => {
    const filePath = new URL(file, import.meta.url);
    const contents = await readFile(filePath, { encoding: 'utf8' });
    return contents;
  });

  const fileContents = await Promise.all(promiseArray);
  fileContents.forEach((fileContent) => {
    console.log(fileContent);
  });
}

try {
  await readCatAnyFiles();
} catch (error) {
  console.error('Error:', error.message);
}
