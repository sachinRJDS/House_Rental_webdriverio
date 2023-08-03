import AppliHomePage from "../../pageobjects/House_Rental_POM/AppliHomePage.js"
import ExcelUtility1 from "../../houserental.libraries/ExcelUtility1.js"
import RandomNo from "../../houserental.libraries/RandomNo.js"
import RegisterPage from "../../pageobjects/House_Rental_POM/RegisterPage.js"
import LoginPage from "../../pageobjects/House_Rental_POM/LoginPage.js"
import UserHomePage from "../../pageobjects/House_Rental_POM/UserHomePage.js"
import AdminHomePage from "../../pageobjects/House_Rental_POM/AdminHomePage.js"
import RegisteredUsersPage from "../../pageobjects/House_Rental_POM/RegisteredUsersPage.js"
describe("RegisterUserToApplication",async()=>{
    it("testRegisterUserToApplication",async()=>{

        var URL=await ExcelUtility1.getUrl()
        var USERNAME=await ExcelUtility1.getUserName()
        var PASSWORD=await ExcelUtility1.getUserPassword()

        //reading the random number
        var ran=RandomNo.randomNo()
        var mobile=RandomNo.mobileno()
        
        //enter the url
        await browser.url(URL)
        await browser.maximizeWindow()
        
        //click on register tab
        await AppliHomePage.registerTab.click()

        //reading register data from the excel file
        var fullname=await ExcelUtility1.getExcelDataBasedOnTestcaseID("tc_02","RegisterUserToApplication","fullname")+ran
        var username=await ExcelUtility1.getExcelDataBasedOnTestcaseID("tc_02","RegisterUserToApplication","username")+ran
        var emailID=await ExcelUtility1.getExcelDataBasedOnTestcaseID("tc_02","RegisterUserToApplication","email")+ran
        var password=await ExcelUtility1.getExcelDataBasedOnTestcaseID("tc_02","RegisterUserToApplication","password")+ran

        //enter all the mandatory fields
        await RegisterPage.newRegistration(fullname,username,mobile,emailID,password,password)

        //verify the confirmation message
        await RegisterPage.verifyRegistrationSuccessfullMessage()

        //click on login tab
        await AppliHomePage.loginTab.click()

        //login to application
        await LoginPage.loginToApplication(fullname,password)

        //logout to apllication
        await UserHomePage.logoutTab.click()

        //click on login tab
        await AppliHomePage.loginTab.click()

        //login as a admin
        var adminUN=await ExcelUtility1.getAdminUserName()
        var adminPW=await ExcelUtility1.getAdminPassword()

        await LoginPage.loginToApplication(adminUN,adminPW)

        //click on registered user link and verify registered user name
        await AdminHomePage.registeredUserLink.click()
        
        await RegisteredUsersPage.verifyRegisteredUsers(fullname,username)

        //click on logout
        await AdminHomePage.logoutTab.click()







    })
})