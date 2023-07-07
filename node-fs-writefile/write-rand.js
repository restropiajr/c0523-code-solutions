import { writeFile } from 'node:fs/promises';

async function writeRand() {
  const randomNumber = String(Math.random());
  await writeFile('random.txt', `${randomNumber}\n`);
}

try {
  await writeRand();
} catch (error) {
  console.log('Error:', error.message);
}
