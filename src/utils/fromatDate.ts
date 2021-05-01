const formatDate = (date: string): string => {
  const dateFormatted = new Date(date);
  const day = dateFormatted.getDay() > 9 ? dateFormatted.getDay() : `0${dateFormatted.getDay()}`;
  const month = dateFormatted.getMonth() + 1 > 9 ? dateFormatted.getMonth() + 1 : `0${dateFormatted.getMonth() + 1}`;
  const year = dateFormatted.getFullYear();

  return `${day}/${month}/${year}`
}

export { formatDate };