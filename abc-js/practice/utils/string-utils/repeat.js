/** Возвращает text повторенный count раз. */
export function repeat(text, count = 1) {
    if(typeof text !== 'string') throw Error ('argument must be type of string')
    if(typeof count !== 'number') throw Error ('invalid count')
    if(count % 1 !== 0 || count < 0) throw Error ('invalid count')
    let valueText = '';
    for(let i = 0; i < count; i++){
        valueText += text
    }
    return valueText
}
