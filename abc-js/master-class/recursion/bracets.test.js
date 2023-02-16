import { assertToBe, assertThrow, assertEqual } from '../../../../dependencies/asserts/assert.js';
import { describe, test } from '../../../../dependencies/tests/test.js';
import { minBracketsContent } from "./bracets.js";

const complex = 'a (vdf (df(se)) (df)) dg(f(sf) (fs ))';

describe('minBrackets tests', () => {
  test('штатная работа с одной скобкой', () => {
    assertEqual(minBracketsContent('a (ab) c', '()'), ['(ab)']);
    assertEqual(minBracketsContent('a {ab} c', '{}'), ['{ab}']);
  });
  test('штатная работа с двумя скобками одно уровня', () => {
    assertEqual(minBracketsContent('a (ab) fs (bd) c', '()'), ['(ab)', '(bd)']);
  });
  test('штатная работа с вложенных скобок', () => {
    assertEqual(minBracketsContent('a (а(ab) fs (gh) c)', '()'), ['(ab)', '(gh)']);
  });
  test('количество открывающих больше чем закрывающих', () => {
    const badTestString = 'a (а(ab) fs (gh c)'
    assertThrow(() => minBracketsContent(badTestString, '()'), 'bad brackets');
  });
  test('количество закрывающих больше чем открывающих', () => {
    const badTestString = 'a а(ab) fs (gh) c)'
    assertEqual(minBracketsContent(badTestString, '()'), ['(ab)', '(gh)']);
  });
  test('штатная работа с вложенных скобок, по заданию', () => {
    assertEqual(minBracketsContent(complex, '()'),  ['(se)', '(df)', '(sf)']);
  });
});
