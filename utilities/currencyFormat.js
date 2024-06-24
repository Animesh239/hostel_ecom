// Rial currency format
export const inrCurrencyFormat = (price) => {
  return price ? new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(price) : null;
};
