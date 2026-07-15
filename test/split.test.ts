import { describe, it, expect } from 'vitest';
import { splitBill } from '../src/split';

describe('splitBill', () => {
  it('splits an evenly divisible bill into equal shares', () => {
    // $90.00 across 3 people -> $30.00 each
    expect(splitBill(9000, 3)).toEqual([3000, 3000, 3000]);
  });

  it('gives every person a whole number of cents', () => {
    const shares = splitBill(10000, 3);
    for (const share of shares) {
      expect(Number.isInteger(share)).toBe(true);
    }
  });

  it('per-person shares must reconcile to the exact total', () => {
    // $100.00 across 3 people. 100.00 / 3 = 33.33 each, but
    // 33.33 x 3 = 99.99 -- one cent goes missing unless the
    // leftover cent is distributed to someone.
    const total = 10000;
    const shares = splitBill(total, 3);
    const sum = shares.reduce((a, b) => a + b, 0);
    expect(sum).toBe(total);
  });
});
