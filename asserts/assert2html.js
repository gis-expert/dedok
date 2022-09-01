/** модуль позволяет делать тест assert.js через браузер.
 * */

export function testsForHtml(callBacks) {
  for (let testCb of callBacks) {
    assert2html(testCb);
  }
}

export function assert2html(testCb) {
  const testEl = document.createElement('div');
  setElAttribute(testEl, 'test');
  document.body.appendChild(testEl)

  try {
    updateElement(testEl, string2html(testCb()));
  } catch (e) {
    const err = `${e.stack}`;

    updateElement(testEl, string2html(err));
  }
}

function setElAttribute(el, value, attrName = 'class') {
  if (attrName === 'class') {
    const clsName = getClsName(el.tagName.toLowerCase(), value);
    if (clsName) el.setAttribute(attrName, clsName);
  } else {
    el.setAttribute(attrName, value);
  }
}

function updateElement(elem, elContent) {
  elem.innerHTML = elContent;
}

function string2html(str) {
  const errEl = document.createElement('div');
  if (str.startsWith('Error')) {
    const strArr = str.split('\n');
    const firstErrLine = strArr.shift();
    const prefix = str.startsWith('Error: ') ? 'Error: ' : 'Error'
    errEl.appendChild(createTestElement(firstErrLine, 'h1', prefix, 'test-desc'));
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
  } else {
    const firstSuccessLine = 'Success: ' + str;
    errEl.appendChild(createTestElement(firstSuccessLine, 'h1', 'Success: ', 'test-success'));
  }
  return errEl.outerHTML;
}

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
