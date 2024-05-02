let text = '';
let showText = '';


function inputText() {
  let buttonText = event.target.textContent;

  if (buttonText === "=") {
    text = eval(text);
    // console.log(text)
  } else if (buttonText === "C") {
    text = '0'
    // console.log(text)
  } else if (buttonText === "×") {
    text += "*"
  } else if (buttonText === "^2") {
    let x = parseFloat(text) ** 2
    text = x.toString()
  } else if (buttonText === "%") {
    let x = parseFloat(text) / 100
    text = x.toString()
  } else if (buttonText === "←") {
    text = text.slice(0, -1)
    showText += text
    // console.log(text)
    // console.log('Show: ' + showText)
  } else if (buttonText === "÷") {
    text += "/"
  } else if (buttonText === "×" || buttonText === "÷" || buttonText === "+" || buttonText === "-") {
    if (text === "" && buttonText !== "-" || isNaN(text.slice(-1))) {
      return "Nan";
    }
    console.log(text);
    let lastChar = text[text.length - 1]
    if (lastChar === "×" || lastChar === "÷" || lastChar === "+" || lastChar === "-") {
      // Remove the last operator if there are two operators in a row
      text = text.slice(0, -1);

      showText = showText.slice(0, -1)
    }
    text += buttonText
    showText += buttonText

  } else {
    text += buttonText;
    showText += buttonText;
    // console.log(text)
    // console.log('Show: ' + showText)
  }


  document.getElementById('input').innerText = text;
}


