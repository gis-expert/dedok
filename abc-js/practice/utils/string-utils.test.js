import { assertToBe, assertThrow } from '../../../dependencies/asserts/assert.js';
import { describe, test } from '../../../dependencies/tests/test.js';
import { testHtmlMain } from '../../../dependencies/tests/test2html.js';
import {
  isEqual, isMore, isLess, isMoreOrEqual, isLessOrEqual,
  toString, repeat, substring, indexOf,
  trim, trimLeft, trimRight, reverse, replace, replaceAll,
  padEnd, padStart,
} from './nur-string-utils.js';

const complexText = "Hello world!!! It's terminator";
const ZERO_CODE_CHAR = String.fromCharCode(0);

describe('isEqualTests', () => {
  test('одиночные одинаковые символы', () => {
    assertToBe(isEqual('a', 'a'), true);
    assertToBe(isEqual('a', 'b'), false);
  });
  // test('количество символов одинаково, но не равны', () => {
  //   assertToBe(isEqual('abc', 'abb'), false);
  // });
  // test('равны, но у первого больше символов', () => {
  //   assertToBe(isEqual('abbb', 'abb'), false);
  // });
  // test('равны, но у второго больше символов', () => {
  //   assertToBe(isEqual('abb', 'abbb'), false);
  // });
  // test('пустые строки', () => {
  //   assertToBe(isEqual('', ''), true);
  // });
  // test('пустые и непустая строка', () => {
  //   assertToBe(isEqual('', 'a'), false);
  // });
  // test('сложные одинаковые строки', () => {
  //   assertToBe(isEqual(complexText, complexText), true);
  // });
  // test('сложные строки различной длины', () => {
  //   assertToBe(isEqual(complexText + ZERO_CODE_CHAR, complexText), false);
  // });
  // test('несоответствие типа второго аргумента приводит к ЛОЖЬ', () => {
  //   assertToBe(isEqual('2', 2), false);
  // });
  // test('несоответствие типа первого аргумента приводит к ЛОЖЬ', () => {
  //   assertToBe(isEqual(2, '2'), false);
  // });
  // test('если не передать второй аргумент, то будет ошибка', () => {
  //   assertThrow(() => isEqual('a'), 'both parameters are required');
  // });
  // test('если не передать аргументы, то будет ошибка', () => {
  //   assertThrow(() => isEqual(), 'both parameters are required');
  // });
});

что нужно сделать!!!
  Перевести все тесты в коменты, проверить string-utils.js
  коммит и коммит в dev.


describe('isMoreTests', () => {
  test('первая строка больше второй по первому символу', () => {
    assertToBe(isMore('ca', 'ba'), true);
  });
  // test('первая строка больше второй по последнему символу', () => {
  //   assertToBe(isMore('abc', 'abb'), true);
  // });
  // test('первая и вторая равны', () => {
  //   assertToBe(isMore('abb', 'abb'), false);
  // });
  // test('вторая строка не больше первой по последнему символу', () => {
  //   assertToBe(isMore('abb', 'abc'), false);
  // });
  // test('первая и вторая равны по содержанию, но первая больше по длине', () => {
  //   assertToBe(isMore('abb' + ZERO_CODE_CHAR, 'abb'), true);
  // });
  // test('пустые строки', () => {
  //   assertToBe(isMore('', ''), false);
  // });
  // test('пустая строка не больше чем непустая строка', () => {
  //   assertToBe(isMore('', ZERO_CODE_CHAR), false);
  // });
  // test('не пустая строка больше чем пустая', () => {
  //   assertToBe(isMore(ZERO_CODE_CHAR, ''), true);
  // });
  // test('первая и вторая равны по содержанию, но первая меньше по длине', () => {
  //   assertToBe(isMore('abb', 'abba'), false);
  // });
  // test('несоответствие типа второго аргумента приводит к ЛОЖЬ', () => {
  //   assertToBe(isMore('2', 2), false);
  // });
  // test('несоответствие типа первого аргумента приводит к ЛОЖЬ', () => {
  //   assertToBe(isMore(2, '2'), false);
  // });
  // test('если не передать второй аргумент, то будет ошибка', () => {
  //   assertThrow(() => isMore('a'), 'both parameters are required');
  // });
  // test('если не передать аргументы, то будет ошибка', () => {
  //   assertThrow(() => isMore(), 'both parameters are required');
  // });
});

