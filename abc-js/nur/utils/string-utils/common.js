import { toString } from './to-string.js';

/** для получения цифры строки по его индексу */
export const DIGITS = '0123456789';
export const SIGNS = '+-';
export const FLOAT_DELIMITER = '.';

// --------------- for tests ------------------

export const complexText = "Hello world!!! It's terminator";

export const ZERO_CODE_CHAR = String.fromCharCode(0);

/** Возвращает text с приведением в строковый тип предварительно
 * проверив что text объявлен. */
export function requiredToString(text, attrName='text') {
  if (text === undefined) requiredString(text, attrName);
  return toString(text);
}

/** Если text не объявлен или имеет не строковый тип,
 * то выкинет исключение. */
export function requiredString(text, attrName='text') {
  if (typeof text === 'undefined') throw Error(`${attrName} must not be of undefined`);
  if (typeof text !== 'string') throw Error(`${attrName} must be of type string`);
}
