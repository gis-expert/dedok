import { floatToInt } from "./float-to-int.js";
import { isInteger } from "./is-integer.js";

/** возвращает целую часть числа уменьшенную в меньшую сторону */
export function floor(value) {
  if (isInteger(value)) return value;
  return value < 0 ? floatToInt(value) - 1 : floatToInt(value);
}
