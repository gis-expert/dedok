function someFunction() {
  if(true) {
    // Это переменная ""всплывет" на самый верх и станет глобальной.
    // Время жизни - пока открыта вкладка.
    ifPublicVariable = 'this is global public variable';
  }
}

someFunction();
