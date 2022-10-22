//** символы с данной константы будут удалятся функциями
// trim(), trimLeft(), trimRight(). */
const TRIM_SYMBOLS = ' \n\t\v'; 

/** возвращает булевый ответ равны ли параметры firstText и secondText. */
export function isEqual(firstText, secondText) {

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

/** Переводит переданный аргумент в тип строки.
 * Можно переводить в строку только простые типы:
 * number, boolean, string, undefined, null.
 * Другие типы вызовут ошибку. */
export function toString(value) {

}

/** Возвращает "развернутую" копию text */
export function reverse(text) {

}

/** Возвращает text повторенный count раз. */
export function repeat(text, count) {

}

/** Возвращает копию строки с удаленными пробелами в начале и конце строки.
 * Удалению подлежат все символы в константе TRIM_SYMBOLS.*/
export function trim(text) {

}

/** Возвращает копию строки с удаленными пробелами в начале строки.
 * Удалению подлежат все символы в константе TRIM_SYMBOLS.*/
export function trimLeft(text) {

}

/** Возвращает копию строки с удаленными пробелами в конце строки.
 * Удалению подлежат все символы в константе TRIM_SYMBOLS.*/
export function trimRight(text) {

}

/** Возвращает копию text начиная с индекса start до индекса end.
 * Символ с индексом end не включается в выборку.
 * Если end не передано, то будет возвращено text до последнего символа*/
export function substring(text, start, end) {

}

/** Выполняет поиск строки searchString в строке text
 * и возвращает первую найденную позицию.
 * Если в вхождение не найдено, то возвращает значение -1.
 * Параметр position задает начальную позицию с которой необходимо
 * начать поиск.*/
export function indexOf(text, searchString, position) {

}

/** Возвращает строку text, где первое вхождение subStr поменяно на newSubStr.
 * text: строка, копию которой нужно получить.
 * subStr: строка которое нужно поменять.
 * newSubStr: строка, на которую нужно поменять. 
 * Это упрощенная реализация anyString.replace(subStr, newSubstr),
 * для ознакомления с возможностями полной версии: читать документацию. */
export function replace(text, subStr, newSubStr) {

}

/** Возвращает строку text, где все вхождения subStr поменяно на newSubStr.
 * text: строка, копию которой нужно получить.
 * subStr: строка которое нужно поменять.
 * newSubStr: строка, на которую нужно поменять. 
 * Это упрощенная реализация anyString.replaceAll(subStr, newSubstr),
 * для ознакомления с возможностями полной версии: читать документацию. */
export function replaceAll(text, subStr, newSubStr) {

}

/** Возвращает копию text увеличенный до длины maxLength
 * заполненный в начале символами fillString.
 * Допускается в fillString передавать строку из нескольких символов. */
export function padStart(text, maxLength, fillString = ' ') {

}

/** Возвращает копию text увеличенный до длины maxLength
 * символами fillString.
 * Допускается в fillString передавать строку из нескольких символов. */
export function padEnd(text, maxLength, fillString = ' ') {

}
