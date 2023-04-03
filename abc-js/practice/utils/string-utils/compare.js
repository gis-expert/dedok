import { notStringRiseError } from "./common.js";
import { len } from "./len.js";




export function isEqual(firstText, secondText) {
    let i = len(firstText);
    let b = len(secondText);
      if (i !== b) return false;
    const cycleLength = i  < b ? i  : b;
    for (let index = 0; index < cycleLength; index += 1) {
        if (firstText[index] !== secondText[index]) return false;
    }   
    return true;
}


/** возвращает true если аргументы не равны, и true в иных случаях. */
export function isNotEqual(firstText, secondText) {
    return !(isEqual(firstText, secondText));
}

/** возвращает булевый ответ больше ли параметр firstText чем secondText. */
export function isMore(firstText, secondText) {
    const cycleLength = len(firstText)  < len(secondText) ? len(firstText)  : len(secondText);
    
    for (let index = 0; index <= cycleLength; index += 1) {
        if (firstText[index] > secondText[index]) { 
            return true;
        }
        if (firstText[index] < secondText[index]) {
            return false;
    }
}
return len(firstText) > len(secondText);
}



/** возвращает булевый ответ меньше ли параметр firstText чем secondText. */
export function isLess(firstText, secondText) {
    return !(isEqual(firstText, secondText) || isMore(firstText, secondText));
}

/** возвращает булевый ответ больше или равно ли параметр firstText чем secondText. */
export function isMoreOrEqual(firstText, secondText) {
    return !(isLess(firstText, secondText));
}

/** возвращает булевый ответ меньше или равно ли параметр firstText чем secondText. */
export function isLessOrEqual(firstText, secondText) {
    return !(isMore(firstText, secondText));
}