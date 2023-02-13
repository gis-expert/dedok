import { assertToBe, assertThrow } from '../../../../dependencies/asserts/assert.js';
import { describe, test } from '../../../../dependencies/tests/test.js';
import {
  isEqual, isNotEqual, isMore, isLess, isMoreOrEqual, isLessOrEqual,
} from './compare.js';
import { complexText, ZERO_CODE_CHAR } from './common.js';

describe('isEqualTests', () => {
  test('одиночные одинаковые символы', () => {
    assertToBe(isEqual('a', 'a'), true);
    assertToBe(isEqual('a', 'b'), false);
  });
  test('количество символов одинаково, но не равны', () => {
    assertToBe(isEqual('abc', 'abc'), true);
    assertToBe(isEqual('abc', 'abb'), false);
  });
  test('символы совпадают, но у первого больше символов', () => {
    assertToBe(isEqual('abbb', 'abb'), false);
  });
  test('символы совпадают, но у второго больше символов', () => {
    assertToBe(isEqual('abb', 'abbb'), false);
  });
  test('пустые строки', () => {
    assertToBe(isEqual('', ''), true);
  });
  test('пустые и непустая строка', () => {
    assertToBe(isEqual('', 'a'), false);
    assertToBe(isEqual('a', ''), false);
    assertToBe(isEqual('', 'abc'), false);
  });
  test('сложные одинаковые строки', () => {
    assertToBe(isEqual(complexText, complexText), true);
  });
  test('сложные строки различной длины', () => {
    assertToBe(isEqual(complexText + 'a', complexText), false);
    assertToBe(isEqual(complexText + '\n', complexText), false);
    assertToBe(isEqual(complexText + ZERO_CODE_CHAR, complexText), false);
  });
  test('несоответствие типа второго аргумента приводит к исключению', () => {
    assertThrow(() => isEqual('2', 2), 'argument must be type of string');
    assertThrow(() => isEqual('2', true), 'argument must be type of string');
    assertThrow(() => isEqual('2', []), 'argument must be type of string');
    assertThrow(() => isEqual('2', null), 'argument must be type of string');
    assertThrow(() => isEqual('2'), 'argument must be type of string');
  });
  test('несоответствие типа первого аргумента приводит к исключению', () => {
    assertThrow(() => isEqual(2, '2'), 'argument must be type of string');
    assertThrow(() => isEqual(true, '1'), 'argument must be type of string');
    assertThrow(() => isEqual([], '1'), 'argument must be type of string');
    assertThrow(() => isEqual(null, '1'), 'argument must be type of string');
    assertThrow(() => isEqual(undefined, '1'), 'argument must be type of string');
  });
});

describe('isNotEqualTests', () => {
  test('одиночные одинаковые символы', () => {
    assertToBe(isNotEqual('a', 'a'), false);
    assertToBe(isNotEqual('a', 'b'), true);
  });
  test('количество символов одинаково, но не равны', () => {
    assertToBe(isNotEqual('abc', 'abb'), true);
    assertToBe(isNotEqual('abb', 'abc'), true);
  });
  test('символы совпадают, но у первого больше символов', () => {
    assertToBe(isNotEqual('abbb', 'abb'), true);
  });
  test('символы совпадают, но у второго больше символов', () => {
    assertToBe(isNotEqual('abb', 'abbb'), true);
  });
  test('пустые строки', () => {
    assertToBe(isNotEqual('', ''), false);
  });
  test('пустые и непустая строка', () => {
    assertToBe(isNotEqual('', 'a'), true);
    assertToBe(isNotEqual('a', ''), true);
  });
  test('сложные одинаковые строки', () => {
    assertToBe(isNotEqual(complexText, complexText), false);
  });
  test('сложные строки различной длины', () => {
    assertToBe(isNotEqual(complexText + 'a', complexText), true);
    assertToBe(isNotEqual(complexText + '\n', complexText), true);
    assertToBe(isNotEqual(complexText + ZERO_CODE_CHAR, complexText), true);
  });
  test('несоответствие типа второго аргумента приводит к исключению', () => {
    assertThrow(() => isNotEqual('2', 2), 'argument must be type of string');
    assertThrow(() => isNotEqual('2', true), 'argument must be type of string');
    assertThrow(() => isNotEqual('2', []), 'argument must be type of string');
    assertThrow(() => isNotEqual('2', null), 'argument must be type of string');
    assertThrow(() => isNotEqual('2'), 'argument must be type of string');
  });
  test('несоответствие типа первого аргумента приводит к исключению', () => {
    assertThrow(() => isNotEqual(2, '2'), 'argument must be type of string');
    assertThrow(() => isNotEqual(true, '1'), 'argument must be type of string');
    assertThrow(() => isNotEqual([], '1'), 'argument must be type of string');
    assertThrow(() => isNotEqual(null, '1'), 'argument must be type of string');
    assertThrow(() => isNotEqual(undefined, '1'), 'argument must be type of string');
  });
});

