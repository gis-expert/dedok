/** Возвращает часть строки указанной между индексами startIndex, finishIndex.
  Отличается от substring тем, что позволяет указывать отрицательные индексы
  которые отсчитываются с конца строки. */
  import { len } from "./len.js"
export function slice(text, startIndex, finishIndex) {

  let textValue = "";
  let textLen = len(text);
  let finishIndMask = finishIndex;

  if(typeof text !== "string") throw Error ("argument must be type of string");  
  if(startIndex >= 0 && finishIndMask < 0 || startIndex < 0 && finishIndMask >= 0) throw Error ("indexes must be only positive or negative");

  if(startIndex === undefined && finishIndex === undefined) return text;
  if(finishIndex === undefined) finishIndex = textLen;

  if(0-(startIndex) > textLen || typeof startIndex !== "number" || startIndex % 1 !== 0) throw Error ("invalid start index");
  if(finishIndex > textLen || typeof finishIndex !== "number" || finishIndex % 1 !== 0) throw Error ("invalid end index")
  if(finishIndex < startIndex) throw Error ('invalid start and end index');
  
  if(startIndex >= 0){
    for(let i = startIndex; i < finishIndex; i++){
      textValue += text[i];      
    }
    return textValue;
  }

  if(finishIndex === textLen) finishIndex = 0;

  for(let i = (textLen + startIndex); i < (textLen + finishIndex); i++){
    textValue += text[i];    
  }
  return textValue;
}
