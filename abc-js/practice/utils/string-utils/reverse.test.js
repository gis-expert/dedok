import { assertToBe, assertThrow } from '../../../../dependencies/asserts/assert.js';
import { describe, test } from '../../../../dependencies/tests/test.js';
import { reverse } from './reverse.js';

describe('reverseTests', () => {
  test('возвращается перевернутая копия строки', () => {
    assertToBe(reverse('Hmmm'), 'mmmH');
  });
  // test('возвращается перевернутая копия строки 2', () => {
  //   assertToBe(reverse('  Hmmm.'), '.mmmH  ');
  // });
  // test('пустая строка остается пустой', () => {
  //   assertToBe(reverse(''), '');
  // });
  // test('один символ остается одним символом', () => {
  //   assertToBe(reverse(' '), ' ');
  // });
  // test('если не передать первый аргумент, то будет исключение', () => {
  //   assertThrow(() => reverse(), 'text must not be of undefined');
  // });
  // test('если тип первого аргумента на строка, то будет исключение', () => {
  //   assertThrow(() => reverse(true), 'text must be of type string');
  // });
});
