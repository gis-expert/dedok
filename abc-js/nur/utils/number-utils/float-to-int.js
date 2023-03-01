import { isInteger } from "./is-integer.js";

/** возвращает целую часть дробного числа. -56.78 -> -56*/
export function floatToInt(value) {
  if (isInteger(value)) return value;
  return value - (value % 1);
}
