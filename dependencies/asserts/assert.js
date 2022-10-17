/** Модуль определяет все функции утверждения которые мы будем использовать
 * в своих задачах.
 * Функции утверждения позволят после описания задачи написать явно
 * утвержждения которые ваше решение должно выполнить.
 * Если ваше решение обернутое (вызванное) в утверждение выполняется
 * без выкидывания исключения, то ваше решение работает правильно.
 * Это основания задача которые должны решить функции утверждения.
 */

// /** Функция для объединения нескольких проверок в один набор */
// export function assertSuite(suiteDesc, cb) {
//   cb();
//   return `${suiteDesc} - success runned`;
// }
/** это утверждение проверяет строгое равенство a и b */
export function assertToBe(assertDescription, a, b) {
  if (a === b) return `${assertDescription} - success runned`;
  const errMsg = `Test Assertion Error: <${arg2string(a)}> not to be <${arg2string(b)}>`
  throwError(assertDescription, errMsg);
}

/** это утверждение проверяет строгое неравенство a и b */
export function assertNotToBe(assertDescription, a, b) {
  if (a !== b) return `${assertDescription} - success runned`;
  const errMsg = `Test Assertion Error: <${arg2string(a)}> to be <${arg2string(b)}>`
  throwError(assertDescription, errMsg);
}

export function assertEqual(assertDescription, a, b) {  

  const jsonA = JSON.stringify(a);
  const jsonB = JSON.stringify(b);
  if (jsonA === jsonB)
    return `${assertDescription} - success runned`;
  const errMsg = `Test Assertion Error: <${jsonA}> not equal <${jsonB}>`
  throwError(assertDescription, errMsg);
}

export function assertNotEqual(assertDescription, a, b) {
  try {
    // должен вызвать исключение;
    assertEqual(assertDescription, a, b);
  } catch(e) {
    return `${assertDescription} - success runned`;
  }
  const jsonA = JSON.stringify(a);
  const jsonB = JSON.stringify(b);
  const errMsg = `Test Assertion Error: <${jsonA}> equal <${jsonB}>`
  throwError(assertDescription, errMsg);
}

export function assertThrow(assertDescription, cb, errString) {
  try {
    cb();
  } catch (e) {
    const eAsString = String(e);
    if (!errString || (eAsString.includes(errString))) {
      return `${assertDescription} - success runned`;
    }
    const errMsg = `Test Assertion Error: ${cb.name} throwed an exception, but <${errString}> not inculdes by <${eAsString}>`
    throwError(assertDescription, errMsg);
  }
  const errMsg = `Test Assertion Error: ${cb.name} did not throw an exception`
  throwError(assertDescription, errMsg);
}

function arg2string(arg) {
  if (arg === '') return `"empty string"`;
  else if (typeof arg === 'undefined') return 'undefined';
  else if (arg === null) return 'null';
  return arg;
}

/** вспомогательная фукнция, выкидывает исключение */
function throwError(testDsc, errMsg) {
  const fullErrorMsg = `${testDsc}\n${errMsg}`;
  throw Error(fullErrorMsg);
}
