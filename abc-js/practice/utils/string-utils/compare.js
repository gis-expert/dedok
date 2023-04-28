import { len } from './len.js';
/** возвращает булевый ответ равны ли параметры firstText и secondText. */
export function isEqual(firstText, secondText) {

    if (typeof secondText !== typeof firstText) throw Error('argument must be type of string')
    if (len(firstText) !== len(secondText)) return false
    

    const symlength = len(firstText) < len(secondText) ? len(firstText) : len(secondText);
    for (let i = 0; i < symlength; i++) {
        if (firstText[i] !== secondText[i]) return false
    }
    return true
}

/** возвращает true если аргументы не равны, и true в иных случаях. */
export function isNotEqual(firstText, secondText) {
    if (typeof secondText !== typeof firstText) throw Error('argument must be type of string')
    if (len(firstText) !== len(secondText)) return true
    const symlength = len(firstText) < len(secondText) ? len(firstText) : len(secondText);
    for (let i = 0; i < symlength; i++) {
        if (firstText[i] !== secondText[i]) return true
    }
    return false
}

/** возвращает булевый ответ больше ли параметр firstText чем secondText. */
export function isMore(firstText, secondText) {
    if (typeof secondText !== typeof firstText) throw Error('argument must be type of string')
    const symlength = len(firstText) > len(secondText) ? len(firstText) : len(secondText);
    for (let i = 0; i < symlength; i++) {
        if ((firstText[i] > secondText[i] || secondText[i] === undefined)) return true
        if ((firstText[i] < secondText[i])) return false
    }
    return false
}

/** возвращает булевый ответ меньше ли параметр firstText чем secondText. */
export function isLess(firstText, secondText) {
    if (typeof secondText !== typeof firstText) throw Error('argument must be type of string')
    const symlength = len(firstText) > len(secondText) ? len(firstText) : len(secondText)
    for (let i = 0; i < symlength; i++) {
        if ((firstText[i] < secondText[i] || firstText[i] === undefined)) return true
        if ((firstText[i] > secondText[i])) return false
    }
    return false
}

/** возвращает булевый ответ больше или равно ли параметр firstText чем secondText. */
export function isMoreOrEqual(firstText, secondText) {
    if (typeof firstText !== typeof secondText) throw Error ('argument must be type of string')
    const symlength = len(firstText) > len(secondText) ? len(firstText) : len(secondText);
    for (let i = 0; i < symlength; i++) {
        if ((firstText[i] > secondText[i])) return true
        if ((firstText[i] < secondText[i] || firstText[i] === undefined)) return false
    }
    return true
}

/** возвращает булевый ответ меньше или равно ли параметр firstText чем secondText. */
export function isLessOrEqual(firstText, secondText) {
    if (typeof firstText !== typeof secondText) throw Error ('argument must be type of string')
    const symlength = len(firstText) > len(secondText) ? len(firstText) : len(secondText);
    for (let i = 0; i < symlength; i++) {
        if ((firstText[i] < secondText[i])) return true
        if ((firstText[i] > secondText[i] || secondText[i] === undefined)) return false
    }
    return true
}
