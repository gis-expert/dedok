import { DIGIT_FINISH, DIGIT_START, ENG_CHAR_SHIFT, ENG_LOWER_FINISH, ENG_LOWER_START, ENG_UPPER_FINISH, ENG_UPPER_START, RUS_CHAR_SHIFT, RUS_LOWER_FINISH, RUS_LOWER_START, RUS_UPPER_FINISH, RUS_UPPER_START } from "./common.js";

/** возвращает булевый ответ, является ли символ в нижнем регистре. */
export function isLower(char) {
}

/** возвращает булевый ответ, является ли символ в верхнем регистре. */
export function isUpper(char) {
}

/** переводит в символ в нижний регистр,
  если символ окажется символом верхнего регистра,
  иначе вернет старое значение. 'A' --> 'a' */
export function toLower(char) {
}

/** переводит в символ в верхний регистр,
  если символ окажется символом нижнего регистра,
  иначе вернет старое значение. 'a' --> 'A'*/
export function toUpper(char) {
}

/** возвращает булево значения, является ли символ цифрой '1' --> true */
export function isDigit(char) {
}

/** возвращает число из цифрового символа '1' --> 1 */
export function toDigit(char) {
}

/** возвращает символ цифры из цифры 1 --> '1' */
export function fromDigit(digit) {
}
