
/** возвращает булевый ответ равны ли параметры firstText и secondText. */
export function isEqual(firstText, secondText) {
    if (typeof secondText !== "string" || typeof firstText !== "string") throw Error ("argument must be type of string");
    if (typeof secondText === 'undefined' || typeof firstText === 'undefined') throw Error("both parameters are required");
    if (firstText.length !== secondText.length) return false;

    const cycleLength = firstText.length < secondText.length ? firstText.length : secondText.length;
    for (let index = 0; index < cycleLength; index++) {
        if (firstText[index] !== secondText[index]) return false;
    }
    return true;
}

/** возвращает true если аргументы не равны, и true в иных случаях. */
export function isNotEqual(firstText, secondText) {
}

/** возвращает булевый ответ больше ли параметр firstText чем secondText. */
export function isMore(firstText, secondText) {
}

/** возвращает булевый ответ меньше ли параметр firstText чем secondText. */
export function isLess(firstText, secondText) {
}

/** возвращает булевый ответ больше или равно ли параметр firstText чем secondText. */
export function isMoreOrEqual(firstText, secondText) {
}

/** возвращает булевый ответ меньше или равно ли параметр firstText чем secondText. */
export function isLessOrEqual(firstText, secondText) {
}
