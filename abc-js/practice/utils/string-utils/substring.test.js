import { assertToBe, assertThrow } from '../../../../dependencies/asserts/assert.js';
import { describe, test } from '../../../../dependencies/tests/test.js';
import { substring } from './substring.js';
import { complexText } from './common.js';

describe('substringTests', () => {
    test('получить два первых символа', () => {
        assertToBe(substring(complexText, 0, 2), 'He');
    });
    test('получить с индекса 2 по 5 индекс', () => {
        assertToBe(substring(complexText, 2, 5), 'llo');
    });
    test('если передать одинаковый индекс, то возвращается пустая строка', () => {
        assertToBe(substring(complexText, 5, 5), '');
    });
    test('если не передавать второй индекс, то возвращается до конца текста', () => {
        assertToBe(substring(complexText, 20), 'terminator');
    });
    test('если не передавать индексы, то возвращается копия строки', () => {
        assertToBe(substring(complexText), complexText);
    });
    test('если второй индекс больше длины, то возвращается до конца текста', () => {
        assertToBe(substring(complexText, 20, 60), 'terminator');
    });
    // test('если второй индекс больше первого, то индексы меняются местами', () => {
    //     assertToBe(substring(complexText, 5, 2), 'llo');
    // });
    // test('если первый индекс отрицательный, то он равен 0', () => {
    //     assertToBe(substring(complexText, -5, 2), 'He');
    // });
    // test('если второй индекс отрицательный, то возвращается с 0 индекса по значение первого аргумента', () => {
    //     assertToBe(substring(complexText, 5, -2), 'Hello');
    // });
    // test('если оба индексы отрицательные, то они равны 0', () => {
    //     assertToBe(substring(complexText, -5, -2), '');
    // });
    // test('если индексы лежат за пределами, то возвзращается пустая строка', () => {
    //     assertToBe(substring('a', 2, 5), '');
    // });
    // test('индексы приводятся в тип числа', () => {
    //     assertToBe(substring(complexText, true, '5'), 'ello');
    // });
    // test('третий параметр не число становятся равным 0,', () => {
    //     assertToBe(substring(complexText, 4, 's'), 'Hell');
    // });
    // test('второй параметр не число становятся равным 0,', () => {
    //     assertToBe(substring(complexText, 's', 5), 'Hello');
    // });
    // test('второй и третий параметр не число и становятся равным 0,', () => {
    //     assertToBe(substring(complexText, 's', 't'), '');
    // });
    // test('дробная часть второго и третьего параметра отбрасывается', () => {
    //     assertToBe(substring(complexText, 1.7, 3.1415), 'el');
    // });
    // test('если не передать первый аргумент, то будет исключение', () => {
    //     assertThrow(() => substring(), 'text must not be of undefined');
    // });
    // test('если тип первого аргумента нe строка, то будет исключение', () => {
    //     assertThrow(() => substring(true, 2), 'text must be of type string');
    // });
});