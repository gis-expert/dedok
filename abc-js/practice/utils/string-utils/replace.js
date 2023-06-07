/** Возвращает строку text, где первое вхождение search поменяно на target.
 * text: строка, копию которой нужно получить.
 * search: строка которое нужно поменять.
 * target: строка, на которую нужно поменять. */

import { len } from "./len.js";
import { indexOf } from "./index-of.js";

export function replace(text, search, target) {

    if(typeof text !== "string") throw Error ('argument text must be type of string')
    if(typeof search !== "string") throw Error ('argument search must be type of string')
    if(typeof target !== "string") throw Error ('argument target must be type of string')

    
    let textValue = 0;
    let targetValueText = '';
    let endValueText = '';
    let startValueText = '';
    let textResult = '';
    let startEndValutext = 0;

    const textLen = len(text);
    const searchLen = len(search);
    const targetLen = len(target);

    
    for(let i = 0; i < textLen; i++){
        if(text[i] === search[0]){
            startEndValutext = i;

            for(let j = 0; j < searchLen; j++){
                if(text[i+j] === search[j]){
                    textValue += 1;
                    startEndValutext +=1
                }
                else{
                textValue = 0;
                }

                if(textValue === searchLen){

                    for(let u = 0; u < i; u++){
                        startValueText += text[u];
                    }
                    
                    for(let l = 0; l < targetLen; l++){
                        targetValueText += target[l];
                        
                    }
                    
                    for(let k = startEndValutext; k < textLen; k++){
                        endValueText += text[k];
                    }

                    textResult = startValueText += targetValueText += endValueText;
                    return textResult;
                }
            }
        }
    }
    return text;
}

/** Возвращает строку text, где все вхождения search поменяно на target.
 * text: строка, копию которой нужно получить.
 * search: строка которое нужно поменять.
 * target: строка, на которую нужно поменять. */
export function replaceAll(text, search, target) {

    if(typeof text !== "string") throw Error ('argument text must be type of string')
    if(typeof search !== "string") throw Error ('argument search must be type of string')
    if(typeof target !== "string") throw Error ('argument target must be type of string')
    
    let indexOfResult;
    let inOfCount = 0;
    let scanSym  = "";  
    let replaceAllText = text;

    for(let io = 0; io < len(text); io++){
        indexOfResult = indexOf(text, search, io);

        if(indexOfResult !== scanSym && indexOfResult !== -1){
            scanSym = indexOfResult;
            inOfCount += 1;
        } 
    }

    for(let i = 0; i < inOfCount; i++){
        replaceAllText = replace(replaceAllText, search, target);
    }
    return replaceAllText;
}
