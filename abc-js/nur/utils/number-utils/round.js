import { floatToInt } from "./float-to-int.js";
import { isInteger } from "./is-integer.js";

export function round(value, count = 0) {
  if (isInteger(value) && count === 0) return value;
  const sign = value < 0 ? -1 : 1;
  const positiveValue = value < 0 ? -value : value;
  const digitShifter = 10 ** count;
  const integer = floatToInt(positiveValue);
  const shiftedNum = positiveValue * digitShifter;
  const shiftedInt = floatToInt(shiftedNum) - integer * digitShifter;
  const shiftedFloat = shiftedNum - floatToInt(shiftedNum);
  const needIncrementShiftInt = () => sign === 1 ? shiftedFloat >= .5 : shiftedFloat > .5;
  const float = (shiftedInt + (needIncrementShiftInt() ? 1 : 0)) / digitShifter;
  return sign * (integer + float);
}

export function roundByMDN(value, exp) {
    exp = -exp;
    // Сдвиг разрядов
    value = value.toString().split('e');
    value = Math.round(+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
    // Обратный сдвиг
    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
}
