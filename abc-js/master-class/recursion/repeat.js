/** Возвращает text повторенный count раз.
  Стандартная реализация через цикл. */
function repeatCycle(text, count = 1) {
  let result = '';
  for(let i = 0; i !== count; i +=1) {
    result += text;
  }
  return result;
}

/** Возвращает text повторенный count раз.
  Реализация через рекурсию. */
function repeatRecursion(text, count = 1) {
  if (count === 0) return '';
  return text + repeatRecursion(text, count - 1);;
}

export const repeat = repeatRecursion;

