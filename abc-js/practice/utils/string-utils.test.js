import { assertToBe, assertThrow } from '../../../dependencies/asserts/assert.js';
import { testsForHtml } from '../../../dependencies/asserts/assert2html.js';
import {
  isMatch, toString, repeat, substring, indexOf,
  trim, trimLeft, trimRight, reverse, replace, replaceAll,
} from './string-utils.js';

const complexText = "Hello world!!! It's terminator";

export function isMatchTests() {
  assertToBe('одиночные одинаковые символы', isMatch('a', 'a'), true);
  // assertToBe('одиночные одинаковые символы', isMatch('a', 'b'), false);
  // assertToBe('пустые строки', isMatch('', ''), true);
  // assertToBe('пустые и непустая строка', isMatch('', 'a'), false);
  // assertToBe('сложные одинаковые строки', isMatch(complexText, complexText), true);
  // assertToBe('сложные неодинаковые строки', isMatch(complexText + 'a', complexText), false);
  // assertToBe('тип не строки приводит к отрицательному результату', isMatch('2', 2), false);
  // assertToBe('тип не строки приводит к отрицательному результату', isMatch(2, '2'), false);

  // let errCb = () => isMatch('a');
  // assertThrow('если не передать второй аргумент, то будет ошибка', errCb, 'both parameters are required');
  // errCb = () => isMatch();
  // assertThrow('если не передать аргументы, то будет ошибка', errCb, 'both parameters are required');

  // return 'isItMatchTests - success runned';
}

export function toStringTests() {
  assertToBe('перевод строки в строку', toString('any text'), 'any text');
  // assertToBe('перевод булевого значения true в строку', toString(true), 'true');
  // assertToBe('перевод булевого значения false в строку', toString(false), 'false');
  // assertToBe('перевод undefined в строку', toString(undefined), 'undefined');
  // assertToBe('перевод null в строку', toString(null), 'null');
  // assertToBe('перевод числа 3 в строку', toString(3), '3');
  // assertToBe('перевод числа 0 в строку', toString(0), '0');
  // assertToBe('перевод числа 1 в строку', toString(1), '1');
  // assertToBe('перевод числа 10 в строку', toString(10), '10');
  // assertToBe('перевод числа 100 в строку', toString(100), '100');
  // assertToBe('перевод многозначного целого числа в строку', toString(323459), '323459');
  // assertToBe('перевод отрицательного целого числа в строку', toString(-3), '-3');
  // assertToBe('перевод минус ноль в строку', toString(-0), '0');
  // assertToBe('перевод минус один в строку', toString(-1), '-1');
  // assertToBe('перевод минус сто в строку', toString(-100), '-100');
  // assertToBe('перевод положительного целого числа в строку', toString(+3), '3');
  // assertToBe('перевод дробного числа в строку, раз', toString(3.1415), '3.1415');
  
  // let errCb = () => toString([2]);
  // assertThrow('другие типы вызывают ошибку', errCb, 'this type is not supported');

  return 'toString - success runned';
}

export function reverseTests() {
  assertToBe('возвращается перевернутая копия строки', reverse('Hmmm'), 'mmmH');
  // assertToBe('возвращается перевернутая копия строки 2', reverse('  Hmmm.'), '.mmmH  ');
  // assertToBe('пустая строка остается пустой', reverse(''), '');
  // assertToBe('один символ остается одним символом', reverse(' '), ' ');

  // let errCb = () => reverse();
  // assertThrow('если не передать первый аргумент, то будет исключение', errCb, 'text must not be of undefined');
  // errCb = () => reverse(true);
  // assertThrow('если тип первого аргумента на строка, то будет исключение', errCb, 'text must be of type string');

  return 'reversTests - success runned';
}

export function repeatTests() {
  assertToBe('повторено несколько раз - простой текст', repeat('a', 3), 'aaa');
  // let resultValue = repeat(complexText, 3);
  // let expectValue = complexText + complexText + complexText;
  // assertToBe('повторено несколько раз - сложный текст', resultValue, expectValue);
  // assertToBe('повторено несколько раз - пустой текст', repeat('', 3), '');

  // assertToBe('повторено один раз - простой текст', repeat('a', 1), 'a');
  // resultValue = repeat(complexText, 1);
  // assertToBe('повторено один раз - сложный текст', resultValue, "Hello world!!! It's terminator");
  // assertToBe('повторено один раз - пустой текст', repeat('', 1), "");

  // assertToBe('повторено ни один раз - простой текст', repeat('a', 0), '');
  // assertToBe('повторено ни один раз - сложный текст', repeat(complexText, 0), '');
  // assertToBe('повторено ни один раз - пустой текст', repeat('', 0), '');

  // assertToBe('пропущенное число повторении возвращает ту же строку', repeat('abc'), 'abc');
  // assertToBe('в дробном числе повторении, дробная часть отбрасывается', repeat('abc', 3.85), 'abcabcabc');
  // assertToBe('второй параметр приводится в число', repeat('a', '3'), 'aaa');
  // assertToBe('второй параметр приводится в число', repeat('a', false), '');

  // let errCb = () => repeat('a', -1);
  // assertThrow('отрицательное число повторении вызывает исключение', errCb, 'repeat count must be positive value or zero');
  // errCb = () => repeat();
  // assertThrow('пропущеный текст вызывает исключение', errCb, 'text must not be of undefined');
  // errCb = () => repeat(true);
  // assertThrow('первый тип не строка вызывает исключение', errCb, 'text must be of type string');

  return 'repeatTests - success runned';
}

