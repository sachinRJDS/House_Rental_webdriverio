describe("demo1",async()=>{
    it("testDemo1",async()=>{
        await browser.url("https://demo.opensourcebilling.org/en/users/sign_in")
        await $("#email").clearValue()
        await $("#password").clearValue()
       await  browser.pause(4000)
       (await $("#email")).setValue("sachi")
    })
})