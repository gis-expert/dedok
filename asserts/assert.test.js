/** Данный модуль проверяет, что функции утверждения работают корректно.
 * То есть являются тестами модуля с функциями утверждениями. */

import {
  assertToBe, assertNotToBe, assertEqual, assertNotEqual,
  assertThrow,
} from './assert.js';
import { testsForHtml } from './assert2html.js'

export function assertToBeTests() {
  assertToBe('test two string to be', 'f', 'f');
  assertToBe( 'test empty strings to be', '', (() => '')());
  assertToBe('test two number to be', 0, 1 - 1);
  assertToBe('test boolean values to be', true, 0 === 0);

  const obj = {};
  assertToBe('test object values', obj, (() => obj)());

  //* reverse assertions */
  {
    assertThrow(
    'test not to be throw error',
    () => assertToBe('test string values', 'f', 'r'),
    'f not to be r'
    );
  }

  return 'assertToBe - success runned';
}

export function assertNotToBeTests() {
  assertNotToBe('test two string not to be', 'f', 'k');
  assertNotToBe('test two number not to be', 1, 0);
  assertNotToBe('test array not to be', [], []);
  assertNotToBe('test obj not to be', {}, {});

  //* reverse assertions */
  {
    assertThrow(
    'test to be throw error',
    () => assertNotToBe('test string values', 'f', 'f'),
    'f to be f'
    );
  }

  return 'assertNotToBe - success runned';
}

export function assertEqualTests() {
  assertEqual('test empty string values equal', '', '');
  assertEqual('test string values equal', 'val', 'val');
  assertEqual('test number values equal', 5, 5);

  {
    assertEqual('test empty arrays values equal', [], []);
    assertEqual('test filled arrays values equal', [1, 4, 54], [1, 4, 54]);
    const a = [
      '', 'simple', -3, [2, 3, true, [undefined], ''], 5
    ]
    const b = [...a];
    assertEqual('test nested and complex arrays values equal', a, b);
  }

  {
    assertEqual('test empty objects values equal', {}, {});
    assertEqual('test filled objects values equal', {i: 5, isRed: true}, {i: 5, isRed: true});
    const a = {
      i: 5,
      person: {
        name: 'Mike',
        age: 15,
        skills: ['ddd', 'sqrs', ['rest', 'rpc']],
      }
    }
    const b = {...a};
    assertEqual('test nested and complex objects values equal', a, b);
  }

  //* reverse assertions */
  {
    const a = [
      '', 'simple', -3, [2, 3, true, [undefined], ''], 5
    ]
    const b = [...a];
    b[0] = '1';
    assertThrow(
    'test equal throw error',
    () => assertEqual('test not equal array values', a, b),
    'not equal'
    );
  }

  return 'assertEqual - success runned';
}

export function assertNotEqualTests() {
  assertNotEqual('test string values not equal', 'Val', 'val');
  assertNotEqual('test number values equal', 5, -5);

  {
    assertNotEqual('test filled arrays values equal', [1, 4, 55], [1, 4, 54]);
    const a = [
      0, '', 'simple', -3, [2, 3, true, [undefined], ''], 5
    ]
    const b = [...a];
    b[0] = 1;
    assertNotEqual('test nested and complex arrays values equal', a, b);
  }

  {
    assertNotEqual('test filled objects values equal', {i: 4, isRed: true}, {i: 5, isRed: true});
    const a = {
      i: 4,
      person: {
        name: 'Mike',
        age: 15,
        skills: ['ddd', 'sqrs', ['rest', 'rpc']],
      }
    }
    const b = {...a};
    b.i = 5;
    assertNotEqual('test nested and complex objects values equal', a, b);
  }

  //* reverse assertions */
  {
    const a = [
      '', 'simple', -3, [2, 3, true, [undefined], ''], 5
    ]
    const b = [...a];
    assertThrow(
    'test not equal throw error',
    () => assertNotEqual('test equal array values', a, b),
    'equal'
    );
  }

  return 'assertNotEqual - success runned';
}

export function assertThrowTests() {
  assertThrow('function throw exeption', () => {throw Error()});
  const errStr = 'Это очень большое описание ошибки, чтобы по ней можно было сверить тест';
  assertThrow('function throw exeption', () => {throw Error(errStr)}, 'можно было');

  //* reverse assertions */
  {
    assertThrow('function not throw exeption', () => assertThrow('not exept throw', () => {}))
    assertThrow('function throwed exeption, but not include err message', () => assertThrow(
      'exept throw cb', () => {throw Error(errStr)}, 'not included text'
    ))
  }

  return 'assertThrow - success runned';
}

/** функции которые необходимо запустить */
const allTestCallBacks = [
  assertToBeTests,
  assertNotToBeTests,
  assertEqualTests,
  assertNotEqualTests,
  assertThrowTests,
];

testsForHtml(allTestCallBacks);
