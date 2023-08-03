import { expect } from "chai"
class UserComplaintPage{
    get apartmentNumber(){
        return $("#name")
    }
    get complaint(){
        return $("#cmp")
    }
    get submitBtn(){
        return $("//button[text()='Submit']")
    }
    get successfullMessage(){
        return $("//div[text()='Sent Successfully']")
    }

    async verifySentSuccessfullMeassage(){
       var sent="Sent Successfully"
       var sent1=await this.successfullMessage.getText()
       expect(sent1).to.be.equal(sent)
       console.log("Sent Successfully");
    //    if(sent1==sent){
    //     console.log("Sent Successfully");
    //    }else{
    //     console.log("not send");
    //    }
    }

    //business libraries
    async enterTheComplaint(houseno,complaint){
        await this.apartmentNumber.setValue(houseno)
        await this.complaint.setValue(complaint)
        await this.submitBtn.click()
    }
}
export default new UserComplaintPage()