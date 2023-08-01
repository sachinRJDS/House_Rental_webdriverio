describe("suggestion",async()=>{
    it("testSuggestion",async()=>{
        await browser.url("https://www.google.com")
        await browser.maximizeWindow()
        await $("#APjFqb").setValue("java")
        await browser.pause(5000)
        var sugg=await $$("//span[contains(text(),'java')]").map((msg)=>{return msg.getText()})
        for(let i=0;i<sugg.length;i++){
           await console.log(sugg[i]);
        }

    })
})