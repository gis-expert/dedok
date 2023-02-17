import { assertToBe } from "../../../dependencies/asserts/assert.js";
import { describe, test } from "../../../dependencies/tests/test.js";
import { repeat } from "./repeat.js";

describe('repeatRecursionTest', () => {
  test('штатная работа функции', () => {
    assertToBe(repeat('ab', 3), 'ababab');

  })
})
