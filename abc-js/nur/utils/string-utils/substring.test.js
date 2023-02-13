import { assertToBe, assertThrow } from '../../../../dependencies/asserts/assert.js';
import { describe, test } from '../../../../dependencies/tests/test.js';
import { substring } from './substring.js';
import { complexText } from './common.js';

describe('substringTests', () => {
  test('получить два первых символа', () => {
    assertToBe(substring(complexText, 0, 2), 'He');
  });
  test('получить с индекса 2 по 5 индекс', () => {
    assertToBe(substring(complexText, 2, 5), 'llo');
  });
  test('получить один символ', () => {
    assertToBe(substring(complexText, 1, 2), 'e');
  });
  test('получить строку включая последний символ, передаем последний индекс + 1', () => {
    assertToBe(substring('hello', 1, 5), 'ello');
  });
  test('последний индекс + 2, выкидывает исключение', () => {
    assertThrow(() => substring('hello', 1, 6), 'invalid end index');
  });
  test('если передать одинаковый индекс, то возвращается пустая строка', () => {
    assertToBe(substring(complexText, 5, 5), '');
  });
  test('если не передавать второй индекс, то возвращается до конца текста', () => {
    assertToBe(substring(complexText, 20), 'terminator');
  });
  test('если не передавать индексы, то возвращается копия строки', () => {
    assertToBe(substring(complexText), complexText);
  });
  test('индексы должны быть числовыми типами', () => {
    assertThrow(() => substring(complexText, true, 5), 'invalid start index');
    assertThrow(() => substring(complexText, '1', 5), 'invalid start index');
    assertThrow(() => substring(complexText, 0, true), 'invalid end index');
    assertThrow(() => substring(complexText, 5, '11'), 'invalid end index');
  });
  test('если второй индекс больше первого, то выкидывается исключение', () => {
    assertThrow(() => substring(complexText, 5, 2), 'invalid start and end index');
  });
  test('если первый индекс отрицательный, то он равен 0', () => {
    assertThrow(() => substring(complexText, -5, 2), 'invalid start index');
    assertThrow(() => substring(complexText, 2, -7), 'invalid end index');
    assertThrow(() => substring(complexText, -5, -2), 'invalid start index');
  });
  test('вызов с дробным индексом приводит к исключению', () => {
    assertThrow(() => substring(complexText, 1.7, 3), 'invalid start index');
    assertThrow(() => substring(complexText, 1, 3.1415), 'invalid end index');
  });
  test('если тип первого аргумента нe строка, то будет исключение', () => {
    assertThrow(() => substring(), 'argument must be type of string');
    assertThrow(() => substring(true, 2), 'argument must be type of string');
  });
});
