import { indexOf } from "./index-of.js";
import { len } from "./len.js";
export function includes(text, searchString, startIndex=0) {
  let count = len(text);
  if (typeof searchString === 'undefined' || typeof searchString !== 'string') throw Error ('invalid searchString string');
  if (typeof startIndex !== 'number' || startIndex % 1 !== 0 || startIndex < 0 || startIndex > count ) throw Error ('invalid index');
  const foundIndex = text.indexOf(searchString,startIndex);
  return foundIndex !== -1;

  
}
