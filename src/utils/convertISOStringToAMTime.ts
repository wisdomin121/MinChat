const getIsToday = (date: Date) => {
  const currentDate = new Date();

  return (
    currentDate.getFullYear() === date.getFullYear() &&
    currentDate.getMonth() === date.getMonth() &&
    currentDate.getDate() === date.getDate()
  );
};

export const convertISOStringToAMTime = (ISOString: string): string => {
  const date = new Date(ISOString.replaceAll('"', ''));

  const hour = date.getHours();
  const minutes = `${date.getMinutes()}`.padStart(2, '0');

  const ampm = +(hour / 12) < 1 ? 'AM' : 'PM';
  const formatted_hour =
    hour % 12 === 0 ? '00' : `${hour % 12}`.padStart(2, '0');

  const isToday = getIsToday(date);
  const formatted_date = `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;

  return `${
    isToday ? '' : formatted_date
  } ${ampm} ${formatted_hour}:${minutes}`;
};
