import { assertToBe, assertThrow } from '../../../../dependencies/asserts/assert.js';
import { describe, test } from '../../../../dependencies/tests/test.js';
import { replace, replaceAll } from './replace.js';
import { complexText } from './common.js';

describe('replaceTests', () => {
  test('поменять вхождение текста', () => {
    assertToBe(replace('abc', 'a', 'b'), 'bbc');
    assertToBe(replace('abc', 'b', 'a'), 'aac');
    assertToBe(replace('JS is great language', 'JS', 'Ts'), 'Ts is great language');
    assertToBe(replace('JS is great language', 'great', 'funny'), 'JS is funny language');
    assertToBe(replace(complexText, "It's", "It is not"), 'Hello world!!! It is not terminator');
  });
  test('не найденное вхождение, текст остался', () => {
    assertToBe(replace('abc', 'd', 'b'), 'abc');
    assertToBe(replace('JS is great language', 'greet', 'funny'), 'JS is great language');
    assertToBe(replace(complexText, "It`s", "It is"), complexText);
  });
  test('меняется только первое вхождение в начале строки', () => {
    assertToBe(replace('bbc', 'a', 'b'), 'bbc');
    assertToBe(replace('he he ho he', 'he', 'uh'), 'uh he ho he');
  });
  test('меняется только первое вхождение в середине строки', () => {
    assertToBe(replace('abb', 'bb', 'um'), 'aum');
    assertToBe(replace('ha he ho he', 'he', 'uh'), 'ha uh ho he');
  });
  test('удалить вхождение текста (передав пустую строку)', () => {
    assertToBe(replace('abc', 'b', ''), 'ac');
    assertToBe(replace('Hi is guy, my name is Jon', ' is', ''), 'Hi guy, my name is Jon');
  });
  test('случай, когда заменяемое слово включает слово поиска', () => {
    assertToBe(replace('Happy', 'app', ' app '), 'H app y');
  });
  test('третий параметр должен быть только строкового типа', () => {
    assertThrow(() => replace('he ha', 'ha'), 'argument target must be type of string');
    assertThrow(() => replace('he ha', 'ha', 2), 'argument target must be type of string');
    assertThrow(() => replace('he ha', 'ha', ['hm']), 'argument target must be type of string');
  });
  test('второй параметр должен быть только строкового типа', () => {
    assertThrow(() => replace('he ha'), 'argument search must be type of string');
    assertThrow(() => replace('he ha', undefined, 'ha'), 'argument search must be type of string');
    assertThrow(() => replace('he ha', 2, 'ha'), 'argument search must be type of string');
  });
  test('первый параметр должен быть только строкового типа', () => {
    assertThrow(() => replace(), 'argument text must be type of string');
    assertThrow(() => replace(undefined, 'u', 'a'), 'argument text must be type of string');
    assertThrow(() => replace(25, '2', '5'), 'argument text must be type of string');
    assertThrow(() => replace(true, 'r', 't'), 'argument text must be type of string');
  });
});

describe('replaceAllTests', () => {
  test('поменять одно вхождение текста', () => {
    assertToBe(replaceAll('abc', 'a', 'b'), 'bbc');
    assertToBe(replaceAll('JS is great language', 'JS', 'Ts'), 'Ts is great language');
    assertToBe(replaceAll('JS is great language', 'great', 'funny'), 'JS is funny language');
    assertToBe(replaceAll(complexText, "It's", 'It is not'), 'Hello world!!! It is not terminator');
  });
  test('поменять несколько вхождений текста', () => {
    assertToBe(replaceAll('bbc', 'b', 'a'), 'aac');
    assertToBe(replaceAll('who is who?', 'who', 'WHO'), 'WHO is WHO?');
    assertToBe(replaceAll(complexText, "It's", 'It is not'), 'Hello world!!! It is not terminator');
  });
  test('не найденное вхождение, текст остался', () => {
    assertToBe(replaceAll('bbc', 'a', 'c'), 'bbc');
    assertToBe(replaceAll(complexText, "It`s", "It is"), complexText);
  });
  test('меняется все вхождения в начале и конце строки', () => {
    assertToBe(replaceAll('cbbc', 'c', 'a'), 'abba');
    assertToBe(replaceAll('who is who?', 'who', 'WHO'), 'WHO is WHO?');
    assertToBe(replaceAll('he he ho he', 'he', 'uh'), 'uh uh ho uh');
  });
  test('меняется все вхождения в середине строки', () => {
    assertToBe(replaceAll('1. who is who?', 'who', 'WHO'), '1. WHO is WHO?');
    assertToBe(replaceAll('hh he ho he hm', 'he', 'uh'), 'hh uh ho uh hm');
  });
  test('удалить вхождение текста (передав пустую строку)', () => {
    assertToBe(replaceAll('1. who is who?', 'who', ''), '1.  is ?');
    assertToBe(replaceAll('1. who is who?', 'who ', ''), '1. is who?');
    assertToBe(replaceAll('Hi is gui, my name is Jon', ' is', ''), 'Hi gui, my name Jon');
  });
  test('случай, когда заменяемое слово включает слово поиска', () => {
    assertToBe(replaceAll('Happy', 'app', ' app '), 'H app y');
  });
  test('третий параметр должен быть только строкового типа', () => {
    assertThrow(() => replaceAll('he ha', 'ha'), 'argument target must be type of string');
    assertThrow(() => replaceAll('he ha', 'ha', 2), 'argument target must be type of string');
    assertThrow(() => replaceAll('he ha', 'ha', ['hm']), 'argument target must be type of string');
  });
  test('второй параметр должен быть только строкового типа', () => {
    assertThrow(() => replaceAll('he ha'), 'argument search must be type of string');
    assertThrow(() => replaceAll('he ha', undefined, 'ha'), 'argument search must be type of string');
    assertThrow(() => replaceAll('he ha', 2, 'ha'), 'argument search must be type of string');
  });
  test('первый параметр должен быть только строкового типа', () => {
    assertThrow(() => replaceAll(), 'argument text must be type of string');
    assertThrow(() => replaceAll(undefined, 'u', 'a'), 'argument text must be type of string');
    assertThrow(() => replaceAll(25, '2', '5'), 'argument text must be type of string');
    assertThrow(() => replaceAll(true, 'r', 't'), 'argument text must be type of string');
  });
});
