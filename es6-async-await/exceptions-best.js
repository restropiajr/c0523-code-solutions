import fetch from './fetch.js';

// Keep track of app load time so each log message can be timed.
// Log messages should all be approximately 1 second apart.
const startTime = Date.now();
const elapsed = () => `${Math.round((Date.now() - startTime) / 1000)}s -`;

async function throwOnce() {
  const message = await fetch('foo', true);
  console.log(elapsed(), 'throwOnce:', message);
}

async function throwSeveral() {
  const message1 = await fetch('foo1', true);
  console.log(elapsed(), 'throwSeveral1:', message1);
  const message2 = await fetch('foo2', true);
  console.log(elapsed(), 'throwSeveral2:', message2);
  const message3 = await fetch('foo3', true);
  console.log(elapsed(), 'throwSeveral3:', message3);
}

async function throwChained() {
  const message1 = await fetch('foo-chain', true);
  console.log(elapsed(), 'throwChained1:', message1);
  const message2 = fetch(message1, true);
  console.log(elapsed(), 'throwChained2:', message2);
  const message3 = fetch(message2, true);
  console.log(elapsed(), 'throwChained2:', message3);
}

try {
  await throwOnce();
  await throwSeveral();
  await throwChained();
} catch (error) {
  console.error(elapsed(), 'Error:', error.message);
  // Note: In the `catch` we are logging just `error.message` for illustration
  // purposes. In actual code you will want to log `error` so that
  // you get the stack trace.
}
