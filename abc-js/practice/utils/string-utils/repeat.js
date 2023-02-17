/** Возвращает text повторенный count раз. */
export function repeat(text, count = 1) {
    let nwStr = '';
    let nwCount = Number(Math.trunc(count));
    if (count < 0) throw Error('repeat count must be positive value or zero');
    if (typeof text === 'undefined') throw Error('text must not be of undefined');
    if (typeof text !== 'string') throw Error('text must be of type string');;

    for (let i = 0; i < nwCount; i += 1) {
        nwStr += text;
    }
    return nwStr;
}