import { isEqual } from "./compare.js";
import { substring } from "./substring.js";
import { len } from "./len.js";
import { requiredString } from "./common.js";

/** Возвращает булевый результат заканчивается ли text на search.
  endPosition - необязательный параметр позволяющий указать позицию
  (не индекс) символа который необходимо считать за конец текста.*/
export function endsWith(text, search, endPosition) {
  return startsEndsWith(text, search, endPosition, 'end');
}

/** Возвращает булевый результат начинается ли text на search.
  startPosition - необязательный параметр позволяющий указать позицию
  (не индекс) символа который необходимо считать за начало текста.*/
export function startsWith(text, search, startPosition) {
  return startsEndsWith(text, search, startPosition, 'start');
}


function startsEndsWith(text, search, position, startOrEnd) {
  requiredString(text, 'argument text');
  requiredString(search, 'argument search');

  const textLength = len(text);

  // position=undefined пропускаем как число, так как ловим это ниже
  if (typeof (position ?? 0) !== 'number') throw Error('invalid position type');
  if ((position ?? 0) > textLength || (position ?? 0) < 0) throw Error('invalid position');

  let startPosition, endPosition;
  if (startOrEnd === 'start') {
    startPosition = position ?? 0;
    endPosition = startPosition + len(search);
  } else {
    endPosition = position ?? textLength;
    startPosition = endPosition - len(search);
  }

  if (startPosition < 0 || endPosition > textLength)
    throw Error(`invalid ${startOrEnd} position or search length`)

  const lastChars = substring(text, startPosition, endPosition);
  return isEqual(lastChars, search);
}
