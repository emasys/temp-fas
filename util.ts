/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
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

export const getInvoiceTotal = (invoice: unknown) => {
  const value = Object.entries(invoice)
    .map((item) => {
      if (item[1]) {
        return item[1];
      }
    })
    .reduce((prev, curr) => Number(prev) + Number(curr), 0);
  return Number(value) - Number(value) * 0.02;
};

export const formatPhoneNumber = (phone: string) => {
  return phone?.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
};

export const truncateString = (string: string, len = 4) => {
  if (!string) return '';
  if (string.length <= len) return string;
  return string.substr(0, len) + '...';
};
