import { DIGIT_FINISH, DIGIT_START, ENG_CHAR_SHIFT, ENG_LOWER_FINISH, ENG_LOWER_START, ENG_UPPER_FINISH, ENG_UPPER_START, RUS_CHAR_SHIFT, RUS_LOWER_FINISH, RUS_LOWER_START, RUS_UPPER_FINISH, RUS_UPPER_START } from "./common.js";

/** возвращает булевый ответ, является ли символ в нижнем регистре. */
export function isLower(char) {
  if (typeof char !== 'string' || char === undefined) throw Error ('parameter is required and must be string type');
  if (char.length !== 1) throw Error ('char must be only one symbol char');
   for (var i = 0; i < char.length; i++) {
    var charCode = char.charCodeAt(i);
    if ((charCode < 97 || charCode > 122) &&  (charCode < 1072 || charCode > 1103) && charCode !== 1105) { 
     return false;
}
    return true;
  }
}


/** возвращает булевый ответ, является ли символ в верхнем регистре. */
export function isUpper(char) {
  if (typeof char !== 'string' || char === undefined) throw Error ('parameter is required and must be string type');
  if (char.length !== 1) throw Error ('char must be only one symbol char');
   for (var i = 0; i < char.length; i++) {
    var charCode = char.charCodeAt(i);
    if ((charCode < 65 || charCode > 90) &&  (charCode < 1040 || charCode > 1071) && charCode !== 1105) { 
     return false;
}
    return true;
  }
}

/** переводит в символ в нижний регистр,
  если символ окажется символом верхнего регистра,
  иначе вернет старое значение. 'A' --> 'a' */
export function toLower(char) {
  if (typeof char !== 'string' || char === undefined) throw Error ('parameter is required and must be string type');
  if (char.length !== 1) throw Error ('char must be only one symbol char');
  var result = "";
  for (var i = 0; i < char.length; i++) {
    var charCode = char.charCodeAt(i);
    if ((charCode >= 65 && charCode <= 90) || (charCode >= 1040 && charCode <= 1071)) {
      charCode += 32; // преобразование символа в нижний регистр
    }
    result += String.fromCharCode(charCode); // добавление символа в новую строку
  }
  return result;
}


/** переводит в символ в верхний регистр,
  если символ окажется символом нижнего регистра,
  иначе вернет старое значение. 'a' --> 'A'*/
export function toUpper(char) {
  if (typeof char !== 'string' || char === undefined) throw Error ('parameter is required and must be string type');
  if (char.length !== 1) throw Error ('char must be only one symbol char');
  var result = "";
  for (var i = 0; i < char.length; i++) {
    var charCode = char.charCodeAt(i);
    if ((charCode >= 97 && charCode <= 122) || (charCode >= 1072 && charCode <= 1103)) {
      charCode -= 32; // преобразование символа в нижний регистр
    }
    result += String.fromCharCode(charCode); // добавление символа в новую строку
  }
  return result;
}

/** возвращает булево значения, является ли символ цифрой '1' --> true */
export function isDigit(char) {
  if (typeof char !== 'string' || char === undefined) throw Error ('parameter is required and must be string type');
  if (char.length !== 1) throw Error ('char must be only one symbol char');
  for (var i = 0; i < char.length; i++) {
    var code = char.charCodeAt(i);
    if (code < 48 || code > 57) { 
      return false; 
    }
  }
  return true; 
}


/** возвращает число из цифрового символа '1' --> 1 */
export function toDigit(char) {
  if (typeof char !== 'string' || char === undefined) throw Error ('parameter is required and must be string type');
  if (char.length !== 1) throw Error ('char must be only one symbol char');
  const code = char.charCodeAt(0);
  if (code < 48 || code > 57) {
    throw  Error('invalid char');
  }
  return code - 48;
}


/** возвращает символ цифры из цифры 1 --> '1' */
export function fromDigit(digit) {
  if (typeof digit !== 'number') {
    throw  Error('parameter is required and must be number type');
  }
  if (digit < 0 || digit > 9) {
    throw new Error('invalid digit');
  }
  return String.fromCharCode(digit + 48);
}

