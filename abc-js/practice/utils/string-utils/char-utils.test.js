import { assertThrow, assertToBe } from "../../../../dependencies/asserts/assert.js";
import { describe, test } from "../../../../dependencies/tests/test.js";
import { fromDigit, isDigit, isLower, isUpper, toDigit, toLower, toUpper } from "./char-utils.js";
import { DIGIT_FINISH, DIGIT_START, ENG_LOWER_FINISH, ENG_LOWER_START, ENG_UPPER_FINISH, ENG_UPPER_START, RUS_LOWER_FINISH, RUS_LOWER_START, RUS_UPPER_FINISH, RUS_UPPER_START } from "./common.js";

describe('charUtilsTests', () => {
  describe('isLowerTests', () => {
    describe('isEngLowerTests', () => {
      test('символ является строчной латиницей', () => {
        assertToBe(isLower('a'), true);
        assertToBe(isLower('b'), true);
        assertToBe(isLower('n'), true);
        assertToBe(isLower('y'), true);
        assertToBe(isLower('z'), true);
        assertToBe(isLower(String.fromCharCode(ENG_LOWER_START)), true);
        assertToBe(isLower(String.fromCharCode(ENG_LOWER_FINISH)), true);
      });
      // test('символ является строчной кириллицей', () => {
      //   assertToBe(isLower('а'), true);
      //   assertToBe(isLower('б'), true);
      //   assertToBe(isLower('р'), true);
      //   assertToBe(isLower('ю'), true);
      //   assertToBe(isLower('я'), true);
      //   assertToBe(isLower(String.fromCharCode(RUS_LOWER_START)), true);
      //   assertToBe(isLower(String.fromCharCode(RUS_LOWER_FINISH)), true);
      // });
      // test('символ не является строчной латиницей', () => {
      //   assertToBe(isLower(' '), false);
      //   assertToBe(isLower('/'), false);
      //   assertToBe(isLower('\n'), false);
      //   assertToBe(isLower('.'), false);
      //   assertToBe(isLower('A'), false);
      //   assertToBe(isLower('Z'), false);
      //   assertToBe(isLower('1'), false);
      //   assertToBe(isLower('А'), false);
      //   assertToBe(isLower('Я'), false);
      //   assertToBe(isLower(String.fromCharCode(RUS_LOWER_START - 1)), false);
      //   assertToBe(isLower(String.fromCharCode(RUS_LOWER_FINISH + 1)), false);
      //   assertToBe(isLower(String.fromCharCode(ENG_LOWER_START - 1)), false);
      //   assertToBe(isLower(String.fromCharCode(ENG_LOWER_FINISH + 1)), false);
      // });
      // test('строка должна быть только односимвольным', () => {
      //   assertThrow(() => isLower('aa'), 'char must be only one symbol char');
      //   assertThrow(() => isLower('abc'), 'char must be only one symbol char');
      // });
      // test('принимаются только строки, и параметр обязателен', () => {
      //   assertThrow(() => isLower(), 'parameter is required and must be string type');
      //   assertThrow(() => isLower(1), 'parameter is required and must be string type');
      //   assertThrow(() => isLower(true), 'parameter is required and must be string type');
      // });
    });
  });

  describe('isUpperTests', () => {
    describe('isEngUpperTests', () => {
      test('символ является прописной латиницей', () => {
        assertToBe(isUpper('A'), true);
        assertToBe(isUpper('B'), true);
        assertToBe(isUpper('N'), true);
        assertToBe(isUpper('Y'), true);
        assertToBe(isUpper('Z'), true);
        assertToBe(isUpper(String.fromCharCode(ENG_UPPER_START)), true);
        assertToBe(isUpper(String.fromCharCode(ENG_UPPER_FINISH)), true);
      });
      // test('символ является прописной кириллицей', () => {
      //   assertToBe(isUpper('А'), true);
      //   assertToBe(isUpper('Б'), true);
      //   assertToBe(isUpper('Р'), true);
      //   assertToBe(isUpper('Ю'), true);
      //   assertToBe(isUpper('Я'), true);
      //   assertToBe(isUpper(String.fromCharCode(RUS_UPPER_START)), true);
      //   assertToBe(isUpper(String.fromCharCode(RUS_UPPER_FINISH)), true);
      // });
      // test('символ не является прописной латиницей', () => {
      //   assertToBe(isUpper(' '), false);
      //   assertToBe(isUpper('/'), false);
      //   assertToBe(isUpper('\n'), false);
      //   assertToBe(isUpper('.'), false);
      //   assertToBe(isUpper('a'), false);
      //   assertToBe(isUpper('z'), false);
      //   assertToBe(isUpper('1'), false);
      //   assertToBe(isUpper('а'), false);
      //   assertToBe(isUpper('я'), false);
      //   assertToBe(isUpper(String.fromCharCode(RUS_UPPER_START - 1)), false);
      //   assertToBe(isUpper(String.fromCharCode(RUS_UPPER_FINISH + 1)), false);
      //   assertToBe(isUpper(String.fromCharCode(ENG_UPPER_START - 1)), false);
      //   assertToBe(isUpper(String.fromCharCode(ENG_UPPER_FINISH + 1)), false);
      // });
      // test('строка должна быть только односимвольным', () => {
      //   assertThrow(() => isUpper('AA'), 'char must be only one symbol char');
      //   assertThrow(() => isUpper('ABC'), 'char must be only one symbol char');
      // });
      // test('принимаются только строки, и параметр обязателен', () => {
      //   assertThrow(() => isUpper(), 'parameter is required and must be string type');
      //   assertThrow(() => isUpper(1), 'parameter is required and must be string type');
      //   assertThrow(() => isUpper(true), 'parameter is required and must be string type');
      // });
    });
  });

  describe('toLowerUpperTests', () => {
    describe('toLowerTests', () => {
      test('переводим латинские символы в нижний регистр', () => {
        assertToBe(toLower('A'), 'a');
        assertToBe(toLower('B'), 'b');
        assertToBe(toLower('H'), 'h');
        assertToBe(toLower('Y'), 'y');
        assertToBe(toLower('Z'), 'z');
        assertToBe(toLower(String.fromCharCode(ENG_UPPER_START)), 'a');
        assertToBe(toLower(String.fromCharCode(ENG_UPPER_FINISH)), 'z');
      });
      // test('переводим символы кириллицы в нижний регистр', () => {
      //   assertToBe(toLower('А'), 'а');
      //   assertToBe(toLower('Б'), 'б');
      //   assertToBe(toLower('Р'), 'р');
      //   assertToBe(toLower('Ю'), 'ю');
      //   assertToBe(toLower('Я'), 'я');
      //   assertToBe(toLower(String.fromCharCode(RUS_UPPER_START)), 'а');
      //   assertToBe(toLower(String.fromCharCode(RUS_UPPER_FINISH)), 'я');
      // });
      // test('символ не является прописной', () => {
      //   assertToBe(toLower(' '), ' ');
      //   assertToBe(toLower('/'), '/');
      //   assertToBe(toLower('\n'), '\n');
      //   assertToBe(toLower('.'), '.');
      //   assertToBe(toLower('а'), 'а');
      //   assertToBe(toLower('я'), 'я');
      //   assertToBe(toLower('1'), '1');
      //   assertToBe(toLower('a'), 'a');
      //   assertToBe(toLower('z'), 'z');
      //   assertToBe(toLower(String.fromCharCode(ENG_LOWER_START)), 'a');
      //   assertToBe(toLower(String.fromCharCode(ENG_LOWER_FINISH)), 'z');
      //   assertToBe(toLower(String.fromCharCode(RUS_LOWER_START)), 'а');
      //   assertToBe(toLower(String.fromCharCode(RUS_LOWER_FINISH)), 'я');
      // });
      // test('строка должна быть только односимвольным', () => {
      //   assertThrow(() => toLower('FF'), 'char must be only one symbol char');
      //   assertThrow(() => toLower('АБВ'), 'char must be only one symbol char');
      // });
      // test('принимаются только строки, и параметр обязателен', () => {
      //   assertThrow(() => toLower(), 'parameter is required and must be string type');
      //   assertThrow(() => toLower(1), 'parameter is required and must be string type');
      //   assertThrow(() => toLower(true), 'parameter is required and must be string type');
      // });
    });

    describe('toUpperTests', () => {
      test('переводим латинские символы в верхний регистр', () => {
        assertToBe(toUpper('a'), 'A');
        assertToBe(toUpper('b'), 'B');
        assertToBe(toUpper('h'), 'H');
        assertToBe(toUpper('y'), 'Y');
        assertToBe(toUpper('z'), 'Z');
        assertToBe(toUpper(String.fromCharCode(ENG_LOWER_START)), 'A');
        assertToBe(toUpper(String.fromCharCode(ENG_LOWER_FINISH)), 'Z');
      });
      // test('переводим символы кириллицы в верхний регистр', () => {
      //   assertToBe(toUpper('а'), 'А');
      //   assertToBe(toUpper('б'), 'Б');
      //   assertToBe(toUpper('р'), 'Р');
      //   assertToBe(toUpper('ю'), 'Ю');
      //   assertToBe(toUpper('я'), 'Я');
      //   assertToBe(toUpper(String.fromCharCode(RUS_LOWER_START)), 'А');
      //   assertToBe(toUpper(String.fromCharCode(RUS_LOWER_FINISH)), 'Я');
      // });
      // test('символ не является строчной', () => {
      //   assertToBe(toUpper(' '), ' ');
      //   assertToBe(toUpper('/'), '/');
      //   assertToBe(toUpper('\n'), '\n');
      //   assertToBe(toUpper('.'), '.');
      //   assertToBe(toUpper('А'), 'А');
      //   assertToBe(toUpper('Я'), 'Я');
      //   assertToBe(toUpper('1'), '1');
      //   assertToBe(toUpper('A'), 'A');
      //   assertToBe(toUpper('Z'), 'Z');
      //   assertToBe(toUpper(String.fromCharCode(ENG_UPPER_START)), 'A');
      //   assertToBe(toUpper(String.fromCharCode(ENG_UPPER_FINISH)), 'Z');
      //   assertToBe(toUpper(String.fromCharCode(RUS_UPPER_START)), 'А');
      //   assertToBe(toUpper(String.fromCharCode(RUS_UPPER_FINISH)), 'Я');
      // });
      // test('строка должна быть только односимвольным', () => {
      //   assertThrow(() => toUpper('ff'), 'char must be only one symbol char');
      //   assertThrow(() => toUpper('абв'), 'char must be only one symbol char');
      // });
      // test('принимаются только строки, и параметр обязателен', () => {
      //   assertThrow(() => toUpper(), 'parameter is required and must be string type');
      //   assertThrow(() => toUpper(1), 'parameter is required and must be string type');
      //   assertThrow(() => toUpper(true), 'parameter is required and must be string type');
      // });
    });
  });

  describe('isDigitTests', () => {
    test('символ является числом', () => {
      for (let i = DIGIT_START; i <= DIGIT_FINISH; i++) {
        const char = String.fromCharCode(i);
        assertToBe(isDigit(char), true);
      }
    });
    // test('символ не является числом', () => {
    //     assertToBe(isDigit(String.fromCharCode(DIGIT_START - 1)), false);
    //     assertToBe(isDigit(String.fromCharCode(DIGIT_FINISH + 1)), false);
    //     assertToBe(isDigit(' '), false);
    //     assertToBe(isDigit('/'), false);
    //     assertToBe(isDigit('\n'), false);
    //     assertToBe(isDigit('.'), false);
    //     assertToBe(isDigit('А'), false);
    //     assertToBe(isDigit('я'), false);
    //     assertToBe(isDigit('A'), false);
    //     assertToBe(isDigit('z'), false);
    //     assertToBe(isDigit(String.fromCharCode(ENG_UPPER_START)), false);
    //     assertToBe(isDigit(String.fromCharCode(ENG_LOWER_FINISH)), false);
    //     assertToBe(isDigit(String.fromCharCode(RUS_LOWER_START)), false);
    //     assertToBe(isDigit(String.fromCharCode(RUS_UPPER_FINISH)), false);
    // });
    // test('строка должна быть только односимвольным', () => {
    //   assertThrow(() => isDigit('ff'), 'char must be only one symbol char');
    //   assertThrow(() => isDigit('абв'), 'char must be only one symbol char');
    // });
    // test('принимаются только строки, и параметр обязателен', () => {
    //   assertThrow(() => isDigit(), 'parameter is required and must be string type');
    //   assertThrow(() => isDigit(1), 'parameter is required and must be string type');
    //   assertThrow(() => isDigit(true), 'parameter is required and must be string type');
    // });
  });

  describe('toDigitTests', () => {
    test('символы нормально переводятся в цифры', () => {
      for (let i = 0; i + DIGIT_START < DIGIT_FINISH; i++) {
        const char = String.fromCharCode(i + DIGIT_START);
        assertToBe(toDigit(char), i);
      }
    });
    // test('символ не является числом', () => {
    //   const errMsg = 'invalid char';
    //   assertThrow(() => toDigit(String.fromCharCode(DIGIT_START - 1)), errMsg);
    //   assertThrow(() => toDigit(String.fromCharCode(DIGIT_FINISH + 1)), errMsg);
    //   assertThrow(() => toDigit(' '), errMsg);
    //   assertThrow(() => toDigit('/'), errMsg);
    //   assertThrow(() => toDigit('\n'), errMsg);
    //   assertThrow(() => toDigit('.'), errMsg);
    //   assertThrow(() => toDigit('А'), errMsg);
    //   assertThrow(() => toDigit('я'), errMsg);
    //   assertThrow(() => toDigit('A'), errMsg);
    //   assertThrow(() => toDigit('z'), errMsg);
    //   assertThrow(() => toDigit(String.fromCharCode(ENG_UPPER_START)), errMsg);
    //   assertThrow(() => toDigit(String.fromCharCode(ENG_LOWER_FINISH)), errMsg);
    //   assertThrow(() => toDigit(String.fromCharCode(RUS_LOWER_START)), errMsg);
    //   assertThrow(() => toDigit(String.fromCharCode(RUS_UPPER_FINISH)), errMsg);
    // });
    // test('строка должна быть только односимвольным', () => {
    //   assertThrow(() => isDigit('12'), 'char must be only one symbol char');
    //   assertThrow(() => isDigit('01'), 'char must be only one symbol char');
    // });
    // test('принимаются только строки, и параметр обязателен', () => {
    //   assertThrow(() => isDigit(), 'parameter is required and must be string type');
    //   assertThrow(() => isDigit(1), 'parameter is required and must be string type');
    //   assertThrow(() => isDigit(true), 'parameter is required and must be string type');
    // });
  });

  describe('fromDigitTests', () => {
    test('цифры нормально переводятся в символы', () => {
      for (let i = 0; i < 9; i++) {
        const char = String.fromCharCode(i + DIGIT_START);
        assertToBe(fromDigit(i), char);
      }
    });
    // test('отрицательный цифры вызывают исключение', () => {
    //   assertThrow(() => fromDigit(-1), 'invalid digit');
    //   assertThrow(() => fromDigit(-5), 'invalid digit');
    // });
    // test('строка должна быть только односимвольным', () => {
    //   assertThrow(() => fromDigit(12), 'invalid digit');
    //   assertThrow(() => fromDigit(256), 'invalid digit');
    // });
    // test('передаются не числовой тип', () => {
    //   const errMsg = 'parameter is required and must be number type';
    //   assertThrow(() => fromDigit(), 'parameter is required and must be number type');
    //   assertThrow(() => fromDigit('1'), errMsg);
    //   assertThrow(() => fromDigit(' '), errMsg);
    //   assertThrow(() => fromDigit(String.fromCharCode(DIGIT_START)), errMsg);
    //   assertThrow(() => fromDigit(true), errMsg);
    // });
  });
});
