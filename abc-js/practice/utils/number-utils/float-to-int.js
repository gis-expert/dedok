/** возвращает целую часть дробного числа. -56.78 -> -56*/
export function floatToInt(value) {
    if(typeof value !== "number") throw Error ('value must be only number type');
    if(value % 1 === 0) return value;
    return value-(value % 1); 
}
