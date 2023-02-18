/** Возвращает копию text начиная с индекса start до индекса end.
 * Символ с индексом end не включается в выборку.
 * Если start не передано, то будет выборка начнется с первого символа.
 * Если end не передано, то будет возвращено text до последнего символа*/
export function substring(text, start, end) {
    let newStr = "";
    let CYCLE_END = 0;
    if (typeof end === 'undefined' && typeof start === 'undefined') return text;
    CYCLE_END = typeof end === 'undefined' ? text.length : end;
    for (let i = start; i < text.length; i += 1) {
        newStr += text[i];
    }
    return newStr;
}