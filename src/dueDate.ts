const MS_PER_DAY = 24 * 60 * 60 * 1000;

/**
 * Returns how many whole days separate an invoice date from its due date.
 *
 * Both dates are plain calendar dates as ISO strings (YYYY-MM-DD).
 * The result is independent of daylight-saving clock changes because the
 * arithmetic is done in UTC, where every day is exactly 24 hours.
 */
export function daysUntilDue(invoiceDate: string, dueDate: string): number {
  const [ay, am, ad] = invoiceDate.split('-').map(Number);
  const [by, bm, bd] = dueDate.split('-').map(Number);
  const start = Date.UTC(ay, am - 1, ad);
  const end = Date.UTC(by, bm - 1, bd);
  return Math.round((end - start) / MS_PER_DAY);
}
