describe("demo3",async()=>{
it("testDemo3",async()=>{
    await browser.url("https://demo.actitime.com")
    await browser.maximizeWindow()
    var s=await $("[name=username]").getSize()
    var s1=await $("[name=pwd]").getLocation()
    console.log(s);
    console.log(s1);
    await browser.newWindow("https://www.flipkart.com")  
    await browser.pause(5000)

    
})
})