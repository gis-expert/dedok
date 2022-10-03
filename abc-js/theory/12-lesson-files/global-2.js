// это мы прочитали с уровня движка-интерпретатора (браузера)
console.log(Math.PI);

// объект document добавлен в глобальную область видимости в момент создания (открытия) вкладки.
console.log('title: ' + document.getElementsByTagName('title')[0].textContent);

// доступ к функции мы получили с глобальной области видимости.
someFunction();

// доступ к переменной мы получили с глобальной области видимости.
console.log(`printed from global-2: "${moduleVar}"`);
