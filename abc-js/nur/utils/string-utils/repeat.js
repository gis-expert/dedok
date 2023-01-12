import { requiredString } from './common.js';
import { parseInteger } from '../number-utils/parse-integer.js';

/** Возвращает text повторенный count раз. */
export function repeat(text, count = 1) {
  requiredString(text);
  let parsedCount = parseInteger(count);
  if (parsedCount < 0) throw Error('repeat count must be positive value or zero');
  if (isNaN(parsedCount)) return '';

  let result = '';
  for (let i = 0; i < parsedCount; i += 1) {
    result += text;
  }
  return result;
}
