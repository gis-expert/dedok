import { requiredString } from "./common.js";

/** возвращает булевый ответ равны ли параметры firstText и secondText. */
export function isEqual(firstText, secondText) {
  if (checkComparisonArgs(firstText, secondText) === false)
    return false;

  if (firstText.length !== secondText.length) return false;

  for (let i = 0; i < firstText.length; i += 1) {
    if (firstText[i] !== secondText[i]) return false;
  }
  return true;
}

/** возвращает true если аргументы не равны, и true в иных случаях. */
export function isNotEqual(firstText, secondText) {
  return !isEqual(firstText, secondText);
}

/** возвращает булевый ответ больше ли параметр firstText чем secondText. */
export function isMore(firstText, secondText) {
  if (checkComparisonArgs(firstText, secondText) === false)
    return false;

  const firstLarged = firstText.length > secondText.length;
  const finishIndex = firstLarged ? secondText.length : firstText.length;
  for (let i = 0; i < finishIndex; i += 1) {
    if (firstText[i] > secondText[i]) return true;
    else if (firstText[i] < secondText[i]) return false;
  }
  return firstLarged;
}

/** возвращает булевый ответ меньше ли параметр firstText чем secondText. */
export function isLess(firstText, secondText) {
  if (checkComparisonArgs(firstText, secondText) === false)
    return false;
  return !((isMore(firstText, secondText)) || (isEqual(firstText, secondText)));
}

/** возвращает булевый ответ больше или равно ли параметр firstText чем secondText. */
export function isMoreOrEqual(firstText, secondText) {
  if (checkComparisonArgs(firstText, secondText) === false)
    return false;
  return isMore(firstText, secondText) || isEqual(firstText, secondText);
}

/** возвращает булевый ответ меньше или равно ли параметр firstText чем secondText. */
export function isLessOrEqual(firstText, secondText) {
  if (checkComparisonArgs(firstText, secondText) === false)
    return false;
  return !(isMore(firstText, secondText));
}

/** выполняет проверки входящих параметров */
function checkComparisonArgs(firstText, secondText) {
  requiredString(firstText);
  requiredString(secondText);
}
