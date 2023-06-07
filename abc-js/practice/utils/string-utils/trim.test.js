import { assertToBe, assertThrow } from '../../../../dependencies/asserts/assert.js';
import { describe, test } from '../../../../dependencies/tests/test.js';
import { trim, trimStart, trimEnd } from './trim.js';

describe('trimLeftTests', () => {
  test('удалить пробелы спереди', () => {
    assertToBe(trimStart('  Hi'), 'Hi');
  });
  test('удалить перевод строки и пробел спереди', () => {
    assertToBe(trimStart('\n Hi'), 'Hi');
  });
  test('удалить табуляция и пробел спереди', () => {
    assertToBe(trimStart('\t Hi'), 'Hi');
  });
  test('удалить верт. табуляция и пробел спереди', () => {
    assertToBe(trimStart('\v Hi'), 'Hi');
  });
  test('символы сзади не трогаются', () => {
    assertToBe(trimStart('  Hi '), 'Hi ');
  });
  test('перевод строки сзади не трогаются', () => {
    assertToBe(trimStart('  Hi \n'), 'Hi \n');
  });
  test('табуляция сзади не трогаются', () => {
    assertToBe(trimStart('  Hi \t'), 'Hi \t');
  });
  test('верт. табуляция сзади не трогаются', () => {
    assertToBe(trimStart('  Hi \v'), 'Hi \v');
  });
  test('без символов к удалению, возвращается копия строки', () => {
    assertToBe(trimStart('Hi'), 'Hi');
  });
  test('пробелы после символа не трогаются', () => {
    assertToBe(trimStart(', Hi'), ', Hi');
  });
  test('строка полностью из удаляемых символов', () => {
    assertToBe(trimStart(' \v \n \t\t'), '');
  });
  test('передан второй параметр, первый аргумент обрезается', () => {
    assertToBe(trimStart('hello world', 'eohd'), 'llo world');
  });
  test('передан второй параметр, первый аргумент не обрезается', () => {
    assertToBe(trimStart('hello world', 'woe'), 'hello world');
  });
  test('второй параметр должен быть только строковым', () => {
    assertThrow(() => trimStart('hello', true), 'argument trimSymbols must be type of string');
  });
  test('первый параметр должен быть только строковым', () => {
    assertThrow(() => trimStart(), 'argument text must be type of string');
    assertThrow(() => trimStart(true), 'argument text must be type of string');
  });
});

describe('trimRightTests', () => {
  test('удалить пробелы спереди', () => {
    assertToBe(trimEnd('Hi  '), 'Hi');
  });
  test('удалить перевод строки и пробел сзади', () => {
    assertToBe(trimEnd('Hi\n '), 'Hi');
  });
  test('удалить табуляция и пробел сзади', () => {
    assertToBe(trimEnd('Hi\t '), 'Hi');
  });
  test('удалить верт. табуляция и пробел сзади', () => {
    assertToBe(trimEnd('Hi\v '), 'Hi');
  });
  test('символы спереди не трогаются', () => {
    assertToBe(trimEnd('  Hi '), '  Hi');
  });
  test('перевод строки спереди не трогаются', () => {
    assertToBe(trimEnd(' \nHi '), ' \nHi');
  });
  test('табуляция спереди не трогаются', () => {
    assertToBe(trimEnd(' \tHi '), ' \tHi');
  });
  test('верт. табуляция спереди не трогаются', () => {
    assertToBe(trimEnd(' \vHi '), ' \vHi');
  });
  test('без символов к удалению, возвращается копия строки', () => {
    assertToBe(trimEnd('Hi'), 'Hi');
  });
  test('пробелы после символа не трогаются', () => {
    assertToBe(trimEnd('. Hi ,'), '. Hi ,');
  });
  test('строка полностью из удаляемых символов', () => {
    assertToBe(trimEnd(' \v \n \t\t'), '');
  });
  test('передан второй параметр, первый аргумент обрезается', () => {
    assertToBe(trimEnd('hello world', 'eohd'), 'hello worl');
  });
  test('передан второй параметр, первый аргумент не обрезается', () => {
    assertToBe(trimEnd('hello world', 'woe'), 'hello world');
  });
  test('второй параметр должен быть только строковым', () => {
    assertThrow(() => trimEnd('hello', true), 'argument trimSymbols must be type of string');
  });
  test('первый параметр должен быть только строковым', () => {
    assertThrow(() => trimEnd(), 'argument text must be type of string');
    assertThrow(() => trimEnd(true), 'argument text must be type of string');
  });
});

describe('trimTests', () => {
  test('удалить пробелы спереди', () => {
    assertToBe(trim('  Hi'), 'Hi');
  });
  test('удалить перевод строки и пробел сзади', () => {
    assertToBe(trim('Hi\n '), 'Hi');
  });
  test('удалить табуляция и пробел сзади', () => {
    assertToBe(trim('Hi\t '), 'Hi');
  });
  test('удалить верт. табуляция и пробел сзади', () => {
    assertToBe(trim('Hi\v '), 'Hi');
  });
  test('удалить символы спереди и сзади', () => {
    assertToBe(trim('  Hi '), 'Hi');
  });
  test('удалить перевод строки и пробелы спереди и сзади', () => {
    assertToBe(trim(' \nHi '), 'Hi');
  });
  test('удалить табуляцию спереди и пробелы спереди и сзади', () => {
    assertToBe(trim(' \tHi '), 'Hi');
  });
  test('удалить верт. табуляция спереди и пробелы спереди и сзади', () => {
    assertToBe(trim(' \vHi '), 'Hi');
  });
  test('без символов к удалению, возвращается копия строки', () => {
    assertToBe(trim('Hi'), 'Hi');
  });
  test('пробелы внутри строки не трогаются', () => {
    assertToBe(trim(',  Hi .'), ',  Hi .');
  });
  test('строка полностью из удаляемых символов', () => {
    assertToBe(trim(' \v \n \t\t'), '');
  });
  test('второй параметр должен быть только строковым', () => {
    assertThrow(() => trim('hello', true), 'argument trimSymbols must be type of string');
  });
  test('первый параметр должен быть только строковым', () => {
    assertThrow(() => trim(), 'argument text must be type of string');
    assertThrow(() => trim(true), 'argument text must be type of string');
  });
});
