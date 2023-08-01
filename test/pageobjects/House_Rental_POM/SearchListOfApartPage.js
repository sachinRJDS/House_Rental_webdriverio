class SearchListOfApartPage{
    async verifyRegisteredHomeInSearchPage(username){
        var uname=await $("//p[text()='"+username+"']")
        await uname.scrollIntoView({behavior:"smooth"})
    }
    async verifyUpdatedHomeInSearchPage(username){
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
export default new SearchListOfApartPage()