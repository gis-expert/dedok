import { substring } from "./substring.js";
import { len } from "./len.js";
import { isEqual } from "./compare.js";
export function indexOf(text, searchString, index = 0) {
    let count = len(text);
    
    if (typeof searchString === 'undefined' || typeof searchString !== 'string') throw Error ('invalid searchString string');
    if (typeof index !== 'number' || index % 1 !== 0 || index < 0 || index > count ) throw Error ('invalid index');
     for (let i = index; i < count; i++) {
        const textSubstr = text.substring( i , i + len(searchString));
        if (isEqual(textSubstr, searchString)) {
            return i;
        }

     }
  
    return -1;
}
