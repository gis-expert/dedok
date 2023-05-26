import { len } from './len.js';
import { isNotString } from './common.js';
/** возвращает булевый ответ равны ли параметры firstText и secondText. */
export function isEqual(firstText, secondText) {

    const firstTextLength = len(firstText);
    const secondTextLength = len(secondText);

    isNotString(firstText);

    if (len(firstText) !== len(secondText)) return false
    const minlength = firstTextLength < secondTextLength ? firstTextLength : secondTextLength;

    for (let i = 0; i < minlength; i++) {
        if (firstText[i] !== secondText[i]) return false
    }
    return true
}

/** возвращает true если аргументы не равны, и true в иных случаях. */
export function isNotEqual(firstText, secondText) {
    return !isEqual(firstText, secondText)
}

/** возвращает булевый ответ больше ли параметр firstText чем secondText. */
export function isMore(firstText, secondText) {

    const firstTextLength = len(firstText);
    const secondTextLength = len(secondText);

    isNotString(firstText);

    const minlength = firstTextLength > secondTextLength ? firstTextLength : secondTextLength;
    for (let i = 0; i < minlength; i++) {
        if ((firstText[i] > secondText[i] || secondText[i] === undefined)) return true
        if ((firstText[i] < secondText[i])) return false
    }
    return false
}

/** возвращает булевый ответ меньше ли параметр firstText чем secondText. */
export function isLess(firstText, secondText) {

    const firstTextLength = len(firstText);
    const secondTextLength = len(secondText);

    isNotString(firstText);
    
    const minlength = firstTextLength > secondTextLength ? firstTextLength : secondTextLength;
    for (let i = 0; i < minlength; i++) {
        if ((firstText[i] < secondText[i] || firstText[i] === undefined)) return true
        if ((firstText[i] > secondText[i])) return false
    }
    return false
}

/** возвращает булевый ответ больше или равно ли параметр firstText чем secondText. */
export function isMoreOrEqual(firstText, secondText) {

    const firstTextLength = len(firstText);
    const secondTextLength = len(secondText);

    isNotString(firstText);

    const minlength = firstTextLength > secondTextLength ? firstTextLength : secondTextLength;
    for (let i = 0; i < minlength; i++) {
        if ((firstText[i] > secondText[i])) return true
        if ((firstText[i] < secondText[i] || firstText[i] === undefined)) return false
    }
    return true
}

/** возвращает булевый ответ меньше или равно ли параметр firstText чем secondText. */
export function isLessOrEqual(firstText, secondText) {

    const firstTextLength = len(firstText);
    const secondTextLength = len(secondText);

    isNotString(firstText);
    const minlength = firstTextLength > secondTextLength ? firstTextLength : secondTextLength;
    for (let i = 0; i < minlength; i++) {
        if ((firstText[i] < secondText[i])) return true
        if ((firstText[i] > secondText[i] || secondText[i] === undefined)) return false
    }
    return true
}
