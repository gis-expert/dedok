import { DIGITS, DIGIT_FINISH, DIGIT_START, ENG_CHAR_SHIFT, ENG_LOWER_FINISH, ENG_LOWER_START, ENG_UPPER_FINISH, ENG_UPPER_START, RUS_CHAR_SHIFT, RUS_LOWER_FINISH, RUS_LOWER_START, RUS_UPPER_FINISH, RUS_UPPER_START } from "./common.js";
import { len } from "./len.js";
import { isNotChar } from "./common.js";
import { isNotCharSymbol } from "./common.js";

/** возвращает булевый ответ, является ли символ в нижнем регистре. */
export function isLower(char) {

  isNotChar(char);
  isNotCharSymbol(char);

  for(let i = ENG_LOWER_START; i <= ENG_LOWER_FINISH; i++){
    if( char[0].charCodeAt() === i ) return true;
  }
  for(let i = RUS_LOWER_START; i <= RUS_LOWER_FINISH; i++){
    if( char[0].charCodeAt() === i ) return true;
  }
  return false;
}

/** возвращает булевый ответ, является ли символ в верхнем регистре. */
export function isUpper(char) {

  isNotChar(char);
  isNotCharSymbol(char);

  for(let i = ENG_UPPER_START; i <= ENG_UPPER_FINISH; i++){
    if ( char[0].charCodeAt() === i ) return true;
  }
  for(let i = RUS_UPPER_START; i <= RUS_UPPER_FINISH; i++){
    if ( char[0].charCodeAt() === i ) return true;
  }
  return false;
}

/** переводит в символ в нижний регистр,
  если символ окажется символом верхнего регистра,
  иначе вернет старое значение. 'A' --> 'a' */
export function toLower(char) {

  isNotChar(char);
  isNotCharSymbol(char);

  for(let i = ENG_UPPER_START; i <= ENG_UPPER_FINISH; i++){

    if ( char[0].charCodeAt() === i ){
      for(let j = ENG_LOWER_START; j <= ENG_LOWER_FINISH; j++){

        if(j - char[0].charCodeAt() === ENG_CHAR_SHIFT) return String.fromCharCode(j);
      }
    }
  }

  for(let i = RUS_UPPER_START; i <= RUS_UPPER_FINISH; i++){

    if ( char[0].charCodeAt() === i ){
      for(let j = RUS_LOWER_START; j <= RUS_LOWER_FINISH; j++){

        if(j - char[0].charCodeAt() === RUS_CHAR_SHIFT) return String.fromCharCode(j);
      }
    }
  }
  return char;
}

/** переводит в символ в верхний регистр,
  если символ окажется символом нижнего регистра,
  иначе вернет старое значение. 'a' --> 'A'*/
export function toUpper(char) {

  isNotChar(char);
  isNotCharSymbol(char);

  for(let i = ENG_LOWER_START; i <= ENG_LOWER_FINISH; i++){

    if ( char[0].charCodeAt() === i ){
      for(let j = ENG_UPPER_START; j <= ENG_UPPER_FINISH; j++){
        if(char[0].charCodeAt() - j === ENG_CHAR_SHIFT) return String.fromCharCode(j);
      }
    }
  }

  for(let i = RUS_LOWER_START; i <= RUS_LOWER_FINISH; i++){

    if ( char[0].charCodeAt() === i ){
      for(let j = RUS_UPPER_START; j <= RUS_UPPER_FINISH; j++){

        if(char[0].charCodeAt() - j === RUS_CHAR_SHIFT) return String.fromCharCode(j);
      }
    }
  }
  return char;
}

/** возвращает булево значения, является ли символ цифрой '1' --> true */
export function isDigit(char) {

  isNotChar(char);
  isNotCharSymbol(char);

  for(let i = DIGIT_START; i <= DIGIT_FINISH; i++){
    if(char[0].charCodeAt() === i) return true;
  }
  return false;
}

/** возвращает число из цифрового символа '1' --> 1 */
export function toDigit(char) {
  isNotChar(char);
  isNotCharSymbol(char);

  for(let i = DIGIT_START; i <= DIGIT_FINISH; i++){

    if(char[0].charCodeAt() === i) {
      return String.fromCharCode(i)-0;
    }
    
  }
  throw Error("invalid char");
}

/** возвращает символ цифры из цифры 1 --> '1' */
export function fromDigit(digit) {
  if(typeof digit !== "number") throw Error ("parameter is required and must be number type")
  if(digit < 0 || digit >= 10) throw Error("invalid digit"); 
  return toDigit(digit+"") + "";
}
