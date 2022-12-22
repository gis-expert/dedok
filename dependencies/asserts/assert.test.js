/** Данный модуль проверяет, что функции утверждения работают корректно.
 * То есть являются тестами модуля с функциями утверждениями. */

import {
  assertToBe, assertNotToBe, assertEqual, assertNotEqual,
  assertThrow,
} from './assert.js';
import { runTestsForHtml } from '../tests/test2html.js'
import { describe, test } from '../tests/test.js'

describe('assertToBeTests', () => {
  test('test two string to be', () => {
    assertToBe('f', 'f');
  });
  test('test empty strings to be', () => {
    assertToBe( '', (() => '')());
  });
  test('test two number to be', () => {
    assertToBe(0, 1 - 1);
  });
  test('test boolean values to be', () => {
    assertToBe(true, 0 === 0);
  });

  const obj = {};
  test('test object values', () => {
    assertToBe(obj, (() => obj)());
  });

  //* reverse assertions */
  {
    test('test not to be throw error', () => {
      const cb = () => assertToBe('f', 'r');
      assertThrow(cb, '<f> not to be <r>');
    });
  }
});

describe('assertNotToBeTests', () => {
  test('test two string not to be', () => {
    assertNotToBe('f', 'k');
  });
  test('test two number not to be', () => {
    assertNotToBe(1, 0);
  });
  test('test array not to be', () => {
    assertNotToBe([], []);
  });
  test('test obj not to be', () => {
    assertNotToBe({}, {});
  });

  //* reverse assertions */
  {
    test('test to be throw error', () => {
      const cb = () => assertNotToBe('f', 'f');
      assertThrow(cb, '<f> to be <f>');
    });
  }
});

describe('assertEqualTests', () => {
  test('test empty string values equal', () => {
    assertEqual('', '');
  });
  test('test string values equal', () => {
    assertEqual('val', 'val');
  });
  test('test number values equal', () => {
    assertEqual(5, 5);
  });

  {
    test('test empty arrays values equal', () => {
      assertEqual([], []);
    });
    test('test filled arrays values equal', () => {
      assertEqual([1, 4, 54], [1, 4, 54]);
    });
    const a = [
      '', 'simple', -3, [2, 3, true, [undefined], ''], 5
    ]
    const b = [...a];
    test('test nested and complex arrays values equal', () => {
      assertEqual(a, b);
    });
  }

  {
    test('test empty objects values equal', () => {
      assertEqual({}, {});
    });
    test('test filled objects values equal', () => {
      assertEqual({i: 5, isRed: true}, {i: 5, isRed: true});
    });
    const a = {
      i: 5,
      person: {
        name: 'Mike',
        age: 15,
        skills: ['ddd', 'sqrs', ['rest', 'rpc']],
      }
    }
    const b = {...a};
    test('test nested and complex objects values equal', () => {
      assertEqual(a, b);
    });
  }

  //* reverse assertions */
  {
    const a = [
      '', 'simple', -3, [2, 3, true, [undefined], ''], 5
    ]
    const b = [...a];
    b[0] = '1';
    test('test equal throw error', () => {
      const cb = () => assertEqual(a, b);
      assertThrow(cb, 'not equal');
    });
  }
});

describe('assertNotEqualTests', () => {
  test('test string values not equal', () => {
    assertNotEqual('Val', 'val');
  });
  test('test number values equal', () => {
    assertNotEqual(5, -5);
  });

  {
    test('test filled arrays values equal', () => {
      assertNotEqual([1, 4, 55], [1, 4, 54]);
    });
    const a = [
      0, '', 'simple', -3, [2, 3, true, [undefined], ''], 5
    ]
    const b = [...a];
    b[0] = 1;
    test('test nested and complex arrays values equal', () => {
      assertNotEqual(a, b);
    });
  }

  {
    test('test filled objects values equal', () => {
      assertNotEqual({i: 4, isRed: true}, {i: 5, isRed: true});
    });
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
    test('test nested and complex objects values equal', () => {
      assertNotEqual(a, b);
    });
  }

  //* reverse assertions */
  {
    const a = [
      '', 'simple', -3, [2, 3, true, [undefined], ''], 5
    ]
    const b = [...a];
    test('test not equal throw error', () => {
      const cb = () => assertNotEqual(a, b);
      assertThrow(cb, 'equal');
    });
  }
});

describe('assertThrowTests', () => {
  test('function throw exeption', () => {
    assertThrow(() => {throw Error()});
  });
  const errStr = 'Это очень большое описание ошибки, чтобы по ней можно было сверить тест';
  test('function throw exeption', () => {
    assertThrow(() => {throw Error(errStr)}, 'можно было');
  });

  //* reverse assertions */
  {
    test('function not throw exeption', () => {
      assertThrow(() => assertThrow(() => {}))
    });
    test('function throwed exeption, but not include err message', () => {
      const cb = () => assertThrow(() => {throw Error(errStr)}, 'not included text');
      assertThrow(cb)
    });
  }
});

runTestsForHtml();
