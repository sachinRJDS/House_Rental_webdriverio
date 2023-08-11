describe("Iframe",async()=>{
 it("test",async()=>{
    // await browser.url("file:///C:/Users/mkits/OneDrive/Desktop/All%20files/Page1.html")
    await browser.navigateTo("file:///C:/Users/mkits/OneDrive/Desktop/All%20files/Page1.html")
    await browser.maximizeWindow()
    // await browser.newWindow("file:///C:/Users/mkits/OneDrive/Desktop/All%20files/Page1.html")
    await browser.pause(3000)
    await browser.switchToFrame(0)
    await $("#t2").setValue("hi")
    await browser.switchToParentFrame()
    await $("#t1").setValue("hello")
    await browser.pause(3000)
 })
})