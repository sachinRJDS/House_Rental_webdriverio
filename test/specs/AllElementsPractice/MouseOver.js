describe("MouseOver",async()=>{
    it("testMpuseOver",async()=>{
        await browser.url("https://www.myntra.com/")
        await browser.maximizeWindow()
        await $("//a[text()='Men' and @class='desktop-main']").moveTo()
        await $("//a[text()='Casual Shirts']").click()
        await browser.pause(3000)
    })
})