let brackets = [];
const bracketTemplate = {
  startIndex: 0,
  endIndex: 0,
  level: 0,
  content: '',
}

export function minBracketsContent(text, bracketsString) {
  // Обнуляем объекты с предыдущих объектов
  brackets = [];
  // В цикле добавляем в brackets все объекты bracket
  for (let currIndex = 0; currIndex < text.length; currIndex +=1) {
    // если текущий символ это открывающая скобка,
    // то делаем вызов чтобы создать объект скобок первого уровня
    if (text[currIndex] === bracketsString[0]) {
      const child = makeBracket(text, currIndex, bracketsString);
      // добавляем дочерний объект в список объектов
      brackets.push(child);
      // обновляем текущий индекс на индекс где закончился дочерний объект
      currIndex = child.endIndex;
    }
  }

  // перебираем, и ищем минимальную длину строки
  let minLenth = text.length;
  for (let bracket of brackets) {
    const currLength = bracket.content.length;
    if (minLenth > currLength) minLenth = currLength;
  }

  // добавляем в финальный результат только строки с минимальной длиной
  const result = [];
  for (let bracket of brackets) {
    if (bracket.content.length === minLenth)
      result.push(bracket.content);
  }
  return result;
}

/** получить объект скобок; */
function makeBracket(text, startIndex, bracketsString, level = 1) {
  // начинаем цикл со следующей строки
  let currIndex = startIndex + 1;
  // перебираем символы пока не встретимся с закрывающим символом
  for (; text[currIndex] !== bracketsString[1]; currIndex += 1) {
    // если текущий индекс вышел за длину текста,
    // то значит закрывающих скобок не хватает
    if (currIndex >= text.length) {
      throw Error('bad brackets');
    }

    // если текущий символ это открывающая скобка,
    // то делаем рекурсивный вызов чтобы получить объект скобок дочернего уровня
    if (text[currIndex] === bracketsString[0]) {
      const child = makeBracket(text, currIndex, bracketsString, level + 1);
      // добавляем дочерний объект в список объектов
      brackets.push(child);
      // обновляем текущий индекс на индекс где закончился дочерний объект
      currIndex = child.endIndex;
    }
  }

  //создаем и заполняем текущий объект скобок
  const bracket = {...bracketTemplate};
  bracket.level = level;
  bracket.startIndex = startIndex;
  bracket.endIndex = currIndex;
  bracket.content = text.substring(startIndex, currIndex + 1);

  // возвращаем текущий объект скобок
  return bracket;
}
