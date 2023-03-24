import { assertToBe } from "../../../../dependencies/asserts/assert.js";
import { describe, test } from "../../../../dependencies/tests/test.js";
import { random } from "./random.js";

describe('randomTests', () => {
  test('aaa', () => {
    assertToBe(random(3), 3);
  })
})
