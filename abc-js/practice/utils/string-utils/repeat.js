/** Возвращает text повторенный count раз. */
export function repeat(text, count = 1) {
    let nwStr = '';
    let nwCount = count == true ? 1 : parseInt(count);
    if (count < 0) throw Error('repeat count must be positive value or zero');
    if (typeof text === 'undefined') throw Error('argument must be type of string');
    if (typeof text !== 'string') throw Error('argument must be type of string');

    for (let i = 0; i < nwCount; i += 1) {
        nwStr += text;
    }
    return nwStr;
}