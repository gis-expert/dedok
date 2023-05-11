import { assertToBe, assertThrow } from '../../../../dependencies/asserts/assert.js';
import { describe, test } from '../../../../dependencies/tests/test.js';
import { includes } from './includes.js';
import { complexText } from './common.js';
import { len } from './len.js';

describe('includesTests', () => {
  test('найти текст с середины текста', () => {
    assertToBe(includes('hello', 'hel'), true);
    assertToBe(includes(complexText, 'terminator'), true);
  });
  test('найти пустую строку в тексте', () => {
    assertToBe(includes(complexText, ''), true);
    assertToBe(includes('Hello', ''), true);
    assertToBe(includes('', ''), true);
  });
  test('найти символы с пробелами в тексте', () => {
    assertToBe(includes(complexText, 'lo wor'), true);
    assertToBe(includes('    hello   ', 'llo'), true);
    assertToBe(includes('hello world', 'o w'), true);
  });
   test('найти текст с начала текста', () => {
     assertToBe(includes(complexText, 'Hello'), true);
   });
   test('найти текст с начала текста с одиночным символом', () => {
     assertToBe(includes(complexText, 'H'), true);
     assertToBe(includes(complexText, 'z'), false);
   });
   test('текст не найден', () => {
     assertToBe(includes(complexText, 'Help'), false);
     assertToBe(includes(complexText, 'foood'), false);
   });
   test('регистр имеет значение', () => {
     assertToBe(includes(complexText, 'hello'), false);
   });
   test('слово есть, но длина больше', () => {
     assertToBe(includes(complexText, 'terminator..'), false);
   });
   test('поиск первого совпадения', () => {
     assertToBe(includes('I love programming and listening to music', 'o'), true);
   });
   test('поиск первого совпадения,после того как передали индекс', () => {
     assertToBe(includes('I love programming and listening to music', 'v', 12), false);
     assertToBe(includes('I love programming and listening to music', 'o', 3), true);
   });
   test('после 27 символе нет символа t', () => {
     assertToBe(includes(complexText, 't', 28),false);
   });
   test('второй параметр пробел строка возвращает', () => {
     assertToBe(includes(complexText, ' '), true);
     assertToBe(includes(complexText, ' ', 27), false);
   });
   test('пустой первый параметр дает возвращает false', () => {
     assertToBe(includes('', 'hello'), false);
   });
   test('отрицательный начальный индекс приводит к исключению', () => {
     assertThrow(() => includes(complexText, 't', -17), 'invalid index');
   });
   test('начальный индекс больше длины приводит к исключениею', () => {
     assertThrow(() => includes(complexText, 't', len(complexText) + 1), 'invalid index');
   });
   test('дробные числа округляются в индексе приводит к исключению', () => {
     assertThrow(() => includes(complexText, 't', 2.2), 'invalid index');
   });
   test('индекс должен быть только с числовым типом', () => {
     assertThrow(() => includes(complexText, 't', true), 'invalid index');
     assertThrow(() => includes(complexText, 't', '2'), 'invalid index');
   });
   test('второй параметр обазятелен', () => {
     assertThrow(() => includes('trusted true'), 'invalid searchString string');
   });
   test('тип второго параметра должен быть string', () => {
     assertThrow(() => includes('trusted true', true), 'invalid searchString string');
     assertThrow(() => includes('only 33', 3), 'invalid searchString string');
   });
   test('если тип первого аргумента не строка, то будет исключение', () => {
     assertThrow(() => includes(), 'argument must be type of string');
     assertThrow(() => includes(true), 'argument must be type of string');
   });
});
