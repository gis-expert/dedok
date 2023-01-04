/** модуль позволяет делать тест assert.js через браузер.
 * */

/** Выполнеяет все необходимые для корректной работы установки */
function testHtmlMain() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  // устанавливаем checkbox showErrors по параметрам url
  const showErrorsEl = document.getElementById('showErrors');
  showErrorsEl.onclick = showTestDetails;
  const currShowErrorsValue = showErrorsEl.checked;
  const paramsShowErrorsValue = urlParams.get('showErrors');
  showErrorsEl.checked = paramsShowErrorsValue === null
    ? currShowErrorsValue
    : paramsShowErrorsValue === 'true';

  // устанавливаем checkbox showSuccesses по параметрам url
  const showSuccessesEl = document.getElementById('showSuccesses');
  showSuccessesEl.onclick = showTestDetails;
  const currShowSuccessesValue = showSuccessesEl.checked;
  const paramsShowSuccessesValue = urlParams.get('showSuccesses');
  showSuccessesEl.checked = paramsShowSuccessesValue === null
    ? currShowSuccessesValue
    : paramsShowSuccessesValue === 'true';

  document.getElementById('testFilter').value = urlParams.get('tests');

  document.getElementById('runTests').onclick = runTestsForHtml;

  //если не хотите автоматически запускать тесты при загрузке
  //то закоменьте следующую строку.
  runTestsForHtml();
}

/** Выполняет тесты и добавляет их результаты в html документ. */
function runTestsForHtml() {

  const testFilter = document.getElementById('testFilter').value;
  let descriptions = [];
  if (testFilter !== '') {
    descriptions = testFilter.indexOf('\n') !== -1
      ? testFilter.split('\n')
      : testFilter.split(';');
  }
  descriptions = descriptions.map((item) => item.trim());

  document.testRunner(descriptions);
  showTestResults();
}

/** Добавляет результаты теста в html документ. */
function showTestResults() {
  const attrs = ['testCount', 'testSuccessCount', 'testFailCount', 'runtimeErrorCount']
  for (let attr of attrs) {
    const cntEl = document.getElementById(attr);
    cntEl.textContent = document.testResult[attr];
  }
  showTestDetails();
}

/** Показать детали тестов */
function showTestDetails() {
  const detailsEl = document.getElementById('testDetails');
  detailsEl.textContent = '';

  const needShowSuccess = document.getElementById('showSuccesses').checked;
  const needShowErrors = document.getElementById('showErrors').checked;
  let showDetails = needShowSuccess ? 'Success' : '';
  showDetails += needShowErrors ? 'Error' : '';

  const testResults = selectTestResults(document.testResult.testResults, showDetails);
  processTestResults(testResults, detailsEl, '-outer');
}

/** Сделать выборку тестов для отображения */
function selectTestResults(allTestResults, showDetails) {
  const selectedResults = {};
  if (showDetails === '') return selectedResults;

  for (let key in allTestResults) {
    const state = allTestResults[key].state;
    if (state !== undefined) {
      if (showDetails.includes(state)) {
        selectedResults[key] = allTestResults[key];
      }
    } else {
      const childResult = selectTestResults(allTestResults[key], showDetails);
      if (Object.keys(childResult).length !== 0)
        selectedResults[key] = childResult;
    }
  }
  return selectedResults;
}

/** Обрабатывает все результаты теста */
function processTestResults(testResults, parentEl, scopeSuffix) {
  for (let key in testResults) {
    const isTest = testResults[key].state !== undefined;
    if (isTest) {
      const testResult = testResults[key];
      const scopeEl = createTestScope(key, testResult, scopeSuffix);
      parentEl.appendChild(scopeEl);
      if (testResult.state !== 'Success') showErrorDetails(testResult, scopeEl);
    } else {
      const scopeEl = createDescribeScope(key, scopeSuffix);
      parentEl.appendChild(scopeEl);
      processTestResults(testResults[key], scopeEl, '-inner');
    }
  }
}

