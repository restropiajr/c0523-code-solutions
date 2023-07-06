import fetch from './fetch.js';

// Keep track of app load time so each log message can be timed.
// Log messages should all be approximately 1 second apart.
const startTime = Date.now();
const elapsed = () => `${Math.round((Date.now() - startTime) / 1000)}s -`;

async function fetchOnce() {
  const message = await fetch('foo/bar.html');
  console.log(elapsed(), 'fetchOnce:', message);
}

async function fetchSeveral() {
  const message1 = await fetch('foo1/bar.html');
  console.log(elapsed(), 'fetchSeveral1:', message1);

  const message2 = await fetch('foo2/bar.html');
  console.log(elapsed(), 'fetchSeveral2:', message2);

  const message3 = await fetch('foo3/bar.html');
  console.log(elapsed(), 'fetchSeveral3:', message3);
}

async function fetchChained() {
  const message1 = await fetch('foo-chain/bar.html');
  console.log(elapsed(), 'fetchChained1:', message1);

  const message2 = await fetch(message1);
  console.log(elapsed(), 'fetchChained2:', message2);

  const message3 = await fetch(message2);
  console.log(elapsed(), 'fetchChained2:', message3);
}

async function fetchAll() {
  await fetchOnce();
  await fetchSeveral();
  await fetchChained();
}

fetchAll();
