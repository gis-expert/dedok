import { assertToBe, assertThrow } from '../../../../dependencies/asserts/assert.js';
import { describe, test } from '../../../../dependencies/tests/test.js';
import { toString } from './to-string.js';
import { complexText, ZERO_CODE_CHAR } from './common.js';

describe('toStringTests', () => {
  test('перевод строки в строку', () => {
    assertToBe(toString('any text'), 'any text');
  });
  test('перевод булевого значения true в строку', () => {
    assertToBe(toString(true), 'true');
  });
  test('перевод булевого значения false в строку', () => {
    assertToBe(toString(false), 'false');
  });
  test('перевод undefined в строку', () => {
    assertToBe(toString(undefined), 'undefined');
  });
  test('перевод null в строку', () => {
    assertToBe(toString(null), 'null');
  });
  test('перевод числа 3 в строку', () => {
    assertToBe(toString(3), '3');
  });
  test('перевод числа 0 в строку', () => {
    assertToBe(toString(0), '0');
  });
  test('перевод числа 1 в строку', () => {
    assertToBe(toString(1), '1');
  });
  test('перевод числа 10 в строку', () => {
    assertToBe(toString(10), '10');
  });
  test('перевод числа 100 в строку', () => {
    assertToBe(toString(100), '100');
  });
  test('перевод многозначного целого числа в строку', () => {
    assertToBe(toString(323459), '323459');
  });
  test('перевод отрицательного целого числа в строку', () => {
    assertToBe(toString(-3), '-3');
  });
  test('перевод минус ноль в строку', () => {
    assertToBe(toString(-0), '0');
  });
  test('перевод минус один в строку', () => {
    assertToBe(toString(-1), '-1');
  });
  test('перевод минус сто в строку', () => {
    assertToBe(toString(-100), '-100');
  });
  test('перевод положительного целого числа в строку', () => {
    assertToBe(toString(+3), '3');
  });
  test('перевод дробного числа в строку, раз', () => {
    assertToBe(toString(3.1415), '3.1415');
  });
  test('другие типы вызывают ошибку', () => {
    assertThrow(() => toString([2]), 'this type is not supported');
  });
});
