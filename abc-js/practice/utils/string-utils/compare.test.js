import { assertToBe, assertThrow } from '../../../../dependencies/asserts/assert.js';
import { describe, test } from '../../../../dependencies/tests/test.js';
import {
    isEqual,
    isNotEqual,
    isMore,
    isLess,
    isMoreOrEqual,
    isLessOrEqual,
} from './compare.js';
import { complexText, ZERO_CODE_CHAR } from './common.js';

describe('isEqualTests', () => {
    test('одиночные одинаковые символы', () => {
        assertToBe(isEqual('a', 'a'), true);
        assertToBe(isEqual('a', 'b'), false);
    });
    test('количество символов одинаково, но не равны', () => {
        assertToBe(isEqual('abc', 'abb'), false);
    });
    test('равны, но у первого больше символов', () => {
        assertToBe(isEqual('abbb', 'abb'), false);
    });
    test('равны, но у второго больше символов', () => {
        assertToBe(isEqual('abb', 'abbb'), false);
    });
    test('пустые строки', () => {
        assertToBe(isEqual('', ''), true);
    });
    test('пустые и непустая строка', () => {
        assertToBe(isEqual('', 'a'), false);
    });
    test('сложные одинаковые строки', () => {
        assertToBe(isEqual(complexText, complexText), true);
    });
    test('сложные строки различной длины', () => {
        assertToBe(isEqual(complexText + ZERO_CODE_CHAR, complexText), false);
    });
    test('несоответствие типа второго аргумента приводит к ЛОЖЬ', () => {
        assertToBe(isEqual('2', 2), false);
    });
    test('несоответствие типа первого аргумента приводит к ЛОЖЬ', () => {
        assertToBe(isEqual(2, '2'), false);
    });
    test('если не передать второй аргумент, то будет ошибка', () => {
        assertThrow(() => isEqual('a'), 'both parameters are required');
    });
    test('если не передать аргументы, то будет ошибка', () => {
        assertThrow(() => isEqual(), 'both parameters are required');
    });
});

describe('isNotEqualTests', () => {
    test('одиночные одинаковые символы', () => {
        assertToBe(isNotEqual('a', 'a'), false);
        assertToBe(isNotEqual('a', 'b'), true);
    });
    test('количество символов одинаково, но не равны', () => {
        assertToBe(isNotEqual('abc', 'abb'), true);
    });
    test('у первого больше символов', () => {
        assertToBe(isNotEqual('abbb', 'abb'), true);
    });
    test('второго больше символов', () => {
        assertToBe(isNotEqual('abb', 'abbb'), true);
    });
    test('пустые строки', () => {
        assertToBe(isNotEqual('', ''), false);
    });
    test('пустые и непустая строка', () => {
        assertToBe(isNotEqual('', 'a'), true);
    });
    test('сложные одинаковые строки', () => {
        assertToBe(isNotEqual(complexText, complexText), false);
    });
    test('сложные строки различной длины', () => {
        assertToBe(isNotEqual(complexText + ZERO_CODE_CHAR, complexText), true);
    });
    test('несоответствие типа второго аргумента приводит к ЛОЖЬ', () => {
        assertToBe(isNotEqual('2', 2), true);
    });
    test('несоответствие типа первого аргумента приводит к ЛОЖЬ', () => {
        assertToBe(isNotEqual(2, '2'), true);
    });
    test('если не передать второй аргумент, то будет ошибка', () => {
        assertThrow(() => isNotEqual('a'), 'both parameters are required');
    });
    test('если не передать аргументы, то будет ошибка', () => {
        assertThrow(() => isNotEqual(), 'both parameters are required');
    });
});

