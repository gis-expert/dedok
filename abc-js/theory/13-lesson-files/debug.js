function repeat() {
  const text = document.getElementById('text').textContent;
  const count = Number(document.getElementById('count').textContent);
  let repeatedText = '';

  for(let i = 0; i <= count; i += 1) {
    repeatedText += text;
  }

  document.getElementById('value').textContent = repeatedText;
}
