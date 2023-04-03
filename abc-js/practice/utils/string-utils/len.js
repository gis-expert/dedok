export function len(text) {
    if (typeof text !== 'string' ) throw Error ('argument must be type of string');
    let i;
    for (i = 0; text[i]; i += 1) {
    }
    return i;
}

