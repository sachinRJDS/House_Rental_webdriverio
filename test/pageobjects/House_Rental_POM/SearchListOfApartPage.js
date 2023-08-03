import { expect } from "chai"
class SearchListOfApartPage{
    async verifyRegisteredHomeInSearchPage(username){
        var uname=await $("//p[text()='"+username+"']")
        await uname.scrollIntoView({behavior:"smooth"})
    }
    async verifyUpdatedHomeInSearchPage(username,acc1){
        var acc=await $("//p[text()='"+username+"']/parent::div/following-sibling::div[2]/descendant::p[1]")
        var text=await $("//p[text()='"+username+"']/parent::div/following-sibling::div[2]/descendant::p[1]").getText()
        await acc.scrollIntoView({behavior:"smooth"})
       // var accommondation=acc.getText()
        var accommon="Accommodation: "+acc1
        expect(text).to.be.equal(accommon)
        console.log('updated in list of apartmenet page');
        // if(accommondation==accommon){
        //     console.log('updated in list of apartmenet page');
        // }else{
        //     console.log("Not updated");
        // }
    }
}
export default new SearchListOfApartPage()