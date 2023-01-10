import { assertToBe, assertThrow } from '../../../../dependencies/asserts/assert.js';
import { describe, test } from '../../../../dependencies/tests/test.js';
import { padStart, padEnd } from './pad.js';

describe('padStartTests', () => {
  test('увеличить до необходимой длины', () => {
    assertToBe(padStart('he', 4), '  he');
    assertToBe(padStart('heh', 6), '   heh');
  });
  test('если длина совпадает, то вернется то же значение', () => {
    assertToBe(padStart('hehe', 4), 'hehe');
  });
  test('если макс. длина меньше, то вернется то же значение', () => {
    assertToBe(padStart('hehe', 3), 'hehe');
  });
  test('если макс. длина равна нулю, то вернется то же значение', () => {
    assertToBe(padStart('hehe', 0), 'hehe');
  });
  test('если макс. длина отрицательна, то вернется то же значение', () => {
    assertToBe(padStart('hehe', -7), 'hehe');
  });
  test('если макс. длина отсутствует, то вернется то же значение', () => {
    assertToBe(padStart('hehe'), 'hehe');
  });
  test('несоответствие типа второго параметра, то вернется то же значение', () => {
    assertToBe(padStart('hehe', null), 'hehe');
  });
  test('несоответствие типа второго параметра (строка), то вернется то же значение', () => {
    assertToBe(padStart('hehe', 's'), 'hehe');
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
    assertToBe(padStart('he', 8, true), 'truetrhe');
  });
  test('проверка типов первого аргумента', () => {
    assertThrow(() => padStart(), 'text must not be of undefined');
    assertThrow(() => padStart(true), 'text must be of type string');
  });
});

describe('padEndTests', () => {
  test('увеличить до необходимой длины', () => {
    assertToBe(padEnd('he', 4), 'he  ');
    assertToBe(padEnd('heh', 6), 'heh   ');
  });
  test('если длина совпадает, то вернется то же значение', () => {
    assertToBe(padEnd('hehe', 4), 'hehe');
  });
  test('если макс. длина меньше, то вернется то же значение', () => {
    assertToBe(padEnd('hehe', 3), 'hehe');
  });
  test('если макс. длина равна нулю, то вернется то же значение', () => {
    assertToBe(padEnd('hehe', 0), 'hehe');
  });
  test('если макс. длина отрицательна, то вернется то же значение', () => {
    assertToBe(padEnd('hehe', -7), 'hehe');
  });
  test('если макс. длина отсутствует, то вернется то же значение', () => {
    assertToBe(padEnd('hehe'), 'hehe');
  });
  test('несоответствие типа второго параметра, то вернется то же значение', () => {
    assertToBe(padEnd('hehe', null), 'hehe');
  });
  test('несоответствие типа второго параметра (число), то вернется то же значение', () => {
    assertToBe(padEnd('hehe', 1), 'hehe');
  });
  test('несоответствие типа второго параметра (строка), то вернется то же значение', () => {
    assertToBe(padEnd('hehe', 's'), 'hehe');
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
    assertToBe(padEnd('he', 8, true), 'hetruetr');
  });
  test('проверка типов первого аргумента', () => {
    assertThrow(() => padEnd(), 'text must not be of undefined');
    assertThrow(() => padEnd(true), 'text must be of type string');
  });
});
