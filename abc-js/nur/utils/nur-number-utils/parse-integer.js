/** Возвращает целое числовое значение переданного аргумента value. */
export function parseInteger(value) {
  if (Array.isArray(value)) return parseInt(value);
  if (typeof value === 'boolean') return value === true ? 1 : 0;
  if (typeof value === 'string') return parseInt(value);
  if (typeof value === 'number') return parseInt(value);
  return NaN;
}
