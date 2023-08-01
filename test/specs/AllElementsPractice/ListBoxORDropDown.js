describe("DropDown",async()=>{
    it("testDropDown",async()=>{
        await browser.url("https://www.facebook.com/")
        await browser.maximizeWindow()
        await $("=Create new account").click()
        // await $("#day").selectByIndex(10)
        // await $("#month").selectByVisibleText("Nov")
        // await $("#year").selectByVisibleText("1998")
        // await $("(//input[@name='sex'])[2]").click()
        var conn=await $("//select[@id='month']")
        await conn.waitForDisplayed()
       
        var all=await $$("//select[@id='month']/child::option")
        all.sort()
        // var all=await $$("#month").map((msg)=>{return msg.getText()})
        console.log(all.length);
        for(let i=0;i<all.length;i++){
            var x=all[i].getText()
            console.log(x);

        }
       

    })
})