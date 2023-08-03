import { expect } from "chai"
class RegisteredUsersPage{
    async verifyRegisteredUsers(fullname,username){
        var cFullName=await $("//tbody/tr/td[1][text()='"+fullname+"']").getText()
        var cUserName=await $("//tbody/tr/td[3][text()='"+username+"']").getText()
        expect(cFullName).to.be.equal(fullname)
        expect(cUserName).to.be.equal(username)
        console.log("user registered successfully");
    }
}
export default new RegisteredUsersPage()