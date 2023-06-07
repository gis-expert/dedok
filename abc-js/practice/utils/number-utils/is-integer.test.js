import { assertToBe, assertThrow } from '../../../../dependencies/asserts/assert.js';
import { describe, test } from '../../../../dependencies/tests/test.js';
import { isInteger } from './is-integer.js';

describe('isInteger', () => {
  test('число является целым', () => {
    assertToBe(isInteger(5555), true);
    assertToBe(isInteger(1), true);
    assertToBe(isInteger(1.00), true);
    assertToBe(isInteger(0), true);
    assertToBe(isInteger(-0), true);
    assertToBe(isInteger(-1), true);
    assertToBe(isInteger(-555), true);
  });

  test('число не является целым числом', () => {
    assertToBe(isInteger(55.55), false);
    assertToBe(isInteger(1.00001), false);
    assertToBe(isInteger(0.000000000001), false);
    assertToBe(isInteger(0.999999999999), false);
    assertToBe(isInteger(-1.00001), false);
  });
  
  test('число должно быть только числовым типом', () => {
    assertThrow(() => isInteger('1'), 'value must be only number type');
    assertThrow(() => isInteger(true), 'value must be only number type');
  });
});