describe('isLessTests', () => {
  test('первая строка меньше второй по первому символу', () => {
    assertToBe(isLess('ba', 'ca'), true);
  });
  test('первая строка меньше второй по последнему символу', () => {
    assertToBe(isLess('abb', 'abc'), true);
  });
  test('первая и вторая равны', () => {
    assertToBe(isLess('abb', 'abb'), false);
  });
  test('вторая строка не меньше первой по последнему символу', () => {
    assertToBe(isLess('abc', 'abb'), false);
  });
  test('первая и вторая равны по содержанию, но первая меньше по длине', () => {
    assertToBe(isLess('abb', 'abb' + ZERO_CODE_CHAR), true);
  });
  test('первая и вторая равны по содержанию, но первая не меньше по длине', () => {
    assertToBe(isLess('abb' + ZERO_CODE_CHAR, 'abb'), false);
  });
  test('пустые строки', () => {
    assertToBe(isLess('', ''), false);
  });
  test('пустая строка меньше чем непустая строка', () => {
    assertToBe(isLess('', ZERO_CODE_CHAR), true);
  });
  test('не пустая строка больше чем пустая', () => {
    assertToBe(isLess(ZERO_CODE_CHAR, ''), false);
  });
  test('несоответствие типа второго аргумента приводит к ЛОЖЬ', () => {
    assertToBe(isLess('2', 2), false);
  });
  test('несоответствие типа первого аргумента приводит к ЛОЖЬ', () => {
    assertToBe(isLess(2, '2'), false);
  });
  test('если не передать второй аргумент, то будет ошибка', () => {
    assertThrow(() => isLess('a'), 'both parameters are required');
  });
  test('если не передать аргументы, то будет ошибка', () => {
    assertThrow(() => isLess(), 'both parameters are required');
  });
});

describe('isMoreOrEqualTests', () => {
  test('первая строка больше второй по первому символу', () => {
    assertToBe(isMoreOrEqual('ca', 'ba'), true);
  });
  test('первая строка больше второй по последнему символу', () => {
    assertToBe(isMoreOrEqual('abc', 'abb'), true);
  });
  test('первая и вторая равны', () => {
    assertToBe(isMoreOrEqual('abb', 'abb'), true);
  });
  test('вторая строка не больше первой по последнему символу', () => {
    assertToBe(isMoreOrEqual('abb', 'abc'), false);
  });
  test('первая и вторая равны по содержанию, но первая больше по длине', () => {
    assertToBe(isMoreOrEqual('abb' + ZERO_CODE_CHAR, 'abb'), true);
  });
  test('пустые строки', () => {
    assertToBe(isMoreOrEqual('', ''), true);
  });
  test('пустая строка не больше чем непустая строка', () => {
    assertToBe(isMoreOrEqual('', ZERO_CODE_CHAR), false);
  });
  test('не пустая строка больше чем пустая', () => {
    assertToBe(isMoreOrEqual(ZERO_CODE_CHAR, ''), true);
  });
  test('первая и вторая равны по содержанию, но первая меньше по длине', () => {
    assertToBe(isMoreOrEqual('abb', 'abb' + ZERO_CODE_CHAR), false);
  });
  test('несоответствие типа второго аргумента приводит к ЛОЖЬ', () => {
    assertToBe(isMoreOrEqual('2', 2), false);
  });
  test('несоответствие типа первого аргумента приводит к ЛОЖЬ', () => {
    assertToBe(isMoreOrEqual(2, '2'), false);
  });
  test('если не передать второй аргумент, то будет ошибка', () => {
    assertThrow(() => isMoreOrEqual('a'), 'both parameters are required');
  });
  test('если не передать аргументы, то будет ошибка', () => {
    assertThrow(() => isMoreOrEqual(), 'both parameters are required');
  });
});

