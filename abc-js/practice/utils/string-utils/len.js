export function len(text) {
    if (typeof text !== "string") throw Error('text must be of type string');
    let lengthStr = 0
    if (text === '') return 0;
    for (let i = 0; text[i] !== undefined; i += 1) {
        lengthStr += 1;
    }
    return lengthStr;
}