describe('actitime.com',async()=>{
    it('acti',async()=>{
        await browser.url("https://demo.actitime.com")
        console.log(browser.getTitle());
        //await $('[name=username]').setValue('admin')
       //await $("input[id='username']").setValue('admin')//css selector
      // await $("#username").setValue('admin')//id selector
        await $('[name=pwd]').setValue('manager')//name selector
        await $("//div[text()='Login ']").click();//xpath expression
        //await $("=Login ").click()//text()
        console.log((browser.getTitle()));

        (await $("//div[text()='Login ']"))
    })
})