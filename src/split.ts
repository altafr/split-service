/**
 * Splits a bill total (given in whole cents) evenly across `people`.
 *
 * Returns an array holding each person's share, in cents. The shares
 * returned always add back up to the original total — no cents are
 * created or lost in the split. When the total does not divide evenly,
 * the leftover cents are handed out one-by-one to the first people in
 * the list (largest-remainder distribution).
 *
 * All money in this service is handled as integer cents to avoid
 * floating-point rounding problems.
 */
export function splitBill(totalCents: number, people: number): number[] {
  const base = Math.floor(totalCents / people);
  const leftover = totalCents - base * people;
  return Array.from({ length: people }, (_, i) =>
    i < leftover ? base + 1 : base
  );
}
