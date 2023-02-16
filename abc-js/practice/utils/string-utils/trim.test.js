import { assertToBe, assertThrow } from '../../../../dependencies/asserts/assert.js';
import { describe, test } from '../../../../dependencies/tests/test.js';
import { trim, trimLeft, trimRight } from './trim.js';

describe('trimLeftTests', () => {
    test('удалить пробелы спереди', () => {
        assertToBe(trimLeft('  Hi'), 'Hi');
    });
    // test('удалить перевод строки и пробел спереди', () => {
    //   assertToBe(trimLeft('\n Hi'), 'Hi');
    // });
    // test('удалить табуляция и пробел спереди', () => {
    //   assertToBe(trimLeft('\t Hi'), 'Hi');
    // });
    // test('удалить верт. табуляция и пробел спереди', () => {
    //   assertToBe(trimLeft('\v Hi'), 'Hi');
    // });
    // test('символы сзади не трогаются', () => {
    //   assertToBe(trimLeft('  Hi '), 'Hi ');
    // });
    // test('перевод строки сзади не трогаются', () => {
    //   assertToBe(trimLeft('  Hi \n'), 'Hi \n');
    // });
    // test('табуляция сзади не трогаются', () => {
    //   assertToBe(trimLeft('  Hi \t'), 'Hi \t');
    // });
    // test('верт. табуляция сзади не трогаются', () => {
    //   assertToBe(trimLeft('  Hi \v'), 'Hi \v');
    // });
    // test('без символов к удалению, возвращается копия строки', () => {
    //   assertToBe(trimLeft('Hi'), 'Hi');
    // });
    // test('пробелы после символа не трогаются', () => {
    //   assertToBe(trimLeft(', Hi'), ', Hi');
    // });
    // test('строка полностью из удаляемых символов', () => {
    //   assertToBe(trimLeft(' \v \n \t\t'), '');
    // });
    // test('передан второй параметр, первый аргумент обрезается', () => {
    //   assertToBe(trimLeft('hello world', 'eohd'), 'llo world');
    // });
    // test('передан второй параметр, первый аргумент не обрезается', () => {
    //   assertToBe(trimLeft('hello world', 'woe'), 'hello world');
    // });
    // test('если не передать аргумент, то будет исключение', () => {
    //   assertThrow(() => trimLeft(), 'text must not be of undefined');
    // });
    // test('если тип первого аргумента на строка, то будет исключение', () => {
    //   assertThrow(() => trimLeft(true), 'text must be of type string');
    // });
});

describe('trimRightTests', () => {
    test('удалить пробелы спереди', () => {
        assertToBe(trimRight('Hi  '), 'Hi');
    });
    // test('удалить перевод строки и пробел сзади', () => {
    //   assertToBe(trimRight('Hi\n '), 'Hi');
    // });
    // test('удалить табуляция и пробел сзади', () => {
    //   assertToBe(trimRight('Hi\t '), 'Hi');
    // });
    // test('удалить верт. табуляция и пробел сзади', () => {
    //   assertToBe(trimRight('Hi\v '), 'Hi');
    // });
    // test('символы спереди не трогаются', () => {
    //   assertToBe(trimRight('  Hi '), '  Hi');
    // });
    // test('перевод строки спереди не трогаются', () => {
    //   assertToBe(trimRight(' \nHi '), ' \nHi');
    // });
    // test('табуляция спереди не трогаются', () => {
    //   assertToBe(trimRight(' \tHi '), ' \tHi');
    // });
    // test('верт. табуляция спереди не трогаются', () => {
    //   assertToBe(trimRight(' \vHi '), ' \vHi');
    // });
    // test('без символов к удалению, возвращается копия строки', () => {
    //   assertToBe(trimRight('Hi'), 'Hi');
    // });
    // test('пробелы после символа не трогаются', () => {
    //   assertToBe(trimRight('. Hi ,'), '. Hi ,');
    // });
    // test('строка полностью из удаляемых символов', () => {
    //   assertToBe(trimRight(' \v \n \t\t'), '');
    // });
    // test('передан второй параметр, первый аргумент обрезается', () => {
    //   assertToBe(trimRight('hello world', 'eohd'), 'hello worl');
    // });
    // test('передан второй параметр, первый аргумент не обрезается', () => {
    //   assertToBe(trimRight('hello world', 'woe'), 'hello world');
    // });
    // test('если не передать аргумент, то будет исключение', () => {
    //   assertThrow(() => trimRight(), 'text must not be of undefined');
    // });
    // test('если тип первого аргумента на строка, то будет исключение', () => {
    //   assertThrow(() => trimRight(true), 'text must be of type string');
    // });
});

describe('trimTests', () => {
    test('удалить пробелы спереди', () => {
        assertToBe(trim('  Hi'), 'Hi');
    });
    // test('удалить перевод строки и пробел сзади', () => {
    //   assertToBe(trim('Hi\n '), 'Hi');
    // });
    // test('удалить табуляция и пробел сзади', () => {
    //   assertToBe(trim('Hi\t '), 'Hi');
    // });
    // test('удалить верт. табуляция и пробел сзади', () => {
    //   assertToBe(trim('Hi\v '), 'Hi');
    // });
    // test('удалить символы спереди и сзади', () => {
    //   assertToBe(trim('  Hi '), 'Hi');
    // });
    // test('удалить перевод строки и пробелы спереди и сзади', () => {
    //   assertToBe(trim(' \nHi '), 'Hi');
    // });
    // test('удалить табуляцию спереди и пробелы спереди и сзади', () => {
    //   assertToBe(trim(' \tHi '), 'Hi');
    // });
    // test('удалить верт. табуляция спереди и пробелы спереди и сзади', () => {
    //   assertToBe(trim(' \vHi '), 'Hi');
    // });
    // test('без символов к удалению, возвращается копия строки', () => {
    //   assertToBe(trim('Hi'), 'Hi');
    // });
    // test('пробелы внутри строки не трогаются', () => {
    //   assertToBe(trim(',  Hi .'), ',  Hi .');
    // });
    // test('строка полностью из удаляемых символов', () => {
    //   assertToBe(trim(' \v \n \t\t'), '');
    // });
    // test('передан второй параметр, первый аргумент обрезается', () => {
    //   assertToBe(trim('hello world', 'eohd'), 'llo worl');
    // });
    // test('передан второй параметр, первый аргумент не обрезается', () => {
    //   assertToBe(trim('hello world', 'woe'), 'hello world');
    // });
});