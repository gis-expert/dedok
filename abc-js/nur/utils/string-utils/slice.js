import { len } from "./len.js";
import { substring } from "./substring.js";

/** Возвращает часть строки указанной между индексами startIndex, finishIndex.
  Отличается от substring тем, что позволяет указывать отрицательные индексы
  которые отсчитываются с конца строки. */
export function slice(text, startIndex, finishIndex) {
  const textLength = len(text);
  const indexesIsPositive = (startIndex ?? 1) >= 0 && (finishIndex ?? 1) >= 0;
  const indexesIsNegative = (startIndex ?? -1) < 0 && (finishIndex ?? -1) < 0;
  if(!indexesIsPositive && !indexesIsNegative) throw Error('indexes must be only positive or negative');

  if (indexesIsNegative) {
    return substring(text, textLength + (startIndex ?? -textLength), textLength + (finishIndex ?? 0));
  }

  return substring(text, startIndex, finishIndex);
}
