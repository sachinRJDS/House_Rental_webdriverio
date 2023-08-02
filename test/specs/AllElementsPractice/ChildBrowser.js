describe("child",async()=>{
    it("testChild",async()=>{
        await browser.url("https://secure.indeed.com/")
        await browser.maximizeWindow()
        await $("#apple-signin-button").click()
        await $("#login-facebook-button").click()
        await browser.switchWindow("Facebook")
       await browser.maximizeWindow()
        // await browser.pause(5000)
        await browser.switchWindow("Indeed")
        console.log(await browser.getTitle());
        // await browser.pause(5000)
    })
})