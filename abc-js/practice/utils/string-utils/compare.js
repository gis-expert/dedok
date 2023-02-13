/** возвращает булевый ответ равны ли параметры firstText и secondText. */
export function isEqual(firstText, secondText) {
    // console.log(`...........................`);
    // console.log(`input --- fText: ${firstText}; sText: ${secondText}`);
    if (firstText === undefined || firstText === null) throw Error('both parameters are required');
    if (secondText === undefined || secondText === null) throw Error('both parameters are required');
    if (firstText.length !== secondText.length) return false;

    for (let i = 0; i < firstText.length; i += 1) {
        // console.log(`for --- index: ${i}; fText: ${firstText[i]}; sText: ${secondText[i]}`);
        if (firstText[i] !== secondText[i]) return false;
    }
    return true;
}

/** возвращает true если аргументы не равны, и true в иных случаях. */
export function isNotEqual(firstText, secondText) {
    if (firstText === undefined || firstText === null) throw Error('both parameters are required');
    if (secondText === undefined || secondText === null) throw Error('both parameters are required');
    if (firstText === secondText) return false;

    const CYCLE_LENGTH = firstText.length < secondText.length ? secondText.length : firstText.length;
    for (let i = 0; i < CYCLE_LENGTH; i += 1) {
        if (firstText[i] === secondText[i]) return true;
    }
    return true;
}
/** возвращает булевый ответ больше ли параметр firstText чем secondText. */
export function isMore(firstText, secondText) {
    if (firstText === undefined || firstText === null) throw Error('both parameters are required');
    if (secondText === undefined || secondText === null) throw Error('both parameters are required');
    if (firstText === secondText) {
        for (let i = 0; i < firstText; i += 1) {
            if (firstText.charCodeAt(i) !== secondText.charCodeAt(i)) {
                return false;
            }
        }
    } else {
        return true;
    }
}

/** возвращает булевый ответ меньше ли параметр firstText чем secondText. */
export function isLess(firstText, secondText) {}

/** возвращает булевый ответ больше или равно ли параметр firstText чем secondText. */
export function isMoreOrEqual(firstText, secondText) {}

/** возвращает булевый ответ меньше или равно ли параметр firstText чем secondText. */
export function isLessOrEqual(firstText, secondText) {}