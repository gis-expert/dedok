import { requiredString } from './common.js';
import { indexOf } from './index-of.js';
import { substring } from './substring.js';

const TRIM_SYMBOLS = ' \n\t\v'; 

/** Возвращает копию строки с удаленными символами со строки trimSymbols в начале строки.
 * По умолчанию удаляются символы пробела, табуляции и перевода строки.*/
export function trimStart(text, trimSymbols=TRIM_SYMBOLS) {
  requiredString(text, 'argument text');
  requiredString(trimSymbols, 'argument trimSymbols');

  let i = 0;
  for (; i < text.length; i += 1) {
    if (indexOf(trimSymbols, text[i]) === -1) break; 
  }
  return substring(text, i);
}

/** Возвращает копию строки с удаленными символами со строки trimSymbols в конце строки.
 * По умолчанию удаляются символы пробела, табуляции и перевода строки.*/
export function trimEnd(text, trimSymbols=TRIM_SYMBOLS) {
  requiredString(text, 'argument text');
  requiredString(trimSymbols, 'argument trimSymbols');

  let i = text.length;
  for (; i !== 0; i -= 1) {
    if (indexOf(trimSymbols, text[i - 1]) === -1) break; 
  }
  return substring(text, 0, i);
}

/** Возвращает копию строки с удаленными символами
 * со строки trimSymbols в начале и конце строки.
 * По умолчанию удаляются символы пробела, табуляции и перевода строки.*/
export function trim(text, trimSymbols=TRIM_SYMBOLS) {
  let result = trimStart(text, trimSymbols);
  return trimEnd(result, trimSymbols);
}