/** создать и вернуть элемент describe */
function createDescribeScope(describeDescription, scopeSuffix) {
  const hEl = document.createElement('h2');
  hEl.textContent = `describe('${describeDescription}')`;
  setClassValue(hEl, 'describe-head' + scopeSuffix);

  const scopeEl = createScopeEl('describe-scope' + scopeSuffix);
  scopeEl.appendChild(hEl);
  return scopeEl;
}

/** создать и вернуть элемент test */
function createTestScope(testDescription, testResult) {
  let funcDetail, clsName;
  if (testResult.state === 'Success') {
    funcDetail = 'success';
    clsName = 'test-head-success';
  } else {
    funcDetail = testResult.err === 'TestError: ' ? 'test fail' : 'runtime error';
    clsName = 'test-head-fail';
  }
  const textContent = `test('${testDescription}'): ${funcDetail}`;
  const spanIndex = textContent.indexOf(': ') + 1;
  const funcHeaderEl = createTestElement(textContent, 'h2', clsName, spanIndex);
  setClassValue(funcHeaderEl, clsName);

  const scopeEl = createScopeEl('test-scope');
  scopeEl.appendChild(funcHeaderEl);
  return scopeEl;
}

/** Создает и возвращает елемент scope */
function createScopeEl(clsAttr) {
  const scopeEl = document.createElement('div');
  setClassValue(scopeEl, clsAttr);
  return scopeEl;
}

/** Добавляет в переданный scope детали ошибки */
function showErrorDetails(testResult, scopeEl) {
  const { callStack, errDesc } = testResult;

  const spanIndex = errDesc.indexOf(': ') + 1;
  scopeEl.appendChild(createTestElement(errDesc, 'h3', 'error-desc', spanIndex));

  const callStackEl = document.createElement('div');
  setClassValue(callStackEl, 'stack-scope');
  scopeEl.appendChild(callStackEl);

  callStack.split('\n').forEach((strItem) => {
    const txtLine = strItem.trim();
    let spanIndex = txtLine.indexOf('(');
    if (spanIndex === -1) spanIndex = txtLine.length;
    callStackEl.appendChild(createTestElement(txtLine, 'p', 'stack-desc', spanIndex));
  });
}

/** Создает и возвращает новый элемент деталей теста
 * tagName - создаваемы элемент
 * clsName (вместе с тегом элемента) влияет на стили отображения.
 * spanIndex позволяет текс начиная с этого индекса обернуть в элемент span. */
function createTestElement(textContent, tagName, clsName, spanIndex) {
  const elText = textContent.substring(0, spanIndex);
  const testEl = document.createElement(tagName);
  setClassValue(testEl, clsName);
  testEl.textContent = elText;

  if (spanIndex < textContent.length) {
    const spanEl = document.createElement('span');
    spanEl.textContent = textContent.substring(spanIndex);
    setClassValue(spanEl, clsName + '-span');
    testEl.appendChild(spanEl);
  }
  return testEl;
}

/** Установить атрибут класса. */
function setClassValue(el, value) {
  const clsName = getClassAttributes(value);
  if (clsName) el.setAttribute('class', clsName);
}

/** Выдает имена w3.css из переданного элемента html и доменного описания. */
function getClassAttributes(elemType) {
  const underLine = ' w3-bottombar w3-border-dark-grey';
  const shiftLeft = ' w3-margin-left';

  if (elemType === 'describe-scope-outer') return 'w3-grey w3-panel';
  else if (elemType === 'describe-scope-inner') return shiftLeft;
  else if (elemType === 'test-scope') return shiftLeft + underLine;
  else if (elemType === 'describe-head-outer') return '';
  else if (elemType === 'describe-head-inner') return '';
  else if (elemType === 'test-head-success') return 'w3-khaki';
  else if (elemType === 'test-head-success-span') return 'w3-text-green';
  else if (elemType === 'test-head-fail') return 'w3-khaki';
  else if (elemType === 'test-head-fail-span') return 'w3-text-red';
  else if (elemType === 'error-desc') return 'w3-khaki';
  else if (elemType === 'error-desc-span') return 'w3-text-red';
  else if (elemType === 'stack-scope') return 'w3-light-grey';
  else if (elemType === 'stack-desc') return '';
  else if (elemType === 'stack-desc-span') return 'w3-text-red';
  else throw Error('not valid element type and class name');
}
