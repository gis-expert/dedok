import { assertToBe, assertThrow } from '../../../../dependencies/asserts/assert.js';
import { describe, test } from '../../../../dependencies/tests/test.js';
import { repeat } from './repeat.js';
import { complexText } from './common.js';


describe('repeatTests', () => {
  test('повторено несколько раз - простой текст', () => {
    assertToBe(repeat('a', 3), 'aaa');
    assertToBe(repeat('abc', 2), 'abcabc');
  });
  test('повторено несколько раз - сложный текст', () => {
    assertToBe(repeat(complexText, 3), complexText + complexText + complexText);
  });
  test('повторено несколько раз - пустой текст', () => {
    assertToBe(repeat('', 3), '');
    assertToBe(repeat('', 1), '');
  });
  test('повторено один раз - простой текст', () => {
    assertToBe(repeat('a', 1), 'a');
    assertToBe(repeat('abc', 1), 'abc');
  });
  test('повторено один раз - сложный текст', () => {
    assertToBe(repeat(complexText, 1), "Hello world!!! It's terminator");
  });
  test('второй параметр не передан, возвращает ту же строку', () => {
    assertToBe(repeat('a'), 'a');
    assertToBe(repeat('abc'), 'abc');
  });
  test('повторено ни один раз - возвращается пустой текст', () => {
    assertToBe(repeat('a', 0), '');
    assertToBe(repeat(complexText, 0), '');
    assertToBe(repeat('', 0), '');
  });
  test('количество должно быть только целым и положительным числом', () => {
    assertThrow(() => repeat('abc', 3.85), 'invalid count');
    assertThrow(() => repeat('abc', 0.25), 'invalid count');
    assertThrow(() => repeat('abc', -1), 'invalid count');
  });
  test('второй параметр не числовой, вызывается исключение', () => {
    assertThrow(() => repeat('abc', true), 'invalid count');
    assertThrow(() => repeat('abc', false), 'invalid count');
    assertThrow(() => repeat('abc', '2'), 'invalid count');
    assertThrow(() => repeat('abc', '3.1415 - pi'), 'invalid count');
    assertThrow(() => repeat('abc', [2, 5, 8]), 'invalid count');
  });
  test('текст не строкового типа вызывает исключение', () => {
    assertThrow(() => repeat(), 'argument must be type of string');
    assertThrow(() => repeat(1), 'argument must be type of string');
    assertThrow(() => repeat(true), 'argument must be type of string');
  });
});
