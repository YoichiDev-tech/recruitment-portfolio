// Formats an ISO date string / Date into a readable "Aug 2026" style label
export function formatDate(input: string | Date, options?: Intl.DateTimeFormatOptions): string {
  const date = typeof input === "string" ? new Date(input) : input;
  return date.toLocaleDateString("en-GB", {
    month: "short",
    year: "numeric",
    ...options,
  });
}