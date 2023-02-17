import { isFloat } from '../number-utils/is-float.js';
import { requiredString } from './common.js';

/** Возвращает text повторенный count раз. */
export function repeat(text, count = 1) {
  requiredString(text);
  let validCount = count ?? 1;
  if (typeof count !== 'number' || isFloat(count) || count < 0)
    throw Error('invalid count');

  let result = '';
  for (let i = 0; i < validCount; i += 1) {
    result += text;
  }
  return result;
}
