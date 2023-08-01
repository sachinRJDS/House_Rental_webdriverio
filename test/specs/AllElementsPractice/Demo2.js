describe("demo2",async()=>{
    it("testDemo2",async()=>{
        await browser.url("https://demo.actitime.com")
        await browser.maximizeWindow()
        var dis=await $(".atLogoImg").isDisplayed()
        var enable=await $("//div[text()='Login ']").isEnabled()
        var status=await $("#keepLoggedInCheckBox").isSelected()
        var text=await $("#toPasswordRecoveryPageLink").getText()
        var attri=await (await $("[name=username]")).getAttribute("name")
        var attri1=await (await $("[name=username]")).getAttribute("tagname")
        var attri2=await (await $("[name=username]")).getAttribute("class")

        console.log(dis);
        console.log(enable);
        console.log(status);
        console.log(text);
        console.log(attri);
        console.log(attri1);
        console.log(attri2);
    })
})