/** Возвращает копию text начиная с индекса start до индекса end.
 * Символ с индексом end не включается в выборку.
 * Если start не передано, то будет выборка начнется с первого символа.
 * Если end не передано, то будет возвращено text до последнего символа*/
import { isInteger } from "../number-utils/is-integer.js";
import { isNotString } from "./common.js"
import { len } from "./len.js"

export function substring(text, start, end) {

    isNotString(text);

    if (start !== undefined && typeof start !== 'number' || start < 0 
    || start !== undefined && !isInteger(start)) throw Error ('invalid start index')

    if (end !== undefined && typeof end !== 'number' || end < 0 
    || end !== undefined && !isInteger(end)) throw Error ('invalid end index')

    if(start > end) throw Error('invalid start and end index')
    let valueText = '';
    
    if(typeof text === 'string' && start === undefined && end === undefined) return text

    if(start === undefined && typeof end === 'number'){
        for(let i = 0 ; i < len(text); i++){
            valueText += text[i]
            if(text[start] === undefined) throw Error('invalid end index')
        }
        
    }
    
    if(typeof start === 'number' && end === undefined){
        for(; start < len(text); start++){
            valueText += text[start]
            if(text[start] === undefined) throw Error('invalid end index')
        }
        
    }

        for(; start < end; start++){
            valueText += text[start]
            if(text[start] === undefined) throw Error('invalid end index')
        }
        return valueText;
        
}