describe('isLessOrEqualTests', () => {
  test('первая строка меньше второй по первому символу', () => {
    assertToBe(isLessOrEqual('ba', 'ca'), true);
  });
  test('первая строка меньше второй по последнему символу', () => {
    assertToBe(isLessOrEqual('abb', 'abc'), true);
  });
  test('первая и вторая равны', () => {
    assertToBe(isLessOrEqual('abb', 'abb'), true);
  });
  test('вторая строка больше первой по последнему символу', () => {
    assertToBe(isLessOrEqual('abc', 'abb'), false);
  });
  test('первая и вторая равны по содержанию, но первая меньше по длине', () => {
    assertToBe(isLessOrEqual('abb', 'abb' + ZERO_CODE_CHAR), true);
  });
  test('первая и вторая равны по содержанию, но первая не меньше по длине', () => {
    assertToBe(isLessOrEqual('abb' + ZERO_CODE_CHAR, 'abb'), false);
  });
  test('пустые строки', () => {
    assertToBe(isLessOrEqual('', ''), true);
  });
  test('пустая строка меньше чем непустая строка', () => {
    assertToBe(isLessOrEqual('', ZERO_CODE_CHAR), true);
  });
  test('не пустая строка больше чем пустая', () => {
    assertToBe(isLessOrEqual(ZERO_CODE_CHAR, ''), false);
  });
  test('несоответствие типа второго аргумента приводит к ЛОЖЬ', () => {
    assertToBe(isLessOrEqual('2', 2), false);
  });
  test('несоответствие типа первого аргумента приводит к ЛОЖЬ', () => {
    assertToBe(isLessOrEqual(2, '2'), false);
  });
  test('если не передать второй аргумент, то будет ошибка', () => {
    assertThrow(() => isLessOrEqual('a'), 'both parameters are required');
  });
  test('если не передать аргументы, то будет ошибка', () => {
    assertThrow(() => isLessOrEqual(), 'both parameters are required');
  });
});

describe('toStringTests', () => {
  test('перевод строки в строку', () => {
    assertToBe(toString('any text'), 'any text');
  });
  test('перевод булевого значения true в строку', () => {
    assertToBe(toString(true), 'true');
  });
  test('перевод булевого значения false в строку', () => {
    assertToBe(toString(false), 'false');
  });
  test('перевод undefined в строку', () => {
    assertToBe(toString(undefined), 'undefined');
  });
  test('перевод null в строку', () => {
    assertToBe(toString(null), 'null');
  });
  test('перевод числа 3 в строку', () => {
    assertToBe(toString(3), '3');
  });
  test('перевод числа 0 в строку', () => {
    assertToBe(toString(0), '0');
  });
  test('перевод числа 1 в строку', () => {
    assertToBe(toString(1), '1');
  });
  test('перевод числа 10 в строку', () => {
    assertToBe(toString(10), '10');
  });
  test('перевод числа 100 в строку', () => {
    assertToBe(toString(100), '100');
  });
  test('перевод многозначного целого числа в строку', () => {
    assertToBe(toString(323459), '323459');
  });
  test('перевод отрицательного целого числа в строку', () => {
    assertToBe(toString(-3), '-3');
  });
  test('перевод минус ноль в строку', () => {
    assertToBe(toString(-0), '0');
  });
  test('перевод минус один в строку', () => {
    assertToBe(toString(-1), '-1');
  });
  test('перевод минус сто в строку', () => {
    assertToBe(toString(-100), '-100');
  });
  test('перевод положительного целого числа в строку', () => {
    assertToBe(toString(+3), '3');
  });
  test('перевод дробного числа в строку, раз', () => {
    assertToBe(toString(3.1415), '3.1415');
  });
  test('другие типы вызывают ошибку', () => {
    assertThrow(() => toString([2]), 'this type is not supported');
  });
});

