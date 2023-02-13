import { assertToBe, assertThrow } from '../../../../dependencies/asserts/assert.js';
import { describe, test } from '../../../../dependencies/tests/test.js';
import { repeat } from './repeat.js';
import { complexText } from './common.js';


describe('repeatTests', () => {
  test('повторено несколько раз - простой текст', () => {
    assertToBe(repeat('a', 3), 'aaa');
  });
  test('повторено несколько раз - сложный текст', () => {
    assertToBe(repeat(complexText, 3), complexText + complexText + complexText);
  });
  test('повторено несколько раз - пустой текст', () => {
    assertToBe(repeat('', 3), '');
  });
  test('повторено один раз - простой текст', () => {
    assertToBe(repeat('a', 1), 'a');
  });
  test('повторено один раз - сложный текст', () => {
    assertToBe(repeat(complexText, 1), "Hello world!!! It's terminator");
  });
  test('повторено один раз - пустой текст', () => {
    assertToBe(repeat('', 1), "");
  });
  test('повторено ни один раз - простой текст', () => {
    assertToBe(repeat('a', 0), '');
  });
  test('повторено ни один раз - сложный текст', () => {
    assertToBe(repeat(complexText, 0), '');
  });
  test('повторено ни один раз - пустой текст', () => {
    assertToBe(repeat('', 0), '');
  });
  test('в дробном числе повторении, дробная часть отбрасывается', () => {
    assertToBe(repeat('abc', 3.85), 'abcabcabc');
  });
  test('второй параметр приводится в число', () => {
    assertToBe(repeat('a', '3'), 'aaa');
  });
  test('второй булевый параметр приводится в число', () => {
    assertToBe(repeat('a', false), '');
  });
  test('второй параметр не передан, возвращает ту же строку', () => {
    assertToBe(repeat('abc'), 'abc');
  });
  test('второй параметр не числовой, параметр переводится в число', () => {
    assertToBe(repeat('abc', true), 'abc');
    assertToBe(repeat('abc', false), '');
    assertToBe(repeat('abc', '2th'), 'abcabc');
    assertToBe(repeat('abc', '3.1415 - pi'), 'abcabcabc');
    assertToBe(repeat('abc', [2, 5, 8]), 'abcabc');
  });
  test('второй параметр не числовой, параметр нельзя сконвертировать в число, возвращается пустая строка', () => {
    assertToBe(repeat('abc', 'ss'), '');
    assertToBe(repeat('abc', 's2'), '');
    assertToBe(repeat('abc', []), '');
    assertToBe(repeat('abc', {2: 2}), '');
  });

  test('отрицательное число повторении вызывает исключение', () => {
    assertThrow(() => repeat('a', -1), 'repeat count must be positive value or zero');
  });
  test('текст не строкового типа вызывает исключение', () => {
    assertThrow(() => repeat(), 'argument must be type of string');
    assertThrow(() => repeat(1), 'argument must be type of string');
    assertThrow(() => repeat(true), 'argument must be type of string');
  });
});
