export function formatDate(item: string, options: { withTime?: boolean }) {
  const date = new Date(item);

  if (isNaN(date.getTime())) {
    return "Invalid Date";
  }

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  const formattedDate = `${day}-${month}-${year}`;
  const formattedTime = `${hours}:${minutes}:${seconds}`;

  if (options.withTime) {
    return `${formattedDate} - ${formattedTime}`;
  } else {
    return formattedDate;
  }
}

export function formatCurrency(amount: number | null | undefined) {
  if (amount === null || amount === undefined) {
    amount = 0;
  }

  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(amount);
}
