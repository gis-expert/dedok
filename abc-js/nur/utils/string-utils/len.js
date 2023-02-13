export function len(text) {
  if (typeof text !== 'string') throw Error('argument must be type of string');
  let i = 0;
  for (; text[i] !== undefined; i++) { }
  return i;
}