describe('isMoreTests', () => {
  test('первая строка больше второй по первым символам', () => {
    assertToBe(isMore('ca', 'ba'), true);
    assertToBe(isMore('cca', 'cba'), true);
  });
  test('первая строка не больше второй по первым символам', () => {
    assertToBe(isMore('ab', 'ac'), false);
    assertToBe(isMore('cba', 'cca'), false);
  });
  test('первая строка больше второй по последнему символу', () => {
    assertToBe(isMore('abc', 'abb'), true);
  });
  test('первая строка не больше второй по последнему символу', () => {
    assertToBe(isMore('abb', 'abc'), false);
  });
  test('первая и вторая равны', () => {
    assertToBe(isMore('abb', 'abb'), false);
  });
  test('первая больше по длине и по содержанию', () => {
    assertToBe(isMore('abca', 'abb'), true);
  });
  test('первая больше по длине, но меньше по содержанию', () => {
    assertToBe(isMore('abaa', 'abb'), false);
  });
  test('первая и вторая равны по содержанию, но первая больше по длине', () => {
    assertToBe(isMore('abba', 'abb'), true);
  });
  test('первая и вторая равны по содержанию, но вторая больше по длине', () => {
    assertToBe(isMore('abb', 'abba'), false);
  });
  test('первая меньше по длине и но больше по содержанию', () => {
    assertToBe(isMore('abc', 'abba'), true);
  });
  test('первая меньше по длине и по содержанию', () => {
    assertToBe(isMore('abb', 'abca'), false);
  });
  test('пустые строки не больше чем пустая строка', () => {
    assertToBe(isMore('', ''), false);
  });
  test('пустая строка не больше чем непустая строка', () => {
    assertToBe(isMore('', ZERO_CODE_CHAR), false);
  });
  test('не пустая строка больше чем пустая', () => {
    assertToBe(isMore(ZERO_CODE_CHAR, ''), true);
  });
  test('несоответствие типа второго аргумента приводит к ЛОЖЬ', () => {
    assertThrow(() => isMore('2', 2), 'argument must be type of string');
    assertThrow(() => isMore('2', true), 'argument must be type of string');
    assertThrow(() => isMore('2', []), 'argument must be type of string');
    assertThrow(() => isMore('2', null), 'argument must be type of string');
    assertThrow(() => isMore('2'), 'argument must be type of string');
  });
  test('несоответствие типа первого аргумента приводит к ЛОЖЬ', () => {
    assertThrow(() => isMore(2, '2'), 'argument must be type of string');
    assertThrow(() => isMore(true, '2'), 'argument must be type of string');
    assertThrow(() => isMore([], '2'), 'argument must be type of string');
    assertThrow(() => isMore(undefined, '2'), 'argument must be type of string');
    assertThrow(() => isMore(null, '2'), 'argument must be type of string');
  });
});

