

function subtract(x, y) {
	if( typeof x !== 'number' ) {
		throw new Error('x must be a number')
	} else if( typeof y !== 'number' ) {
		throw new Error('y must be a number')
	}
	return x - y
}

export { subtract }
