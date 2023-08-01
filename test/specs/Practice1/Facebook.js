describe('facebooklogin',async()=>{
    it('open facebook',async()=>{
        await browser.url('https://www.facebook.com')
        console.log(browser.getTitle());
        await $('*=Create new account').click();
        await $('[name=firstname]').setValue('sachin')
    })
})