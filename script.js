const numberRegex = /-?\d+/
const fullNumberRegex = /-?\d+(\.\d+)/
const operatorRegex = /[-+÷×%]/
const arithmeticExpRegex = /^(-?\d+(\.\d+)([-+÷×%]\d+(\.\d+)?)*)?$/
let keypad = document.querySelector(".keypad")
let inputScreen = document.querySelector(".input-screen")
let operandA = "0"
let operandB = "0"
let operator = ""

keypad.addEventListener("click", (event) => {
	let key = event.target
	updateScreen(key)
})

function updateScreen(key) {
	let buffer = inputScreen.textContent
	let keyText = key.textContent
	let keyType = key.classList[1]
	let keyID = key.id

	switch (keyType) {
		case "special": {
			switch (keyID) {
				case "all-clear":
					buffer = allClear()
					break
				case "backspace":
					buffer = backspace(buffer)
					break
				case "decimal":
					buffer = decimal(buffer)
					break
				case "equals":
					buffer = equals(buffer)
					break
			}
			break
		}
		case "operator": {
			operandA = buffer
			operator = keyText
			buffer = "0"
			break
		}
		case "number": {
			if (buffer === "0") {
				buffer = keyText
				break
			}
			buffer += keyText
			break
		}
	}

	console.log(buffer)
	inputScreen.textContent = buffer
}

function allClear() {
	return "0"
}

function backspace(buffer) {
	if (buffer.length > 1) {
		return buffer.slice(0, -1)
	}

	return allClear()
}


function decimal(buffer) {

	if (buffer === "") {
		return "0."
	} else if (numberRegex.test(buffer)) {
		return buffer + "."
	}

	return buffer
}

function equals(buffer) {
	if (operandA === "0") {
		operandA = buffer
	} else {
		if (operator === "") {
			operandA = buffer
		} else {
			operandB = buffer
			return evaluate(operandA, operator, operandB)
		}
	}

	return buffer
}

function evaluate(operandA, operator, operandB) {
	switch (operator) {
		case "+":
			return Number.parseFloat(operandA) + Number.parseFloat(operandB)
		case "-":
			return Number.parseFloat(operandA) - Number.parseFloat(operandB)
		case "*":
			return Number.parseFloat(operandA) * Number.parseFloat(operandB)
		case "/":
			return Number.parseFloat(operandA) / Number.parseFloat(operandB)
		case "%":
			return (Number.parseFloat(operandA) / Number.parseFloat(operandB)) * 100

	}

}