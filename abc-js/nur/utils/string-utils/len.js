export function len(text) {
  if (typeof text !== 'string') throw Error('text must be of type string');
  let i = 0;
  for (; text[i] !== undefined; i++) { }
  return i;
}
