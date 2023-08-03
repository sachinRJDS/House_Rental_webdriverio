import { expect } from "chai"
class UserRegisterRoomPage{
    async fullname(fullname){
        await $("#fullname").setValue(fullname)
    }
    async mobileNO(mobileno){
        await $("#mobile").setValue(mobileno)
    }
    async emailID(emailid){
        await $("#email").setValue(emailid)
    }
    async houseNO(houseno){
        await $("#plot_number").setValue(houseno)
    }
    async availableRooms(room){
        await $("#rooms").setValue(room)
    }
async country(country){
        await $("#country").setValue(country)
    }
    async state(state){
        await $("#state").setValue(state)
    }
    async city(city){
            await $("#city").setValue(city)

    }
    async rent(rents){
        await $("#rent").addValue("rent")
    }
    async sale(sale){
        await $("#sale").setValue(sale)
    }
    async deposit(deposit){
        await $("#deposit").setValue(deposit)
    }
    async facilities(facilities){
        await $("#accommodation").setValue(facilities)
    }
    async description(description){
        await $("#description").setValue(description)
    }
    async landmark(landmark){
        await $("#landmark").setValue(landmark)
    }
    async address(address){
        await $("#address").setValue(address)
    }
    async vacantOROccupied(value){
        await $("#vacant").selectByVisibleText(value)
    }
    async image(location){
        await $("#image").setValue(location)
    }
    async submitBtn(){
        await $("[name=register_individuals]").click()
    }

    async verifySuccessfullMessage(){
        var success1="Registration successfull. Thank you"
        var success=await browser.$("//h2[text()='Register Room']/preceding-sibling::div").getText()
        expect(success).to.be.equal(success1)
        console.log("Registration successfull. Thank you");
        // if(success==success1){
        //     console.log("Registration successfull. Thank you");
        // }else{
        //     console.log("Entered data is already exist");
        // }
    }
}
export default new UserRegisterRoomPage()