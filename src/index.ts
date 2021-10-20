// const __dirname = 

function checkIfTrue(input: unknown): input is true {
	if (input === true) return true
	return false
}

export default checkIfTrue