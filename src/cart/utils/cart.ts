export const insertCommasToPrice = (price: number) => {
  let priceTmp = price;
  let priceStr = '';

  while (priceTmp > 1000) {
    priceTmp = priceTmp / 1000;
    priceStr = priceStr + ',000';
  }

  return String(priceTmp) + priceStr;
};
