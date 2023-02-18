import { len } from './len.js';

function parametersError(firstText, secondText) {
    if ((firstText === undefined || firstText === null) || (secondText === undefined || secondText === null)) throw Error('both parameters are required');
}

function isNotString(firstText, secondText) {
    if (typeof firstText !== 'string' || typeof secondText !== 'string') return false;
}

/** возвращает булевый ответ равны ли параметры firstText и secondText. */
export function isEqual(firstText, secondText) {
    // console.log(`...........................`);
    // console.log(`input --- fText: ${firstText}; sText: ${secondText}`);
    parametersError(firstText, secondText);
    if (firstText.length !== secondText.length) return false;
    for (let i = 0; i < len(firstText); i += 1) {
        // console.log(`for --- index: ${i}; fText: ${firstText[i]}; sText: ${secondText[i]}`);
        if (firstText[i] !== secondText[i]) return false;
    }
    return true;
}

/** возвращает true если аргументы не равны, и true в иных случаях. */
export function isNotEqual(firstText, secondText) {
    parametersError(firstText, secondText);
    if (typeof firstText !== 'string' || typeof secondText !== 'string') return true;
    if (firstText === secondText) return false;
    const CYCLE_LENGTH = len(firstText) < len(secondText) ? len(secondText) : len(firstText);
    for (let i = 0; i < CYCLE_LENGTH; i += 1) {
        if (firstText[i] === secondText[i]) return true;
    }
    return true;
}

/** возвращает булевый ответ больше ли параметр firstText чем secondText. */
export function isMore(firstText, secondText) {
    parametersError(firstText, secondText);
    isNotString(firstText, secondText)

    const CYCLE_LENGTH = firstText.length > secondText.length ? secondText.length : firstText.length;
    for (let i = 0; i < CYCLE_LENGTH; i += 1) {
        if (firstText[i] > secondText[i]) return true;
        if (firstText[i] < secondText[i]) return false;
    }
    return firstText.length > secondText.length ? true : false;
}

/** возвращает булевый ответ меньше ли параметр firstText чем secondText. */
export function isLess(firstText, secondText) {
    parametersError(firstText, secondText);
    isNotString(firstText, secondText)
    const CYCLE_LENGTH = firstText.length < secondText.length ? secondText.length : firstText.length;
    for (let i = 0; i < CYCLE_LENGTH; i += 1) {
        if (firstText[i] < secondText[i]) return true;
        if (firstText[i] > secondText[i]) return false;
    }
    return firstText.length < secondText.length ? true : false;
}

/** возвращает булевый ответ больше или равно ли параметр firstText чем secondText. */
export function isMoreOrEqual(firstText, secondText) {
    return (isMore(firstText, secondText) || isEqual(firstText, secondText));
}

/** возвращает булевый ответ меньше или равно ли параметр firstText чем secondText. */
export function isLessOrEqual(firstText, secondText) {
    return (isLess(firstText, secondText) || isEqual(firstText, secondText));
}