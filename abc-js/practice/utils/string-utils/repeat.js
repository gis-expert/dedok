/** Возвращает text повторенный count раз. */
export function repeat(text, count = 1) {
    let nwStr = '';
    let nwCount = count % 1 == 0;
    if (typeof text !== "string") return false;
    for (let i = 0; i < nwCount; i += 1) {
        nwStr += text;
    }
    return nwStr;
}
// Не до конца
// function isInteger(num){
//     return num / 
// }
// console.log(isInteger(3.95));