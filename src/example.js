
function isItWorthSeeing(funniness, excitement, mindExpanding) {
	const baseScore = 12

	if( funniness > 5 ) throw new Error('Too high funniness')
	if( funniness < 1 ) throw new Error('Too low funniness')

	if( funniness + excitement + mindExpanding >= baseScore ) {
		return true
	} else {
		return false
	}
}

export { isItWorthSeeing }
