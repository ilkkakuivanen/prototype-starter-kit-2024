import { test } from "node:test";
import assert from "node:assert";

const sum = (a: number, b: number): number => {
  return a + b;
};

test("sum function test", () => {
  assert.strictEqual(sum(1, 2), 3);
  assert.strictEqual(sum(-1, -1), -2);
  assert.strictEqual(sum(0, 0), 0);
});
