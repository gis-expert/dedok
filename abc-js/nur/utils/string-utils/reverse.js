import { requiredString } from './common.js';

/** Возвращает "развернутую" копию text */
export function reverse(text) {
  requiredString(text);

  let resultValue = '';
  for (let i = text.length - 1; i >= 0 ; i -= 1) {
    resultValue += text[i];
  }
  return resultValue;
}
