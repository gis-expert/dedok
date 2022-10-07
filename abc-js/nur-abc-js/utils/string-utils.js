export function repeat(text, count = 1) {
  if (typeof text === 'undefined') throw Error('text must not be of undefined');
  if (typeof text !== 'string') throw Error('text must be of type string');
  let validatedCount = count ?? 1;
  if (validatedCount < 0) throw Error('repeat count must be positive value or zero');
  validatedCount = validatedCount % 1 === 0 ? validatedCount : validatedCount - (validatedCount % 1);
  let result = '';
  for (let i = 0; i < validatedCount; i += 1) {
    result += text;
  }
  return result;
}