export function substringTests() {
  assertToBe('получить два первых символа', substring(complexText, 0, 2), 'He');
  // assertToBe('получить с индекса 2 по 5 индекс', substring(complexText, 2, 5), 'llo');
  // assertToBe('если передать одинаковый индекс, то возвращается пустая строка', substring(complexText, 5, 5), '');
  // assertToBe('если не передавать второй индекс, то возвращается до конца текста', substring(complexText, 20), 'terminator');
  // assertToBe('если не передавать индексы, то возвращается копия строки', substring(complexText), complexText);
  // assertToBe('если второй индекс больше длины, то возвращается до конца текста', substring(complexText, 20, 60), 'terminator');
  // assertToBe('если второй индекс больше первого, то индексы меняются местами', substring(complexText, 5, 2), 'llo');
  // assertToBe('если первый индекс отрицательный, то он равен 0', substring(complexText, -5, 2), 'He');
  // assertToBe('если второй индекс отрицательный, то возвращается с 0 индекса по значение первого аргумента',
  //     substring(complexText, 5, -2), 'Hello');
  // assertToBe('если оба индексы отрицательные, то они равны 0', substring(complexText, -5, -2), '');
  // assertToBe('если индексы лежат за пределами, то возвзращается пустая строка', substring('a', 2, 5), '');
  // assertToBe('индексы приводятся в тип числа', substring(complexText, true, '5'), 'ello');
  // assertToBe('третий параметр не число становятся равным 0,', substring(complexText, 4, 's'), 'Hell');
  // assertToBe('второй параметр не число становятся равным 0,', substring(complexText, 's', 5), 'Hello');
  // assertToBe('второй и третий параметр не число и становятся равным 0,', substring(complexText, 's', 't'), '');
  // assertToBe('дробная часть второго и третьего параметра отбрасывается', substring(complexText, 1.7, 3.1415), 'el');

  // let errCb = () => substring();
  // assertThrow('если не передать первый аргумент, то будет исключение', errCb, 'text must not be of undefined');
  // errCb = () => substring(true, 2);
  // assertThrow('если тип первого аргумента нe строка, то будет исключение', errCb, 'text must be of type string');

  return 'substringTests - success runned';
}

export function trimLeftTests() {
  assertToBe('удалить пробелы спереди', trimLeft('  Hi'), 'Hi');
  // assertToBe('удалить перевод строки и пробел спереди', trimLeft('\n Hi'), 'Hi');
  // assertToBe('удалить табуляция и пробел спереди', trimLeft('\t Hi'), 'Hi');
  // assertToBe('удалить верт. табуляция и пробел спереди', trimLeft('\v Hi'), 'Hi');
  // assertToBe('символы сзади не трогаются', trimLeft('  Hi '), 'Hi ');
  // assertToBe('перевод строки сзади не трогаются', trimLeft('  Hi \n'), 'Hi \n');
  // assertToBe('табуляция сзади не трогаются', trimLeft('  Hi \t'), 'Hi \t');
  // assertToBe('верт. табуляция сзади не трогаются', trimLeft('  Hi \v'), 'Hi \v');
  // assertToBe('без символов к удалению, возвращается копия строки', trimLeft('Hi'), 'Hi');
  // assertToBe('пробелы после символа не трогаются', trimRight(', Hi'), ', Hi');
  // assertToBe('строка полностью из удаляемых символов', trimLeft(' \v \n \t\t'), '');

  // let errCb = () => trimLeft();
  // assertThrow('если не передать аргумент, то будет исключение', errCb, 'text must not be of undefined');
  // errCb = () => trimLeft(true);
  // assertThrow('если тип первого аргумента на строка, то будет исключение', errCb, 'text must be of type string');

  return 'trimLeft - success runned';
}

