import format from 'date-fns/format';

export function formatDialogueDate(timestamp) {
  const date = new Date(timestamp);
  return format(date, 'MMM dd, yyy');
}

export function formatChatsDate(timestamp) {
  const date = new Date(timestamp);
  return format(date, 'dd/MM/yy,  h:m aa');
}
