import { floatToInt } from "./float-to-int.js";
import { isInteger } from "./is-integer.js";

/** возвращает целую часть числа увеличенную в большую сторону */
export function ceil(value) {
  const int = floatToInt(value);
  if (isInteger(value)) return int;
  return value < 0 ? int : int + 1;
}
