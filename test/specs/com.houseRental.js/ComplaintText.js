import homepage from "../NewClass.js"

describe("Complaint",async()=>{
    it('testComplaint',async()=>{

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

        await browser.url("http://rmgtestingserver/domain/House_Rental_Application/")
        await browser.maximizeWindow()
        
        //click on login tab
         await $("//a[text()='Login']").click()

        //login to application
        await $("#exampleInputEmail1").setValue("sachinraj")
        await $("#exampleInputPassword1").setValue("rjds123")
        await homepage.getRegisterTab().click()

        //featch username
        var cname=await $("//a[text()='sachinraj ']").getText()
        var username=cname.toLowerCase() 
        

         //click on register tab and register the home
         var cname='jack'+b+c+b
         var text=await browser.$("//b[text()='Registered Rooms: ']/child::span").getText()
         await browser.$("//a[text()='Register']").click()
         await browser.$("#fullname").addValue(cname)
         await browser.$("#mobile").setValue(mob)
         await browser.$("#email").setValue("abc@gmail.com"+b+c+c)
         await browser.$("#plot_number").setValue(c+b)
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


        //click on details/update tab
       await $("=Details/Update").click()
       await browser.pause(3000)

       //click on complaint link
       await $("//a[text()='Complaint']").click()

       //enter the apartmenet/house no and complaint
       await $("#name").setValue(c+b)
       await $("#cmp").setValue("nowater")
       await $("//button[text()='Submit']").click()
       await browser.pause(4000)
        
       var sent="Sent Successfully"
       var sent1=await $("//div[text()='Sent Successfully']").getText()
       await expect(sent).toEqual(sent1)

        //click on logout link
        await $("//a[text()='Logout']").click()
        await browser.pause(4000)

        //click on login tab
        await $("//a[text()='Login']").click()

        //login as a admin
        await $("#exampleInputEmail1").setValue("admin")
        await $("#exampleInputPassword1").setValue("admin")
        await homepage.getRegisterTab().click()

        //click on complaint list tab and verify the complaint
        await $("=Complaint List").click()
        var userDetails=c+b+" "+"nowater"+" "+username
        var allUser=await $$("//tbody/tr").map(ele=>{return ele.getText()})
        // console.log(allUser);

        for(let i=0;i<allUser.length;i++){
          var text=allUser[i]
          if(text==userDetails){
            console.log("complaint is updated");
          }
        }
    
     console.log("#####################El##################################");
     console.log(userDetails);

    
        // //click on logout link
        await $("//a[text()='Logout']").click()
    })
})