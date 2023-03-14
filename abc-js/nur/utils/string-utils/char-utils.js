import { isInRange } from "../number-utils/is-in-range.js";
import { DIGIT_FINISH, DIGIT_START, ENG_CHAR_SHIFT, ENG_LOWER_FINISH, ENG_LOWER_START, ENG_UPPER_FINISH, ENG_UPPER_START, RUS_CHAR_SHIFT, RUS_LOWER_FINISH, RUS_LOWER_START, RUS_UPPER_FINISH, RUS_UPPER_START } from "./common.js";
import { len } from "./len.js";


function check(char) {
  if (typeof char !== 'string') throw Error('parameter is required and must be string type');
  if (len(char) !== 1) throw Error('char must be only one symbol char');
}

/** возвращает булевый ответ, является ли символ в нижнем регистре. */
export function isLower(char) {
  check(char);
  return (
    isInRange(char.charCodeAt(), ENG_LOWER_START, ENG_LOWER_FINISH)
    || isInRange(char.charCodeAt(), RUS_LOWER_START, RUS_LOWER_FINISH)
  );
}

/** возвращает булевый ответ, является ли символ в верхнем регистре. */
export function isUpper(char) {
  check(char);
  return (
    isInRange(char.charCodeAt(), ENG_UPPER_START, ENG_UPPER_FINISH)
    || isInRange(char.charCodeAt(), RUS_UPPER_START, RUS_UPPER_FINISH)
  );
}

/** переводит в символ в нижний регистр,
  если символ окажется символом верхнего регистра,
  иначе вернет старое значение. 'A' --> 'a' */
export function toLower(char) {
  if (isUpper(char)) return String.fromCharCode(char.charCodeAt() + ENG_CHAR_SHIFT);
  return char;
}

/** переводит в символ в верхний регистр,
  если символ окажется символом нижнего регистра,
  иначе вернет старое значение. 'a' --> 'A'*/
export function toUpper(char) {
  if (isLower(char)) return String.fromCharCode(char.charCodeAt() - ENG_CHAR_SHIFT);
  return char;
}

/** возвращает булево значения, является ли символ цифрой '1' --> true */
export function isDigit(char) {
  check(char);
  return isInRange(char.charCodeAt(), DIGIT_START, DIGIT_FINISH);
}

/** возвращает число из цифрового символа '1' --> 1 */
export function toDigit(char) {
  if (isDigit(char)) return char.charCodeAt() - DIGIT_START;
  throw Error('invalid char');
}

/** возвращает символ цифры из цифры 1 --> '1' */
export function fromDigit(digit) {
  if (typeof digit !== 'number') throw Error('parameter is required and must be number type');
  if (isInRange(digit, 0, 9)) return String.fromCharCode(DIGIT_START + digit);
  throw Error('invalid digit');
}
