/** Возвращает копию text увеличенный до длины maxLength
 * заполненный в начале символами fillString.
 * Допускается в fillString передавать строку из нескольких символов. */

import { len } from "./len.js";
import { reverse } from "./reverse.js";

export function padStart(text, maxLength, fillString = ' ') {

    if (typeof text !== "string") throw Error("argument text must be type of string")
    if (maxLength === undefined || maxLength <= 0) return text;
    if (typeof maxLength !== "number") throw Error("invalid type of maxLength")
    if (typeof fillString !== "string") throw Error("argument fillString must be type of string")

    const textLen = len(text);
    const fillLen = len(fillString);
    let fillValue = 0;
    let fillStartStr = "";
    let result;

    if (textLen >= maxLength) return text;

    fillValue = maxLength - textLen;

    if (fillLen === 1) {

        for (let i = 0; i < fillValue; i++) {

            fillStartStr += fillString;

            if (len(fillStartStr + text) === maxLength) {
                return fillStartStr + text;
            }
        }
    }

    for (let j = 0; j < j + 1; j++) {

        if (j >= fillLen) j = 0;
        fillStartStr += fillString[j];

        if (len(fillStartStr + text) === maxLength) {
            return fillStartStr + text;
        }
    }
    return fillStartStr;

}

/** Возвращает копию text увеличенный до длины maxLength
 * заполненный в конце символами fillString.
 * Допускается в fillString передавать строку из нескольких символов. */
export function padEnd(text, maxLength, fillString = ' ') {

    if (typeof text !== "string") throw Error("argument text must be type of string")
    if (typeof fillString !== "string") throw Error("argument fillString must be type of string")

    let reversText = text;
    let reversfillStr = fillString;
    let reversTextAndfillStr = "";
    let fillStartStr = "";
    let result = "";
    const fillLen = len(fillString);

    reversText = reverse(reversText);
    reversfillStr = reverse(fillString);
    reversTextAndfillStr = padStart(reversText, maxLength, reversfillStr);

    if(fillLen === 1){
        result = reverse(reversTextAndfillStr);
        return result;
    }

    for (let j = 0; j < j + 1; j++) {

        if (j >= fillLen) j = 0;
        fillStartStr += fillString[j];

        if (len(fillStartStr + text) === maxLength) {
            return text + fillStartStr;
        }
    }
    return fillStartStr;
}

/** Возвращает копию text увеличенный до длины maxLength
 * заполненный в начале и конце символами fillString.
 * Допускается в fillString передавать строку из нескольких символов. */
export function pad(text, maxLength, fillString = ' ') {

    if (typeof text !== "string") throw Error("argument text must be type of string")
    if (maxLength === undefined) return text;
    if (typeof maxLength !== "number") throw Error("invalid type of maxLength")
    if (typeof fillString !== "string") throw Error("argument fillString must be type of string")

    let textLen = len(text);
    let startMaxInt;
    let endMaxInt;
    let result;

    if(maxLength % 2 === 0){
        startMaxInt = ((maxLength - textLen) / 2) + textLen;
    }else{
        startMaxInt = (((maxLength - textLen) / 2) + 0.5) + textLen;
    }

    result = padStart(text, startMaxInt, fillString)

    if(maxLength % 2 === 0){
        endMaxInt = ((maxLength - textLen) / 2) + len(result);
    }else{
        endMaxInt = (((maxLength - textLen) / 2) - 0.5) + len(result);
    }

    result = padEnd(result, endMaxInt, fillString);
    return result;

}
