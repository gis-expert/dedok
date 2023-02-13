import { assertToBe, assertThrow } from '../../../../dependencies/asserts/assert.js';
import { describe, test } from '../../../../dependencies/tests/test.js';
import { reverse } from './reverse.js';

describe('reverseTests', () => {
  test('возвращается перевернутая копия строки', () => {
    assertToBe(reverse('Hmmm'), 'mmmH');
  });
  test('возвращается перевернутая версия со спецсимволами', () => {
    assertToBe(reverse('\tHmmm\n'), '\nmmmH\t');
  });
  test('возвращается перевернутая копия строки и проблеы с точкой не удаляются', () => {
    assertToBe(reverse('  Hmmm.'), '.mmmH  ');
  });
  test('пустая строка остается пустой', () => {
    assertToBe(reverse(''), '');
  });
  test('один символ остается одним символом', () => {
    assertToBe(reverse(' '), ' ');
  });
  test('если не передать первый аргумент, то будет исключение', () => {
    assertThrow(() => reverse(), 'argument must be type of string');
  });
  test('если тип первого аргумента на строка, то будет исключение', () => {
    assertThrow(() => reverse(true), 'argument must be type of string');
    assertThrow(() => reverse(1), 'argument must be type of string');
    assertThrow(() => reverse([]), 'argument must be type of string');
    assertThrow(() => reverse(null), 'argument must be type of string');
  });
});
