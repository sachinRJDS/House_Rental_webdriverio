describe('add',async()=>{
    it('clear',async()=>{
        await browser.url("https://demo.actitime.com")
        console.log(browser.getUrl());
        (await $("[name=username]")).addValue('admin')
        (await $("[name=pwd]")).addValue("manager")
        (await $("//div[text()='Login ']")).click()

    })
})