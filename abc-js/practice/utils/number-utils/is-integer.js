export function isInteger(value) {
    if (typeof value !== 'number') throw Error ('value must be only number type');
    if (value % 1 === 0) {
        return true;
    }
    if (value % 1 !== 0) {
        return false;
    }
}
