import { len } from "./len.js";

export function endsWith(text, search, endPosition = text.length) {
  const searchLen = search.length;
  if (typeof text !== 'string') throw Error ('argument text must be type of string');
  if (typeof search !== 'string') throw Error ('argument search must be type of string');
  if (endPosition > len(text) || endPosition < 0) throw Error ('invalid position');
  if (typeof endPosition !== 'number') throw Error ('invalid position type');
  if ( endPosition - searchLen < 0) throw Error ('invalid end position or search length');
  if (endPosition < 0 || endPosition > text.length) throw Error ('invalid end position or search length');

  if (searchLen > endPosition) return false;
  for (let i = 0; i < searchLen; i++) {
    if (text[endPosition - searchLen + i] !== search[i]) {
      return false;
    }
  }

  return true;
}


  



/** Возвращает булевый результат начинается ли text на search.
  startPosition - необязательный параметр позволяющий указать позицию
  (не индекс) символа который необходимо считать за начало текста.*/
export function startsWith(text, search, startPosition = 0) {
  if (typeof search !== 'string') throw Error ('argument search must be type of string');
  if (typeof text !== 'string') throw Error ('argument text must be type of string'); 
  if (startPosition > len(text) || startPosition < 0) throw Error ('invalid position');
  if (typeof startPosition !== 'number') throw Error ('invalid position type');
  if (startPosition + len(search) > len(text)) throw Error ('invalid start position or search length');
  for (let i = 0; i < len(search); i++) {
    if (text[startPosition + i] !== search[i]) {
      return false;
    }
  }

  return true;
}


