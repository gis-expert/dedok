const TRIM_SYMBOLS = ' \n\t\v'; 

/** Возвращает копию строки с удаленными символами со строки trimSymbols в начале строки.
 * По умолчанию удаляются символы пробела, табуляции и перевода строки.*/
export function trimStart(text, trimSymbols=TRIM_SYMBOLS) {

    if(typeof text !== 'string') throw Error ('argument text must be type of string')
    if(typeof trimSymbols !== 'string') throw Error ('argument trimSymbols must be type of string')

    let textValue = 0;
    let textResult = '';
    const textCount = text.length;

    
    if(trimSymbols.length <= 3){
        trimSymbols += 0;
    }

    for (let i = 0; i < textCount; i++){

        textValue = 0;

        for(let j = 0; j < trimSymbols.length; j++){
            if(trimSymbols[j] !== text[i]) textValue +=1;
        }

        if(textValue === trimSymbols.length){


            for(let l = i; l < textCount; l++){
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
    const textCount = text.length-1;

    if(trimSymbols.length <= 3){
        trimSymbols += 0;
    }


    for (let i = textCount; i >= 0; i--){

        textValue = 0;

        for(let j = trimSymbols.length-1; j >= 0; j--){
            if(text[i] !== trimSymbols[j]) textValue += 1;
        }


        if(textValue === trimSymbols.length){
            for(let l = i; l >= 0; l--){
                textResult += text[l];
            }
            
            for(let u = textResult.length-1; u >= 0; u--){
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

    if(typeof text !== 'string') throw Error ('argument text must be type of string');
    if(typeof trimSymbols !== 'string') throw Error ('argument trimSymbols must be type of string');


    let textValue = 0;
    let textResult = '';
    let textResult2 = '';
    let textResultEnd = '';
    const textCount = text.length;

    
    if(trimSymbols.length <= 3){
        trimSymbols += 0;
    }

    for (let i = 0; i < textCount; i++){

        textValue = 0;

        for(let j = 0; j < trimSymbols.length; j++){
            if(trimSymbols[j] !== text[i]) textValue +=1;
        }


        if(textValue === trimSymbols.length){

            for(let l = i; l < textCount; l++){
                textResult += text[l];
            }


            const textResultCount = textResult.length-1; 
            let textResultTrimEnd = textResult; 
            
//trimEnd Result--------------------------------------------/

            let textValueTrimEnd = 0;
            

            for (let i = textResultCount; i >= 0; i--){

                textValueTrimEnd = 0;

                for(let j = trimSymbols.length-1; j >= 0; j--){
                    if(textResultTrimEnd[i] !== trimSymbols[j]) textValueTrimEnd += 1;
                }
        
        
                if(textValueTrimEnd === trimSymbols.length){
                    for(let l = i; l >= 0; l--){
                        textResultEnd += textResultTrimEnd[l];
                    }
                    
                    for(let u = textResultEnd.length-1; u >= 0; u--){
                        textResult2 += textResultEnd[u]
                    }
                    return textResult2;
                } 
            }
        }
        
    }

    if(textResult.length === 0) return '';
    for (let i = textResultCount; i >= 0; i--){

        for(let j = trimSymbols.length-1; j >= 0; j--){
            if(textResultTrimEnd[i] !== trimSymbols[j]) textValue += 1;
        }

        if(textValue === 4) return text;

        if(textValue % 3 !== 0){
            for(let l = i; l >= 0; l--){
                textResultEnd += textResultTrimEnd[l];
            }
            
            for(let u = textResultEnd.length-1; u >= 0; u--){
                textResult2 += textResultEnd[u]
            }
            return textResult2;
        } 
    }
    return '';
}
