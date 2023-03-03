import { assertThrow, assertToBe } from "../../../../dependencies/asserts/assert.js";
import { describe, test } from "../../../../dependencies/tests/test.js";
import { ceil } from "./ceil.js";

describe('ceilTests', () => {
  test('целые числа возвращаются как есть', () => {
    assertToBe(ceil(0), 0);
    assertToBe(ceil(1), 1);
    assertToBe(ceil(15), 15);
    assertToBe(ceil(10054), 10054);
    assertToBe(ceil(-0), -0);
    assertToBe(ceil(-1), -1);
    assertToBe(ceil(-15), -15);
    assertToBe(ceil(-10054), -10054);
  });
  // test('положительные дробные числа, возвращается целая часть', () => {
  //   assertToBe(ceil(0.1), 1);
  //   assertToBe(ceil(0.0000000001), 1);
  //   assertToBe(ceil(0.9999999), 1);
  //   assertToBe(ceil(1.1), 2);
  //   assertToBe(ceil(1.0000000001), 2);
  //   assertToBe(ceil(1.9999999), 2);
  //   assertToBe(ceil(10.1), 11);
  //   assertToBe(ceil(10.0000000001), 11);
  //   assertToBe(ceil(10.9999999), 11);
  //   assertToBe(ceil(12.1), 13);
  //   assertToBe(ceil(12.9999999), 13);
  //   assertToBe(ceil(125.561), 126);
  //   assertToBe(ceil(1200.538), 1201);
  //   assertToBe(ceil(120001.0000000001), 120002);
  //   assertToBe(ceil(120010.9999999), 120011);
  // });
  // test('отрицательные дробные числа, возвращается целая часть уменьшенная на 1', () => {
  //   assertToBe(ceil(-0.1), 0);
  //   assertToBe(ceil(-0.0000000001), 0);
  //   assertToBe(ceil(-0.9999999), 0);
  //   assertToBe(ceil(-1.1), -1);
  //   assertToBe(ceil(-1.0000000001), -1);
  //   assertToBe(ceil(-1.9999999), -1);
  //   assertToBe(ceil(-10.1), -10);
  //   assertToBe(ceil(-10.0000000001), -10);
  //   assertToBe(ceil(-10.9999999), -10);
  //   assertToBe(ceil(-12.1), -12);
  //   assertToBe(ceil(-12.9999999), -12);
  //   assertToBe(ceil(-125.561), -125);
  //   assertToBe(ceil(-1200.538), -1200);
  //   assertToBe(ceil(-120001.0000000001), -120001);
  //   assertToBe(ceil(-120010.9999999), -120010);
  // });
  // test('параметр обязателен и должен быть числом', () => {
  //   assertThrow(() => ceil(), 'value must be only number type');
  //   assertThrow(() => ceil(true), 'value must be only number type');
  //   assertThrow(() => ceil('5'), 'value must be only number type');
  // });
});
