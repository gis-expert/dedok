/** Выполняет поиск строки searchString в строке text
 * и возвращает первую найденную позицию.
 * Если в вхождение не найдено, то возвращает значение -1.
 * Параметр index задает начальную индекс с которой необходимо
 * начать поиск.*/
import { isNotString } from "./common.js"
import { len } from "./len.js"

export function indexOf(text, searchString, index=0) {
 
    isNotString(text);

    const textLen = len(text)
    
    if(typeof searchString !== 'string') throw Error ('invalid searchString string')
    const searchStringLen = len(searchString)

    if(searchString === ''){
        return -1;
    }
    if(index < 0 || index > textLen || index % 1 !== 0 || typeof index !== 'number') throw Error('invalid index');
    

    if(searchStringLen === 1) {
        for (let i = index; i < textLen; i++){
            if(text[i] === searchString[0]) return i;
        }
    }

    let countIndex = 0;
    for(let i = index; i <= textLen; i++){

        if(text[i] === searchString[0] && text[i + 1] === searchString[1] && text[i + 2] === searchString[2] || searchString[2] === undefined){
            for(let j = 0; j < searchStringLen; j++){

                if(text[i + j] === searchString[j]){ 
                    countIndex += 1;
                }
            }
            if(countIndex === searchStringLen) return i;
            return -1
        }
    }
    return -1
}