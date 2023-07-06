import fetch from './fetch.js';

// Keep track of app load time so each log message can be timed.
// Log messages should all be approximately 1 second apart.
const startTime = Date.now();
const elapsed = () => `${Math.round((Date.now() - startTime) / 1000)}s -`;

async function throwOnce() {
  // Note: In the `catch` we are logging just `error.message` for illustration
  // purposes. In actual code you will want to log the entire error so that
  // you get the stack trace.
  try {
    const message = await fetch('foo', true);
    console.log(elapsed(), 'throwOnce:', message);
  } catch (error) {
    console.error(elapsed(), 'throwOnce Error:', error.message);
  }
}

async function throwSeveral() {
  // Note: In the `catch` we are logging just `error.message` for illustration
  // purposes. In actual code you will want to log `error` so that
  // you get the stack trace.
  try {
    const message1 = await fetch('foo1', true);
    console.log(elapsed(), 'throwSeveral1:', message1);
    const message2 = await fetch('foo2', true);
    console.log(elapsed(), 'throwSeveral2:', message2);
    const message3 = await fetch('foo3', true);
    console.log(elapsed(), 'throwSeveral3:', message3);
  } catch (error) {
    console.error(elapsed(), 'throwSeveral Error:', error.message);
  }
}

async function throwChained() {
  try {
    const message1 = await fetch('foo-chain', true);
    console.log(elapsed(), 'throwChained1:', message1);
    const message2 = fetch(message1, true);
    console.log(elapsed(), 'throwChained2:', message2);
    const message3 = fetch(message2, true);
    console.log(elapsed(), 'throwChained2:', message3);
  } catch (error) {
    console.error(elapsed(), 'throwChained Error:', error.message);
  }
}

await throwOnce();
await throwSeveral();
await throwChained();
