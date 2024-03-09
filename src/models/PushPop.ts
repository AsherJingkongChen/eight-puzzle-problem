export interface PushPop<T> {
  push(value: T): void;
  pop(): T | undefined;
  [Symbol.iterator](): Generator<T>;
}
