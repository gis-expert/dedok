const TRIM_SYMBOLS = ' \n\t\v';

    import { len } from "./len.js"

/** Возвращает копию строки с удаленными символами со строки trimSymbols в начале строки.
 * По умолчанию удаляются символы пробела, табуляции и перевода строки.*/
export function trimStart(text, trimSymbols=TRIM_SYMBOLS) {
    

    if(typeof text !== 'string') throw Error ('argument text must be type of string')
    if(typeof trimSymbols !== 'string') throw Error ('argument trimSymbols must be type of string')

    let textValue = 0;
    let textResult = '';
    const textLen = len(text);
    const trimSymLen = len(text);

    
    if(trimSymLen <= 3){
        trimSymbols += " ";
    }

    for (let i = 0; i < textLen; i++){

        textValue = 0;

        for(let j = 0; j < trimSymLen; j++){
            if(trimSymbols[j] !== text[i]) textValue +=1;
        }

        if(textValue === trimSymLen){


            for(let l = i; l < textLen; l++){
                textResult += text[l];
            }
            return textResult;

        }
    }

    return textResult;
}

/** Возвращает копию строки с удаленными символами со строки trimSymbols в конце строки.
 * По умолчанию удаляются символы пробела, табуляции и перевода строки.*/
export function trimEnd(text, trimSymbols=TRIM_SYMBOLS) {

    if(typeof text !== 'string') throw Error ('argument text must be type of string');
    if(typeof trimSymbols !== 'string') throw Error ('argument trimSymbols must be type of string');


    let textValue = 0;
    let textResult = '';
    let textResult2 = '';
    const textLen = len(text)-1;
    let trimSymLen = len(trimSymbols);

    while(trimSymLen <= 3){
        trimSymbols += " " ;
        trimSymLen += 1; 
    }


    for (let i = textLen; i >= 0; i--){

        textValue = 0;

        for(let j = trimSymLen-1; j >= 0; j--){
            if(text[i] !== trimSymbols[j]) textValue += 1;
        }


        if(textValue === trimSymLen){
            for(let l = i; l >= 0; l--){
                textResult += text[l];
            }
            
            for(let u = len(textResult)-1; u >= 0; u--){
                textResult2 += textResult[u]
            }
            return textResult2;
        }
        

    }    
    return textResult;
    
}

/** Возвращает копию строки с удаленными символами
 * со строки trimSymbols в начале и конце строки.
 * По умолчанию удаляются символы пробела, табуляции и перевода строки.*/
export function trim(text, trimSymbols=TRIM_SYMBOLS) {

    return trimEnd(trimStart(text, trimSymbols), trimSymbols);
}
