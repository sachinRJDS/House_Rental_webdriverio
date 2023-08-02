describe("contextclick",async()=>{
    it("testContextClick",async()=>{
        await browser.url("https://demo.actitime.com/")
        await browser.maximizeWindow()
        await browser.newWindow("https://amazon.com/")
        await browser.pause(5000)
    })
})