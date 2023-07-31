describe('HouseRentalLogin',async()=>{
    it('login',async()=>{
        await browser.url('http://rmgtestingserver/domain/House_Rental_Application/auth/login.php')
        await $('#exampleInputEmail1').setValue('sachinraj')
        await $('#exampleInputPassword1').setValue('rjds123')
        await $('[name=login]').click();

    })
})