import { assertToBe, assertThrow } from '../../../../dependencies/asserts/assert.js';
import { describe, test } from '../../../../dependencies/tests/test.js';
import { indexOf } from './index-of.js';
import { complexText } from './common.js';
import { len } from './len.js';

describe('indexOfTests', () => {
  test('найти текст с середины текста', () => {
    assertToBe(indexOf(complexText, 'terminator'), 20);
    console.log('---------------середины текста');
  });
  test('найти текст с начала текста', () => {
    assertToBe(indexOf(complexText, 'Hello'), 0);
    console.log('---------------начала текста');
  });
  test('найти текст с начала текста с одиночным символом', () => {
    assertToBe(indexOf(complexText, 'H'), 0);
    console.log('---------------одиночным символом');
  });
  test('текст не найден', () => {
    assertToBe(indexOf(complexText, 'Help'), -1);
    console.log('---------------текст не найден');
  });
  test('регистр имеет значение', () => {
    assertToBe(indexOf(complexText, 'hello'), -1);
    console.log('---------------регистр имеет значение');
  });
  test('слово есть, но длина больше', () => {
    assertToBe(indexOf(complexText, 'terminator.'), -1);
    console.log('---------------слово есть, но длина больше');
  });
  test('поиск первого совпадения', () => {
    assertToBe(indexOf(complexText, 't'), 16);
  });
  test('поиск первого совпадения с тем же индексом', () => {
    assertToBe(indexOf(complexText, 't', 16), 16);
  });
  test('поиск второго совпадения', () => {
    console.log('---------------поиск второго совпадения');

    assertToBe(indexOf(complexText, 't', 17), 20);
  });
  test('поиск третьего совпадения', () => {
    assertToBe(indexOf(complexText, 't', 21), 27);
  });
  test('после 27 символе нет символа t', () => {
    assertToBe(indexOf(complexText, 't', 28), -1);
  });
  test('искомый текст встречается после начального индекса и находится нормально', () => {
    assertToBe(indexOf('I am: he hello brother. Answer: hello!', 'hello'), 9);
  })
  test('второй параметр как пустая строка возвращает -1', () => {
    assertToBe(indexOf(complexText, ''), -1);
    assertToBe(indexOf(complexText, '', 5), -1);
  });
  test('пустой первый параметр дает возвращает -1', () => {
    assertToBe(indexOf('', 'q'), -1);
  });
  test('отрицательный начальный индекс приводит к исключению', () => {
    assertThrow(() => indexOf(complexText, 't', -17), 'invalid index');
  });
  test('начальный индекс больше длины приводит к исключениею', () => {
    assertThrow(() => indexOf(complexText, 't', len(complexText) + 1), 'invalid index');
  });
  test('дробные числа округляются в индексе приводит к исключению', () => {
    assertThrow(() => indexOf(complexText, 't', 2.2), 'invalid index');
  });
  test('индекс должен быть только с числовым типом', () => {
    assertThrow(() => indexOf(complexText, 't', true), 'invalid index');
    assertThrow(() => indexOf(complexText, 't', '2'), 'invalid index');
  });
  test('второй параметр обазятелен', () => {
    console.log('---------------второй параметр обазятелен');
    assertThrow(() => indexOf('trusted true'), 'invalid searchString string');
  });
  test('тип второго параметра должен быть string', () => {
    console.log('---------------тип второго параметра');

    assertThrow(() => indexOf('trusted true', true), 'invalid searchString string');
    assertThrow(() => indexOf('only 33', 3), 'invalid searchString string');
  });
  test('если тип первого аргумента не строка, то будет исключение', () => {
    console.log('---------------тип первого аргумента не строка');
    assertThrow(() => indexOf(), 'argument must be type of string');
    assertThrow(() => indexOf(true), 'argument must be type of string');
  });
});
