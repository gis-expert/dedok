import { assertToBe, assertThrow } from '../../../../dependencies/asserts/assert.js';
import { describe, test } from '../../../../dependencies/tests/test.js';
import { indexOf } from './index-of.js';
import { complexText } from './common.js';

describe('indexOfTests', () => {
  test('найти текст с середины текста', () => {
    assertToBe(indexOf(complexText, 'terminator'), 20);
  });
  // test('найти текст с начала текста', () => {
  //   assertToBe(indexOf(complexText, 'Hello'), 0);
  // });
  // test('найти текст с начала текста с одиночным символом', () => {
  //   assertToBe(indexOf(complexText, 'H'), 0);
  // });
  // test('текст не найден', () => {
  //   assertToBe(indexOf(complexText, 'Help'), -1);
  // });
  // test('регистр имеет значение', () => {
  //   assertToBe(indexOf(complexText, 'hello'), -1);
  // });
  // test('слово есть, но длина больше', () => {
  //   assertToBe(indexOf(complexText, 'terminator.'), -1);
  // });
  // test('поиск первого совпадения', () => {
  //   assertToBe(indexOf(complexText, 't'), 16);
  // });
  // test('поиск первого совпадения с тем же индексом', () => {
  //   assertToBe(indexOf(complexText, 't', 16), 16);
  // });
  // test('поиск второго совпадения', () => {
  //   assertToBe(indexOf(complexText, 't', 17), 20);
  // });
  // test('поиск третьего совпадения', () => {
  //   assertToBe(indexOf(complexText, 't', 21), 27);
  // });
  // test('после 27 символе нет символа t', () => {
  //   assertToBe(indexOf(complexText, 't', 28), -1);
  // });
  // test('отрицательный начальный индекс равнозначен нулю', () => {
  //   assertToBe(indexOf(complexText, 't', -17), 16);
  // });
  // test('пустой второй параметр дает возвращает 0', () => {
  //   assertToBe(indexOf(complexText, ''), 0);
  // });
  // test('пустой второй параметр с заполненным нач. индексом возвращает тот же индекс', () => {
  //   assertToBe(indexOf(complexText, '', 5), 5);
  // });
  // test('пустой первый параметр дает возвращает -1', () => {
  //   assertToBe(indexOf('', 'q'), -1);
  // });
  // test('дробные числа округляются', () => {
  //   assertToBe(indexOf('HeH', 'H', 2.2), 2);
  // });
  // test('дробные числа округляются, 2', () => {
  //   assertToBe(indexOf('HeH', 'H', 2.9), 2);
  // });
  // test('третий булевый параметр переводится в тип числа', () => {
  //   assertToBe(indexOf('HeH', 'H', true), 2);
  // });
  // test('третий параметр переводится в тип числа', () => {
  //   assertToBe(indexOf('HeH', 'H', '1'), 2);
  // });
  // test('если третий параметр не удается перевести в число, то вернется -1', () => {
  //   assertToBe(indexOf('feH', 'H', 's'), 2);
  // });
  // test('если второй параметр не передать, то возвратится -1', () => {
  //   assertToBe(indexOf('HeH'), -1);
  // });
  // test('если тип второго параметра не равен string, то возвратится -1', () => {
  //   assertToBe(indexOf('HeH', true), -1);
  // });
  // test('если тип второго параметра не равен string 2, то возвратится -1', () => {
  //   assertToBe(indexOf('HeH', {}), -1);
  // });
  // test('если не передать первый аргумент, то будет исключение', () => {
  //   assertThrow(() => indexOf(), 'text must not be of undefined');
  // });
  // test('если тип первого аргумента не строка, то будет исключение', () => {
  //   assertThrow(() => indexOf(true), 'text must be of type string');
  // });
});
