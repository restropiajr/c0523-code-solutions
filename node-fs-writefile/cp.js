import { writeFile, readFile } from 'node:fs/promises';

async function cp() {
  const filePath = new URL(process.argv[2], import.meta.url);
  const contents = await readFile(filePath, { encoding: 'utf8' });

  const copyFile = String(process.argv[3]);
  await writeFile(copyFile, `${contents}\n`);
}

try {
  await cp();
} catch (error) {
  console.log('Error:', error.message);
}
