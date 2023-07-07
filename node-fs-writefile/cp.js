import { writeFile, readFile } from 'node:fs/promises';

async function cp() {
  const contents = await readFile(process.argv[2]);

  const copyFile = String(process.argv[3]);
  await writeFile(copyFile, `${contents}\n`);
}

try {
  await cp();
} catch (error) {
  console.log('Error:', error);
}
