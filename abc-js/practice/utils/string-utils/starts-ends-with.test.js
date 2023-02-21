import { assertThrow, assertToBe } from "../../../../dependencies/asserts/assert.js";
import { describe, test } from "../../../../dependencies/tests/test.js";
import { endsWith, startsWith } from "./starts-ends-with.js";

describe('startsEndsWithTests', () => {
  describe('startsWithTests', () => {
    const text = 'hello my friend';

    test('строка заканчивается на искомый текст', () => {
      assertToBe(startsWith(text, 'hello'), true);
      assertToBe(startsWith(text, 'he'), true);
      assertToBe(startsWith(text, 'h'), true);
    });
    // test('строка не заканчивается на искомый текст', () => {
    //   assertToBe(startsWith(text, 'tello'), false);
    //   assertToBe(startsWith(text, 'te'), false);
    //   assertToBe(startsWith(text, 't'), false);
    //   assertToBe(startsWith(text, ' '), false);
    //   assertToBe(startsWith(text, '\t'), false);
    // });
    // test('пустая строка как искомая, возвращает истину', () => {
    //   assertToBe(startsWith(text, ''), true);
    // });
    // test('переданная позиция равна нулю', () => {
    //   assertToBe(startsWith(text, 'h', 0), true);
    // });
    // test('начальная позиция и длина поисковой строки выводит конечный индекс за длину текста', () => {
    //   assertThrow(() => startsWith(text, 'd', text.length), 'invalid start position or search length');
    //   assertThrow(() => startsWith('hello', 'hel', 4), 'invalid start position or search length');
    // })
    // test('позиция больше длины текста вызывает исключение', () => {
    //   assertThrow(() => startsWith(text, 'd', text.length + 1), 'invalid position');
    // });
    // test('отрицательное значение позиции вызывает исключение', () => {
    //   assertThrow(() => startsWith(text, 'hello', -1), 'invalid position');
    // });
    // test('передаем позицию для первого символа, положительный сценарий', () => {
    //   assertToBe(startsWith(text, 'ello', 1), true);
    //   assertToBe(startsWith(text, 'my', 6), true);
    // });
    // test('передаем позицию для первого символа, отрицательный сценарий', () => {
    //   assertToBe(startsWith(text, 'hello', 1), false);
    //   assertToBe(startsWith(text, 'llo', 1), false);
    //   assertToBe(startsWith(text, 'my', 5), false);
    //   assertToBe(startsWith(text, 'my', 7), false);
    // });
    // test('параметр позиции должен быть только числом', () => {
    //   assertThrow(() => startsWith(text, 'friend', true), 'invalid position type');
    //   assertThrow(() => startsWith(text, ' f', '9'), 'invalid position type');
    // });
    // test('второй параметр со строкой поиска должен быть только строковым типом', () => {
    //   assertThrow(() => startsWith(text, true), 'argument search must be type of string');
    //   assertThrow(() => startsWith(text, 5), 'argument search must be type of string');
    // });
    // test('третий параметр с текстом должен быть только строковым типом', () => {
    //   assertThrow(() => startsWith(true, 'f'), 'argument text must be type of string');
    //   assertThrow(() => startsWith(5, '5'), 'argument text must be type of string');
    // });
  });
  describe('endsWithTests', () => {
    const text = 'hello my friend';

    test('строка заканчивается на искомый текст', () => {
      assertToBe(endsWith(text, 'friend'), true);
      assertToBe(endsWith(text, 'nd'), true);
      assertToBe(endsWith(text, 'd'), true);
    });
    // test('строка не заканчивается на искомый текст', () => {
    //   assertToBe(endsWith(text, 'briend'), false);
    //   assertToBe(endsWith(text, 'nt'), false);
    //   assertToBe(endsWith(text, 'r'), false);
    //   assertToBe(endsWith(text, ' '), false);
    //   assertToBe(endsWith(text, '\n'), false);
    // });
    // test('пустая строка как искомая, возвращает истину', () => {
    //   assertToBe(endsWith(text, ''), true);
    // });
    // test('переданная позиция равна последней', () => {
    //   assertToBe(endsWith(text, 'friend', text.length), true);
    // });
    // test('позиция больше длины текста вызывает исключение', () => {
    //   assertThrow(() => endsWith(text, 'friend', text.length + 1), 'invalid position');
    // });
    // test('отрицательное значение позиции вызывает исключение', () => {
    //   assertThrow(() => endsWith(text, 'friend', -1), 'invalid position');
    // });
    // test('передаем позицию для последнего символа, положительный сценарий', () => {
    //   assertToBe(endsWith(text, 'frien', text.length - 1), true);
    //   assertToBe(endsWith(text, ' f', 10), true);
    // });
    // test('конечная позиция и длина поисковой строки выводит стартовый индекс в минус', () => {
    //   assertThrow(() => endsWith(text, 'h', 0),  'invalid end position or search length');
    //   assertThrow(() => endsWith('hello', 'hel', 2), 'invalid end position or search length');
    // })
    // test('передаем позицию для последнего символа, отрицательный сценарий', () => {
    //   assertToBe(endsWith(text, 'friend', text.length - 1), false);
    //   assertToBe(endsWith(text, ' f', 9), false);
    //   assertToBe(endsWith(text, ' f', 11), false);
    // });
    // test('параметр позиции должен быть только числом', () => {
    //   assertThrow(() => endsWith(text, 'friend', true), 'invalid position type');
    //   assertThrow(() => endsWith(text, ' f', '9'), 'invalid position type');
    // });
    // test('второй параметр со строкой поиска должен быть только строковым типом', () => {
    //   assertThrow(() => endsWith(text, true), 'argument search must be type of string');
    //   assertThrow(() => endsWith(text, 5), 'argument search must be type of string');
    // });
    // test('третий параметр с текстом должен быть только строковым типом', () => {
    //   assertThrow(() => endsWith(true, 'f'), 'argument text must be type of string');
    //   assertThrow(() => endsWith(5, '5'), 'argument text must be type of string');
    // });
  });

})
