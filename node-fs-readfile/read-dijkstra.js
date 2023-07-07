import { readFile } from 'node:fs/promises';

async function readDijikstra() {
  const filePath = new URL('./dijkstra.txt', import.meta.url);
  const contents = await readFile(filePath, { encoding: 'utf8' });
  console.log(contents);
}

try {
  await readDijikstra();
} catch (error) {
  console.error('Error:', error.message);
}
