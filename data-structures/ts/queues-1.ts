/* eslint-disable @typescript-eslint/no-empty-function */
import Queue from './lib/queue';

export function getFront<T>(queue: Queue<T>): T | undefined {
  if (queue.peek() === undefined) return undefined;
  return queue.peek();
}

export function addToBack<T>(queue: Queue<T>, value: T): void {
  queue.enqueue(value);
}

export function takeFront<T>(queue: Queue<T>): T | undefined {
  if (queue.peek() === undefined) return undefined;
  return queue.dequeue();
}

export function isEmpty<T>(queue: Queue<T>): boolean {
  if (queue.peek() === undefined) return true;
  return false;
}
