/*
Krav:
- Det ska finnas en funktion som räknar ut skillnaden mellan två tal
- x, y ska vara numbers
- funktionen ska returnera x-y
- om x eller y inte är ett tal ska funktionen kasta ett Error

function subtract(x, y) {}

Testfall:
- it should throw an Error when x is not a number
- it should throw an Error when y is not a number
- it should return the difference
*/
import { subtract } from "../src/math.js"

describe('subtract', () => {
	it('should return the difference', () => {
		// Arrange
		// testdata: 42, 15
		const expected = 27

		// Act
		const actual = subtract(42, 15)

		// Assert
		expect( actual ).toBe( expected )
	})

})