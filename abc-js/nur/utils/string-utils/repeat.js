import { requiredString } from './common.js';

/** Возвращает text повторенный count раз. */
export function repeat(text, count = 1) {
  requiredString(text);
  let validatedCount = count ?? 1;
  if (validatedCount < 0) throw Error('repeat count must be positive value or zero');
  validatedCount = validatedCount % 1 === 0 ? validatedCount : validatedCount - (validatedCount % 1);
  let result = '';
  for (let i = 0; i < validatedCount; i += 1) {
    result += text;
  }
  return result;
}
