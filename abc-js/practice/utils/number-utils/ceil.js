/** возвращает целую часть числа увеличенную в большую сторону */
export function ceil(value) {
    if(typeof value !== "number") throw Error ('value must be only number type');
    let a = -1;
    if(value % 1 !== 0){ 
        if(value >= 0){
            a += (value % 1);
            return (value - a);
        }
        return value-(value % 1);
    }
    return value;
}
