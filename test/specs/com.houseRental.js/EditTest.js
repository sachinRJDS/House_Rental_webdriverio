
import homepage from "../NewClass.js"
describe('EditHome',async()=>{
    it('testEditHome',async()=>{
        var a=Math.random()*200
        var b=Math.trunc(a)
        var mob=""
        var c=b
    for(let i=0;i<10;i++){
    var a=Math.random()*10
    var b=Math.trunc(a)
    c=b
    mob=mob+b
     }

        //enter the url
        await browser.url("http://rmgtestingserver/domain/House_Rental_Application/")
        await browser.maximizeWindow()
        await $("//a[text()='Login']").click()

        //login to application
        await $("#exampleInputEmail1").setValue("sachinraj")
        await $("#exampleInputPassword1").addValue("rjds123")
       // await $("[name=login]").click()
        await homepage.getRegisterTab().click()
        await browser.pause(2000)

         //click on register tab and register the home
         var cname='jack'+b+c+b
         var text=await browser.$("//b[text()='Registered Rooms: ']/child::span").getText()
         await browser.$("//a[text()='Register']").click()
         await browser.$("#fullname").addValue(cname)
         await browser.$("#mobile").setValue(mob)
         await browser.$("#email").setValue("abc@gmail.com"+b+c+c)
         await browser.$("#plot_number").setValue(b)
         await browser.$("#rooms").setValue("2bhk")
         await browser.$("#country").setValue("india")
         await browser.$("#state").setValue("karnataka")
         await browser.$("#city").setValue("bangalore")
         await browser.$("#rent").setValue("rent")
         await browser.$("#deposit").setValue(50000)
         await browser.$("#address").setValue("basavanagudi")
         await browser.$("#vacant").selectByIndex(1)
         await browser.$("#image").setValue("C:/Users/mkits/OneDrive/Pictures/Screenshots/Screenshot (1).png")
         await browser.scroll(0,500)
         // await browser.pause(5000)
        await browser.$("[name=register_individuals]").click()

        //click on home tab
       await browser.$("//a[text()='Home']").click()
       var text1=await browser.$("//b[text()='Registered Rooms: ']/child::span").getText()
       if(text1!=text){
        console.log(`count is updated : ${text1}`);
       }   

       //click on registered rooms link
        await $("//b[text()='Registered Rooms: ']").click()
        browser.pause(3000)
       
       //scroll
       var ele=await $("//p[text()='"+cname+"']")
       await ele.scrollIntoView()
       await browser.pause(4000)

        //click on edit button
        await browser.scroll(0,-300)
        await $("//p[text()='"+cname+"']/ancestor::div[@class='card-block']/child::a").click()
        await browser.pause(4000)

        //enter the all the mandatory textfield
        await $("#accommodation").setValue('fan')
        await $("#description").setValue("----")
        await $("#landmark").setValue("Qspider")
        await $("[name='other']").setValue("====")
        await $("[name='register_individuals']").click()

        //verify updated home in list of apartmenet page
        await $("//a[text()='Details/Update']").click()
        var accommondation=await $("//p[text()='"+cname+"']/parent::div/following-sibling::div[2]/descendant::p[1]").getText()
        var accommon="Accommodation: "+"fan"
        if(accommondation==accommon){
            console.log('updated in list of apartmenet page');
        }

        await expect(accommon).toEqual(accommondation)

        //click on logout link
        await $("//a[text()='Logout']").click()

        //click on search tab
        await $("//a[text()='Search']").click()

        //enter the updated home keywords
        await $("#keywords").setValue("2bhk")
        await $("#location").setValue("basavanagudi")
        await $("//button[text()='Search']").click()

        //scroll to element and verify the updated home
        await ele.scrollIntoView()
        await browser.pause(4000)
        var accommondation=await $("//p[text()='"+cname+"']/parent::div/following-sibling::div[2]/descendant::p[1]").getText()
        if(accommondation==accommon){
            console.log('updated in search page');
        }
        await expect(accommon).toEqual(accommondation)

        //click on login button
        await $("//a[text()='Login']").click()

        //login as a admin
        await $("#exampleInputEmail1").setValue("admin")
        await $("#exampleInputPassword1").addValue("admin")
        await homepage.getRegisterTab().click()
        await browser.pause(2000)

        //click on rooms for rent and verify the updated home
        await $("//b[text()='Rooms for Rent: ']").click()

        await ele.scrollIntoView()
        await browser.pause(4000)
        var accommondation=await $("//p[text()='"+cname+"']/parent::div/following-sibling::div[2]/descendant::p[1]").getText()
        if(accommondation==accommon){
            console.log('updated in admin rooms for rent page');
        }
        await expect(accommon).toEqual(accommondation)

        //click on details/update tab and verify the updated home
        var details=await $("//a[text()='Details/Update']")
        await details.scrollIntoView()
        await details.isClickable()
        await details.click()
        await ele.scrollIntoView()
        await browser.pause(4000)
        var accommondation=await $("//p[text()='"+cname+"']/parent::div/following-sibling::div[2]/descendant::p[1]").getText()
        if(accommondation==accommon){
            console.log('updated in admin details page');
        }
        await expect(accommon).toEqual(accommondation)

        //click on logout link
        await $("//a[text()='Logout']").click()
    })
})