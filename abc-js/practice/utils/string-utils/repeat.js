/** Возвращает text повторенный count раз. */
import { isNotString } from "./common.js";
import { isInteger } from "../number-utils/is-integer.js";

export function repeat(text, count = 1) {

    isNotString(text)
    if(typeof count !== 'number' || !isInteger(count) || count < 0) throw Error ('invalid count')

    return count <= 0 ? "" : repeat(text, count - 1) + text;
}

