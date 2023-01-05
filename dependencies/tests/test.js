/** Модуль объявляет функции для выполнения автотестов.
 * После загрузки в объекте документ будет атрибут tests,
 * куда будут сложены все тесты согласно иерархии,
 * а также функция testRunner вызов которого вернет результаты
 * выполнения тестов.*/

/** позволяет объединить несколько тестов в одну единицу теста. */
export function describe(description, cb) {
  if (typeof description !== 'string')
    throw Error('describe description must be only string type');
  if (description === '') throw Error('describe description required');
  description = description.trim();

  if (document.tests === undefined) document.tests = {};
  if (document.tests.lastObj === undefined)
    document.tests.lastObj = document.tests;

  if (document.tests.lastObj[description] !== undefined)
    throw Error('already describe description: ' + description);

  const oldObj = document.tests['lastObj'];
  const newObj = {}
  document.tests['lastObj'][description] = newObj;
  document.tests['lastObj'] = newObj;
  cb();
  if (oldObj === document.tests) {
    delete document.tests.lastObj
  } else {
    document.tests.lastObj = oldObj;
  };

  if (document.testRunner === undefined)
    document.testRunner = testRunner;
}

/** тестирует отдельный случай */
export function test(testDescription, testCb) {
  if (typeof testDescription !== 'string')
    throw Error('test description must be only string type');
  if (testDescription === '') throw Error('test description required');
  testDescription = testDescription.trim();

  if (document.tests.lastObj[testDescription] !== undefined)
    throw Error('already test description: ' + testDescription);

  document.tests.lastObj[testDescription] = testCb;
}

/** Выполняет тесты. Результат выполнения теста в document.testResults */
function testRunner(descriptions=[]) {
  document.testResult = {};

  const trimmedDescs = descriptions.map((item) => item.trim());
  const tests = selectTests(document.tests, trimmedDescs);
  const [testResults, testCounts] = processTests(tests);

  document.testResult.testResults = testResults;
  document.testResult.testCount = testCounts.testCount;
  document.testResult.testSuccessCount = testCounts.testSuccessCount ;
  document.testResult.testFailCount = testCounts.testFailCount;
  document.testResult.runtimeErrorCount = testCounts.runtimeErrorCount;
}

function selectTests(tests, descriptions) {
  if (descriptions.length === 0) return tests;

  const resultTests = {};
  for (let key in tests) {
    if (descriptions.includes(key)) {
      resultTests[key] = tests[key];
    }
    else if (typeof tests[key] !== 'function') {
      const childTests = selectTests(tests[key], descriptions);
      if (Object.keys(childTests).length !== 0)
        resultTests[key] = childTests;
    }
  }
  return resultTests;
}

/** выполняет тесты единицы теста (describe) */
function processTests(tests) {
  const testCounts = {
    testCount: 0,
    testSuccessCount: 0,
    testFailCount: 0,
    runtimeErrorCount: 0,
  }
  const testResults = {};
  for (let key in tests) {
    try {
      if (typeof tests[key] === 'function') {
        testCounts.testCount += 1;
        tests[key]();

        testResults[key] = { state: 'Success' };
        testCounts.testSuccessCount += 1;
      } else {
        const [childTestResult, childTestCounts] = processTests(tests[key]);
        testResults[key] = childTestResult;
        for (let cntKey in childTestCounts) {
          testCounts[cntKey] += childTestCounts[cntKey];
        }
      }
    } catch (e) {
      testResults[key] = processError(`${e.stack}`, testCounts);
    }
  }
  return [testResults, testCounts];
}

/** обрабатывает ошибки теста */
function processError(errMsg, testCounts) {
  const errNameIndex = errMsg.indexOf(': ') + 2;
  let errName = errMsg.substring(0, errNameIndex);
  if (errName === 'Error: ') {
    errName = 'TestError: ';
    testCounts.testFailCount += 1;
  } else {
    testCounts.runtimeErrorCount += 1;
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
  return err;
}
