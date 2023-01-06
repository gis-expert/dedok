import { assertToBe, assertThrow } from '../../../../dependencies/asserts/assert.js';
import { describe, test } from '../../../../dependencies/tests/test.js';
import { repeat } from './repeat.js';
import { complexText } from './common.js';


describe('repeatTests', () => {
  test('повторено несколько раз - простой текст', () => {
    assertToBe(repeat('a', 3), 'aaa');
  });
  // test('повторено несколько раз - сложный текст', () => {
  //   assertToBe(repeat(complexText, 3), complexText + complexText + complexText);
  // });
  // test('повторено несколько раз - пустой текст', () => {
  //   assertToBe(repeat('', 3), '');
  // });
  // test('повторено один раз - простой текст', () => {
  //   assertToBe(repeat('a', 1), 'a');
  // });
  // test('повторено один раз - сложный текст', () => {
  //   assertToBe(repeat(complexText, 1), "Hello world!!! It's terminator");
  // });
  // test('повторено один раз - пустой текст', () => {
  //   assertToBe(repeat('', 1), "");
  // });
  // test('повторено ни один раз - простой текст', () => {
  //   assertToBe(repeat('a', 0), '');
  // });
  // test('повторено ни один раз - сложный текст', () => {
  //   assertToBe(repeat(complexText, 0), '');
  // });
  // test('повторено ни один раз - пустой текст', () => {
  //   assertToBe(repeat('', 0), '');
  // });
  // test('пропущенное число повторении возвращает ту же строку', () => {
  //   assertToBe(repeat('abc'), 'abc');
  // });
  // test('в дробном числе повторении, дробная часть отбрасывается', () => {
  //   assertToBe(repeat('abc', 3.85), 'abcabcabc');
  // });
  // test('второй параметр приводится в число', () => {
  //   assertToBe(repeat('a', '3'), 'aaa');
  // });
  // test('второй булевый параметр приводится в число', () => {
  //   assertToBe(repeat('a', false), '');
  // });
  // test('отрицательное число повторении вызывает исключение', () => {
  //   assertThrow(() => repeat('a', -1), 'repeat count must be positive value or zero');
  // });
  // test('пропущеный текст вызывает исключение', () => {
  //   assertThrow(() => repeat(), 'text must not be of undefined');
  // });
  // test('первый тип не строка вызывает исключение', () => {
  //   assertThrow(() => repeat(true), 'text must be of type string');
  // });
});
