import { expect } from "chai"
class UserListOfApartmenetPage{
    async verifyRegisteredHomeInDetailsPage(username){
        var ownerName="Owner Name: "+username
        var cname=await $("//p[text()='"+username+"']")
        var cname2=await $("//p[text()='"+username+"']").getText()
        await cname.scrollIntoView({behavior:"smooth"})
        await browser.pause(2000)
        // var cname1=cname.getText()
        // console.log(cname2);
        expect(cname2).to.be.equal(ownerName)
       /console.log("Registered home is updated in detail page");
        // if(cname2==ownerName){
        //     console.log("Registered home is updated in detail page");
        // }else{
        //     console.log("Registered home is not updated in details page");
        // }

    }

    async verifyRegisteredHomeInRegisteredRooms(username){
        var ownerName="Owner Name: "+username
        var cname=await $("//p[text()='"+username+"']")
        var cname2=await $("//p[text()='"+username+"']").getText()
        await cname.scrollIntoView({behavior:"smooth"})
        // var cname1=cname.getText()
        // await cname.waitForDisplayed()
        expect(cname2).to.be.equal(ownerName)
        // console.log(cname1);
        // expect(cname1).to.be.equal(ownerName)
        console.log("Registered home is updated in registered rooms");
        if(cname1==ownerName){
            console.log("Registered home is updated in registered rooms");
        }else{
            console.log("Registered home is not updated in registered rooms");
        }

    }

    async editButton(username){
        await $("//p[text()='"+username+"']/ancestor::div[@class='card-block']/child::a").click()
    }
    get complaintButton(){
        return $("//a[text()='Complaint']")
    }

    async verifyUpdatedHome(username,acc1){
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
export default new UserListOfApartmenetPage()