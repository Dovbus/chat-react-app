import format from 'date-fns/format';

export function formatDialogueDate(timestamp) {
  const date = new Date(timestamp * 1000);
  return format(date, 'MMM dd, yyy');
}
