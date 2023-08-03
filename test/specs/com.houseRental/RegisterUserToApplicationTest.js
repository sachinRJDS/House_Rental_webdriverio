describe('RegisterUserToApplication',async()=>{
    it("testRegisterUserToApplication",async()=>{
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
     var cname='madhu'+b+c

        await browser.url("http://rmgtestingserver/domain/House_Rental_Application/index.php")
        await browser.maximizeWindow()
        await $("//a[text()='Register']").click()
        await $("#fullname").setValue(cname)
        await $("#username").setValue(cname)
        await $("#mobile").setValue(mob)
        await $("#email").setValue("madhu@gmail.com"+c+b)
        await $("#password").setValue("rjds123")
        await $("#c_password").setValue("rjds123")
        await $("//button[text()='Submit']").click()
        
        //login to application
        await $("//a[text()='Login']").click()

        await $("#exampleInputEmail1").setValue(cname)
        await $("#exampleInputPassword1").setValue("rjds123")
        await $("//button[text()='Submit']").click()

          //click on logout link
          await $("//a[text()='Logout']").click()

          
          //login as a admin 
          await $("//a[text()='Login']").click()
          await $("#exampleInputEmail1").setValue("admin")
          await $("#exampleInputPassword1").setValue("admin")
          await $("//button[text()='Submit']").click()

          //click on registered users and verify
          await $("//b[text()='Registered Users: ']").click()

          var users=await $$("//tbody/tr/td[1]").map((num)=>{return num.getText()})
            for(let i=0;i<users.length;i++){
                if(users[i]==cname){
                    console.log("user is registered successfully");
                }
            }

            //click on logout link
          await $("//a[text()='Logout']").click()


        
    })
})