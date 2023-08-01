describe('amazon login',async()=>{
    it('createCustomer',async()=>{
        await browser.url("https://www.amazon.com");
        console.log(await browser.getTitle());
    });
});