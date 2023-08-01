import AppliHomePage from "../../pageobjects/House_Rental_POM/AppliHomePage.js"
import Loginpage from "../../pageobjects/House_Rental_POM/LoginPage.js"
import UserHomePage from "../../pageobjects/House_Rental_POM/UserHomePage.js"
import UserRegisterRoomPage from "../../pageobjects/House_Rental_POM/UserRegisterRoomPage.js"
import UserListOfApartmenetPage from "../../pageobjects/House_Rental_POM/UserListOfApartmenetPage.js"
import RandomNo from "../../com.houserental.libraries/RandomNo.js"
import SearchPage from "../../pageobjects/House_Rental_POM/SearchPage.js"
import SearchListOfApartPage from "../../pageobjects/House_Rental_POM/SearchListOfApartPage.js"
import AdminHomePage from "../../pageobjects/House_Rental_POM/AdminHomePage.js"
import AdminListOfApartPage from "../../pageobjects/House_Rental_POM/AdminListOfApartPage.js"
import UserEditRegisterRoomPage from "../../pageobjects/House_Rental_POM/UserEditRegisterRoomPage.js"
describe("RegisterHome1",async()=>{
    it("testRegisterHome",async()=>{

        //Enter the URL
        await browser.url("http://rmgtestingserver/domain/House_Rental_Application/")
        await browser.maximizeWindow()
        await AppliHomePage.loginTab.click()

        //Login to application
        await Loginpage.loginToApplication("sachinraj","rjds123")

        //click on register tab
        await UserHomePage.registerTab.click()

        //Enter the all the mandatiry fields
        var ran=RandomNo.randomNo()
        var mobileno=RandomNo.mobileno()
        var cname="Prajwal"+ran
        await UserRegisterRoomPage.fullname(cname)
        await UserRegisterRoomPage.mobileNO(mobileno)
        await UserRegisterRoomPage.emailID("prajwal@gmail.com"+ran)
        await UserRegisterRoomPage.houseNO(ran)
        await UserRegisterRoomPage.availableRooms("2bhk")
        await UserRegisterRoomPage.country("india")
        await UserRegisterRoomPage.state("karnataka")
        await UserRegisterRoomPage.city("bangalore")
        await UserRegisterRoomPage.rent("rent")
        await UserRegisterRoomPage.deposit("500000")
        await UserRegisterRoomPage.description("Nothing")
        await UserRegisterRoomPage.address("JP Nagar")
        await UserRegisterRoomPage.vacantOROccupied("Vacant")
        await UserRegisterRoomPage.image("C:/Users/mkits/OneDrive/Pictures/Screenshots/Screenshot (1).png")
        await UserRegisterRoomPage.submitBtn()

        //verify registration successfull message
        await UserRegisterRoomPage.verifySuccessfullMessage()

        //click on details/update tab
        await UserHomePage.updateTab.click()

        //click on requried home edit button
        await UserListOfApartmenetPage.editButton(cname)

        //enter the all the mandatory fields
        await UserEditRegisterRoomPage.accommondation("freewater")
        await UserEditRegisterRoomPage.description("====")
        await UserEditRegisterRoomPage.landmark("Qspider")
        await UserEditRegisterRoomPage.other("$$$$$")
        await UserEditRegisterRoomPage.submitBtn()

        //verify in updated home in registered rooms
        await UserHomePage.homeTab.click()
        await UserHomePage.registeredRoomLink.click()
        await UserListOfApartmenetPage.verifyUpdatedHome(cname)

        //click on logout tab
        await UserHomePage.logoutTab.click()

        //click on search tab
        await AppliHomePage.searcghTab.click()

        //enter the searching keys
        await SearchPage.searchRooms("2bhk","JP Nagar")

        //verify updated register home
        await SearchListOfApartPage.verifyRegisteredHomeInSearchPage(cname)

        //click on login tab
        await AppliHomePage.loginTab.click()

        //login as a admin
        await Loginpage.loginToApplication("admin","admin")

        //click on rooms for rent link and verify updated home
         await AdminHomePage.registeredRoomLink.click()
         await AdminListOfApartPage.verifyUpdatedHomeInAdminPage(cname)

          //click on details/update tab and verify the user registered home
          var details=await AdminHomePage.updateTab
          await details.scrollIntoView({behavior:"smooth"})
          await details.isClickable()
          await AdminHomePage.updateTab.click()
          await AdminListOfApartPage.verifyUpdatedHomeInAdminPage(cname)

          //logout
          await AdminHomePage.logoutTab.click()


        





    })
})
