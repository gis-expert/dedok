import { assertToBe, assertThrow } from '../../../dependencies/asserts/assert.js';
import { testsForHtml } from '../../../dependencies/asserts/assert2html.js';
import { isMatch, repeat, substring, indexOf } from './string-utils.js';

const complexText = "Hello world!!! It's terminator";

export function isMatchTests() {
  assertToBe('одиночные одинаковые символы', isMatch('a', 'a'), true);
  // assertToBe('одиночные одинаковые символы', isMatch('a', 'b'), false);
  // assertToBe('пустые строки', isMatch('', ''), true);
  // assertToBe('пустые и непустая строка', isMatch('', 'a'), false);
  // assertToBe('сложные одинаковые строки', isMatch(complexText, complexText), true);
  // assertToBe('сложные неодинаковые строки', isMatch(complexText + 'a', complexText), false);
  // assertToBe('тип не строки приводит к отрицательному результату', isMatch('2', 2), false);

  // let errCb = () => isMatch('a');
  // assertThrow('если не передать второй аргумент, то будет ошибка', errCb, 'both parameters are required');
  // errCb = () => isMatch();
  // assertThrow('если не передать аргументы, то будет ошибка', errCb, 'both parameters are required');

  // return 'isItMatchTests - success runned';
// }

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
  
  let errCb = () => toString([2]);
  assertThrow('другие типы вызывают ошибку', errCb, 'this type is not supported');

  return 'toString - success runned';
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

//trim
//trimEnd
//trimStart
//padEnd
//padStart
//reverse
//replace
//replaceAll
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
//

/** функции которые необходимо запустить */
const allTestCallBacks = [
  isMatchTests,
  repeatTests,
  substringTests,
  indexOfTests,
];

testsForHtml(allTestCallBacks);
