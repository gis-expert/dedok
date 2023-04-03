import { len } from "./len.js";
export function reverse(text) {
    let returnWord = '';
    for (let i = len(text) - 1; i >= 0; i--){
    returnWord += text[i]; 
}
return returnWord;
}
