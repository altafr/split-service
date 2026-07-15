/**
 * Splits a bill total (given in whole cents) evenly across `people`.
 *
 * Returns an array holding each person's share, in cents. The shares
 * returned should always add back up to the original total — no cents
 * should be created or lost in the split.
 *
 * All money in this service is handled as integer cents to avoid
 * floating-point rounding problems.
 */
export function splitBill(totalCents: number, people: number): number[] {
  const perPerson = Math.floor(totalCents / people);
  return new Array(people).fill(perPerson);
}
