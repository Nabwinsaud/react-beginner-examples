import { assert, describe, expect, it } from "vitest";

// describe("", () => {
//   it("foo", () => {
//     assert.equal(Math.sqrt(4), 2);
//   });
// });
const numbers: number[] = [1, 2, 3, 4, 5];
let total = numbers.reduce((acc, curr) => acc + curr, 0);

describe("check", () => {
  it("check", () => {
    assert.equal(Math.sqrt(4), 2);
  });

  it("bar", () => {
    expect(1 + 1).toBe(2);
  });

  it("sum to be 15", () => {
    expect(total).toBe(15);
  });
});
