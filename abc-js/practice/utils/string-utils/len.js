import { isNotString } from "./common.js";

export function len(text) {

    isNotString(text)

    let textCount = 0;
    for (; text[textCount]; textCount += 1) {}
    return textCount;
}