describe('reverseTests', () => {
  test('возвращается перевернутая копия строки', () => {
    assertToBe(reverse('Hmmm'), 'mmmH');
  });
  test('возвращается перевернутая копия строки 2', () => {
    assertToBe(reverse('  Hmmm.'), '.mmmH  ');
  });
  test('пустая строка остается пустой', () => {
    assertToBe(reverse(''), '');
  });
  test('один символ остается одним символом', () => {
    assertToBe(reverse(' '), ' ');
  });
  test('если не передать первый аргумент, то будет исключение', () => {
    assertThrow(() => reverse(), 'text must not be of undefined');
  });
  test('если тип первого аргумента на строка, то будет исключение', () => {
    assertThrow(() => reverse(true), 'text must be of type string');
  });
});

describe('repeatTests', () => {
  test('повторено несколько раз - простой текст', () => {
    assertToBe(repeat('a', 3), 'aaa');
  });
  test('повторено несколько раз - сложный текст', () => {
    assertToBe(repeat(complexText, 3), complexText + complexText + complexText);
  });
  test('повторено несколько раз - пустой текст', () => {
    assertToBe(repeat('', 3), '');
  });
  test('повторено один раз - простой текст', () => {
    assertToBe(repeat('a', 1), 'a');
  });
  test('повторено один раз - сложный текст', () => {
    assertToBe(repeat(complexText, 1), "Hello world!!! It's terminator");
  });
  test('повторено один раз - пустой текст', () => {
    assertToBe(repeat('', 1), "");
  });
  test('повторено ни один раз - простой текст', () => {
    assertToBe(repeat('a', 0), '');
  });
  test('повторено ни один раз - сложный текст', () => {
    assertToBe(repeat(complexText, 0), '');
  });
  test('повторено ни один раз - пустой текст', () => {
    assertToBe(repeat('', 0), '');
  });
  test('пропущенное число повторении возвращает ту же строку', () => {
    assertToBe(repeat('abc'), 'abc');
  });
  test('в дробном числе повторении, дробная часть отбрасывается', () => {
    assertToBe(repeat('abc', 3.85), 'abcabcabc');
  });
  test('второй параметр приводится в число', () => {
    assertToBe(repeat('a', '3'), 'aaa');
  });
  test('второй булевый параметр приводится в число', () => {
    assertToBe(repeat('a', false), '');
  });
  test('отрицательное число повторении вызывает исключение', () => {
    assertThrow(() => repeat('a', -1), 'repeat count must be positive value or zero');
  });
  test('пропущеный текст вызывает исключение', () => {
    assertThrow(() => repeat(), 'text must not be of undefined');
  });
  test('первый тип не строка вызывает исключение', () => {
    assertThrow(() => repeat(true), 'text must be of type string');
  });
});

describe('substringTests', () => {
  test('получить два первых символа', () => {
    assertToBe(substring(complexText, 0, 2), 'He');
  });
  test('получить с индекса 2 по 5 индекс', () => {
    assertToBe(substring(complexText, 2, 5), 'llo');
  });
  test('если передать одинаковый индекс, то возвращается пустая строка', () => {
    assertToBe(substring(complexText, 5, 5), '');
  });
  test('если не передавать второй индекс, то возвращается до конца текста', () => {
    assertToBe(substring(complexText, 20), 'terminator');
  });
  test('если не передавать индексы, то возвращается копия строки', () => {
    assertToBe(substring(complexText), complexText);
  });
  test('если второй индекс больше длины, то возвращается до конца текста', () => {
    assertToBe(substring(complexText, 20, 60), 'terminator');
  });
  test('если второй индекс больше первого, то индексы меняются местами', () => {
    assertToBe(substring(complexText, 5, 2), 'llo');
  });
  test('если первый индекс отрицательный, то он равен 0', () => {
    assertToBe(substring(complexText, -5, 2), 'He');
  });
  test('если второй индекс отрицательный, то возвращается с 0 индекса по значение первого аргумента', () => {
    assertToBe(substring(complexText, 5, -2), 'Hello');
  });
  test('если оба индексы отрицательные, то они равны 0', () => {
    assertToBe(substring(complexText, -5, -2), '');
  });
  test('если индексы лежат за пределами, то возвзращается пустая строка', () => {
    assertToBe(substring('a', 2, 5), '');
  });
  test('индексы приводятся в тип числа', () => {
    assertToBe(substring(complexText, true, '5'), 'ello');
  });
  test('третий параметр не число становятся равным 0,', () => {
    assertToBe(substring(complexText, 4, 's'), 'Hell');
  });
  test('второй параметр не число становятся равным 0,', () => {
    assertToBe(substring(complexText, 's', 5), 'Hello');
  });
  test('второй и третий параметр не число и становятся равным 0,', () => {
    assertToBe(substring(complexText, 's', 't'), '');
  });
  test('дробная часть второго и третьего параметра отбрасывается', () => {
    assertToBe(substring(complexText, 1.7, 3.1415), 'el');
  });
  test('если не передать первый аргумент, то будет исключение', () => {
    assertThrow(() => substring(), 'text must not be of undefined');
  });
  test('если тип первого аргумента нe строка, то будет исключение', () => {
    assertThrow(() => substring(true, 2), 'text must be of type string');
  });
});

