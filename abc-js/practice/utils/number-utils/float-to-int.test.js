import { assertThrow, assertToBe } from "../../../../dependencies/asserts/assert.js";
import { describe, test } from "../../../../dependencies/tests/test.js";
import { floatToInt } from "./float-to-int.js";

describe('floatToIntTests', () => {
  test('положительные целые числа возвращаются как есть', () => {
    assertToBe(floatToInt(0), 0);
    assertToBe(floatToInt(1), 1);
    assertToBe(floatToInt(10), 10);
    assertToBe(floatToInt(100), 100);
    assertToBe(floatToInt(1000), 1000);
    assertToBe(floatToInt(3), 3);
    assertToBe(floatToInt(34), 34);
    assertToBe(floatToInt(347), 347);
    assertToBe(floatToInt(43223459), 43223459);
  });
  // test('отрицательные целые числа возвращаются как есть', () => {
  //   assertToBe(floatToInt(-0), -0);
  //   assertToBe(floatToInt(-1), -1);
  //   assertToBe(floatToInt(-10), -10);
  //   assertToBe(floatToInt(-100), -100);
  //   assertToBe(floatToInt(-1000), -1000);
  //   assertToBe(floatToInt(-3), -3);
  //   assertToBe(floatToInt(-34), -34);
  //   assertToBe(floatToInt(-347), -347);
  //   assertToBe(floatToInt(-43223459), -43223459);
  // });
  // test('положительные дробные числа, возвращается целая часть', () => {
  //   assertToBe(floatToInt(1.1), 1);
  //   assertToBe(floatToInt(3.1415), 3);
  //   assertToBe(floatToInt(3.9415), 3);
  //   assertToBe(floatToInt(0.1), 0);
  //   assertToBe(floatToInt(0.00001), 0);
  //   assertToBe(floatToInt(0.99999), 0);
  //   assertToBe(floatToInt(1.0000000001), 1);
  //   assertToBe(floatToInt(9.999), 9);
  //   assertToBe(floatToInt(10.001), 10);
  //   assertToBe(floatToInt(20.001), 20);
  //   assertToBe(floatToInt(99.99999), 99);
  //   assertToBe(floatToInt(100.001), 100);
  //   assertToBe(floatToInt(12300.001), 12300);
  //   assertToBe(floatToInt(300.001), 300);
  //   assertToBe(floatToInt(1000.001), 1000);
  //   assertToBe(floatToInt(12.345), 12);
  //   assertToBe(floatToInt(456.456), 456);
  //   assertToBe(floatToInt(4506.456), 4506);
  //   assertToBe(floatToInt(4056.456), 4056);
  //   assertToBe(floatToInt(50060.456), 50060);
  //   assertToBe(floatToInt(600060.456), 600060);
  //   assertToBe(floatToInt(444.444), 444);
  //   assertToBe(floatToInt(254366.8237), 254366);
  //   assertToBe(floatToInt(1 / 3), 0);
  //   assertToBe(floatToInt(2 / 3), 0);
  //   assertToBe(floatToInt(4 / 3), 1);
  //   assertToBe(floatToInt(7 / 3), 2);
  //   assertToBe(floatToInt(8 / 3), 2);
  //   assertToBe(floatToInt(Math.PI), 3);
  //   assertToBe(floatToInt(1 / 7), 0);
  //   assertToBe(floatToInt(8 / 7), 1);
  //   assertToBe(floatToInt(9 / 7), 1);
  //   assertToBe(floatToInt(13 / 7), 1);
  //   assertToBe(floatToInt(19 / 7), 2);
  // });
  // test('отрицательные дробные числа, возвращается целая часть', () => {
  //   assertToBe(floatToInt(-1.1), -1);
  //   assertToBe(floatToInt(-3.1415), -3);
  //   assertToBe(floatToInt(-3.9415), -3);
  //   assertToBe(floatToInt(-0.1), -0);
  //   assertToBe(floatToInt(-0.00001), -0);
  //   assertToBe(floatToInt(-0.99999), -0);
  //   assertToBe(floatToInt(-1.0000000001), -1);
  //   assertToBe(floatToInt(-9.999), -9);
  //   assertToBe(floatToInt(-10.001), -10);
  //   assertToBe(floatToInt(-20.001), -20);
  //   assertToBe(floatToInt(-99.99999), -99);
  //   assertToBe(floatToInt(-100.001), -100);
  //   assertToBe(floatToInt(-12300.001), -12300);
  //   assertToBe(floatToInt(-300.001), -300);
  //   assertToBe(floatToInt(-1000.001), -1000);
  //   assertToBe(floatToInt(-12.345), -12);
  //   assertToBe(floatToInt(-456.456), -456);
  //   assertToBe(floatToInt(-4506.456), -4506);
  //   assertToBe(floatToInt(-4056.456), -4056);
  //   assertToBe(floatToInt(-50060.456), -50060);
  //   assertToBe(floatToInt(-600060.456), -600060);
  //   assertToBe(floatToInt(-444.444), -444);
  //   assertToBe(floatToInt(-254366.8237), -254366);
  //   assertToBe(floatToInt(-1 / 3), 0);
  //   assertToBe(floatToInt(-2 / 3), 0);
  //   assertToBe(floatToInt(-4 / 3), -1);
  //   assertToBe(floatToInt(-7 / 3), -2);
  //   assertToBe(floatToInt(-8 / 3), -2);
  // });
  // test('дроби в итерации', () => {
  //   for (let div = 0; div <= 30; div++ ) {
  //     for (let divider = 1; divider <=15; divider++) {
  //       const floatValue = div / divider;
  //       const expect = parseInt(floatValue);
  //       assertToBe(floatToInt(floatValue), expect);
  //       assertToBe(floatToInt(-floatValue), -expect);
  //     }
  //   }
  // });
  // test('параметр обязателен и только числового типа', () => {
  //   const errMsg = 'value must be only number type';
  //   assertThrow(() => floatToInt(), errMsg);
  //   assertThrow(() => floatToInt(true), errMsg);
  //   assertThrow(() => floatToInt('2'), errMsg);
  //   assertThrow(() => floatToInt([1]), errMsg);
  // });
});
