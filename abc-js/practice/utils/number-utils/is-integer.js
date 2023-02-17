export function isInteger(value) {
    if (typeof value === 'number') {
        return value % 1 === 0 ? true : false;
    } else {
        throw Error('value must be only number type');
    }
}