/** возвращает булевый ответ равны ли параметры firstText и secondText. */
export function isEqual(firstText, secondText) {
    if(typeof firstText !== "string" || typeof secondText !== "string"){
        throw Error('argument must be type of string');
    }
    if(firstText === secondText){
        return true;
    }
    else{
        return false;
    }
}

/** возвращает true если аргументы не равны, и false в иных случаях. */
export function isNotEqual(firstText, secondText) {
    if(typeof firstText !== "string" || typeof secondText !== "string"){
        throw Error('argument must be type of string');
    }
    if(firstText === secondText){
        return false;
    }
    else{
        return true;
    }
}

/** возвращает булевый ответ больше ли параметр firstText чем secondText. */
export function isMore(firstText, secondText) {
    if(typeof firstText !== "string" || typeof secondText !== "string"){
        throw Error('argument must be type of string');
    }

    if(firstText > secondText){
        return true;
    }
    else{
        return false;
    }
}

/** возвращает булевый ответ меньше ли параметр firstText чем secondText. */
export function isLess(firstText, secondText) {
    if(typeof firstText !== "string" || typeof secondText !== "string"){
        throw Error('argument must be type of string');
    }

    if(firstText > secondText){
        return false;
    }
    else if(firstText === secondText){
        return false;
    }
    else{
        return true;
    }

}

/** возвращает булевый ответ больше или равно ли параметр firstText чем secondText. */
export function isMoreOrEqual(firstText, secondText) {
    if(typeof firstText !== "string" || typeof secondText !== "string"){
        throw Error('argument must be type of string');
    }

    if(firstText > secondText){
        return true;
    }
    else if(firstText === secondText){
        return true;
    }
    else{
        return false;
    }
}

/** возвращает булевый ответ меньше или равно ли параметр firstText чем secondText. */
export function isLessOrEqual(firstText, secondText) {
    if(typeof firstText !== "string" || typeof secondText !== "string"){
        throw Error('argument must be type of string');
    }

    if(firstText > secondText){
        return false;
    }
    else if(firstText === secondText){
        return true;
    }
    else{
        return true;
    }
}
