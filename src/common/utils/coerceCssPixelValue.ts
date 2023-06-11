export function coerceCssPixelValue<T>(value: T | number): string | T {
  return typeof value === "number" ? `${value}px` : value;
}
