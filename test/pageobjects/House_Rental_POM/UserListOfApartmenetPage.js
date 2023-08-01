class UserListOfApartmenetPage{
    async verifyRegisteredHomeInDetailsPage(username){
        var ownerName="Owner Name: "+username
        var cname=await $("//p[text()='"+username+"']")
        await cname.scrollIntoView({behavior:"smooth"})
        var cname1=cname.getText()
        if(cname1==ownerName){
            console.log("Registered home is updated in detail page");
        }else{
            console.log("Registered home is not updated in details page");
        }

    }

    async verifyRegisteredHomeInRegisteredRooms(username){
        var ownerName="Owner Name: "+username
        var cname=await $("//p[text()='"+username+"']")
        await cname.scrollIntoView({behavior:"smooth"})
        var cname1=cname.getText()
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

    async verifyUpdatedHome(username){
        var acc=await $("//p[text()='"+username+"']/parent::div/following-sibling::div[2]/descendant::p[1]")
        await acc.scrollIntoView({behavior:"smooth"})
        var accommondation=acc.getText()
        var accommon="Accommodation: "+"freewater"
        if(accommondation==accommon){
            console.log('updated in list of apartmenet page');
        }else{
            console.log("Not updated");
        }
    }
}
export default new UserListOfApartmenetPage()