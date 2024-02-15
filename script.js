const numberRegex = /-?\d+(\.\d+)/
const operatorRegex = /[-+÷×%]/
const arithmeticExpRegex = /^(-?\d+(\.\d+)([-+÷×%]\d+(\.\d+)?)*)?$/
let keypad = document.querySelector(".keypad")
let input = document.querySelector(".input")


keypad.addEventListener("click", (event) => {
	let key = event.target
	updateInput(key)
})

function updateInput(key) {
	let keyType = key.classList[1]
	let keyID = key.id

	switch (keyType) {
		case "special-key":
			switch (keyID) {
				case "backspace":
					input.textContent = input.textContent.slice(0, -1)
					break
				case "all-clear":
					input.textContent = ""
					break
				case "equals":
				case "decimal":
					input.textContent = input.textContent.concat(".")
					break
			}
			break
		case "number":
		case "operator":
			input.textContent = input.textContent.concat(key.textContent)
			break
		default:
			console.error("???")
	}
}