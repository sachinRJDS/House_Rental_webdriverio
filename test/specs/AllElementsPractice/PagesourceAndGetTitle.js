describe("Title",async()=>{
    it("testTitle",async()=>{
        await browser.url("https://www.myntra.com")
        await browser.maximizeWindow()
        console.log(browser.getTitle());
        console.log(browser.getPageSource());
    })
})