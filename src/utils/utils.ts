const formatValue = (value: number): string => {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};

const formatValueRo = (value: number): string => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

const formatDateRo = (data: string): string => {
  return new Intl.DateTimeFormat("pt-BR").format(new Date(data));
};

const formatDate = (date: string): string => {
  const dateFormatted = new Date(date);
  const day =
    dateFormatted.getDay() > 9
      ? dateFormatted.getDay()
      : `0${dateFormatted.getDay()}`;
  const month =
    dateFormatted.getMonth() + 1 > 9
      ? dateFormatted.getMonth() + 1
      : `0${dateFormatted.getMonth() + 1}`;
  const year = dateFormatted.getFullYear();

  return `${day}/${month}/${year}`;
};

export { formatValue, formatDate, formatValueRo, formatDateRo };
