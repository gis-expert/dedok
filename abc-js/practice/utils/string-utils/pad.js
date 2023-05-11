import { len } from "./len.js";

/** Возвращает копию text увеличенный до длины maxLength
 * заполненный в начале символами fillString.
 * Допускается в fillString передавать строку из нескольких символов. */
export function padStart(text, maxLength, fillString = ' ') {
  if (typeof fillString !== 'string') throw Error ('argument fillString must be type of string');
  if (typeof text !== 'string') throw Error ('argument text must be type of string');
  if (!maxLength) {
    return text;
  }
  if (typeof maxLength !== 'number') throw Error ('invalid type of maxLength');
  if (text.length >= maxLength) {
    return text;
  }
  
  const padCount = maxLength - text.length;
  let padStr = '';
  for (let i = 0; i < padCount; i++) {
    padStr += fillString;
  }
  
  return padStr.substring(0, padCount) + text;
  

}

/** Возвращает копию text увеличенный до длины maxLength
 * заполненный в конце символами fillString.
 * Допускается в fillString передавать строку из нескольких символов. */
export function padEnd(text, maxLength, fillString = ' ') {
  if (typeof fillString !== 'string') throw Error ('argument fillString must be type of string');
  if (typeof text !== 'string') throw Error ('argument text must be type of string');
  if (!maxLength) {
    return text;
  }
  if (typeof maxLength !== 'number') throw Error ('invalid type of maxLength');
  if (text.length >= maxLength) {
    return text;
  }
  
  const padCount = maxLength - text.length;
  let padStr = '';
  for (let i = 0; i < padCount; i++) {
    padStr += fillString[i % fillString.length];
    
  }
  
  return text + padStr;
  
  
}

/** Возвращает копию text увеличенный до длины maxLength
 * заполненный в начале и конце символами fillString.
 * Допускается в fillString передавать строку из нескольких символов. */
export function pad(text, maxLength, fillString = ' ') {
  if (typeof text !== 'string') throw Error ('argument text must be type of string');
  if (typeof (maxLength ?? 0) !== "number") throw Error("invalid type of maxLength");
  let fillNum = maxLength - len(text)
  let leftFill = Math.floor(fillNum/2);
  let rightFill = Math.ceil(fillNum/2);
  let start = padStart(text, rightFill + len(text),fillString);
  console.log(start);
  let end = padEnd(start,leftFill + len(start),fillString);
  console.log(end);
  return end;
}