describe('isMoreTests', () => {
    test('первая строка больше второй по первому символу', () => {
        assertToBe(isMore('ca', 'ba'), true);
    });
    test('первая строка больше второй по последнему символу', () => {
        assertToBe(isMore('abc', 'abb'), true);
    });
    test('первая и вторая равны', () => {
        assertToBe(isMore('abb', 'abb'), false);
    });
    test('вторая строка не больше первой по последнему символу', () => {
        assertToBe(isMore('abb', 'abc'), false);
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
    test('пустые строки', () => {
        assertToBe(isMore('', ''), false);
    });
    test('пустая строка не больше чем непустая строка', () => {
        assertToBe(isMore('', ZERO_CODE_CHAR), false);
    });
    test('не пустая строка больше чем пустая', () => {
        assertToBe(isMore(ZERO_CODE_CHAR, ''), true);
    });
    test('первая и вторая равны по содержанию, но первая меньше по длине', () => {
        assertToBe(isMore('abb', 'abba'), false);
    });
    test('несоответствие типа второго аргумента приводит к ЛОЖЬ', () => {
        assertToBe(isMore('2', 2), false);
    });
    test('несоответствие типа первого аргумента приводит к ЛОЖЬ', () => {
        assertToBe(isMore(2, '2'), false);
    });
    test('если не передать второй аргумент, то будет ошибка', () => {
        assertThrow(() => isMore('a'), 'both parameters are required');
    });
    test('если не передать аргументы, то будет ошибка', () => {
        assertThrow(() => isMore(), 'both parameters are required');
    });
});

describe('isLessTests', () => {
    test('первая строка меньше второй по первому символу', () => {
        assertToBe(isLess('ba', 'ca'), true);
    });
    test('первая строка меньше второй по последнему символу', () => {
        assertToBe(isLess('abb', 'abc'), true);
    });
    test('первая и вторая равны', () => {
        assertToBe(isLess('abb', 'abb'), false);
    });
    test('вторая строка не меньше первой по последнему символу', () => {
        assertToBe(isLess('abc', 'abb'), false);
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
        assertToBe(isLess('2', 2), false);
    });
    test('несоответствие типа первого аргумента приводит к ЛОЖЬ', () => {
        assertToBe(isLess(2, '2'), false);
    });
    test('если не передать второй аргумент, то будет ошибка', () => {
        assertThrow(() => isLess('a'), 'both parameters are required');
    });
    test('если не передать аргументы, то будет ошибка', () => {
        assertThrow(() => isLess(), 'both parameters are required');
    });
});

describe('isMoreOrEqualTests', () => {
    test('первая строка больше второй по первому символу', () => {
        assertToBe(isMoreOrEqual('ca', 'ba'), true);
    });
    test('первая строка больше второй по последнему символу', () => {
        assertToBe(isMoreOrEqual('abc', 'abb'), true);
    });
    test('первая и вторая равны', () => {
        assertToBe(isMoreOrEqual('abb', 'abb'), true);
    });
    test('вторая строка не больше первой по последнему символу', () => {
        assertToBe(isMoreOrEqual('abb', 'abc'), false);
    });
    test('первая и вторая равны по содержанию, но первая больше по длине', () => {
        assertToBe(isMoreOrEqual('abb' + ZERO_CODE_CHAR, 'abb'), true);
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
    test('первая и вторая равны по содержанию, но первая меньше по длине', () => {
        assertToBe(isMoreOrEqual('abb', 'abb' + ZERO_CODE_CHAR), false);
    });
    test('несоответствие типа второго аргумента приводит к ЛОЖЬ', () => {
        assertToBe(isMoreOrEqual('2', 2), false);
    });
    test('несоответствие типа первого аргумента приводит к ЛОЖЬ', () => {
        assertToBe(isMoreOrEqual(2, '2'), false);
    });
    test('если не передать второй аргумент, то будет ошибка', () => {
        assertThrow(() => isMoreOrEqual('a'), 'both parameters are required');
    });
    test('если не передать аргументы, то будет ошибка', () => {
        assertThrow(() => isMoreOrEqual(), 'both parameters are required');
    });
});

describe('isLessOrEqualTests', () => {
    test('первая строка меньше второй по первому символу', () => {
        assertToBe(isLessOrEqual('ba', 'ca'), true);
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
        assertToBe(isLessOrEqual('2', 2), false);
    });
    test('несоответствие типа первого аргумента приводит к ЛОЖЬ', () => {
        assertToBe(isLessOrEqual(2, '2'), false);
    });
    test('если не передать второй аргумент, то будет ошибка', () => {
        assertThrow(() => isLessOrEqual('a'), 'both parameters are required');
    });
    test('если не передать аргументы, то будет ошибка', () => {
        assertThrow(() => isLessOrEqual(), 'both parameters are required');
    });
});