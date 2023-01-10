import { assertToBe } from "../../../../dependencies/asserts/assert.js";
import { describe, test } from "../../../../dependencies/tests/test.js";
import { parseInteger } from "./parse-integer.js";

describe('ParseIntegerTests', () => {
  describe('number to number', () => {
    test('целые числа возвращается также', () => {
      assertToBe(parseInteger(1), 1);
      // assertToBe(parseInteger(5), 5);
      // assertToBe(parseInteger(53), 53);
      // assertToBe(parseInteger(5359), 5359);
      // assertToBe(parseInteger(-1), -1);
      // assertToBe(parseInteger(-5), -5);
      // assertToBe(parseInteger(-53), -53);
      // assertToBe(parseInteger(-5359), -5359);
    });

  //   test('число ноль возвращается также', () => {
  //     assertToBe(parseInteger(0), 0);
  //     assertToBe(parseInteger(+0), 0);
  //     assertToBe(parseInteger(-0), 0);
  //     assertToBe(parseInteger(-0.000), 0);
  //   });
  //
  //
  //   test('дробное число обрезается до целого', () => {
  //     assertToBe(parseInteger(1.1), 1);
  //     assertToBe(parseInteger(1.157), 1);
  //     assertToBe(parseInteger(1.857), 1);
  //     assertToBe(parseInteger(1.00001), 1);
  //     assertToBe(parseInteger(0.1), 0);
  //     assertToBe(parseInteger(0.157), 0);
  //     assertToBe(parseInteger(0.857), 0);
  //     assertToBe(parseInteger(0.00001), 0);
  //     assertToBe(parseInteger(-0.1), 0);
  //     assertToBe(parseInteger(-0.157), 0);
  //     assertToBe(parseInteger(-0.857), 0);
  //     assertToBe(parseInteger(-0.00001), 0);
  //     assertToBe(parseInteger(-5.1), -5);
  //     assertToBe(parseInteger(-5.157), -5);
  //     assertToBe(parseInteger(-5.857), -5);
  //     assertToBe(parseInteger(-5.00001), -5);
  //   });
  // });
  //
  // describe('string to number', () => {
  //   test('строка с целым числовым значением переводится в число', () => {
  //     assertToBe(parseInteger('1'), 1);
  //     assertToBe(parseInteger('+5'), 5);
  //     assertToBe(parseInteger('+05'), 5);
  //     assertToBe(parseInteger('645'), 645);
  //     assertToBe(parseInteger('-1'), -1);
  //     assertToBe(parseInteger('-005'), -5);
  //     assertToBe(parseInteger('-645'), -645);
  //   });
  //
  //   test('строка с нулем переводится в число', () => {
  //     assertToBe(parseInteger('0'), 0);
  //     assertToBe(parseInteger('-0'), 0);
  //     assertToBe(parseInteger('+0'), 0);
  //     assertToBe(parseInteger('-0.000'), 0);
  //   });
  //
  //   test('строка с дробным числом переводится в число', () => {
  //     assertToBe(parseInteger('1.1'), 1);
  //     assertToBe(parseInteger('1.157'), 1);
  //     assertToBe(parseInteger('1.857'), 1);
  //     assertToBe(parseInteger('1.00001'), 1);
  //     assertToBe(parseInteger('0.1'), 0);
  //     assertToBe(parseInteger('0.157'), 0);
  //     assertToBe(parseInteger('0.857'), 0);
  //     assertToBe(parseInteger('0.00001'), 0);
  //     assertToBe(parseInteger('-0.1'), 0);
  //     assertToBe(parseInteger('-0.157'), 0);
  //     assertToBe(parseInteger('-0.857'), 0);
  //     assertToBe(parseInteger('-0.00001'), 0);
  //     assertToBe(parseInteger('-5.1'), -5);
  //     assertToBe(parseInteger('-05.157'), -5);
  //     assertToBe(parseInteger('5.857'), 5);
  //     assertToBe(parseInteger('-5.00001'), -5);
  //   });
  //
  //   test('пустая строка возвращает NaN', () => {
  //     assertToBe(isNaN(parseInteger('')), true);
  //   });
  //
  //   test('строка с последующими символами после чисел отбрасываются', () => {
  //     assertToBe(parseInteger('1s'), 1);
  //     assertToBe(parseInteger('1 stage'), 1);
  //     assertToBe(parseInteger('14:30 am'), 14);
  //     assertToBe(parseInteger('-3 stage 51'), -3);
  //     assertToBe(parseInteger('-3.1 stage 51'), -3);
  //     assertToBe(parseInteger('-3.1 stage 51'), -3);
  //   });
  //
  //   test('если первым идет нечисловые строки, возвращается NaN', () => {
  //     assertToBe(isNaN(parseInteger('s1')), true);
  //     assertToBe(isNaN(parseInteger('stage - 1')), true);
  //     assertToBe(isNaN(parseInteger('+stage - 1')), true);
  //     assertToBe(isNaN(parseInteger('++1')), true);
  //   });
  //
  //   test('пробелы и другие подобные символы перед числом отрасываются', () => {
  //     assertToBe(parseInteger('  1'), 1);
  //     assertToBe(parseInteger('  \n \t -5 s'), -5);
  //   });
  //
  //   test('строка с отсутствующей целой частью', () => {
  //     assertToBe(isNaN(parseInteger('.1')), true);
  //     assertToBe(isNaN(parseInteger('.99')), true);
  //     assertToBe(isNaN(parseInteger('+.99')), true);
  //     assertToBe(isNaN(parseInteger('-.5')), true);
  //   });
  //
  //   test('сложные числа с несколькими числовыми символами', () => {
  //     assertToBe(parseInteger('5.14.55'), 5);
  //     assertToBe(parseInteger('-5.14.55'), -5);
  //     assertToBe(parseInteger('01-01-2023'), 1);
  //
  //     assertToBe(isNaN(parseInteger('.14.55')), true);
  //     assertToBe(isNaN(parseInteger('--5')), true);
  //   });
  // });
  //
  // describe('other to number', () => {
  //   test('boolean to number', () => {
  //     assertToBe(parseInteger(true), 1);
  //     assertToBe(parseInteger(false), 0);
  //   });
  //
  //   test('array to number', () => {
  //     assertToBe(parseInteger([2]), 2);
  //     assertToBe(parseInteger([3, 4, 8]), 3);
  //     assertToBe(parseInteger([-2023, 4, 8]), -2023);
  //     assertToBe(parseInteger(['5.2', 4, 8]), 5);
  //     assertToBe(parseInteger(['5.2s', 4, 8]), 5);
  //     assertToBe(isNaN(parseInteger([false, 4, 8])), true);
  //
  //     assertToBe(isNaN(parseInteger(['s2', 4, 8])), true);
  //   });
  //
  //   test('empty to array', () => {
  //     assertToBe(isNaN(parseInteger([])), true);
  //   });
  //
  //   test('object to number', () => {
  //     assertToBe(isNaN(parseInteger({})), true);
  //     assertToBe(isNaN(parseInteger({age: 15})), true);
  //     assertToBe(isNaN(parseInteger({1: 15})), true);
  //   });
  });
});
