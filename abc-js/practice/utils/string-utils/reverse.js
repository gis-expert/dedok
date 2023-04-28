import { len } from './len.js';
/** Возвращает "развернутую" копию text */
export function reverse(text) {
    let reverseText = '';
    for(let i = len(text)-1; i >= 0; i--){
        reverseText += text[i];
    }
    return reverseText
}