describe('trimLeftTests', () => {
  test('удалить пробелы спереди', () => {
    assertToBe(trimLeft('  Hi'), 'Hi');
  });
  test('удалить перевод строки и пробел спереди', () => {
    assertToBe(trimLeft('\n Hi'), 'Hi');
  });
  test('удалить табуляция и пробел спереди', () => {
    assertToBe(trimLeft('\t Hi'), 'Hi');
  });
  test('удалить верт. табуляция и пробел спереди', () => {
    assertToBe(trimLeft('\v Hi'), 'Hi');
  });
  test('символы сзади не трогаются', () => {
    assertToBe(trimLeft('  Hi '), 'Hi ');
  });
  test('перевод строки сзади не трогаются', () => {
    assertToBe(trimLeft('  Hi \n'), 'Hi \n');
  });
  test('табуляция сзади не трогаются', () => {
    assertToBe(trimLeft('  Hi \t'), 'Hi \t');
  });
  test('верт. табуляция сзади не трогаются', () => {
    assertToBe(trimLeft('  Hi \v'), 'Hi \v');
  });
  test('без символов к удалению, возвращается копия строки', () => {
    assertToBe(trimLeft('Hi'), 'Hi');
  });
  test('пробелы после символа не трогаются', () => {
    assertToBe(trimRight(', Hi'), ', Hi');
  });
  test('строка полностью из удаляемых символов', () => {
    assertToBe(trimLeft(' \v \n \t\t'), '');
  });
  test('если не передать аргумент, то будет исключение', () => {
    assertThrow(() => trimLeft(), 'text must not be of undefined');
  });
  test('если тип первого аргумента на строка, то будет исключение', () => {
    assertThrow(() => trimLeft(true), 'text must be of type string');
  });
});

describe('trimRightTests', () => {
  test('удалить пробелы спереди', () => {
    assertToBe(trimRight('Hi  '), 'Hi');
  });
  test('удалить перевод строки и пробел сзади', () => {
    assertToBe(trimRight('Hi\n '), 'Hi');
  });
  test('удалить табуляция и пробел сзади', () => {
    assertToBe(trimRight('Hi\t '), 'Hi');
  });
  test('удалить верт. табуляция и пробел сзади', () => {
    assertToBe(trimRight('Hi\v '), 'Hi');
  });
  test('символы спереди не трогаются', () => {
    assertToBe(trimRight('  Hi '), '  Hi');
  });
  test('перевод строки спереди не трогаются', () => {
    assertToBe(trimRight(' \nHi '), ' \nHi');
  });
  test('табуляция спереди не трогаются', () => {
    assertToBe(trimRight(' \tHi '), ' \tHi');
  });
  test('верт. табуляция спереди не трогаются', () => {
    assertToBe(trimRight(' \vHi '), ' \vHi');
  });
  test('без символов к удалению, возвращается копия строки', () => {
    assertToBe(trimRight('Hi'), 'Hi');
  });
  test('пробелы после символа не трогаются', () => {
    assertToBe(trimRight('. Hi ,'), '. Hi ,');
  });
  test('строка полностью из удаляемых символов', () => {
    assertToBe(trimRight(' \v \n \t\t'), '');
  });
  test('если не передать аргумент, то будет исключение', () => {
    assertThrow(() => trimRight(), 'text must not be of undefined');
  });
  test('если тип первого аргумента на строка, то будет исключение', () => {
    assertThrow(() => trimRight(true), 'text must be of type string');
  });
});

