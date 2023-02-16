import { assertToBe, assertThrow } from '../../../../dependencies/asserts/assert.js';
import { describe, test } from '../../../../dependencies/tests/test.js';
import { padStart, padEnd, pad } from './pad.js';

describe('pad Tests', () => {
  describe('padStartTests', () => {
    test('увеличить до необходимой длины', () => {
      assertToBe(padStart('he', 4), '  he');
      assertToBe(padStart('heh', 6), '   heh');
      assertToBe(padStart('right align', 50), ' '.repeat(39) + 'right align');
    });
    test('если длина совпадает, то вернется то же значение', () => {
      assertToBe(padStart('hehe', 4), 'hehe');
    });
    test('если макс. длина меньше, то вернется то же значение', () => {
      assertToBe(padStart('hehe', 0), 'hehe');
      assertToBe(padStart('hehe', 3), 'hehe');
      assertToBe(padStart('hehe', -7), 'hehe');
    });
    test('если макс. длина отсутствует, то вернется то же значение', () => {
      assertToBe(padStart('hehe'), 'hehe');
      assertToBe(padStart('hehe', null), 'hehe');
    });
    test('несоответствие типа второго параметра (строка), то вернется то же значение', () => {
      assertThrow(() => padStart('hehe', 's'), 'invalid type of maxLength');
      assertThrow(() => padStart('hehe', true), 'invalid type of maxLength');
    });
    test('другая строка заполнения', () => {
      assertToBe(padStart('he', 4, '*'), '**he');
    });
    test('случай с длинной строкой заполнения', () => {
      assertToBe(padStart('he', 6, 'Abcd'), 'Abcdhe');
    });
    test('строка заполнения не кратен вставке (неполная)', () => {
      assertToBe(padStart('he', 5, 'Abcd'), 'Abche');
    });
    test('строка заполнения не кратен вставке (полная + неполная)', () => {
      assertToBe(padStart('he', 8, 'Abcd'), 'AbcdAbhe');
    });
    test('строка заполнения не строковая, пирводит к приведению типа', () => {
      assertThrow(() => padStart('he', 8, true), 'argument fillString must be type of string');
    });
    test('проверка типов первого аргумента', () => {
      assertThrow(() => padStart(), 'argument text must be type of string');
      assertThrow(() => padStart(true), 'argument text must be type of string');
    });
  });

  describe('padEndTests', () => {
    test('увеличить до необходимой длины', () => {
      assertToBe(padEnd('he', 4), 'he  ');
      assertToBe(padEnd('heh', 6), 'heh   ');
      assertToBe(padEnd('left align', 50), 'left align' + ' '.repeat(40));
    });
    test('если длина совпадает, то вернется то же значение', () => {
      assertToBe(padEnd('hehe', 4), 'hehe');
    });
    test('если макс. длина меньше, то вернется то же значение', () => {
      assertToBe(padEnd('hehe', 0), 'hehe');
      assertToBe(padEnd('hehe', 3), 'hehe');
      assertToBe(padEnd('hehe', -7), 'hehe');
    });
    test('если макс. длина отсутствует, то вернется то же значение', () => {
      assertToBe(padEnd('hehe'), 'hehe');
      assertToBe(padEnd('hehe', null), 'hehe');
    });
    test('несоответствие типа второго параметра (строка), то вернется то же значение', () => {
      assertThrow(() => padEnd('hehe', 's'), 'invalid type of maxLength');
      assertThrow(() => padEnd('hehe', true), 'invalid type of maxLength');
    });
    test('другая строка заполнения', () => {
      assertToBe(padEnd('he', 4, '*'), 'he**');
    });
    test('случай с длинной строкой заполнения', () => {
      assertToBe(padEnd('he', 6, 'Abcd'), 'heAbcd');
    });
    test('строка заполнения не кратен вставке (неполная)', () => {
      assertToBe(padEnd('he', 5, 'Abcd'), 'heAbc');
    });
    test('строка заполнения не кратен вставке (полная + неполная)', () => {
      assertToBe(padEnd('he', 8, 'Abcd'), 'heAbcdAb');
    });
    test('строка заполнения не строковая, пирводит к приведению типа', () => {
      assertThrow(() => padEnd('he', 8, true), 'argument fillString must be type of string');
    });
    test('проверка типов первого аргумента', () => {
      assertThrow(() => padEnd(), 'argument text must be type of string');
      assertThrow(() => padEnd(true), 'argument text must be type of string');
    });
  });

  describe('padTests', () => {
    test('увеличить до необходимой длины', () => {
      assertToBe(pad('he', 4), ' he ');
      assertToBe(pad('he', 5), '  he ');
      assertToBe(pad('he', 6), '  he  ');
      assertToBe(
        pad('center align', 50),
        ' '.repeat(19) + 'center align' + ' '.repeat(19)
      );
    });
    test('если длина совпадает, то вернется то же значение', () => {
      assertToBe(pad('hehe', 4), 'hehe');
    });
    test('если макс. длина меньше, то вернется то же значение', () => {
      assertToBe(pad('hehe', 3), 'hehe');
      assertToBe(pad('hehe', 0), 'hehe');
      assertToBe(pad('hehe', -7), 'hehe');
    });
    test('если макс. длина отсутствует, то вернется то же значение', () => {
      assertToBe(pad('hehe'), 'hehe');
    });
    test('другая строка заполнения', () => {
      assertToBe(pad('he', 4, '*'), '*he*');
      assertToBe(pad('he', 5, '*'), '**he*');
      assertToBe(pad('he', 6, '*'), '**he**');
    });
    test('случай с длинной строкой заполнения', () => {
      assertToBe(pad(' hi my friend ', 26, '+-'), '+-+-+- hi my friend +-+-+-');
      assertToBe(pad(' he ', 8, 'Abcd'), 'Ab he Ab');
      assertToBe(pad(' he ', 10, 'Abcd'), 'Abc he Abc');
    });
    test('строка заполнения не кратен вставке (неполная)', () => {
      assertToBe(pad(' hi my friend ', 25, '+-'), '+-+-+- hi my friend +-+-+');
      assertToBe(pad(' hi my friend ', 24, '+-'), '+-+-+ hi my friend +-+-+');
      assertToBe(pad(' hi my friend ', 23, '+-'), '+-+-+ hi my friend +-+-');
      assertToBe(pad(' he ', 9, 'Abcd'), 'Abc he Ab');
    });
    test('третий параметр должен быть только строкой', () => {
      assertThrow(() => pad('hehe', 6, 2), 'argument fillString must be type of string');
      assertThrow(() => pad('hehe', 6, true), 'argument fillString must be type of string');
    });
    test('второй параметр должен быть только числом', () => {
      assertThrow(() => pad('hehe', '6'), 'invalid type of maxLength');
      assertThrow(() => pad('hehe', true), 'invalid type of maxLength');
    });
    test('первый параметр должен быть только строкой', () => {
      assertThrow(() => pad(), 'argument text must be type of string');
      assertThrow(() => pad(true), 'argument text must be type of string');
    });
  });
});
