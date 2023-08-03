
import AppliHomePage from "../../pageobjects/House_Rental_POM/AppliHomePage.js"
import Loginpage from "../../pageobjects/House_Rental_POM/LoginPage.js"
import UserHomePage from "../../pageobjects/House_Rental_POM/UserHomePage.js"
import UserRegisterRoomPage from "../../pageobjects/House_Rental_POM/UserRegisterRoomPage.js"
import UserListOfApartmenetPage from "../../pageobjects/House_Rental_POM/UserListOfApartmenetPage.js"
import RandomNo from "../../houserental.libraries/RandomNo.js"
import SearchPage from "../../pageobjects/House_Rental_POM/SearchPage.js"
import SearchListOfApartPage from "../../pageobjects/House_Rental_POM/SearchListOfApartPage.js"
import AdminHomePage from "../../pageobjects/House_Rental_POM/AdminHomePage.js"
import AdminListOfApartPage from "../../pageobjects/House_Rental_POM/AdminListOfApartPage.js"
import ExcelUtility1 from "../../houserental.libraries/ExcelUtility1.js"
import LoginPage from "../../pageobjects/House_Rental_POM/LoginPage.js"
describe("RegisterHome1",async()=>{
    it("testRegisterHome",async()=>{

        var URL=await ExcelUtility1.getUrl()
        var USERNAME=await ExcelUtility1.getUserName()
        var PASSWORD=await ExcelUtility1.getUserPassword()

        //reading the random number
        var ran=RandomNo.randomNo()
        var mobile=RandomNo.mobileno()
        
        //enter the url
        await browser.url(URL)
        await browser.maximizeWindow()
        
        //click on login button 
        await AppliHomePage.loginTab.click()

        //login to application
        await LoginPage.loginToApplication(USERNAME,PASSWORD)

        //click on register tab and register the home
        await UserHomePage.registerTab.click()

        //reading the home register data from the excel
        let fullname=await ExcelUtility1.getExcelDataBasedOnTestcaseID("tc_02","RegisterRoom","FullName")+ran
        let mobileno=mobile
        let emailid=await ExcelUtility1.getExcelDataBasedOnTestcaseID("tc_02","RegisterRoom","Email_ID")+ran
        let houseno=ran
        let availableroom=await ExcelUtility1.getExcelDataBasedOnTestcaseID("tc_02","RegisterRoom","Available_Rooms")
        let country=await ExcelUtility1.getExcelDataBasedOnTestcaseID("tc_02","RegisterRoom","Country")
        let state=await ExcelUtility1.getExcelDataBasedOnTestcaseID("tc_02","RegisterRoom","State")
        let city=await ExcelUtility1.getExcelDataBasedOnTestcaseID("tc_02","RegisterRoom","City")
        let rent=await ExcelUtility1.getExcelDataBasedOnTestcaseID("tc_02","RegisterRoom","Rent")
        let deposit=await ExcelUtility1.getExcelDataBasedOnTestcaseID("tc_02","RegisterRoom","Deposit")+ran
        let address=await ExcelUtility1.getExcelDataBasedOnTestcaseID("tc_02","RegisterRoom","Address")+ran
         
        //enter the all the mandatory fields
        await UserRegisterRoomPage.fullname(fullname)
        await UserRegisterRoomPage.mobileNO(mobileno)
        await UserRegisterRoomPage.emailID(emailid)
        await UserRegisterRoomPage.houseNO(houseno)
        await UserRegisterRoomPage.availableRooms(availableroom)
        await UserRegisterRoomPage.country(country)
        await UserRegisterRoomPage.state(state)
        await UserRegisterRoomPage.city(city)
        await UserRegisterRoomPage.rent(rent)
        await UserRegisterRoomPage.deposit(deposit)
        await UserRegisterRoomPage.description("Nothing")
        await UserRegisterRoomPage.address(address)
        await UserRegisterRoomPage.vacantOROccupied("Vacant")
        await UserRegisterRoomPage.image("C:/Users/mkits/OneDrive/Pictures/Screenshots/Screenshot_20230215_103211.png")
        await UserRegisterRoomPage.submitBtn()

        //verify registration successfull message
        await UserRegisterRoomPage.verifySuccessfullMessage()

        //verify registered home in update page
         await UserHomePage.updateTab.click()
         await UserListOfApartmenetPage.verifyRegisteredHomeInDetailsPage(fullname)

         //click on logout link
         await UserHomePage.logoutTab.click()

         //click on search tab
         await AppliHomePage.searcghTab.click()

         //Enter searching keys and verify the registered home in searched page
         await SearchPage.searchRooms(availableroom,address)
         await SearchListOfApartPage.verifyRegisteredHomeInSearchPage(fullname)

         //click on login tab
         await AppliHomePage.loginTab.click()

         //login as a admin
         let adminUN=await ExcelUtility1.getAdminUserName()
         let adminPW=await ExcelUtility1.getAdminPassword()
         await Loginpage.loginToApplication(adminUN,adminPW)

         //click on rooms for rent link and verify the registered home
         await AdminHomePage.registeredRoomLink.click()
         await AdminListOfApartPage.verifyRegisteredHomeInRoomsForRent(fullname)

         //click on details/update tab and verify the user registered home
         var details=await AdminHomePage.updateTab
         await details.scrollIntoView({behavior:"smooth"})
         await details.isClickable()
         await AdminHomePage.updateTab.click()
         await AdminListOfApartPage.verifyRegisteredHomeInDetailsPage(fullname)
       
         //logout
         await AdminHomePage.logoutTab.click()
         
         })
})