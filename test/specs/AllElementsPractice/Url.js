describe('getUrl',async()=>{
    it('testUrl',async()=>{
        await browser.url("https://www.flipkart.com/")
        await browser.maximizeWindow()
        await $("//a[text()='Cart']").click()
        var currentUrl=await browser.getUrl()
        console.log(currentUrl);
      })
})