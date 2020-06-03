export const formatMoney = (value: number | string) => {
  const formatter = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
  });
  try {
    return formatter.format(Number(value));
  } catch (error) {
    console.log(error);
    return 0;
  }
};
