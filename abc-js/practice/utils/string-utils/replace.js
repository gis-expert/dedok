import { notStringAllError } from "./common.js";
import { substring } from "./substring.js";
import { len } from "./len.js";


export function replace(text, search, target) {
    if (typeof text !== 'string') throw Error ('argument text must be type of string');
    if (typeof search !== 'string') throw Error ('argument search must be type of string');
    if (typeof target !== 'string') throw Error ('argument target must be type of string');
  let result = "";
  let  replaced = false;
  
  for (let i = 0; i < text.length; i++) {
    if (text.substring(i,i + search.length) === search && !replaced) {
      result += target;
      i += search.length - 1;
      replaced = true; // выставляем флаг
    } else {
      result += text[i];
    }
  }

  return result;
}


/** Возвращает строку text, где все вхождения search поменяно на target.
 * text: строка, копию которой нужно получить.
 * search: строка которое нужно поменять.
 * target: строка, на которую нужно поменять. */
export function replaceAll(text, search, target) {
  let result = "";
  let lastIndex = 0;
  if (typeof text !== 'string') throw Error ('argument text must be type of string');
  if (typeof search !== 'string') throw Error ('argument search must be type of string');
  if (typeof target !== 'string') throw Error ('argument target must be type of string');


  for (let i = 0; i < text.length; i++) {
    if (text.substring(i, i + search.length) === search) {
      result += text.substring(lastIndex, i) + target;
      lastIndex = i + search.length;
      i += search.length - 1;
    }
  }

  if (lastIndex < text.length) {
    result += text.substring(lastIndex);
  }

  return result;
}

