const numberRegex = /-?\d+(\.\d+)/
const operatorRegex = /[-+÷×%]/
const arithmeticExpRegex = /^(-?\d+(\.\d+)([-+÷×%]\d+(\.\d+)?)*)?$/
let keypad = document.querySelector(".keypad")
let screen= document.querySelector(".screen")


keypad.addEventListener("click", (event) => {
	let key = event.target
	updatescreen(key)
})

function updatescreen(key) {
	let keyType = key.classList[1]
	let keyID = key.id

	switch (keyType) {
		case "special-key":
			switch (keyID) {
				case "backspace":
					screen.textContent = screen.textContent.slice(0, -1)
					break
				case "all-clear":
					screen.textContent = ""
					break
				case "equals":
				case "decimal":
					screen.textContent = screen.textContent.concat(".")
					break
			}
			break
		case "number":
		case "operator":
			screen.textContent = screen.textContent.concat(key.textContent)
			break
		default:
			console.error("???")
	}
}