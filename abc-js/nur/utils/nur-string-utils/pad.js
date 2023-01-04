import { requiredString, requiredToString } from './common.js';
import { substring } from './substring.js';

/** Возвращает копию text увеличенный до длины maxLength
 * заполненный в начале символами fillString.
 * Допускается в fillString передавать строку из нескольких символов. */
export function padStart(text, maxLength, fillString = ' ') {
  return getPadString(text, maxLength, fillString) + text;
}

/** Возвращает копию text увеличенный до длины maxLength
 * заполненный в конце символами fillString.
 * Допускается в fillString передавать строку из нескольких символов. */
export function padEnd(text, maxLength, fillString = ' ') {
  return text + getPadString(text, maxLength, fillString);
}

/** Вычисляет и возвращает строку pad. */
function getPadString(text, maxLength, fillString) {
  requiredString(text);
  const validatedFillString = requiredToString(fillString);

  let padString = '';
  let currentIndex = padString.length + text.length;
  while (currentIndex < maxLength) {
    const diff = maxLength - currentIndex;
    padString += diff >= validatedFillString.length
      ? validatedFillString
      : substring(validatedFillString, 0, diff);
    currentIndex = padString.length + text.length;
  }
  return padString;
}
