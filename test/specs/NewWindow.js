describe('practice',async()=>{
it('testPractice',async()=>{
    await browser.url("https://demo.actitime.com")
    await browser.maximizeWindow()
    await browser.pause(3000)
    await browser.newWindow("https://www.amazon.com")
    await browser.pause(3000)
    
   
})
})