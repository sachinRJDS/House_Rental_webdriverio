describe('ScreenShotPractice',async()=>{
    it('testscreenshot',async()=>{
        await browser.url("https://demo.actitime.com")
        await browser.pause(2000)
        await browser.saveScreenshot("./test/specs/screenshot1.png")
    })
})