export function trimRightTests() {
  assertToBe('удалить пробелы спереди', trimRight('Hi  '), 'Hi');
  // assertToBe('удалить перевод строки и пробел сзади', trimRight('Hi\n '), 'Hi');
  // assertToBe('удалить табуляция и пробел сзади', trimRight('Hi\t '), 'Hi');
  // assertToBe('удалить верт. табуляция и пробел сзади', trimRight('Hi\v '), 'Hi');
  // assertToBe('символы спереди не трогаются', trimRight('  Hi '), '  Hi');
  // assertToBe('перевод строки спереди не трогаются', trimRight(' \nHi '), ' \nHi');
  // assertToBe('табуляция спереди не трогаются', trimRight(' \tHi '), ' \tHi');
  // assertToBe('верт. табуляция спереди не трогаются', trimRight(' \vHi '), ' \vHi');
  // assertToBe('без символов к удалению, возвращается копия строки', trimRight('Hi'), 'Hi');
  // assertToBe('пробелы после символа не трогаются', trimRight('Hi ,'), 'Hi ,');
  // assertToBe('строка полностью из удаляемых символов', trimRight(' \v \n \t\t'), '');

  // let errCb = () => trimRight();
  // assertThrow('если не передать аргумент, то будет исключение', errCb, 'text must not be of undefined');
  // errCb = () => trimRight(true);
  // assertThrow('если тип первого аргумента на строка, то будет исключение', errCb, 'text must be of type string');

  return 'trimRight - success runned';
}

export function trimTests() {
  assertToBe('удалить пробелы спереди', trim('  Hi'), 'Hi');
  // assertToBe('удалить перевод строки и пробел сзади', trimRight('Hi\n '), 'Hi');
  // assertToBe('удалить табуляция и пробел сзади', trim('Hi\t '), 'Hi');
  // assertToBe('удалить верт. табуляция и пробел сзади', trim('Hi\v '), 'Hi');
  // assertToBe('удалить символы спереди', trim('  Hi '), 'Hi');
  // assertToBe('удалить перевод строки', trim(' \nHi '), 'Hi');
  // assertToBe('удалить табуляцию спереди', trim(' \tHi '), 'Hi');
  // assertToBe('удалить верт. табуляция спереди', trim(' \vHi '), 'Hi');
  // assertToBe('без символов к удалению, возвращается копия строки', trim('Hi'), 'Hi');
  // assertToBe('пробелы после символа не трогаются', trim(',  Hi .'), ',  Hi .');
  // assertToBe('строка полностью из удаляемых символов', trim(' \v \n \t\t'), '');

  return 'trim - success runned';
}

export function indexOfTests() {
  assertToBe('найти текст с середины текста', indexOf(complexText, 'terminator'), 20);
  // assertToBe('найти текст с начала текста', indexOf(complexText, 'Hello'), 0);
  // assertToBe('найти текст с начала текста с одиночным символом', indexOf(complexText, 'H'), 0);
  // assertToBe('текст не найден', indexOf(complexText, 'Help'), -1);
  // assertToBe('регистр имеет значение', indexOf(complexText, 'hello'), -1);
  // assertToBe('слово есть, но длина больше', indexOf(complexText, 'terminator.'), -1);
  // assertToBe('поиск первого совпадения', indexOf(complexText, 't'), 16);
  // assertToBe('поиск первого совпадения с тем же индексом', indexOf(complexText, 't', 16), 16);
  // assertToBe('поиск второго совпадения', indexOf(complexText, 't', 17), 20);
  // assertToBe('поиск третьего совпадения', indexOf(complexText, 't', 21), 27);
  // assertToBe('после 27 символе нет символа t', indexOf(complexText, 't', 28), -1);
  // assertToBe('отрицательный начальный индекс равнозначен нулю', indexOf(complexText, 't', -17), 16);
  // assertToBe('пустой второй параметр дает возвращает 0', indexOf(complexText, ''), 0);
  // assertToBe('пустой второй параметр с заполненным нач. индексом возвращает тот же индекс',
  //     indexOf(complexText, '', 5), 5);
  // assertToBe('пустой первый параметр дает возвращает -1', indexOf('', 'q'), -1);
  // assertToBe('дробные числа округляются', indexOf('HeH', 'H', 2.2), 2);
  // assertToBe('дробные числа округляются', indexOf('HeH', 'H', 2.9), 2);
  // assertToBe('третий параметр переводится в тип числа', indexOf('HeH', 'H', true), 2);
  // assertToBe('третий параметр переводится в тип числа', indexOf('HeH', 'H', '1'), 2);
  // assertToBe('третий параметр переводится в тип числа', indexOf('HeH', 'H', 's'), -1);
  // assertToBe('третий параметр переводится в тип числа', indexOf('HeH', 'H', 's'), -1);
  // assertToBe('если второй параметр не передать, то возвратится -1', indexOf('HeH'), -1);
  // assertToBe('если тип второго параметра не равен string, то возвратится -1', indexOf('HeH', true), -1);
  // assertToBe('если тип второго параметра не равен string, то возвратится -1', indexOf('HeH', {}), -1);

  // let errCb = () => indexOf();
  // assertThrow('если не передать первый аргумент, то будет исключение', errCb, 'text must not be of undefined');
  // errCb = () => substring(true);
  // assertThrow('если тип первого аргумента на строка, то будет исключение', errCb, 'text must be of type string');

  return 'indexOfTests - success runned';
}

