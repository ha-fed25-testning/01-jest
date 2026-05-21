/*
Krav:  (subtract)
- Det ska finnas en funktion som räknar ut skillnaden mellan två tal
- x, y ska vara numbers
- funktionen ska returnera x-y
- om x eller y inte är ett tal ska funktionen kasta ett Error

function subtract(x, y) {}

Testfall:
- it should throw an Error when x is not a number
- it should throw an Error when y is not a number
- it should return the difference


Krav:  (triple)
- Det ska finnas en funktion som returnerar tre gånger input
- x ska vara ett number
- funktionen ska returnera 3*x
- om x inte är ett tal ska funktionen returnera ett felmeddelande, som en sträng

function triple(x) {}

Testfall:
- it should return triple the input number
- it should return "Invalid input" when x is not a number
*/
import { subtract, triple } from "../src/math.js"

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

	it('should throw an Error when x is not a number', () => {
		// Arrange - inget värde, inget att förbereda

		// Act + assert
		expect( () => subtract('anka', 10) ).toThrow()
	})

	it('should throw an Error when y is not a number', () => {
		expect( () => subtract(500, false) ).toThrow()
	})


})

describe('triple', () => {
	test.each([
		[11, 33], [4, 12], [0, 0]
	])('should return triple %i ', (input, expected) => {
		// Arrange

		// Act
		const actual = triple(input)

		// Assert
		expect(actual).toBe(expected)
	})
})