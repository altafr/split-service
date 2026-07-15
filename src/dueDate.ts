const MS_PER_DAY = 24 * 60 * 60 * 1000;

/**
 * Returns how many whole days separate an invoice date from its due date.
 *
 * Both dates are plain calendar dates as ISO strings (YYYY-MM-DD).
 * The result should be independent of clocks changing for daylight
 * saving time — a day is a day.
 */
export function daysUntilDue(invoiceDate: string, dueDate: string): number {
  const [ay, am, ad] = invoiceDate.split('-').map(Number);
  const [by, bm, bd] = dueDate.split('-').map(Number);
  const start = new Date(ay, am - 1, ad);
  const end = new Date(by, bm - 1, bd);
  return Math.floor((end.getTime() - start.getTime()) / MS_PER_DAY);
}
