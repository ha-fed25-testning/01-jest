
// Hur kan vi avgöra om en film är värd att ses?
// KRAV:
// Skala 1-5: rolighet, spänning, mindExpanding
// function isItWorthSeeing(funniness, excitement, mindExpanding)
// Funktionen ska returnera 
// + true om poängen är minst 4 i medel, dvs 12 totalt
// + false annars

import { isItWorthSeeing } from "../src/example.js";

function test_highScore() {
	let result = isItWorthSeeing(3, 5, 4)
	if( result === true ) {
		console.log('High score: \x1b[32mPASS\x1b[0m')  //  green test case
	} else {
		console.log('High score: \x1b[31mFAIL\x1b[0m')  // red test case
	}
}

function test_lowScore_returnsFalse() {
	let result = isItWorthSeeing(2, 1, 3)
	if( result === false ) {
		console.log('Low score: \x1b[32mPASS\x1b[0m')
	} else {
		console.log('Low score: \x1b[31mFAIL\x1b[0m. (should return false)')
	}
}

// Kör testet
test_highScore()
test_lowScore_returnsFalse()
