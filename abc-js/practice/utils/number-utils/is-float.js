import { isInteger } from "./is-integer.js";
export function isFloat(value) {
    return !(isInteger(value));

}
