import { requiredString } from './common.js';
import { parseInteger } from '../number-utils/parse-integer.js';

/** Возвращает text повторенный count раз. */
export function repeat(text, count = 1) {
  requiredString(text);
  let validatedCount = parseInteger(count);
  if (validatedCount < 0) throw Error('repeat count must be positive value or zero');
  if (isNaN(validatedCount)) return '';

  validatedCount = validatedCount % 1 === 0 ? validatedCount : validatedCount - (validatedCount % 1);
  let result = '';
  for (let i = 0; i < validatedCount; i += 1) {
    result += text;
  }
  return result;
}
