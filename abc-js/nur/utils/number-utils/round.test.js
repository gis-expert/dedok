import { assertToBe } from "../../../../dependencies/asserts/assert.js";
import { describe, test } from "../../../../dependencies/tests/test.js";
import { round } from "./round.js";

describe('roundTests', () => {
  test('целые числа не округляются', () => {
    assertToBe(round(0), 0);
    assertToBe(round(1), 1);
    assertToBe(round(5), 5);
    assertToBe(round(35), 35);
    assertToBe(round(-635), -635);
  });
  test('округление по умолчанию до целого числа', () => {
    assertToBe(round(0.1), 0);
    assertToBe(round(0.4999), 0);
    assertToBe(round(0.5), 1);
    assertToBe(round(0.5001), 1);
    assertToBe(round(0.75), 1);
    assertToBe(round(0.9999999), 1);
    assertToBe(round(1.1), 1);
    assertToBe(round(1.4999), 1);
    assertToBe(round(1.5), 2);
    assertToBe(round(1.75), 2);
    assertToBe(round(1.9999999), 2);
    assertToBe(round(1.4999), 1);
    assertToBe(round(1.5), 2);
    assertToBe(round(1.0000000001), 1);
    assertToBe(round(1.0999999), 1);
    assertToBe(round(1.9999999), 2);
    assertToBe(round(10.1), 10);
    assertToBe(round(10.5000000001), 11);
    assertToBe(round(10.9999999), 11);
    assertToBe(round(120001.0000000001), 120001);
    assertToBe(round(120001.50000000001), 120002);
    assertToBe(round(120010.9999999), 120011);
  });
  test('округление по умолчанию до отрицательного целого числа', () => {
    assertToBe(round(-0.1), 0);
    assertToBe(round(-0.4999), 0);
    assertToBe(round(-0.5), 0);
    assertToBe(round(-0.5001), -1);
    assertToBe(round(-0.75), -1);
    assertToBe(round(-0.9999999), -1);
    assertToBe(round(-1.1), -1);
    assertToBe(round(-1.4999), -1);
    assertToBe(round(-1.5), -1);
    assertToBe(round(-1.5001), -2);
    assertToBe(round(-1.75), -2);
    assertToBe(round(-1.9999999), -2);
    assertToBe(round(-1.0000000001), -1);
    assertToBe(round(-1.0999999), -1);
    assertToBe(round(-1.9999999), -2);
    assertToBe(round(-10.1), -10);
    assertToBe(round(-10.5), -10);
    assertToBe(round(-10.5000000001), -11);
    assertToBe(round(-10.9999999), -11);
    assertToBe(round(-120001.0000000001), -120001);
    assertToBe(round(-120001.50000000001), -120002);
    assertToBe(round(-120010.9999999), -120011);
  });
  test('округление до десятичного разряда, положительные числа', () => {
    assertToBe(round(1.005, 2), 1.01);
    assertToBe(round(0.1, 1), 0.1);
    assertToBe(round(0.4499, 1), 0.4);
    assertToBe(round(0.45, 1), 0.5);
    assertToBe(round(0.450001, 1), 0.5);
    assertToBe(round(0.4999, 1), 0.5);
    assertToBe(round(0.5, 1), 0.5);
    assertToBe(round(0.75, 1), 0.8);
    assertToBe(round(0.949, 1), 0.9);
    assertToBe(round(0.95, 1), 1);
    assertToBe(round(0.9999999, 1), 1);
    assertToBe(round(1.4, 1), 1.4);
    assertToBe(round(1.41, 1), 1.4);
    assertToBe(round(1.44999, 1), 1.4);
    assertToBe(round(1.45, 1), 1.5);
    assertToBe(round(1.451, 1), 1.5);
    assertToBe(round(1.49, 1), 1.5);
    assertToBe(round(1.5, 1), 1.5);
    assertToBe(round(10.4, 1), 10.4);
    assertToBe(round(10.41, 1), 10.4);
    assertToBe(round(10.44999, 1), 10.4);
    assertToBe(round(10.45, 1), 10.5);
    assertToBe(round(10.451, 1), 10.5);
    assertToBe(round(10.49, 1), 10.5);
    assertToBe(round(10.5, 1), 10.5);
    assertToBe(round(15.4, 1), 15.4);
    assertToBe(round(15.41, 1), 15.4);
    assertToBe(round(15.44999, 1), 15.4);
    assertToBe(round(15.45, 1), 15.5);
    assertToBe(round(15.451, 1), 15.5);
    assertToBe(round(15.49, 1), 15.5);
    assertToBe(round(15.5, 1), 15.5);
    assertToBe(round(10040.74999, 1), 10040.7);
    assertToBe(round(10040.75, 1), 10040.8);
    assertToBe(round(10040.751, 1), 10040.8);
    assertToBe(round(10.045, 2), 10.05);
    assertToBe(round(1.005, 2), 1.01);
  });
  test('округление до десятичного разряда, отрицательные числа', () => {
    assertToBe(round(-0.1, 1), -0.1);
    assertToBe(round(-0.4499, 1), -0.4);
    assertToBe(round(-0.45, 1), -0.4);
    assertToBe(round(-0.450001, 1), -0.5);
    assertToBe(round(-0.4999, 1), -0.5);
    assertToBe(round(-0.5, 1), -0.5);
    assertToBe(round(-0.75, 1), -0.7);
    assertToBe(round(-0.7501, 1), -0.8);
    assertToBe(round(-0.949, 1), -0.9);
    assertToBe(round(-0.95, 1), -0.9);
    assertToBe(round(-0.951, 1), -1);
    assertToBe(round(-0.9999999, 1), -1);
    assertToBe(round(-1.4, 1), -1.4);
    assertToBe(round(-1.41, 1), -1.4);
    assertToBe(round(-1.44999, 1), -1.4);
    assertToBe(round(-1.45, 1), -1.4);
    assertToBe(round(-1.451, 1), -1.5);
    assertToBe(round(-1.49, 1), -1.5);
    assertToBe(round(-1.5, 1), -1.5);
    assertToBe(round(-10.4, 1), -10.4);
    assertToBe(round(-10.41, 1), -10.4);
    assertToBe(round(-10.44999, 1), -10.4);
    assertToBe(round(-10.45, 1), -10.4);
    assertToBe(round(-10.451, 1), -10.5);
    assertToBe(round(-10.49, 1), -10.5);
    assertToBe(round(-10.5, 1), -10.5);
    assertToBe(round(-15.4, 1), -15.4);
    assertToBe(round(-15.41, 1), -15.4);
    assertToBe(round(-15.44999, 1), -15.4);
    assertToBe(round(-15.45, 1), -15.4);
    assertToBe(round(-15.451, 1), -15.5);
    assertToBe(round(-15.49, 1), -15.5);
    assertToBe(round(-15.5, 1), -15.5);
    assertToBe(round(-10040.74999, 1), -10040.7);
    assertToBe(round(-10040.75, 1), -10040.7);
    assertToBe(round(-10040.751, 1), -10040.8);
  });

  describe('roundTestWithCycle', () => {
    function testRoundMain(value, isRoundedUp) {
      /** сдвигаем десятичную часть -> десятичные, сотые, тысячные... */
      for (let shiftCount = 0; shiftCount < 10; shiftCount++) {
        testNextShiftedValue(shiftCount, value, isRoundedUp);
      }
    }

    /** Тестируем меняя предварительное число от 0 до 9 */
    function testNextShiftedValue(shiftCount, value, isRoundedUp) {
      for (let lastDigit = 0; lastDigit < 10; lastDigit++) {
        const randInt = getRandomInt(2);
        const randFloatAsInt = getRandomFloatAsInt(shiftCount, lastDigit);
        const inputFloat = getFloat(shiftCount, randFloatAsInt, value);
        const inputNum = randInt + inputFloat;
        const expectFloat = getFloat(shiftCount, randFloatAsInt, +isRoundedUp);
        const expect = randInt + expectFloat;
        testRound(inputNum, shiftCount, expect);
      }
    }

    const getRandomInt = (shiftCount) => Math.round(Math.random() * (10 ** shiftCount));
    const getRandomFloatAsInt = (shiftCount, i) => getRandomInt(shiftCount - 1) * 10 + i; 
    const getFloat = (shiftCount, floatAsInt, float) => (floatAsInt + float) / 10 ** shiftCount;

    /** запускаем тест и печатаем ошибку в консоль */
    function testRound(inputNum, shiftCount, expect) {
      try {
        assertToBe(round(inputNum, shiftCount), expect);
        // console.log(`success: inputNum=${inputNum}; count=${shiftCount}; expect=${expect}\n`);
      } catch (e) {
        let msg = `round test failed with:\n`;
        msg += `    inputNum=${inputNum}; count=${shiftCount}\n`;
        msg += `    result=${round(inputNum, shiftCount)}; expect=${expect}`
        console.log(msg);
        assertToBe(round(inputNum, shiftCount), expect);
      }
    }

    test('округление вверх, ибо больше .5', () => {
      testRoundMain(.50001, true);
      console.log('round more .5 finished');
    });
    test('округление вверх, ибо равно .5', () => {
      testRoundMain(.5, true);
      console.log('round equal .5 finished');
    });
    test('округления нет, ибо меньше .5', () => {
      testRoundMain(.49999, false);
      console.log('round less .5 finished');
    });
  });
});

