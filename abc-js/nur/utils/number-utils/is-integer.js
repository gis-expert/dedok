export function isInteger(value) {
  if (typeof value !== 'number') throw Error('value must be only number type');
  return value % 1 === 0;
}
