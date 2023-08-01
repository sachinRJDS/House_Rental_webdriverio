describe("AllLinks",async()=>{
    it("testAllLinks",async()=>{
        await browser.url("https://www.flipkart.com")
        await browser.maximizeWindow()
        var urls=await $$("//a").map((msg)=>{return msg.getText()})
        for(let i=0;i<urls.length;i++){
            console.log(urls[i]);
        }
    })
})