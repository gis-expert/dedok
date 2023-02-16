import { requiredString } from './common.js';
import { indexOf } from './index-of.js';
import { len } from './len.js';
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
  return getPadString(text, maxLength, fillString, 'end');
}

/** Возвращает копию text увеличенный до длины maxLength
 * заполненный в начале и конце символами fillString.
 * Допускается в fillString передавать строку из нескольких символов. */
export function pad(text, maxLength, fillString = ' ') {
  return getPadString(text, maxLength, fillString, 'start:end');
}

/** Вычисляет и возвращает строку pad. */
function getPadString(text, maxLength, fillString, place) {
  requiredString(text, 'argument text');
  requiredString(fillString, 'argument fillString');
  maxLength = maxLength ?? len(text);
  if (typeof maxLength !== 'number') throw Error('invalid type of maxLength');

  const placeStart = indexOf(place, 'start') !== -1;
  const placeEnd = indexOf(place, 'end') !== -1;
  let startValue = '';
  let endValue = '';
  let startLength = 0;
  let endLength = 0;
  const textLength = len(text);
  const isFilled = () => textLength + startLength + endLength >= maxLength;

  let currFillStringIndex = 0;
  while (true) {
    if (isFilled()) break;
    if (placeStart) {
      startValue += fillString[currFillStringIndex];
      startLength += 1;
    }
    if (isFilled()) break;
    if (placeEnd) {
      endValue += fillString[currFillStringIndex];
      endLength += 1;
    }
    currFillStringIndex =
      currFillStringIndex === fillString.length - 1
        ? 0
        : currFillStringIndex + 1
  }
  return startValue + text + endValue;
}
