
export function upperCase(text) {
    if (typeof text !== 'string') throw Error ('argument must be type of string');
    let result = '';

  for (let i = 0; i < text.length; i++) {
    const charCode = text.charCodeAt(i);
    if (charCode >= 97 && charCode <= 122) {
      result += String.fromCharCode(charCode - 32);
    } else {
      result += text.charAt(i);
    }
  }

  return result;

}

/** возвращает копию строки text в верхнем регистре */
export function lowerCase(text) {
    if (typeof text !== 'string') throw Error ('argument must be type of string');
    let result = '';

  for (let i = 0; i < text.length; i++) {
    const charCode = text.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      result += String.fromCharCode(charCode + 32);
    } else {
      result += text.charAt(i);
    }
  }

  return result;
}
