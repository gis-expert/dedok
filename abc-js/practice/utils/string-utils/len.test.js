import { assertToBe, assertThrow } from '../../../../dependencies/asserts/assert.js';
import { describe, test } from '../../../../dependencies/tests/test.js';
import { complexText, ZERO_CODE_CHAR } from './common.js';
import { len } from './len.js';

describe('lenTests', () => {
  test('пустая строка возвращает 0', () => {
    assertToBe(len(''), 0);
  });
  
  test('одиночные символы возвращают 1', () => {
    assertToBe(len('a'), 1);
    assertToBe(len(ZERO_CODE_CHAR), 1);
    assertToBe(len('\n'), 1);
  });
  
  test('сложные строки возвращают истинную длину', () => {
    assertToBe(len(complexText), complexText.length);
  });
  
  test('строка с кириллическими символами', () => {
    const testString = 'Это 1 строка с кириллическими символами вместе с символом перевода строки \n';
    assertToBe(len(testString), testString.length);
  });
  
  test('вызов без передачи аргумента выдает ошибку исполнения', () => {
    const errStr = 'argument must be type of string';
    assertThrow(() => len(), errStr);
  });
  
  test('другие типы выдают ошибку исполнения', () => {
    const errStr = 'argument must be type of string';
    assertThrow(() => len(1), errStr);
    assertThrow(() => len(true), errStr);
    assertThrow(() => len([]), errStr);
    assertThrow(() => len(null), errStr);
  });
});
