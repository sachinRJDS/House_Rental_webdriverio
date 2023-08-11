describe("democlass",async()=>{
    it("testDemoclass",async()=>{
        await browser.url("https://demo.actitime.com")
        await browser.maximizeWindow()
        var text=await $("//div[text()='Login ']").getText()
        console.log(text);
        var text2=await $("#keepLoggedInCheckBox").getValue()
        console.log(text2);
    })
})