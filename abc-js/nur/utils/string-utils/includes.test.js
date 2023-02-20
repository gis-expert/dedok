import { assertThrow, assertToBe } from "../../../../dependencies/asserts/assert.js";
import { describe, test } from "../../../../dependencies/tests/test.js";
import { includes } from "./includes.js";

describe('includesTests', () => {
  const text = 'hello my friend';
  test('строка содержит искомую строку', () => {
    assertToBe(includes(text, 'fri'), true);
    assertToBe(includes(text, ' my'), true);
    assertToBe(includes(text, ' '), true);
  });
  test('строка не содержит искомую строку', () => {
    assertToBe(includes(text, 'frI'), false);
    assertToBe(includes(text, ' my  '), false);
  });
  test('пустая строка как искомая возвращает true', () => {
    assertToBe(includes(text, ''), true);
  });
  test('передаем третий параметр и находим', () => {
    assertToBe(includes(text, ' ', 8), true);
    assertToBe(includes(text, 'fri', 9), true);
  });
  test('передаем третий параметр и не находим', () => {
    assertToBe(includes(text, ' ', 10), false);
    assertToBe(includes(text, 'fri', 11), false);
  });
  test('если третий параметр отрицательное число, то получаем исключение', () => {
    assertThrow(() => includes(text, 'i', -1), 'invalid index');
    assertThrow(() => includes(text, 'i', -5), 'invalid index');
  });
  test('если третий параметр не число, то выкидывается исключение', () => {
    assertThrow(() => includes(text, 'i', true), 'invalid index');
    assertThrow(() => includes(text, 'i', '5'), 'invalid index');
  });
  test('второй параметр должен быть только строкой, иначе исключение', () => {
    assertThrow(() => includes(text, true), 'invalid searchString string');
    assertThrow(() => includes(text, 5), 'invalid searchString string');
    assertThrow(() => includes(text, []), 'invalid searchString string');
  });
  test('первый параметр должен быть только строкой, иначе исключение', () => {
    assertThrow(() => includes(true, 't'), 'argument must be type of string');
  });
});
