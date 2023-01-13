import { assertToBe } from "../../../../dependencies/asserts/assert.js";
import { describe, test } from "../../../../dependencies/tests/test.js";
import { indexOf } from "../string-utils/index-of.js";
import { DIGITS, FLOAT_DELIMITER, SIGNS } from "../string-utils/common.js";
import { substring } from "../string-utils/substring.js";

/** Возвращает целое числовое значение переданного аргумента value. */
export function parseInteger(value) {
  if (Array.isArray(value)) return parseInt(value);
  if (typeof value === 'boolean') return value === true ? 1 : 0;
  if (typeof value === 'string') return parseInt(value);
  if (typeof value === 'number') return numberToInteger(value);
  return NaN;
}

/** Принимает число и возвращает целую часть */
function numberToInteger(inputNum) {
  if (inputNum % 1 === 0) return inputNum;

  const sign = inputNum < 0 ? -1 : 1;
  const positive = inputNum < 0 ? -inputNum : inputNum;

  let result = 0;
  let reduce = positive;
  for (let i = 0; reduce >= 1; i++) {
    const lastDigit = getLastDigit(reduce);
    result += lastDigit * (10 ** i);
    reduce -= lastDigit;
  }
  return result * sign;
}

/** Получив десятичное число меньше 10, возвращает целую часть. */
function getDigit(inputNum) {
  for(let i = 1; i <= 10; i++) {
    if (i > inputNum) return i - 1;
  }
  throw Error('invalid input. argument most be loss 10');
}

/** Возвращает последнюю цифру целой части числа. */
function getLastDigit(inputNum) {
  return getDigit(inputNum % 10);
}

function stringToInteger(inputStr) {
  const intString = getIntegerPart(inputStr);
  let result = 0;
  let lastIndex = intString.length - 1;
  for (let i = 0; i < intString.length; i++) {
    const digit = indexOf(DIGITS, intString[lastIndex]);
    console.log('int: ' + intString);
    console.log('i: ' + i);
    console.log('d: ' + digit);
    if (digit === -1) throw Error('invalid execute. digit most be digital char. Now=' + intString[i]);
    result += (10 ** i) * digit;
    lastIndex -= 1;
  }
  return result;
}

/** Возвращает строку с целой частью числа. */
function getIntegerPart(inputStr) {
  const position = indexOf(inputStr, '.');
  if (position === -1) return inputStr;
  return substring(inputStr, 0, position);
}

function isDigits(inStr) {
  for(let i = 0; i < inStr; i++) {
    if(indexOf(DIGITS, inStr[i]) === -1) return false;
  }
  return true;
}

/** Возвращает строку которая соответствует числу. */
function numChars(inStr) {
  let raw = '';
  let sign = '';
  if (indexOf(SIGNS, inStr[0]) === -1) {
    raw = inStr;
  } else {
    sign = inStr[0];
    raw = substring(inStr, 1);
  }

  if (indexOf(DIGITS, raw[0]) === -1) return '';

  let delimiterFlag = false;
  let result = '';
  for(let i = 0; i < raw.length; i++) {
    if (indexOf(DIGITS, raw[i]) !== -1) {
      result += raw[i];
    } else if (indexOf(FLOAT_DELIMITER, raw[i]) !== -1 && !delimiterFlag) {
      result += raw[i];
      delimiterFlag = true;
    } else {
      break;
    }
  }
  return sign + result;
}

describe('stringToInteger tests', () => {
  describe('stringToInteger func tests', () => {
    function testStringToInteger(arr) {
      for(let i = 0; i < arr.length; i++) {
        const [rStr, str, iNum, fNum] = [...arr[i]];
        assertToBe(stringToInteger(rStr), iNum);
      }
    }

    test('stringToInteger', () => {
      testStringToInteger(integers);
      testStringToInteger(floats);
      testStringToInteger(zeroPoint);
      testStringToInteger(withPostText);
      testStringToInteger(withSuffText);
    });
  })

  describe('numChars func tests', () => {
    function testNumbChar(arr) {
      for(let i = 0; i < arr.length; i++) {
        const [rStr, str, iNum, fNum] = [...arr[i]];
        assertToBe(numChars(rStr), str);
      }
    }

    test('numChars', () => {
      testNumbChar(integers);
      testNumbChar(floats);
      testNumbChar(zeroPoint);
      testNumbChar(withPostText);
      testNumbChar(withSuffText);
    });
  })
  const integers = [
    // [inputStr, outString, intResult, floarResult]
    ['0', '0', 0, 0],
    ['1', '1', 1, 1],
    ['3', '3', 3, 3],
    ['5', '5', 5, 5],
    ['24', '24', 24, 24],
    ['1045', '1045', 1045, 1045],
    ['-0', '-0', 0, -0],
    ['-1', '-1', -1, -1],
    ['-3', '-3', -3, -3],
    ['-5', '-5', -5, -5],
    ['-24', '-24', -24, -24],
    ['-1045', '-1045', -1045, -1045],
  ];
  const floats = [
    // [inputStr, outString, intResult, floarResult]
    ['0.', '0.', 0, 0],
    ['0.0', '0.0', 0, 0],
    ['0.000', '0.000', 0, 0],
    ['0.1', '0.1', 0, 0.1],
    ['0.00134', '0.00134', 0, 0.00134],
    ['0.0000001', '0.0000001', 0, 0.0000001],
    ['0.999', '0.999', 0, 0.999],
    ['5.05', '5.05', 5, 5.05],
    ['24.959', '24.959', 24, 24.959],
    ['1045.99', '1045.99', 1045, 1045.99],
    ['-0.', '-0.', 0, 0.],
    ['-0.0', '-0.0', 0, 0],
    ['-0.000', '-0.000', 0, 0],
    ['-0.1', '-0.1', 0, -0.1],
    ['-0.00134', '-0.00134', 0, -0.00134],
    ['-0.0000001', '-0.0000001', 0, -0.0000001],
    ['-0.999', '-0.999', 0, -0.999],
    ['-5.05', '-5.05', -5, -5.05],
    ['-24.959', '-24.959', -24, -24.959],
    ['-1045.99', '-1045.99', -1045, -1045.99],
  ]
  const zeroPoint = [
    // [inputStr, outString, intResult, floarResult]
    ['-.0', '', NaN, NaN],
    ['-.001', '', NaN, NaN],
    ['.', '', NaN, NaN],
    ['.1st', '', NaN, NaN],
    ['-.1', '', NaN, NaN],
    ['+.1', '', NaN, NaN],
  ]
  const withPostText = [
    // [inputStr, outString, intResult, floarResult]
    ['-0sd', '-0', 0, 0],
    ['-1.st', '-1.', -1, -1],
    ['+1.1st', '+1.1', 1, 1.1],
    ['-1 stage 12', '-1', -1, -1],
    ['-.1 stage', '', NaN, NaN],
    ['-3 rd', '-3', -3, -3],
    ['+3 rd', '+3', +3, +3],
    ['-5-5', '-5', -5, -5],
    ['5.15.16', '5.15', 5, 5.15],
    ['5:15:16', '5', 5, 5],
  ]
  const withSuffText = [
    // [inputStr, outString, intResult, floarResult]
    ['-sd0', '', NaN, NaN],
    ['.st1', '', NaN, NaN],
    ['+st1.1st', '', NaN, NaN],
    ['f1 stage', '', NaN, NaN],
    ['quick 1 stage', '', NaN, NaN],
    [':5:15:16', '', NaN, NaN],
  ]
      
});
