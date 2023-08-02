describe("AlertPopUp",async()=>{
    it("testAlert",async()=>{
        await browser.url("https://demo.automationtesting.in/Alerts.html")
        await browser.maximizeWindow()
        await $("//a[text()='Alert with OK & Cancel ']").click()
        await $("//button[text()='click the button to display a confirm box ']").click()
        console.log(await browser.getAlertText());
        console.log(await browser.isAlertOpen());
        await browser.acceptAlert()
        await browser.pause(5000)
    })
})