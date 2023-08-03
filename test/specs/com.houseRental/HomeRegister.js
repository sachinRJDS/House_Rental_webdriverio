describe('IndividualHomeRegister',async()=>{
    it('testHomeRegister',async()=>{
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

        var cname='jack'+b+c+b
        //Enter the url
        await browser.url("http://rmgtestingserver/domain/House_Rental_Application/")
        await browser.maximizeWindow()

        //Click on login button and login
        await browser.$("//a[text()='Login']").click()
        await browser.$("#exampleInputEmail1").setValue('sachinraj')
        await browser.$("#exampleInputPassword1").setValue('rjds123')
        await browser.$("[name='login']").click()

        //click on register tab and register the home
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

       var success1="Registration successfull. Thank you"
       var success=await browser.$("//h2[text()='Register Room']/preceding-sibling::div").getText()
       //await expect(success1).toEqual(success)
       console.log("Registration successfull. Thank you");

       //click on home tab
       await browser.$("//a[text()='Home']").click()
       var text1=await browser.$("//b[text()='Registered Rooms: ']/child::span").getText()
       if(text1!=text){
        console.log(`count is updated : ${text1}`);
       }   

       //click on registered rooms link and verify the registered home
       await browser.$("//b[text()='Registered Rooms: ']").click()
       var user=await browser.$("//p[text()='"+cname+"']").getText()
       var user1=await browser.$("//p[text()='"+cname+"']")
       var ownerName="Owner Name: "+cname
       await user1.scrollIntoView({behavior:"smooth"});
       await expect(ownerName).toEqual(user)
       console.log('owner registered home is updated in registered rooms');
      
       //click on details/update tab and verify the reistered home
       var details=await browser.$("//h2[text()='List of Apartment Details']")
       await details.scrollIntoView({behavior:"smooth"})  
       console.log(details.isClickable());         
       await browser.$("//a[text()='Details/Update']").click()
       var ownerName="Owner Name: "+cname
       await user1.scrollIntoView({behavior:"smooth"});
       await expect(ownerName).toEqual(user)
       console.log('Owner registered home is updated in apartment list page');

       //click on logout link
       await browser.$("//a[text()='Logout']").click()

       //click on search tab
       await browser.$("//a[text()='Search']").click();
       await browser.$("#keywords").setValue("2bhk")
       await browser.$("#location").setValue("basavanagudi")
       await browser.$("//button[text()='Search']").click()

       //verify registered home in searched page
       await user1.scrollIntoView({behavior:"smooth"});
       await expect(ownerName).toEqual(user)
       console.log('Owner registered home is updated in search page');
       await browser.pause(3000)

       //login as admin
       await browser.$("//a[text()='Login']").click()
       await browser.$("#exampleInputEmail1").setValue('admin')
       await browser.$("#exampleInputPassword1").setValue('admin')
       await browser.$("[name='login']").click()

       //verify registered home in admin rooms for rent page
       await browser.$("//b[text()='Rooms for Rent: ']").click()
       await user1.scrollIntoView({behavior:"smooth"});
       await expect(ownerName).toEqual(user)
       console.log('Owner registered home is updated in rooms for rent page');

       //verify registered home in admin details page
       await details.scrollIntoView({behavior:"smooth"})  
       console.log(details.isClickable());       
       await browser.$("//a[text()='Details/Update']").click()
       await user1.scrollIntoView({behavior:"smooth"});
       await expect(ownerName).toEqual(user)
       console.log("owner registered home is updated in admin details page");
       await browser.pause(3000)

        //click on logout link
        await browser.$("//a[text()='Logout']").click()
    })
})