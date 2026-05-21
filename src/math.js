

function subtract(x, y) {
	mustBeNumber(x, 'x must be a number')
	mustBeNumber(y, 'y must be a number')
	return x - y
}

function mustBeNumber(value, message) {
	if( typeof value !== 'number' ) {
		throw new Error(message)
	}
}

export { subtract }
