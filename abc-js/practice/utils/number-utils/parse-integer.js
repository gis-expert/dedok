/** Возвращает целое числовое значение переданного аргумента value. */
export function parseInteger(value) {
    if (value === true) return 1;
    if (value === false) return 0;
    return parseInt(value);
}
console.log(parseInteger(NaN));