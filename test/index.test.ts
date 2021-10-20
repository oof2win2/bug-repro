import { expect } from "chai";
import index from "../src/index"

describe("index", () => {
	it("Should return true on true", () => {
		expect(index(true)).to.be.true
	})
	it("Should return false on string", () => {
		expect(index("aaaa")).to.be.false
	})
	it("should return false on number", () => {
		expect(index(1)).to.be.false
	})
})