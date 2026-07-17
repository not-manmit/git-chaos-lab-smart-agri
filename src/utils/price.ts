export function calculateDiscountedTotal(pricePerKg: number, quantityKg: number, discountPercent: number) {
  const subtotal = pricePerKg * quantityKg;
  const discountAmount = subtotal * (discountPercent / 100);

  return subtotal + discountAmount;
}

export function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(value);
}
