export function isFloat(value) {
    if (typeof value === 'number') {
        return value % 1 === 0 ? false : true;
    } else {
        throw Error('value must be only number type');
    }
}