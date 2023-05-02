/** Возвращает копию text начиная с индекса start до индекса end.
 * Символ с индексом end не включается в выборку.
 * Если start не передано, то будет выборка начнется с первого символа.
 * Если end не передано, то будет возвращено text до последнего символа*/
export function substring(text, start, end) {
    console.log(`text: ${text}`)
    console.log(`start: ${start}`)
    console.log(`end: ${end}`)
    if (typeof text !== 'string') throw Error ('argument must be type of string')

    if (start !== undefined && typeof start !== 'number' || start < 0) throw Error ('invalid start index')
    else if (end !== undefined && typeof end !== 'number' || end < 0) throw Error ('invalid end index')

    if (start !== undefined && start % 1 !== 0) throw Error ('invalid start index')
    else if (end !== undefined && end % 1 !== 0) throw Error ('invalid end index')
    
    if(start > end) throw Error('invalid start and end index')
    let valueText = '';
    
    if(typeof text === 'string' && start === undefined && end === undefined) return text

    if(start === undefined && typeof end === 'number'){
        for(let i = 0 ; i < text.length; i++){
            valueText += text[i]
                console.log(`u/n valueText${i}: ${valueText}`)
            if(text[start] === undefined) throw Error('invalid end index')
                console.log(`valueText: ${valueText}`)
        }
        
    }
    
    if(typeof start === 'number' && end === undefined){
        for(; start < text.length; start++){
            valueText += text[start]
                console.log(`n/u valueText${start}: ${valueText}`)
            if(text[start] === undefined) throw Error('invalid end index')
                console.log(`valueText: ${valueText}`)
        }
        
    }

        for(; start < end; start++){
            valueText += text[start]
                console.log(`valueText${start}: ${valueText}`)
            if(text[start] === undefined) throw Error('invalid end index')
                console.log(`valueText: ${valueText}`)
        }
        console.log('--------finish')
        return valueText;
        
}

