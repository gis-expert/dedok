import { assertThrow, assertToBe } from "../../../../dependencies/asserts/assert.js";
import { describe, test } from "../../../../dependencies/tests/test.js";
import { complexText } from "./common.js";
import { len } from "./len.js";
import { slice } from "./slice.js";

describe('sliceTests', () => {
  test('получить два первых символа', () => {
    assertToBe(slice(complexText, 0, 2), 'He');
  });
  test('получить с индекса 2 по 5 индекс', () => {
    assertToBe(slice(complexText, 2, 5), 'llo');
  });
  test('получить один символ', () => {
    assertToBe(slice(complexText, 1, 2), 'e');
  });
  test('получить строку включая последний символ, передаем последний индекс + 1', () => {
    assertToBe(slice('hello', 1, 5), 'ello');
  });
  test('последний индекс + 2, выкидывает исключение', () => {
    assertThrow(() => slice('hello', 1, 6), 'invalid end index');
  });
  test('если передать одинаковый индекс, то возвращается пустая строка', () => {
    assertToBe(slice(complexText, 5, 5), '');
  });
  test('если не передавать второй индекс, то возвращается до конца текста', () => {
    assertToBe(slice(complexText, 20), 'terminator');
  });
  test('если не передавать индексы, то возвращается копия строки', () => {
    assertToBe(slice(complexText), complexText);
  });
  test('первый индекс равен нулю и рассматривается как положительный', () => {
    assertToBe(slice(complexText, 0), complexText);
  });
  test('отрицательные индексы отчитываются с конца строки', () => {
    assertToBe(slice(complexText, -5, -2), 'nat');
    assertToBe(slice(complexText, -10, -2), 'terminat');
  });
  test('первый индекс отрицательный, второй не передан', () => {
    assertToBe(slice(complexText, -5), 'nator');
    assertToBe(slice(complexText, -10), 'terminator');
  });
  test('первый индекс равен отрицательной длине, второй пропущен', () => {
    assertToBe(slice('hello', -5), 'hello');
    assertToBe(slice(complexText, len(complexText) * -1), complexText);
  });
  test('первый индекс отрицательный, но больше длины', () => {
    assertThrow(() => slice('hello', -6), 'invalid start index');
  });
  test('нельзя передавать одновременно отрицательный и положительные индексы', () => {
    assertThrow(() => slice('hello', -4, 1), 'indexes must be only positive or negative');
    assertThrow(() => slice('hello', 1, -4), 'indexes must be only positive or negative');
    assertThrow(() => slice('hello', -4, 0), 'indexes must be only positive or negative');
    assertThrow(() => slice('hello', 0, -4), 'indexes must be only positive or negative');
  });
  test('индексы должны быть числовыми типами', () => {
    assertThrow(() => slice(complexText, true, 5), 'invalid start index');
    assertThrow(() => slice(complexText, '1', 5), 'invalid start index');
    assertThrow(() => slice(complexText, 0, true), 'invalid end index');
    assertThrow(() => slice(complexText, 5, '11'), 'invalid end index');
  });
  test('если второй индекс больше первого, то выкидывается исключение', () => {
    assertThrow(() => slice(complexText, 5, 2), 'invalid start and end index');
    assertThrow(() => slice(complexText, -2, -5), 'invalid start and end index');
  });
  test('вызов с дробным индексом приводит к исключению', () => {
    assertThrow(() => slice(complexText, 1.7, 3), 'invalid start index');
    assertThrow(() => slice(complexText, 1, 3.1415), 'invalid end index');
  });
  test('если тип первого аргумента нe строка, то будет исключение', () => {
    assertThrow(() => slice(), 'argument must be type of string');
    assertThrow(() => slice(true, 2), 'argument must be type of string');
  });
})
