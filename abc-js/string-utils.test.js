import { assertToBe, assertThrow } from '../asserts/assert.js';
import { testsForHtml } from '../asserts/assert2html.js';
import { repeat } from './string-utils.js';

const complexText = "Hello world!!! It's terminator";

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

//substring
//indexOf
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
  repeatTests,
];

testsForHtml(allTestCallBacks);