describe('isLessTests', () => {
  test('первая строка меньше второй по первым символам', () => {
    assertToBe(isLess('ba', 'ca'), true);
    assertToBe(isLess('cba', 'cca'), true);
  });
  test('первая строка не меньше второй по первым символам', () => {
    assertToBe(isLess('ac', 'ab'), false);
    assertToBe(isLess('cca', 'cba'), false);
  });
  test('первая строка меньше второй по последнему символу', () => {
    assertToBe(isLess('abb', 'abc'), true);
  });
  test('первая строка не меньше второй по последнему символу', () => {
    assertToBe(isLess('abc', 'abb'), false);
  });
  test('первая и вторая равны', () => {
    assertToBe(isLess('abb', 'abb'), false);
  });
  test('первая и вторая равны по содержанию, но первая меньше по длине', () => {
    assertToBe(isLess('abb', 'abb' + ZERO_CODE_CHAR), true);
  });
  test('первая и вторая равны по содержанию, но первая не меньше по длине', () => {
    assertToBe(isLess('abb' + ZERO_CODE_CHAR, 'abb'), false);
  });
  test('пустые строки', () => {
    assertToBe(isLess('', ''), false);
  });
  test('пустая строка меньше чем непустая строка', () => {
    assertToBe(isLess('', ZERO_CODE_CHAR), true);
  });
  test('не пустая строка больше чем пустая', () => {
    assertToBe(isLess(ZERO_CODE_CHAR, ''), false);
  });
  test('несоответствие типа второго аргумента приводит к ЛОЖЬ', () => {
    assertThrow(() => isLess('2', 2), 'argument must be type of string');
    assertThrow(() => isLess('2', true), 'argument must be type of string');
    assertThrow(() => isLess('2', []), 'argument must be type of string');
    assertThrow(() => isLess('2', null), 'argument must be type of string');
    assertThrow(() => isLess('2'), 'argument must be type of string');
  });
  test('несоответствие типа первого аргумента приводит к ЛОЖЬ', () => {
    assertThrow(() => isLess(2, '2'), 'argument must be type of string');
    assertThrow(() => isLess(true, '2'), 'argument must be type of string');
    assertThrow(() => isLess([], '2'), 'argument must be type of string');
    assertThrow(() => isLess(undefined, '2'), 'argument must be type of string');
    assertThrow(() => isLess(null, '2'), 'argument must be type of string');
  });
});

describe('isMoreOrEqualTests', () => {
  test('первая строка больше второй по первому символу', () => {
    assertToBe(isMoreOrEqual('ca', 'ba'), true);
    assertToBe(isMoreOrEqual('cca', 'cba'), true);
  });
  test('первая строка не больше второй по первому символу', () => {
    assertToBe(isMoreOrEqual('ab', 'ac'), false);
    assertToBe(isMoreOrEqual('cba', 'cca'), false);
  });
  test('первая строка больше второй по последнему символу', () => {
    assertToBe(isMoreOrEqual('abc', 'abb'), true);
  });
  test('первая и вторая равны', () => {
    assertToBe(isMoreOrEqual('abb', 'abb'), true);
  });
  test('первая строка не больше второй по последнему символу', () => {
    assertToBe(isMoreOrEqual('abb', 'abc'), false);
  });
  test('первая и вторая равны по содержанию, но первая больше по длине', () => {
    assertToBe(isMoreOrEqual('abb' + ZERO_CODE_CHAR, 'abb'), true);
  });
  test('первая и вторая равны по содержанию, но первая не больше по длине', () => {
    assertToBe(isMoreOrEqual('abb', 'abb' + ZERO_CODE_CHAR), false);
  });
  test('пустые строки', () => {
    assertToBe(isMoreOrEqual('', ''), true);
  });
  test('пустая строка не больше чем непустая строка', () => {
    assertToBe(isMoreOrEqual('', ZERO_CODE_CHAR), false);
  });
  test('не пустая строка больше чем пустая', () => {
    assertToBe(isMoreOrEqual(ZERO_CODE_CHAR, ''), true);
  });
  test('несоответствие типа второго аргумента приводит к ЛОЖЬ', () => {
    assertThrow(() => isMoreOrEqual('2', 2), 'argument must be type of string');
    assertThrow(() => isMoreOrEqual('2', true), 'argument must be type of string');
    assertThrow(() => isMoreOrEqual('2', []), 'argument must be type of string');
    assertThrow(() => isMoreOrEqual('2', null), 'argument must be type of string');
    assertThrow(() => isMoreOrEqual('2'), 'argument must be type of string');
  });
  test('несоответствие типа первого аргумента приводит к ЛОЖЬ', () => {
    assertThrow(() => isMoreOrEqual(2, '2'), 'argument must be type of string');
    assertThrow(() => isMoreOrEqual(true, '2'), 'argument must be type of string');
    assertThrow(() => isMoreOrEqual([], '2'), 'argument must be type of string');
    assertThrow(() => isMoreOrEqual(undefined, '2'), 'argument must be type of string');
    assertThrow(() => isMoreOrEqual(null, '2'), 'argument must be type of string');
  });
});

