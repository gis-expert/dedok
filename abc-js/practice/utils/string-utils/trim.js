import { requiredString } from './common.js';
import { indexOf } from './index-of.js';
import { substring } from './substring.js';

const TRIM_SYMBOLS = ' \n\t\v'; 

/** Возвращает копию строки с удаленными пробелами в начале строки.
 * Удалению подлежат все символы в константе TRIM_SYMBOLS.*/
export function trimLeft(text) {
  requiredString(text);
  let i = 0;
  for (; i < text.length; i += 1) {
    if (indexOf(TRIM_SYMBOLS, text[i]) === -1) break; 
  }
  return substring(text, i);
}

/** Возвращает копию строки с удаленными пробелами в конце строки.
 * Удалению подлежат все символы в константе TRIM_SYMBOLS.*/
export function trimRight(text) {
  requiredString(text);
  let i = text.length;
  for (; i !== 0; i -= 1) {
    if (indexOf(TRIM_SYMBOLS, text[i - 1]) === -1) break; 
  }
  return substring(text, 0, i);
}

/** Возвращает копию строки с удаленными пробелами в начале и конце строки.
 * Удалению подлежат все символы в константе TRIM_SYMBOLS.*/
export function trim(text) {
  let result = trimLeft(text);
  return trimRight(result);
}
