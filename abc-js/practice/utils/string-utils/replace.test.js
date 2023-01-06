import { assertToBe, assertThrow } from '../../../../dependencies/asserts/assert.js';
import { describe, test } from '../../../../dependencies/tests/test.js';
import { replace, replaceAll } from './replace.js';
import { complexText } from './common.js';

describe('replaceTests', () => {
  test('поменять вхождение текста', () => {
    assertToBe(replace(complexText, "It's", "It is not"), 'Hello world!!! It is not terminator');
  });
  test('не найденное вхождение, текст остался', () => {
    assertToBe(replace(complexText, "It`s", "It is"), complexText);
  });
  test('меняется только первое вхождение в начале строки', () => {
    assertToBe(replace('he he ho he', 'he', 'uh'), 'uh he ho he');
  });
  test('меняется только первое вхождение в середине строки', () => {
    assertToBe(replace('ha he ho he', 'he', 'uh'), 'ha uh ho he');
  });
  test('удалить вхождение текста (передав пустую строку)', () => {
    assertToBe(replace('Hi is guy, my name is Jon', ' is', ''), 'Hi guy, my name is Jon');
  });
  test('тип третьего параметра меняется на строку', () => {
    assertToBe(replace('he ha', 'ha', 2), 'he 2');
  });
  test('тип второго параметра меняется на строку', () => {
    assertToBe(replace('he 2', 2, 'ha'), 'he ha');
  });
  test('случай, когда заменяемое слово включает слово поиска', () => {
    assertToBe(replace('Happy', 'app', ' app '), 'H app y');
  });
  test('если не передать третий аргумент, то будет исключение', () => {
    assertThrow(() => replace(complexText, 'It'), 'replace must not be of undefined');
  });
  test('если не передать второй аргумент, то будет исключение', () => {
    assertThrow(() => replace(complexText), 'search must not be of undefined');
  });
  test('если не передать первый аргумент, то будет исключение', () => {
    assertThrow(() => replace(), 'text must not be of undefined');
  });
  test('если тип первого аргумента на строка, то будет исключение', () => {
    assertThrow(() => replace(true), 'text must be of type string');
  });
});

describe('replaceAllTests', () => {
  test('поменять вхождение текста', () => {
    assertToBe(replaceAll(complexText, "It's", "It is not"), 'Hello world!!! It is not terminator');
  });
  test('не найденное вхождение, текст остался', () => {
    assertToBe(replaceAll(complexText, "It`s", "It is"), complexText);
  });
  test('меняется все вхождения в начале и конце строки', () => {
    assertToBe(replaceAll('he he ho he', 'he', 'uh'), 'uh uh ho uh');
  });
  test('меняется все вхождения в середине строки', () => {
    assertToBe(replaceAll('hh he ho he hm', 'he', 'uh'), 'hh uh ho uh hm');
  });
  test('удалить вхождение текста (передав пустую строку)', () => {
    assertToBe(replaceAll('Hi is gui, my name is Jon', ' is', ''), 'Hi gui, my name Jon');
  });
  test('тип третьего параметра меняется на строку', () => {
    assertToBe(replaceAll('he ha', 'ha', 2), 'he 2');
  });
  test('тип второго параметра меняется на строку', () => {
    assertToBe(replaceAll('he 2', 2, 'ha'), 'he ha');
  });
  test('случай, когда заменяемое слово включает слово поиска', () => {
    assertToBe(replaceAll('Happy', 'app', ' app '), 'H app y');
  });
  test('если не передать третий аргумент, то будет исключение', () => {
    assertThrow(() => replaceAll(complexText, 'It'), 'newSubStr must not be of undefined');
  });
  test('если не передать второй аргумент, то будет исключение', () => {
    assertThrow(() => replaceAll(complexText), 'subStr must not be of undefined');
  });
  test('если не передать первый аргумент, то будет исключение', () => {
    assertThrow(() => replaceAll(), 'text must not be of undefined');
  });
  test('если тип первого аргумента на строка, то будет исключение', () => {
    assertThrow(() => replaceAll(true), 'text must be of type string');
  });
});