describe('trimTests', () => {
  test('удалить пробелы спереди', () => {
    assertToBe(trim('  Hi'), 'Hi');
  });
  test('удалить перевод строки и пробел сзади', () => {
    assertToBe(trimRight('Hi\n '), 'Hi');
  });
  test('удалить табуляция и пробел сзади', () => {
    assertToBe(trim('Hi\t '), 'Hi');
  });
  test('удалить верт. табуляция и пробел сзади', () => {
    assertToBe(trim('Hi\v '), 'Hi');
  });
  test('удалить символы спереди', () => {
    assertToBe(trim('  Hi '), 'Hi');
  });
  test('удалить перевод строки', () => {
    assertToBe(trim(' \nHi '), 'Hi');
  });
  test('удалить табуляцию спереди', () => {
    assertToBe(trim(' \tHi '), 'Hi');
  });
  test('удалить верт. табуляция спереди', () => {
    assertToBe(trim(' \vHi '), 'Hi');
  });
  test('без символов к удалению, возвращается копия строки', () => {
    assertToBe(trim('Hi'), 'Hi');
  });
  test('пробелы после символа не трогаются', () => {
    assertToBe(trim(',  Hi .'), ',  Hi .');
  });
  test('строка полностью из удаляемых символов', () => {
    assertToBe(trim(' \v \n \t\t'), '');
  });
});

