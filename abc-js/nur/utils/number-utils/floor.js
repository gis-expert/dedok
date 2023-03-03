import { floatToInt } from "./float-to-int.js";
import { isInteger } from "./is-integer.js";

/** возвращает целую часть числа уменьшенную в меньшую сторону */
export function floor(value) {
  const int = floatToInt(value);
  if (isInteger(value)) return int;
  return value < 0 ? int - 1 : int;
}
