import { requiredString } from './common.js';
import { substring } from './substring.js';

/** Возвращает копию text увеличенный до длины maxLength
 * заполненный в начале символами fillString.
 * Допускается в fillString передавать строку из нескольких символов. */
export function padStart(text, maxLength, fillString = ' ') {
  return getPadString(text, maxLength, fillString, 'start');
}

/** Возвращает копию text увеличенный до длины maxLength
 * заполненный в конце символами fillString.
 * Допускается в fillString передавать строку из нескольких символов. */
export function padEnd(text, maxLength, fillString = ' ') {
  return text + getPadString(text, maxLength, fillString, 'end');
}

/** Возвращает копию text увеличенный до длины maxLength
 * заполненный в начале и конце символами fillString.
 * Допускается в fillString передавать строку из нескольких символов. */
export function pad(text, maxLength, fillString = ' ') {
  return text + getPadString(text, maxLength, fillString, 'start:end');
}

/** Вычисляет и возвращает строку pad. */
function getPadString(text, maxLength, fillString, place) {
  requiredString(text);
  const validatedFillString = requiredString(fillString);

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
