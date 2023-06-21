export function formatPrice(price: number) {
  if (price === undefined) {
    return '';
  }

  // FIXME: 나라별로 대응가능하도록 변경해야함
  return price.toLocaleString('ko-KR');
}
