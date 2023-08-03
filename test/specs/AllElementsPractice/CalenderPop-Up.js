describe("CalenderPop",async()=>{
    it("testPopUp",async()=>{
        await browser.url("https://www.goibibo.com/")
        await browser.maximizeWindow()
        await $("//span[@class='logSprite icClose']").click()
        await $("//p[@class='sc-jlwm9r-1 dRQhOp']").click()

        await $("//span[text()='From']/following-sibling::p")
          await browser.pause(2000)
         await $("//input[@type='text']").setValue("bengaluru")
         await $("//p[text()='Bengaluru International Airport']").click()
        await $("//input[@type='text']").setValue("goa")
        await $("//span[text()='Goa - Dabolim Airport, India']").click()
        
        await browser.pause(5000)
        while(true){
            try {
                await $("//div[contains(text(),'Nov')]")
                await $("//div[contains(text(),'Nov')]/ancestor::div[@class='DayPicker-Month']/descendant::p[text()='4']").click()
                await $("//span[text()='Done']").click()
                break
            } catch (error) {
             await $("//span[@class='DayPicker-NavButton DayPicker-NavButton--next']").click()
            }
        }
        await browser.pause(5000)
        
    })
    
})