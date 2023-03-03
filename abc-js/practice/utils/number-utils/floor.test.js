import { assertThrow, assertToBe } from "../../../../dependencies/asserts/assert.js";
import { describe, test } from "../../../../dependencies/tests/test.js";
import { floor } from "./floor.js";

describe('floorTests', () => {
  test('целые числа возвращаются как есть', () => {
    assertToBe(floor(0), 0);
    assertToBe(floor(1), 1);
    assertToBe(floor(15), 15);
    assertToBe(floor(10054), 10054);
    assertToBe(floor(-0), -0);
    assertToBe(floor(-1), -1);
    assertToBe(floor(-15), -15);
    assertToBe(floor(-10054), -10054);
  });
  // test('положительные дробные числа, возвращается целая часть', () => {
  //   assertToBe(floor(0.1), 0);
  //   assertToBe(floor(0.0000000001), 0);
  //   assertToBe(floor(0.9999999), 0);
  //   assertToBe(floor(1.1), 1);
  //   assertToBe(floor(1.0000000001), 1);
  //   assertToBe(floor(1.9999999), 1);
  //   assertToBe(floor(10.1), 10);
  //   assertToBe(floor(10.0000000001), 10);
  //   assertToBe(floor(10.9999999), 10);
  //   assertToBe(floor(12.1), 12);
  //   assertToBe(floor(12.9999999), 12);
  //   assertToBe(floor(125.561), 125);
  //   assertToBe(floor(1200.538), 1200);
  //   assertToBe(floor(120001.0000000001), 120001);
  //   assertToBe(floor(120010.9999999), 120010);
  // });
  // test('отрицательные дробные числа, возвращается целая часть уменьшенная на 1', () => {
  //   assertToBe(floor(-0.1), -1);
  //   assertToBe(floor(-0.0000000001), -1);
  //   assertToBe(floor(-0.9999999), -1);
  //   assertToBe(floor(-1.1), -2);
  //   assertToBe(floor(-1.0000000001), -2);
  //   assertToBe(floor(-1.9999999), -2);
  //   assertToBe(floor(-10.1), -11);
  //   assertToBe(floor(-10.0000000001), -11);
  //   assertToBe(floor(-10.9999999), -11);
  //   assertToBe(floor(-12.1), -13);
  //   assertToBe(floor(-12.9999999), -13);
  //   assertToBe(floor(-125.561), -126);
  //   assertToBe(floor(-1200.538), -1201);
  //   assertToBe(floor(-120001.0000000001), -120002);
  //   assertToBe(floor(-120010.9999999), -120011);
  // });
  // test('параметр обязателен и должен быть числом', () => {
  //   assertThrow(() => floor(), 'value must be only number type');
  //   assertThrow(() => floor(true), 'value must be only number type');
  //   assertThrow(() => floor('5'), 'value must be only number type');
  // });
});
