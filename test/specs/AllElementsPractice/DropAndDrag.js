describe("Drop",async()=>{
    it("testDrop",async()=>{
        await browser.url("http://www.dhtmlgoodies.com/submitted-scripts/i-google-like-drag-drop/index.html")
        await browser.maximizeWindow()
        var ele=await $("//h1[text()='Block 1']")
        var target=await $("//h1[text()='Block 4']")

        await ele.dragAndDrop(target)
        await browser.takeScreenshot()
        await browser.pause(5000)

    })
})