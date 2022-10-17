/** модуль позволяет делать тест assert.js через браузер.
 * */

/** Вызвает тесты и добавляет их результаты в html документ. */
export function testsForHtml(callBacks) {
  for (let testCb of callBacks) {
    assert2html(testCb);
  }
}

/** Вызывает один тест (testCb) и добавить его результат в html документ. */
export function assert2html(testCb) {
  const testEl = document.createElement('div');
  setElAttribute(testEl, 'test');
  document.body.appendChild(testEl)

  const funcName = testCb.name;
  try {
    testCb();
    updateElement(testEl, string2html(`Success: ${funcName} - success runned`));
  } catch (e) {
    const err = `${e.stack}`;

    const errNameIndex = err.indexOf(': ') + 2;
    let errName = err.substring(0, errNameIndex);
    if (errName === 'Error: ') errName = 'TestError: ';
    const firstLineIndex = err.indexOf('\n');
    const errDesc = err.substring(errNameIndex, firstLineIndex);
    const otherLines = err.substring(firstLineIndex);
    updateElement(testEl, string2html(`${errName}${funcName}(${errDesc})${otherLines}`));
  }
}

/** Показывает результат выполнения теста в html странице. */
function string2html(str) {
  const errEl = document.createElement('div');
  const leadText = str.substring(0, str.indexOf(': ') + 2);
  if (leadText !== 'Success: ') {
    appendError(errEl, str, leadText);
  } else {
    errEl.appendChild(createTestElement(str, 'h1', 'Success: ', 'test-success'));
  }
  return errEl.outerHTML;
}

/** Показывает результат выполнения теста в html странице. */
function appendError(errEl, str, leadText) {
  const strArr = str.split('\n');
  const firstErrLine = strArr.shift();
  errEl.appendChild(createTestElement(firstErrLine, 'h1', leadText, 'test-desc'));
  if(strArr[0].startsWith('Test Assertion Error: ')) {
    const secondErrLine = strArr.shift();
    errEl.appendChild(createTestElement(secondErrLine, 'h2', 'Test Assertion Error: ', 'test-err'));
  }
  else {
    const secondErrLine = 'Runtime Error: the error is not a test';
    errEl.appendChild(createTestElement(secondErrLine, 'h2', 'Runtime Error: ', 'test-err'));
  }

  const stackBlockEl = document.createElement('div');
  setElAttribute(stackBlockEl, 'test-stack');
  errEl.appendChild(stackBlockEl);

  strArr.forEach((strItem) => {
    const txtLine = strItem.trim();
    stackBlockEl.appendChild(createTestElement(txtLine, 'p', 'at ', 'test-stack'));
  });
}

/** Создает на страничке html новый элемент теста. */
function createTestElement(textCnt, elType, prefixText, clsName) {
  const i = prefixText.length;
  const span = document.createElement('span');
  span.textContent = textCnt.substring(i);
  setElAttribute(span, clsName);

  const p = document.createElement(elType);
  setElAttribute(p, clsName);
  p.textContent = prefixText;
  p.appendChild(span);
  return p;
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
  else if (token === 'h1:test-success') return 'w3-gray';
  else if (token === 'h1:test-desc') return 'w3-gray';
  else if (token === 'h2:test-err') return 'w3-khaki';
  else if (token === 'p:test-stack') return '';
  else if (token === 'span:test-desc') return 'w3-text-green';
  else if (token === 'span:test-err') return 'w3-text-red';
  else if (token === 'span:test-stack') return 'w3-text-red';
  else if (token === 'span:test-success') return 'w3-text-green';
  else throw Error('not valid element type and class name');
}

/** Обновить содержимое html элемента. */
function updateElement(elem, elContent) {
  elem.innerHTML = elContent;
}
