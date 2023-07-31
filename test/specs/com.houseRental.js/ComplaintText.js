import homepage from "../NewClass.js"

describe("Complaint",async()=>{
    it('testComplaint',async()=>{
        await browser.url("http://rmgtestingserver/domain/House_Rental_Application/")
        await browser.maximizeWindow()
        
        //click on login tab
         await $("//a[text()='Login']").click()

        //login to application
        await $("#exampleInputEmail1").setValue("sachinraj")
        await $("#exampleInputPassword1").setValue("rjds123")
        await homepage.getRegisterTab().click()

        //click on details/update tab
       await $("=Details/Update").click()
       await browser.pause(3000)
        
    })
})