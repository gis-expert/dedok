/** Модуль определяет все функции утверждения которые мы будем использовать
 * в своих задачах.
 * Функции утверждения позволят явно проверять различные правила
 * что позволяет нам писать автотесты. */

/** это утверждение проверяет строгое равенство a и b */
export function assertToBe(a, b) {
  if (a === b) return;
  const errMsg = `Test Assertion Error: <${arg2string(a)}> not to be <${arg2string(b)}>`
  throwError(errMsg);
}

/** это утверждение проверяет строгое неравенство a и b */
export function assertNotToBe(a, b) {
  if (a !== b) return;
  const errMsg = `Test Assertion Error: <${arg2string(a)}> to be <${arg2string(b)}>`
  throwError(errMsg);
}

/** это утверждение проверяет структурное равенство объектов */
export function assertEqual(a, b) {  
  const jsonA = JSON.stringify(a);
  const jsonB = JSON.stringify(b);
  if (jsonA === jsonB)
    return;
  const errMsg = `Test Assertion Error: <${jsonA}> not equal <${jsonB}>`
  throwError(errMsg);
}

/** это утверждение проверяет структурное неравенство объектов */
export function assertNotEqual(a, b) {
  try {
    // должен вызвать исключение;
    assertEqual(a, b);
  } catch(e) {
    return;
  }
  const jsonA = JSON.stringify(a);
  const jsonB = JSON.stringify(b);
  const errMsg = `Test Assertion Error: <${jsonA}> equal <${jsonB}>`
  throwError(errMsg);
}

/** утверждение - вызов колбэка (cb) должно вызвать ошибку.
 * Необязательный параметр errString уточняет ошибку.
 * Если описание ошибки будет включать в себя errString, то
 * получено ожидаемое утрверждение. */
export function assertThrow(cb, errString) {
  try {
    cb();
  } catch (e) {
    const eAsString = String(e);
    if (!errString || (eAsString.includes(errString))) {
      return;
    }
    const errMsg = `Test Assertion Error: ${cb.name} throwed an exception, but <${errString}> not inculdes by <${eAsString}>`
    throwError(errMsg);
  }
  const errMsg = `Test Assertion Error: ${cb.name} did not throw an exception`
  throwError(errMsg);
}

/** переводит непечатаемый текст в печатаемый */
function arg2string(arg) {
  if (arg === '') return 'empty string';
  else if (typeof arg === 'undefined') return 'undefined';
  else if (arg === null) return 'null';
  return arg;
}

/** вспомогательная фукнция, выкидывает исключение */
function throwError(errMsg) {
  throw Error(errMsg);
}
