import { len } from "./len.js";

export function slice(text, startIndex, finishIndex) {
  if (typeof text !== 'string') throw Error ('argument must be type of string');
  if (startIndex === undefined && finishIndex === undefined) {
      return text;
  }
  if ((startIndex >= 0 && finishIndex < 0) || (startIndex < 0 && finishIndex >= 0)) {
    throw Error('indexes must be only positive or negative');
  }
  if (startIndex < 0 && startIndex < -text.length) throw Error ('invalid start index');
  finishIndex = finishIndex ?? len(text);
  if (typeof startIndex !== 'number') throw Error ('invalid start index');
  if (typeof finishIndex !== 'number') throw Error ('invalid end index');
  if ( startIndex % 1 !== 0) throw Error ('invalid start index');
  if ( finishIndex % 1 !== 0) throw Error ('invalid end index');
  if (startIndex < 0) startIndex = len(text) + startIndex;
  if (finishIndex < 0) finishIndex = len(text) + finishIndex;
  if (finishIndex > len(text)) throw Error ('invalid end index');
  if (startIndex > finishIndex) throw Error ('invalid start and end index');
  if (startIndex < 0 || startIndex >= text.length) throw Error ('invalid start index');
  let aim = "";
  for ( let i = startIndex; i < finishIndex; i ++) {
      aim += text[i];
  }
  return aim;
}
