import { describe, it, expect } from 'vitest';
import { daysUntilDue } from '../src/dueDate';

describe('daysUntilDue', () => {
  it('counts days for a simple range', () => {
    expect(daysUntilDue('2026-06-01', '2026-06-08')).toBe(7);
  });

  it('counts days correctly across a DST spring-forward', () => {
    // US daylight saving begins Sunday 2026-03-08 and the clocks lose an
    // hour. A naive millisecond division treats that span as 47 hours and
    // under-counts the range by a day.
    expect(daysUntilDue('2026-03-07', '2026-03-09')).toBe(2);
  });
});
