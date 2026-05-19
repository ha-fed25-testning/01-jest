
function isItWorthSeeing(funniness, excitement, mindExpanding) {
	const baseScore = 12
	if( funniness + excitement + mindExpanding >= baseScore ) {
		return true
	} else {
		return false
	}
}

export { isItWorthSeeing }
