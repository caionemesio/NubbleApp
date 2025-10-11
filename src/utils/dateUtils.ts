import {differenceInSeconds, format, parseISO} from 'date-fns';

function formatRelative(dateIso: string): string {
  const date = parseISO(dateIso);
  const now = new Date();

  const diffInSeconds = differenceInSeconds(now, date);
  if (diffInSeconds < 60) {
    return `${diffInSeconds} s`;
  }
  const diffInMinutes = Math.round(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes} m`;
  }

  const diffInHours = Math.round(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours} h`;
  }

  const diffInDays = Math.round(diffInHours / 24);
  if (diffInDays < 30) {
    return `${diffInDays} d`;
  }

  const diffInWeeks = Math.round(diffInDays / 7);
  if (diffInWeeks < 4) {
    return `${diffInWeeks} sem`;
  }

  const diffInMonths = Math.round(diffInDays / 30);
  if (diffInMonths < 12) {
    return `${diffInMonths} m`;
  }
  return format(date, 'dd/MM/yyyy');
}

export const dateUtils = {formatRelative};
