/** Возвращает text повторенный count раз. */
export function repeat(text, count = 1) {
    let nwStr = '';
    if (typeof text === "string") {
        for (let i = 0; i < count; i += 1) {
            nwStr += text;
        }
    } else if (typeof count === "string") {
        if (count[0] == ) {

        } else if () {

        } else {}
    }
    return nwStr;
}
console.log(repeat('text', 5));