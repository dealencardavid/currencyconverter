export function formatDate(dateStr) {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(dateStr));
}

export function formatCurrency(value, cur) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: cur,
  }).format(value);
}
