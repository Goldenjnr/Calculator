let text = "";
let showText = "";

function inputText() {
  let buttonText = event.target.textContent;
  console.log(buttonText, ">>>");

  if (buttonText === "=") {
    text = eval(text);
    console.log(text);
  } else if (buttonText === "C") {
    text = "0";
    showText = ""
    // } else if (buttonText === "x" && buttonText === "÷" ) {
    //   text += "*"
    //   console.log(text)
  } else if (
    buttonText === "*" ||
    buttonText === "/" ||
    buttonText === "+" ||
    buttonText === "-"
  ) {
    if (text === "" && buttonText !== "-") {
      return;
    }
    let lastChar = text[text.length - 1];
    if (
      lastChar === "*" ||
      lastChar === "/" ||
      lastChar === "+" ||
      lastChar === "-"
    ) {
      text = text.slice(0, -1);
       // Remove the last operator if there are two operators in a row
      showText = showText.slice(0, -1);
    }
    text += buttonText;
    showText += buttonText;
  } else if (buttonText === "×") {
    text += "*";
  } else if (buttonText === "^2") {
    x = text ** 2;
    return (text = x);
  } else if (buttonText === "%") {
    let x = parseFloat(text) /100
    text = x.toString()
  } else if (buttonText === "←") {
    text = text.slice(0, -1);
    showText += text;
    console.log(text);
    console.log("Show: " + showText);
  } else if (buttonText === "÷") {
    text += "/";
  } else {
    if (text === "0") {
      text = buttonText
    } else {
      text += buttonText;
    }
    showText += buttonText
    console.log(text);
    console.log("Show: " + showText);
  }

  document.getElementById("input").innerText = text;
}
