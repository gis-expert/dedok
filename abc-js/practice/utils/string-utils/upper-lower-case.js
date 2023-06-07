/** возвращает копию строки text в верхнем регистре */
import { toUpper } from "./char-utils.js";
import { toLower } from "./char-utils.js";
import { len } from "./len.js";
export function upperCase(text) {
    let char = "";
    if(typeof text !== "string") throw Error ('argument must be type of string');
    for(let i = 0; i < len(text); i++){
        char += toUpper(text[i]);
    }
    return char;
}

/** возвращает копию строки text в верхнем регистре */
export function lowerCase(text) {
    let char = "";
    if(typeof text !== "string") throw Error ('argument must be type of string');
    for(let i = 0; i < len(text); i++){
        char += toLower(text[i]);
    }
    return char;
}
