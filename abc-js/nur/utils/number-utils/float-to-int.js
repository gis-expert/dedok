import { isInteger } from "./is-integer.js";

/** возвращает целую часть дробного числа. -56.78 -> -56*/
export function floatToInt(value) {
  if (isInteger(value)) return value;
  return value - (value % 1);
  // const sign = value < 0 ? -1 : 1;
  // let residual = value < 0 ? -value : value;
  // let result = 0;
  //
  // // multipleTen - кратность десяти
  // for (let multipleTen = 0; (residual) >= 1; multipleTen++) {
  //   const lastDigit = getLastIntegerDigit(residual);
  //   const digitMultipleTen = lastDigit * (10 ** multipleTen);
  //   result += digitMultipleTen;
  //   residual = (residual - lastDigit) / 10;
  // }
  // return sign * result;
}

// /** возвращает последнюю цифру целой части. 56.78 -> 6 */
// function getLastIntegerDigit(value) {
//   const lastAsFloat = value % 10;
//   let result = 0;
//   for (; lastAsFloat - result >= 1; result++) {}
//   return result;
// }