export function replaceTests() {
  assertToBe(
    'поменять вхождение текста',
    replace(complexText, "It's", "It is not"),
    'Hello world!!! It is not terminator'
  );
  // assertToBe('не найденное вхождение, текст остался', replace(complexText, "It`s", "It is"), complexText);
  // assertToBe('меняется только первое вхождение в начале строки', replace('he he ho he', 'he', 'uh'), 'uh he ho he');
  // assertToBe('меняется только первое вхождение в середине строки', replace('ha he ho he', 'he', 'uh'), 'ha uh ho he');
  // assertToBe(
  //   'удалить вхождение текста (передав пустую строку)',
  //   replace('Hi is guy, my name is Jon', ' is', ''),
  //   'Hi guy, my name is Jon'
  // );
  // assertToBe('тип третьего параметра меняется на строку', replace('he ha', 'ha', 2), 'he 2');
  // assertToBe('тип второго параметра меняется на строку', replace('he 2', 2, 'ha'), 'he ha');
  // assertToBe('случай, когда заменяемое слово включает слово поиска', replace('Happy', 'app', ' app '), 'H app y');

  // let errCb = () => replace(complexText, 'It');
  // assertThrow('если не передать третий аргумент, то будет исключение', errCb, 'newSubStr must not be of undefined');

  // errCb = () => replace(complexText);
  // assertThrow('если не передать второй аргумент, то будет исключение', errCb, 'subStr must not be of undefined');

  // errCb = () => replace();
  // assertThrow('если не передать первый аргумент, то будет исключение', errCb, 'text must not be of undefined');
  // errCb = () => replace(true);
  // assertThrow('если тип первого аргумента на строка, то будет исключение', errCb, 'text must be of type string');

  return 'replaceTests - success runned';
}

export function replaceAllTests() {
  assertToBe(
    'поменять вхождение текста',
    replaceAll(complexText, "It's", "It is not"),
    'Hello world!!! It is not terminator'
  );
  // assertToBe('не найденное вхождение, текст остался', replaceAll(complexText, "It`s", "It is"), complexText);
  // assertToBe('меняется все вхождения в начале и конце строки', replaceAll('he he ho he', 'he', 'uh'), 'uh uh ho uh');
  // assertToBe('меняется все вхождения в середине строки', replaceAll('hh he ho he hm', 'he', 'uh'), 'hh uh ho uh hm');
  // assertToBe(
  //   'удалить вхождение текста (передав пустую строку)',
  //   replaceAll('Hi is gui, my name is Jon', ' is', ''),
  //   'Hi gui, my name Jon'
  // );
  // assertToBe('тип третьего параметра меняется на строку', replaceAll('he ha', 'ha', 2), 'he 2');
  // assertToBe('тип второго параметра меняется на строку', replaceAll('he 2', 2, 'ha'), 'he ha');
  // assertToBe('случай, когда заменяемое слово включает слово поиска', replaceAll('Happy', 'app', ' app '), 'H app y');

  // let errCb = () => replaceAll(complexText, 'It');
  // assertThrow('если не передать третий аргумент, то будет исключение', errCb, 'newSubStr must not be of undefined');

  // errCb = () => replaceAll(complexText);
  // assertThrow('если не передать второй аргумент, то будет исключение', errCb, 'subStr must not be of undefined');

  // errCb = () => replaceAll();
  // assertThrow('если не передать первый аргумент, то будет исключение', errCb, 'text must not be of undefined');
  // errCb = () => replaceAll(true);
  // assertThrow('если тип первого аргумента на строка, то будет исключение', errCb, 'text must be of type string');

  return 'replaceAllTests - success runned';
}

// +++++++++++++++++ Секция для гиков +++++++++++++++++

/** Расширить функцию replace. */
export function advancedReplaceTests() {
  // эти тесты будут добавлены позже
  // третий аргумент функция
  // второй аргумент регуляроное выражение
}

//padEnd
//padStart
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

// +++++++++++++++++ Секция запуска тестов +++++++++++++++++

/** функции которые необходимо запустить */
const allTestCallBacks = [
  isMatchTests,
  toStringTests,
  reverseTests,
  repeatTests,
  substringTests,
  trimLeftTests,
  trimRightTests,
  trimTests,
  indexOfTests,
  replaceTests,
  replaceAllTests,

  // если вы гик и любите сложности то реализуйте еще эти тесты
  // advancedReplaceTests,
];

testsForHtml(allTestCallBacks);
