// Obs! Vi måste ha med ".js" i sökvägen
import { isItWorthSeeing } from "../src/example.js"

describe('Test isItWorthSeeing', () => {

	it('should return true for a high score', () => {
		// Arrange (förbered testet)
		const expected = true

		// Act (anropa funktionen under test)
		const actual = isItWorthSeeing(3, 5, 4)

		// Assert (kontrollera resultatet)
		expect(actual).toBe(expected)

		// Man kan använda en one-liner, men det är viktigare att skriva lättläst kod än kompakt
		// expect( isItWorthSeeing(3, 5, 4) ).toBe(true)
	})

	it('should return false for a low score', () => {
		const expected = false
		const actual = isItWorthSeeing(2, 1, 3)
		expect(actual).toBe(expected)
	})

})
