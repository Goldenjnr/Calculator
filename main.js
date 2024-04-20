let text = '';
let showText = '';


function inputText() {
  let buttonText = event.target.textContent;
  
  if (buttonText === "=") {
    text = eval(text);
    console.log(text)
  } else if (buttonText === "C") {
    text = ''
    console.log(text)
  } else if (buttonText === "×") {
    text += "*"
  }  else if (buttonText === "^2") {
    x = text ** 2
    return(text = x)
  } else if (buttonText === "%") {
    x = text / 100
    return(text = x)
  }  else if (buttonText === "←") {
    text = text.slice(0, -1)
    showText += text
    console.log(text) 
    console.log('Show: ' + showText)
  } else if (buttonText === "÷") {
    text += "/"
  } else {
    text += buttonText;
    showText += buttonText;
    console.log(text)
    console.log('Show: ' + showText)
  }
  
  
  document.getElementById('input').innerText = text;
}


