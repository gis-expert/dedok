/** Модуль объявляет функции для выполнения автотестов.
 * После загрузки в объекте документ будет атрибут tests,
 * куда будут сложены все тесты согласно иерархии.
 * Вызов testRunner вернет результаты выполнения тестов.*/

/** Выполняет тесты. Результат выполнения теста в document.testResults */
export function testRunner(descriptions=[]) {
  document.testResult = {};
  document.testResult.testCount = 0;
  document.testResult.testFailCount = 0;
  document.testResult.runtimeErrorCount = 0;
  document.testResult.testCalls = {};

  processTests(document.tests, document.testResult.testCalls);
}

/** выполняет тесты единицы теста (describe) */
function processTests(obj, testCalls) {
  for (let key in obj) {
    try {
      if (typeof obj[key] === 'function') {
        document.testResult.testCount += 1;
        obj[key]();
        processSuccess(key, testCalls);
      } else {
        testCalls[key] = {};
        processTests(obj[key], testCalls[key]);
      }
    } catch (e) {
      processError(`${e.stack}`, key, testCalls);
    }
  }
}

function processSuccess(fName, testCalls) {
  const scss = {
    state: 'Success'
  }
  testCalls[fName] = scss;
}

/** обрабатывает ошибки теста */
function processError(errMsg, fName, testCalls) {
  const errNameIndex = errMsg.indexOf(': ') + 2;
  let errName = errMsg.substring(0, errNameIndex);
  if (errName === 'Error: ') {
    errName = 'TestError: ';
    document.testResult.testFailCount += 1;
  } else {
    document.testResult.runtimeErrorCount += 1;
  }

  const firstLineIndex = errMsg.indexOf('\n');
  const errDesc = errMsg.substring(errNameIndex, firstLineIndex);
  const otherLines = errMsg.substring(firstLineIndex + 1);
  const err = {
    state: 'Error',
    err: errName,
    errDesc,
    callStack: otherLines,
  }
  testCalls[fName] = err;
}

/** позволяет объединить несколько тестов в одну единицу теста. */
export function describe(desc, cb) {
  if (typeof desc !== 'string')
    throw Error('describe description must be only string type');
  if (desc === '') throw Error('describe description required');

  if (document.tests === undefined) document.tests = {};
  if (document.tests.lastObj === undefined)
    document.tests.lastObj = document.tests;

  const oldObj = document.tests['lastObj'];
  oldObj[desc] = {};
  document.tests['lastObj'] = oldObj[desc];
  cb();
  if (oldObj === document.tests) {
    delete document.tests.lastObj
  } else {
    document.tests.lastObj = oldObj;
  };
}

/** тестирует отдельный случай */
export function test(testDesc, testCb) {
  if (typeof testDesc !== 'string')
    throw Error('test description must be only string type');
  if (testDesc === '') throw Error('test description required');

  document.tests.lastObj[testDesc] = testCb;
}
