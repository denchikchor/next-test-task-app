export function formatDayMonthISO(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long' });
}

export function formatHeaderDate(d = new Date()) {
  const dow = d.toLocaleDateString('en-US', { weekday: 'long' });
  const date = d.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  return { dow, date };
}
