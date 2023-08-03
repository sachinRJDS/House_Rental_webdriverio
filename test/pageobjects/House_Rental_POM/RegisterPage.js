import excel from "exceljs"
import { expect } from "chai"
class RegisterPage{
    get getFullName(){
        return $("#fullname")
    }
    get getUserName(){
        return $("#username")
    }
    get getMobileNo(){
        return $("#mobile")
    }
    get getEmailId(){
        return $("#email")
    }
    get getPassword(){
        return $("#password")
    }
    get getConfirmPassword(){
        return $("#c_password")
    }
    get getSubmitBtn(){
        return $("[name=register]")
    }

    //business libraries
    async newRegistration(fullname,username,mobileno,emailid,password,cpassword){
        await this.getFullName.setValue(fullname)
        await this.getUserName.setValue(username)
        await this.getMobileNo.setValue(mobileno)
        await this.getEmailId.setValue(emailid)
        await this.getPassword.setValue(password)
        await this.getConfirmPassword.setValue(cpassword)
        await this.getSubmitBtn.click()
    }
    async verifyRegistrationSuccessfullMessage(){
        var exsuccess="Registration successfull. Now you can login"
        var success=await $("//div[text()='Registration successfull. Now you can login']").getText()
        expect(success).to.be.equal(exsuccess)
        console.log("Registration successfull. Now you can login");
    }
}
export default new RegisterPage()