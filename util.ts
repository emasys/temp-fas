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

export const capitalize = (word: string) => {
  return word?.replace(/\w/, (c) => c.toUpperCase());
};

export const getInvoiceTotal = (invoice: any) => {
  const value = Object.entries(invoice).map((item) => {
    if (item[1]) {
      return item[1]
    }
  }).reduce((prev, curr) => Number(prev) + Number(curr), 0);
  return Number(value) - (Number(value) * 0.02);
};
