/** Выполняет поиск строки searchString в строке text
 * и возвращает первую найденную позицию.
 * Если в вхождение не найдено, то возвращает значение -1.
 * Параметр index задает начальную индекс с которой необходимо
 * начать поиск.*/
export function indexOf(text, searchString, index=0) {
    if(typeof text !== 'string') throw Error ('argument must be type of string');

    if(typeof searchString !== 'string') throw Error ('invalid searchString string')

    if(searchString === '') return -1;
    if(index < 0 || index > text.length || index % 1 !== 0 || typeof index !== 'number') throw Error('invalid index');
    

    if(searchString.length === 1) {
        for (let i = index; i < text.length; i++){
            if(text[i] === searchString[0]) return i;
        }
    }


    let countIndex = 0;
    for(let i = index; i <= text.length; i++){
        if(text[i] === searchString[0] && text[i + 1] === searchString[1] && text[i + 2] === searchString[2]){
            for(let j = 0; j < searchString.length; j++){
                if(text[i + j] === searchString[j]) countIndex += 1;
            }
            if(countIndex === searchString.length) return i;
            return -1
        }
    }
    return -1
}