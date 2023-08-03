import { expect } from "chai";
describe("newChai",async()=>{
    it("testNewChai",async()=>{
        var s='sachin'
        var s2="sachinraj"
        //expect(s).to.be.contain("sachi")
        // expect(s).to.be.equal(s2)
        // expect(s).to.be.equals(s2)
        // expect(s).to.be.include("sa")
        // expect(s).to.be.includes("chi")
        // expect(100).to.be.closeTo(99)
       // expect(10).to.be.greaterThan(20)//expected 10 to be above 20
       //expect(21).to.be.greaterThanOrEqual(22)//expected 21 to be at least 22
      expect(10).to.be.lessThan(5)// expected 10 to be below 5
    })
})