import { assertToBe } from "../../../../dependencies/asserts/assert.js";
import { describe, test } from "../../../../dependencies/tests/test.js";
import { parseInteger } from "./parse-integer.js";

describe('ParseIntegerTests', () => {
  describe('number to number', () => {
    test('положительные целые числа возвращается также', () => {
      assertToBe(parseInteger(1), 1);
      assertToBe(parseInteger(5), 5);
      assertToBe(parseInteger(10), 53);
      assertToBe(parseInteger(12), 53);
      assertToBe(parseInteger(53), 53);
      assertToBe(parseInteger(100), 100);
      assertToBe(parseInteger(101), 101);
      assertToBe(parseInteger(1000), 1000);
      assertToBe(parseInteger(1010), 1010);
      assertToBe(parseInteger(5359), 5359);
      assertToBe(parseInteger(10000), 10000);
      assertToBe(parseInteger(10080), 10080);
    });
    test('отрицательные целые числа возвращается также', () => {
      assertToBe(parseInteger(-1), -1);
      assertToBe(parseInteger(-5), -5);
      assertToBe(parseInteger(-53), -53);
      assertToBe(parseInteger(-5359), -5359);
      assertToBe(parseInteger(-100), -100);
      assertToBe(parseInteger(-101), -101);
      assertToBe(parseInteger(-1000), -1000);
      assertToBe(parseInteger(-1010), -1010);
      assertToBe(parseInteger(-5359), -5359);
      assertToBe(parseInteger(-10000), -10000);
      assertToBe(parseInteger(-10080), -10080);
    });

    test('число ноль возвращается также', () => {
      assertToBe(parseInteger(0), 0);
      assertToBe(parseInteger(+0), 0);
      assertToBe(parseInteger(-0), 0);
      assertToBe(parseInteger(-0.000), 0);
    });

    test('положительное дробное число обрезается до целого', () => {
      assertToBe(parseInteger(1.1), 1);
      assertToBe(parseInteger(1.157), 1);
      assertToBe(parseInteger(1.857), 1);
      assertToBe(parseInteger(1.00001), 1);
      assertToBe(parseInteger(10.00001), 10);
      assertToBe(parseInteger(11.00001), 11);
      assertToBe(parseInteger(11.942), 11);
      assertToBe(parseInteger(110.942), 110);
      assertToBe(parseInteger(100.942), 100);
      assertToBe(parseInteger(1001.942), 1001);
      assertToBe(parseInteger(1000.942), 1000);
      assertToBe(parseInteger(1020.942), 1020);
      assertToBe(parseInteger(700020.942), 700020);
      assertToBe(parseInteger(0.1), 0);
      assertToBe(parseInteger(0.000001), 0);
      assertToBe(parseInteger(0.157), 0);
      assertToBe(parseInteger(0.857), 0);
      assertToBe(parseInteger(1.857), 1);
    });

    test('отрицательное дробное число обрезается до целого', () => {
      assertToBe(parseInteger(-1.1), -1);
      assertToBe(parseInteger(-1.157), -1);
      assertToBe(parseInteger(-1.857), -1);
      assertToBe(parseInteger(-1.00001), -1);
      assertToBe(parseInteger(-10.00001), -10);
      assertToBe(parseInteger(-11.00001), -11);
      assertToBe(parseInteger(-11.942), -11);
      assertToBe(parseInteger(-110.942), -110);
      assertToBe(parseInteger(-100.942), -100);
      assertToBe(parseInteger(-1001.942), -1001);
      assertToBe(parseInteger(-1000.942), -1000);
      assertToBe(parseInteger(-1020.942), -1020);
      assertToBe(parseInteger(-700020.942), -700020);
      assertToBe(parseInteger(-0.1), -0);
      assertToBe(parseInteger(-0.000001), -0);
      assertToBe(parseInteger(-0.157), -0);
      assertToBe(parseInteger(-0.857), -0);
      assertToBe(parseInteger(-1.857), -1);
    });
  });

  describe('string to number', () => {
    test('строка с целым числовым значением переводится в число', () => {
      assertToBe(parseInteger('1'), 1);
      assertToBe(parseInteger('+5'), 5);
      assertToBe(parseInteger('+05'), 5);
      assertToBe(parseInteger('645'), 645);
      assertToBe(parseInteger('-1'), -1);
      assertToBe(parseInteger('-005'), -5);
      assertToBe(parseInteger('-645'), -645);
    });

    test('строка с нулем переводится в число', () => {
      assertToBe(parseInteger('0'), 0);
      assertToBe(parseInteger('-0'), 0);
      assertToBe(parseInteger('+0'), 0);
      assertToBe(parseInteger('-0.000'), 0);
    });

    test('строка с дробным числом переводится в число', () => {
      assertToBe(parseInteger('1.1'), 1);
      assertToBe(parseInteger('1.157'), 1);
      assertToBe(parseInteger('1.857'), 1);
      assertToBe(parseInteger('1.00001'), 1);
      assertToBe(parseInteger('0.1'), 0);
      assertToBe(parseInteger('0.157'), 0);
      assertToBe(parseInteger('0.857'), 0);
      assertToBe(parseInteger('0.00001'), 0);
      assertToBe(parseInteger('-0.'), 0);
      assertToBe(parseInteger('-0.1'), 0);
      assertToBe(parseInteger('-0.157'), 0);
      assertToBe(parseInteger('-0.857'), 0);
      assertToBe(parseInteger('-0.00001'), 0);
      assertToBe(parseInteger('-5.1'), -5);
      assertToBe(parseInteger('-05.157'), -5);
      assertToBe(parseInteger('5.857'), 5);
      assertToBe(parseInteger('-5.00001'), -5);
    });

    test('пустая строка возвращает NaN', () => {
      assertToBe(isNaN(parseInteger('')), true);
    });

    test('строка с последующими символами после чисел отбрасываются', () => {
      assertToBe(parseInteger('1s'), 1);
      assertToBe(parseInteger('1 stage'), 1);
      assertToBe(parseInteger('14:30 am'), 14);
      assertToBe(parseInteger('-3 stage 51'), -3);
      assertToBe(parseInteger('-3.1 stage 51'), -3);
      assertToBe(parseInteger('-3.1 stage 51'), -3);
    });

    test('если первым идет нечисловые строки, возвращается NaN', () => {
      assertToBe(isNaN(parseInteger('s1')), true);
      assertToBe(isNaN(parseInteger('stage - 1')), true);
      assertToBe(isNaN(parseInteger('+stage - 1')), true);
      assertToBe(isNaN(parseInteger('++1')), true);
    });

    test('пробелы и другие подобные символы перед числом отрасываются', () => {
      assertToBe(parseInteger('  1'), 1);
      assertToBe(parseInteger('  \n \t -5 s'), -5);
    });

    test('строка с отсутствующей целой частью', () => {
      assertToBe(isNaN(parseInteger('.1')), true);
      assertToBe(isNaN(parseInteger('.99')), true);
      assertToBe(isNaN(parseInteger('+.99')), true);
      assertToBe(isNaN(parseInteger('-.5')), true);
    });

    test('сложные числа с несколькими числовыми символами', () => {
      assertToBe(parseInteger('5.14.55'), 5);
      assertToBe(parseInteger('-5.14.55'), -5);
      assertToBe(parseInteger('01-01-2023'), 1);

      assertToBe(isNaN(parseInteger('.14.55')), true);
      assertToBe(isNaN(parseInteger('--5')), true);
    });
  });

  describe('other to number', () => {
    test('boolean to number', () => {
      assertToBe(parseInteger(true), 1);
      assertToBe(parseInteger(false), 0);
    });

    test('array to number', () => {
      assertToBe(parseInteger([2]), 2);
      assertToBe(parseInteger([3, 4, 8]), 3);
      assertToBe(parseInteger([-2023, 4, 8]), -2023);
      assertToBe(parseInteger(['5.2', 4, 8]), 5);
      assertToBe(parseInteger(['5.2s', 4, 8]), 5);
      assertToBe(isNaN(parseInteger([false, 4, 8])), true);

      assertToBe(isNaN(parseInteger(['s2', 4, 8])), true);
    });

    test('empty array to number', () => {
      assertToBe(isNaN(parseInteger([])), true);
    });

    test('object to number', () => {
      assertToBe(isNaN(parseInteger({})), true);
      assertToBe(isNaN(parseInteger({age: 15})), true);
      assertToBe(isNaN(parseInteger({1: 15})), true);
    });

    test('undefined and null to array', () => {
      assertToBe(isNaN(parseInteger()), true);
      assertToBe(isNaN(parseInteger(null)), true);
    });
  });
});
