/** Возвращает "развернутую" копию text */
export function reverse(text) {
    let newStr = '';
    if (typeof text == "undefined") {
        throw new Error("text must not be of undefined");
    } else if (typeof text != "string") {
        throw new Error("text must be of type string");
    } else {
        for (let i = text.length - 1; i >= 0; i -= 1) {
            newStr += text[i];
        }
    }
    return newStr;
}