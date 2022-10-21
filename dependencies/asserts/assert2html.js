/** модуль позволяет делать тест assert.js через браузер.
 * */
import { testRunner } from '../../../dependencies/tests/test.js';

/** Выполняет тесты и добавляет их результаты в html документ. */
export function runTestsForHtml() {
  document.getElementById('showErrors').onclick = updateDetails;
  document.getElementById('showSuccesses').onclick = updateDetails;

  testRunner();
  showTestResults();
}

/** Добавляет результаты теста в html документ. */
export function showTestResults() {
  const tResult = document.testResult;
  const attrs = ['testCount', 'testFailCount', 'runtimeErrorCount']
  for (let i in attrs) {
    const cntEl = document.getElementById(attrs[i]);
    cntEl.textContent = tResult[attrs[i]];
  }
  updateDetails();
}

/** Обновить детали тестов */
function updateDetails() {
  const detailEl = document.getElementById('testDetails');
  detailEl.textContent = '';

  const showErrorsChecked = document.getElementById('showErrors').checked;
  const showSuccessChecked = document.getElementById('showSuccesses').checked;

  let showType;
  if (showSuccessChecked && showErrorsChecked) {
    showType = 'Success && Error';
  } else if (showSuccessChecked) {
    showType = 'Success';
  } else if (showErrorsChecked){
    showType = 'Error';
  } else {
    showType = '';
  }
  processTestCalls(document.testResult.testCalls, showType);
}

/** Обрабатывает все результаты теста соглано критерия */
function processTestCalls(testCalls, showType) {
  if (showType === '') return;

  for (let key in testCalls) {
    const state = testCalls[key].state;
    if (state !== undefined) {
      if (showType.includes(state))
        showDetails(testCalls[key], key);
    } else {
      if (key === '0') throw Error('arr');
      processTestCalls(testCalls[key], showType);
    }
  }
}

/** Показывает результат выполнения теста в html странице. */
function showDetails(testResult, fName) {
  const detailEl = document.getElementById('testDetails');
  if (testResult.state !== 'Success') {
    appendError(testResult, fName);
  } else {
    detailEl.appendChild(createTestElement(`Success: ${fName} - success runned`, 'h1', 'test-detail'));
  }
  return detailEl.outerHTML;
}

/** Добавляет ошибку в html страницy. */
function appendError(testResult, fName) {
  const detailEl = document.getElementById('testDetails');
  const { err, callStack, errDesc } = testResult;

  const errType = err === 'TestError: ' ? 'test fail' : 'error'
  const errDetail = `${err}${fName} - ${errType}`
  const errEl = createTestElement(errDetail, 'h1', 'test-detail');
  detailEl.appendChild(errEl);
  errEl.appendChild(createTestElement(errDesc, 'h2', 'test-err'));

  const stackBlockEl = document.createElement('div');
  setElAttribute(stackBlockEl, 'test-stack');
  errEl.appendChild(stackBlockEl);

  callStack.split('\n').forEach((strItem) => {
    const txtLine = strItem.trim();
    const prefixLen = txtLine.indexOf('(');
    stackBlockEl.appendChild(createTestElement(txtLine, 'p', 'test-stack', prefixLen));
  });
}

/** Создает на страничке html новый элемент теста. */
function createTestElement(textContent, elType, clsName, prefixLength) {
  const prefixLen = prefixLength ?? textContent.indexOf(': ') + 2;
  const prefixText = textContent.substring(0, prefixLen);
  const span = document.createElement('span');
  span.textContent = textContent.substring(prefixLen);
  setElAttribute(span, clsName);

  const el = document.createElement(elType);
  setElAttribute(el, clsName);
  el.textContent = prefixText;
  el.appendChild(span);
  return el;
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
  else if (token === 'h1:test-detail') return 'w3-gray';
  else if (token === 'h2:test-err') return 'w3-khaki';
  else if (token === 'p:test-stack') return '';
  else if (token === 'span:test-detail') return 'w3-text-green';
  else if (token === 'span:test-err') return 'w3-text-red';
  else if (token === 'span:test-stack') return 'w3-text-red';
  else throw Error('not valid element type and class name');
}

/** Обновить содержимое html элемента. */
function updateElement(elem, elContent) {
  elem.innerHTML = elContent;
}
