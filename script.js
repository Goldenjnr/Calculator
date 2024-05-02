let text = ""

function inputText(buttonText) {
    if (buttonText === "=") {
        try {
            text = eval(text.replace('÷','/').replace('x','*').replace('^2','**2').replace('%', '/100'))
            document.getElementById("input").innerText = text
        } catch (e) {
            document.getElementById("input").innerText = "Error"
        }
    } else if (buttonText === "C") {
        text = ''
        document.getElementById("input").innerText = text
    } else if (buttonText === "←") {
        text = text.slice(0, -1)
        document.getElementById("input").innerText = text
    } else if (buttonText === ".") {
        if (!text.includes(".")) {
            text += buttonText
            document.getElementById("input").innerText = text
        }
    } else if (isValidOperand(buttonText)) {
        if (text === "" && buttonText !== "-") {
            return;
        }
        let lastChar = text[text.length - 1]
        if (isValidOperand(lastChar)) {
            text = text.slice(0, -1)
        }
        text += buttonText
        document.getElementById("input").innerText = text
    } else {
        text += buttonText
        document.getElementById("input").innerText = text
    }
}

function isValidOperand(operand) {
    return ["+", "-", "x", "÷", ".", "^2", "%"].includes(operand)
}