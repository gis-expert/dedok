/** модуль позволяет делать тест assert.js через браузер.
 * */
import { testRunner } from '../../../dependencies/tests/test.js';

/** Выполняет тесты и добавляет их результаты в html документ. */
export function runTestsForHtml() {
  document.getElementById('showErrors').onclick = showTestDetails;
  document.getElementById('showSuccesses').onclick = showTestDetails;

  testRunner();
  showTestResults();
}

/** Добавляет результаты теста в html документ. */
export function showTestResults() {
  const tResult = document.testResult;
  const attrs = ['testCount', 'testFailCount', 'runtimeErrorCount']
  for (let attr of attrs) {
    const cntEl = document.getElementById(attr);
    cntEl.textContent = tResult[attr];
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

  const testCalls = selectTests(document.testResult.testCalls, showDetails);
  processTests(testCalls, detailsEl);
}

/** Сделать выборку тестов для отображения */
function selectTests(testResult, showDetails) {
  const resultCalls = {};
  if (showDetails === '') return resultCalls;

  for (let key in testResult) {
    const state = testResult[key].state;
    if (state !== undefined) {
      if (showDetails.includes(state)) {
        resultCalls[key] = testResult[key];
      }
    } else {
      const childResult = selectTests(testResult[key], showDetails);
      if (Object.keys(childResult).length !== 0)
        resultCalls[key] = childResult;
    }
  }
  return resultCalls;
}

/** Обрабатывает все результаты теста */
function processTests(testCalls, parentEl) {
  for (let key in testCalls) {
    const padding = parentEl.style.paddingLeft === '' ? '0px' : '40px';

    const isTest = testCalls[key].state !== undefined;
    if (isTest) {
      const testResult = testCalls[key];
      const scopeEl = createTestScope(key, testResult, padding);
      parentEl.appendChild(scopeEl);
      if (testResult.state !== 'Success') showErrorDetails(testResult, scopeEl);
    } else {
      const scopeEl = createDescribeScope(key, padding);
      parentEl.appendChild(scopeEl);
      processTests(testCalls[key], scopeEl);
    }
  }
}

/** создать и вернуть элемент describe */
function createDescribeScope(describeDescription, padding) {
  const scopeEl = createScopeEl(padding);

  const hEl = document.createElement('h1');
  hEl.textContent = describeDescription;
  hEl.style.margin = '0px';
  setElAttribute(hEl, 'test-scope');

  scopeEl.appendChild(hEl);
  return scopeEl;
}

/** создать и вернуть элемент test */
function createTestScope(testDescription, testResult, padding) {
  let funcDetail, clsName;
  if (testResult.state === 'Success') {
    funcDetail = 'success';
    clsName = 'test-success';
  } else {
    funcDetail = testResult.err === 'TestError: ' ? 'test fail' : 'runtime error';
    clsName = 'test-fail';
  }
  const spanIndex = testDescription.length + 1;
  const funcHeaderEl = createTestElement(`${testDescription}: ${funcDetail}`, 'h1', clsName, spanIndex);
  funcHeaderEl.style.margin = '0px';

  const scopeEl = createScopeEl(padding);
  scopeEl.appendChild(funcHeaderEl);
  return scopeEl;
}

/** Создает и возвращает елемент scope */
function createScopeEl(padding) {
  const scopeEl = document.createElement('div');
  if (padding !== '0px')
    setElAttribute(scopeEl, 'test-scope');
  scopeEl.style.paddingLeft = padding;
  return scopeEl;
}

/** Добавляет в переданный scope детали ошибки */
function showErrorDetails(testResult, scopeEl) {
  const { callStack, errDesc } = testResult;

  const spanIndex = errDesc.indexOf(': ') + 1;
  scopeEl.appendChild(createTestElement(errDesc, 'h2', 'test-err', spanIndex));

  const callStackEl = document.createElement('div');
  setElAttribute(callStackEl, 'test-stack');
  scopeEl.appendChild(callStackEl);

  callStack.split('\n').forEach((strItem) => {
    const txtLine = strItem.trim();
    let spanIndex = txtLine.indexOf('(');
    if (spanIndex === -1) spanIndex = txtLine.length;
    callStackEl.appendChild(createTestElement(txtLine, 'p', 'test-stack', spanIndex));
  });
}

/** Создает и возвращает новый элемент деталей теста
 * tagName - создаваемы элемент
 * clsName (вместе с тегом элемента) влияет на стили отображения.
 * spanIndex позволяет текс начиная с этого индекса обернуть в элемент span. */
function createTestElement(textContent, tagName, clsName, spanIndex) {
  const elText = textContent.substring(0, spanIndex);
  const testEl = document.createElement(tagName);
  setElAttribute(testEl, clsName);
  testEl.textContent = elText;

  if (spanIndex < textContent.length) {
    const span = document.createElement('span');
    span.textContent = textContent.substring(spanIndex);
    setElAttribute(span, clsName);
    testEl.appendChild(span);
  }
  return testEl;
}

/** Установить атрибут html элемента. */
function setElAttribute(el, value, attrName = 'class') {
  if (attrName === 'class') {
    const clsName = getClsName(el.tagName.toLowerCase(), value);
    if (clsName) el.setAttribute(attrName, clsName);
  } else {
    el.setAttribute(attrName, value);
  }
}

/** Выдает имена w3.css из переданного элемента html и доменного описания. */
function getClsName(elType, clsName) {
  const token = `${elType}:${clsName}`;
  if (token === 'div:test') return 'w3-card'
  else if (token === 'div:test-stack') return 'w3-container, w3-margin-left, w3-light-gray';
  else if (token === 'div:test-scope') return 'w3-gray';
  else if (token === 'h1:test-scope') return 'w3-gray';
  else if (token === 'h1:test-success') return '';
  else if (token === 'h1:test-fail') return '';
  else if (token === 'h2:test-err') return 'w3-khaki';
  else if (token === 'p:test-stack') return '';
  else if (token === 'span:test-scope') return 'w3-text-green';
  else if (token === 'span:test-success') return 'w3-text-green';
  else if (token === 'span:test-fail') return 'w3-text-red';
  else if (token === 'span:test-err') return 'w3-text-red';
  else if (token === 'span:test-stack') return 'w3-text-red';
  else throw Error('not valid element type and class name');
}
