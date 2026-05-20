/* Hur kan vi avgöra om en film är värd att ses?
KRAV:
function isItWorthSeeing(funniness, excitement, mindExpanding)
Skala 1-5: rolighet, spänning, mindExpanding
Funktionen ska returnera
+ kasta ett Error om någon parameter inte är mellan 1-5
+ true om poängen är minst 4 i medel, dvs 12 totalt
+ false annars
*/

import { isItWorthSeeing } from "../src/example.js";

const PASS = '\x1b[32mPASS\x1b[0m'
const FAIL = '\x1b[31mFAIL\x1b[0m'

// Testfall 1: testa att funktionen returnerar true vid en hög poäng (minst 12)
function test_highScore() {
	let result = isItWorthSeeing(3, 5, 4)
	if( result === true ) {
		console.log('High score: ' + PASS)  //  green test case
	} else {
		console.log('High score: ' + FAIL)  // red test case
	}
}

// Testfall 2: testa att funktionen returnerar false vid en låg poäng (under 12)
function test_lowScore_returnsFalse() {
	let result = isItWorthSeeing(2, 1, 3)
	if( result === false ) {
		console.log('Low score: ' + PASS)
	} else {
		console.log('Low score: ' + FAIL + '. (should return false)')
	}
}

// Testfall 3: om någon av parametrarna inte är mellan 1-5 ska funktionen kasta ett error
function test_invalidParameter_throwsError() {
	// 3 parametrar - varje parameter skulle kunna vara <1 eller >5 - 6 kombinationer
	try {
		isItWorthSeeing(6, 3, 3)  // första parametern: 6 är för högt
		console.log('Invalid parameter (high funniness) ' + FAIL)
	} catch(error) {
		console.log('Invalid parameter (high funniness) ' + PASS)
	}
	try {
		isItWorthSeeing(0, 3, 3)  // första parametern: 0 är för lågt
		console.log('Invalid parameter (low funniness) ' + FAIL)
	} catch(error) {
		console.log('Invalid parameter (low funniness) ' + PASS)
	}
}

// TODO: add test cases (testfall) for the other 2 parameters


// Kör testet
test_highScore()
test_lowScore_returnsFalse()
test_invalidParameter_throwsError()
