import { PushPop } from "./PushPop";

export class Queue<TElement> implements PushPop<TElement> {
  readonly #buffer: TElement[];

  constructor(iterable?: Iterable<TElement>) {
    this.#buffer = iterable ? Array.from(iterable) : [];
  }

  pop(): TElement | undefined {
    return this.#buffer.shift();
  }

  push(...element: TElement[]): void {
    this.#buffer.push(...element);
  }

  *[Symbol.iterator](): Generator<TElement> {
    for (let element; (element = this.pop()) !== undefined; yield element);
  }
}