describe('indexOfTests', () => {
  test('найти текст с середины текста', () => {
    assertToBe(indexOf(complexText, 'terminator'), 20);
  });
  test('найти текст с начала текста', () => {
    assertToBe(indexOf(complexText, 'Hello'), 0);
  });
  test('найти текст с начала текста с одиночным символом', () => {
    assertToBe(indexOf(complexText, 'H'), 0);
  });
  test('текст не найден', () => {
    assertToBe(indexOf(complexText, 'Help'), -1);
  });
  test('регистр имеет значение', () => {
    assertToBe(indexOf(complexText, 'hello'), -1);
  });
  test('слово есть, но длина больше', () => {
    assertToBe(indexOf(complexText, 'terminator.'), -1);
  });
  test('поиск первого совпадения', () => {
    assertToBe(indexOf(complexText, 't'), 16);
  });
  test('поиск первого совпадения с тем же индексом', () => {
    assertToBe(indexOf(complexText, 't', 16), 16);
  });
  test('поиск второго совпадения', () => {
    assertToBe(indexOf(complexText, 't', 17), 20);
  });
  test('поиск третьего совпадения', () => {
    assertToBe(indexOf(complexText, 't', 21), 27);
  });
  test('после 27 символе нет символа t', () => {
    assertToBe(indexOf(complexText, 't', 28), -1);
  });
  test('отрицательный начальный индекс равнозначен нулю', () => {
    assertToBe(indexOf(complexText, 't', -17), 16);
  });
  test('пустой второй параметр дает возвращает 0', () => {
    assertToBe(indexOf(complexText, ''), 0);
  });
  test('пустой второй параметр с заполненным нач. индексом возвращает тот же индекс', () => {
    assertToBe(indexOf(complexText, '', 5), 5);
  });
  test('пустой первый параметр дает возвращает -1', () => {
    assertToBe(indexOf('', 'q'), -1);
  });
  test('дробные числа округляются', () => {
    assertToBe(indexOf('HeH', 'H', 2.2), 2);
  });
  test('дробные числа округляются, 2', () => {
    assertToBe(indexOf('HeH', 'H', 2.9), 2);
  });
  test('третий булевый параметр переводится в тип числа', () => {
    assertToBe(indexOf('HeH', 'H', true), 2);
  });
  test('третий параметр переводится в тип числа', () => {
    assertToBe(indexOf('HeH', 'H', '1'), 2);
  });
  test('если третий параметр не удается перевести в число, то вернется -1', () => {
    assertToBe(indexOf('feH', 'H', 's'), 2);
  });
  test('если второй параметр не передать, то возвратится -1', () => {
    assertToBe(indexOf('HeH'), -1);
  });
  test('если тип второго параметра не равен string, то возвратится -1', () => {
    assertToBe(indexOf('HeH', true), -1);
  });
  test('если тип второго параметра не равен string 2, то возвратится -1', () => {
    assertToBe(indexOf('HeH', {}), -1);
  });
  test('если не передать первый аргумент, то будет исключение', () => {
    assertThrow(() => indexOf(), 'text must not be of undefined');
  });
  test('если тип первого аргумента на строка, то будет исключение', () => {
    assertThrow(() => substring(true), 'text must be of type string');
  });
});

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
    assertThrow(() => replace(complexText, 'It'), 'newSubStr must not be of undefined');
  });
  test('если не передать второй аргумент, то будет исключение', () => {
    assertThrow(() => replace(complexText), 'subStr must not be of undefined');
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
  test('строка заполнения не кратен вставке', () => {
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
  // test('если длина совпадает, то вернется то же значение', () => {
  //   assertToBe(padEnd('hehe', 4), 'hehe');
  // });
  // test('если макс. длина меньше, то вернется то же значение', () => {
  //   assertToBe(padEnd('hehe', 3), 'hehe');
  // });
  // test('если макс. длина равна нулю, то вернется то же значение', () => {
  //   assertToBe(padEnd('hehe', 0), 'hehe');
  // });
  // test('если макс. длина отрицательна, то вернется то же значение', () => {
  //   assertToBe(padEnd('hehe', -7), 'hehe');
  // });
  // test('если макс. длина отсутствует, то вернется то же значение', () => {
  //   assertToBe(padEnd('hehe'), 'hehe');
  // });
  // test('если макс. несоответствующего типа, то вернется то же значение', () => {
  //   assertToBe(padEnd('hehe', null), 'hehe');
  // });
  // test('если макс. несоответствующего типа, то вернется то же значение', () => {
  //   assertToBe(padEnd('hehe', 1), 'hehe');
  // });
  // test('если макс. несоответствующего типа, то вернется то же значение', () => {
  //   assertToBe(padEnd('hehe', 's'), 'hehe');
  // });
  // test('другая строка заполнения', () => {
  //   assertToBe(padEnd('he', 4, '*'), 'he**');
  // });
  // test('случай с длинной строкой заполнения', () => {
  //   assertToBe(padEnd('he', 6, 'Abcd'), 'heAbcd');
  // });
  // test('строка заполнения не кратен вставке', () => {
  //   assertToBe(padEnd('he', 8, 'Abcd'), 'heAbcdAb');
  // });
  // test('строка заполнения не строковая, пирводит к приведению типа', () => {
  //   assertToBe(padEnd('he', 8, true), 'hetruetr');
  // });
  // test('проверка типов первого аргумента', () => {
  //   assertThrow(() => padEnd(), 'text must not be of undefined');
  //   assertThrow(() => padEnd(true), 'text must be of type string');
  // });
});

//slice
//endsWith
//startsWith
//includes
//upperCase
//lowerCase
//title
//iTitle
//charIsLowerCase
//charIsUpperCase
//charToUpperCase
//charToLowerCase

// +++++++++++++++++ Секция для гиков +++++++++++++++++
//   // если вы гик и любите сложности то реализуйте еще эти тесты

/** Расширить функцию replace. */
// describe('advancedReplaceTests', () => {
  // эти тесты будут добавлены позже
  // второй аргумент регуляроное выражение
  // третий аргумент функция
// });

// +++++++++++++++++ Секция запуска тестов +++++++++++++++++


testHtmlMain();