describe('isLessOrEqualTests', () => {
  test('первая строка меньше второй по первому символу', () => {
    assertToBe(isLessOrEqual('ba', 'ca'), true);
    assertToBe(isLessOrEqual('aba', 'aca'), true);
  });
  test('первая строка не меньше второй по первому символу', () => {
    assertToBe(isLessOrEqual('ac', 'ab'), false);
    assertToBe(isLessOrEqual('aca', 'aba'), false);
  });
  test('первая строка меньше второй по последнему символу', () => {
    assertToBe(isLessOrEqual('abb', 'abc'), true);
  });
  test('первая и вторая равны', () => {
    assertToBe(isLessOrEqual('abb', 'abb'), true);
  });
  test('вторая строка больше первой по последнему символу', () => {
    assertToBe(isLessOrEqual('abc', 'abb'), false);
  });
  test('первая и вторая равны по содержанию, но первая меньше по длине', () => {
    assertToBe(isLessOrEqual('abb', 'abb' + ZERO_CODE_CHAR), true);
  });
  test('первая и вторая равны по содержанию, но первая не меньше по длине', () => {
    assertToBe(isLessOrEqual('abb' + ZERO_CODE_CHAR, 'abb'), false);
  });
  test('пустые строки', () => {
    assertToBe(isLessOrEqual('', ''), true);
  });
  test('пустая строка меньше чем непустая строка', () => {
    assertToBe(isLessOrEqual('', ZERO_CODE_CHAR), true);
  });
  test('не пустая строка больше чем пустая', () => {
    assertToBe(isLessOrEqual(ZERO_CODE_CHAR, ''), false);
  });
  test('несоответствие типа второго аргумента приводит к ЛОЖЬ', () => {
    assertThrow(() => isLessOrEqual('2', 2), 'argument must be type of string');
    assertThrow(() => isLessOrEqual('2', true), 'argument must be type of string');
    assertThrow(() => isLessOrEqual('2', []), 'argument must be type of string');
    assertThrow(() => isLessOrEqual('2', null), 'argument must be type of string');
    assertThrow(() => isLessOrEqual('2'), 'argument must be type of string');
  });
  test('несоответствие типа первого аргумента приводит к ЛОЖЬ', () => {
    assertThrow(() => isLessOrEqual(2, '2'), 'argument must be type of string');
    assertThrow(() => isLessOrEqual(true, '2'), 'argument must be type of string');
    assertThrow(() => isLessOrEqual([], '2'), 'argument must be type of string');
    assertThrow(() => isLessOrEqual(undefined, '2'), 'argument must be type of string');
    assertThrow(() => isLessOrEqual(null, '2'), 'argument must be type of string');
  });
});
