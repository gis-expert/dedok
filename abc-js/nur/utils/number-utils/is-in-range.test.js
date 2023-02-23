import { assertThrow, assertToBe } from "../../../../dependencies/asserts/assert.js";
import { describe, test } from "../../../../dependencies/tests/test.js";
import { isInRange } from "./is-in-range.js";

describe('isInRangeTests', () => {
  test('число внутри диапазона', () => {
    assertToBe(isInRange(1, 0, 5), true);
    assertToBe(isInRange(3, 0, 5), true);
    assertToBe(isInRange(0, -1, 1), true);
    assertToBe(isInRange(-2, -6, -1), true);
  });
  test('число равна началу диапазона', () => {
    assertToBe(isInRange(1, 1, 5), true);
    assertToBe(isInRange(3, 3, 5), true);
    assertToBe(isInRange(0, 0, 1), true);
    assertToBe(isInRange(-2, -2, -1), true);
  });
  test('число равна концу диапазона', () => {
    assertToBe(isInRange(5, 1, 5), true);
    assertToBe(isInRange(5, 3, 5), true);
    assertToBe(isInRange(1, 0, 1), true);
    assertToBe(isInRange(-1, -2, -1), true);
  });
  test('число ниже диапазона', () => {
    assertToBe(isInRange(0, 1, 5), false);
    assertToBe(isInRange(2, 3, 5), false);
    assertToBe(isInRange(-1, 0, 1), false);
    assertToBe(isInRange(-3, -2, -1), false);
  });
  test('число выше диапазона', () => {
    assertToBe(isInRange(7, 1, 5), false);
    assertToBe(isInRange(6, 3, 5), false);
    assertToBe(isInRange(2, 0, 1), false);
    assertToBe(isInRange(-3, -7, -4), false);
  });
  test('все параметры обязательны', () => {
    assertThrow(() => isInRange(1, 2), 'all parameter is required and must be number type');
    assertThrow(() => isInRange(1, undefined, 2), 'all parameter is required and must be number type');
    assertThrow(() => isInRange(undefined, 1, 2), 'all parameter is required and must be number type');
  });
  test('все параметры должный быть числами', () => {
    assertThrow(() => isInRange(1, 2, true), 'all parameter is required and must be number type');
    assertThrow(() => isInRange(1, 2, '3'), 'all parameter is required and must be number type');
    assertThrow(() => isInRange(1, true, 2), 'all parameter is required and must be number type');
    assertThrow(() => isInRange(1, '1', 2), 'all parameter is required and must be number type');
    assertThrow(() => isInRange(true, 1, 2), 'all parameter is required and must be number type');
    assertThrow(() => isInRange('1', 1, 2), 'all parameter is required and must be number type');
  });
})
