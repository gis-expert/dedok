import { assertToBe, assertThrow } from '../../../../dependencies/asserts/assert.js';
import { describe, test } from '../../../../dependencies/tests/test.js';
import { toString } from './to-string.js';

describe('toStringTests', () => {
  test('перевод строки в строку', () => {
    assertToBe(toString('any text'), 'any text');
  });
  // test('перевод булевого значения true в строку', () => {
  //   assertToBe(toString(true), 'true');
  // });
  // test('перевод булевого значения false в строку', () => {
  //   assertToBe(toString(false), 'false');
  // });
  // test('перевод undefined в строку', () => {
  //   assertToBe(toString(undefined), 'undefined');
  // });
  // test('перевод null в строку', () => {
  //   assertToBe(toString(null), 'null');
  // });
  // test('перевод целого числа в строку', () => {
  //   assertToBe(toString(0), '0');
  //   assertToBe(toString(1), '1');
  //   assertToBe(toString(3), '3');
  //   assertToBe(toString(+3), '3');
  //   assertToBe(toString(10), '10');
  //   assertToBe(toString(100), '100');
  //   assertToBe(toString(323459), '323459');
  // });
  // test('перевод отрицательного целого числа в строку', () => {
  //   assertToBe(toString(-0), '0');
  //   assertToBe(toString(-1), '-1');
  //   assertToBe(toString(-3), '-3');
  //   assertToBe(toString(-10), '-10');
  //   assertToBe(toString(-100), '-100');
  //   assertToBe(toString(-323459), '-323459');
  // });
  // test('перевод дробного числа в строку, раз', () => {
  //   assertToBe(toString(0.00000001), '0.00000001');
  //   assertToBe(toString(-0.00000001), '-0.00000001');
  //   assertToBe(toString(1.99999999999), '1.99999999999');
  //   assertToBe(toString(+1.99999999999), '1.99999999999');
  //   assertToBe(toString(-1.99999999999), '-1.99999999999');
  //   assertToBe(toString(3.1415), '3.1415');
  //   assertToBe(toString(-3.1415), '-3.1415');
  // });
  // test('другие типы вызывают ошибку', () => {
  //   assertThrow(() => toString([2]), 'this type is not supported');
  //   assertThrow(() => toString({}), 'this type is not supported');
  //   assertThrow(() => toString(() => 1), 'this type is not supported');
  // });
});
