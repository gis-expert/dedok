/** Возвращает булевый результат заканчивается ли text на search.
  endPosition - необязательный параметр позволяющий указать позицию
  (не индекс) символа который необходимо считать за конец текста.*/
import { len } from "./len.js"
import { reverse } from "./reverse.js";
import { replace } from "./replace.js";

export function endsWith(text, search, endPosition) {

  if(typeof text !== "string") throw Error ("argument text must be type of string");
  if(typeof search !== "string") throw Error ("argument search must be type of string");
  if(endPosition !== undefined && typeof endPosition !== "number") throw Error ("invalid position type");

  let endPos = 0;
  let count = 0;
  let countScaner = 0; 
  const searchLen = len(search);
  const textLen = len(text);

  if(endPosition > textLen || endPosition < 0) throw Error("invalid position");
  if(endPosition - searchLen < 0) throw Error ("invalid end position or search length")

  if(searchLen === 1){
    if(text[textLen-1] === search[0]){
      return true;
    }
    else return false;
  }
  if(search[0] === undefined) return true;

  if(typeof endPosition === "number") {
    endPos = endPosition;
  }
  else{
    endPos = textLen-1;
  }

  if(endPos === textLen-1){
    endPos-1
  };

  if(typeof endPosition === "number" && text[endPos-1] !== search[searchLen-1]) return false;

  for(let i = endPos; i > 0; i--){

    for(let j = searchLen-1; j >= 0; j--){

      if(text[i] === search[j]){
        count += 1;
      }
    }
    if(count > countScaner){
      countScaner += 1;
    }
    else{
      count = 0;
    }
    if(count === searchLen) return true;
  }
  return false;
}

/** Возвращает булевый результат начинается ли text на search.
  startPosition - необязательный параметр позволяющий указать позицию
  (не индекс) символа который необходимо считать за начало текста.*/
export function startsWith(text, search, startPosition) {

  if(typeof text !== "string") throw Error ("argument text must be type of string");
  if(typeof search !== "string") throw Error ("argument search must be type of string");
  if(startPosition !== undefined && typeof startPosition !== "number") throw Error ("invalid position type");

  const textLen = len(text);
  const searchLen = len(search);
  let count = 0;

  if(startPosition > textLen || startPosition < 0) throw Error("invalid position");

  if(startPosition !== undefined){
    if(text[startPosition+1] === undefined) throw Error("invalid start position or search length");
  }
  if(startPosition === textLen) throw Error("invalid start position or search length");

  for(let i = 0; i <= textLen; i++){
    if(typeof startPosition === "number") i = startPosition;
    for(let j = 0; j <= searchLen; j++){
      if(text[i + j] === search[j]){
        count += 1;
      }
    }
    if(count === searchLen){
      return true;
    }
    return false;
  }
}
