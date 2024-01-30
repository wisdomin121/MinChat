export const convertISOStringToAMTime = (ISOString: string): string => {
  const date = new Date(ISOString);

  const hour = date.getHours();
  const minutes = `${date.getMinutes()}`.padStart(2, '0');

  const ampm = +(hour / 12) < 1 ? 'AM' : 'PM';
  const formatted_hour = hour % 12 ? '00' : `${hour % 12}`.padStart(2, '0');

  return `${ampm} ${formatted_hour}:${minutes}`;
};
