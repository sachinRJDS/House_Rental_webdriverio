

import ExcelUtility1 from "../../houserental.libraries/ExcelUtility1.js"
import AppliHomePage from "../../pageobjects/House_Rental_POM/AppliHomePage.js"
import LoginPage from "../../pageobjects/House_Rental_POM/LoginPage.js"
import UserHomePage from "../../pageobjects/House_Rental_POM/UserHomePage.js"
import RandomNo from "../../houserental.libraries/RandomNo.js"
import UserRegisterRoomPage from "../../pageobjects/House_Rental_POM/UserRegisterRoomPage.js"
import UserListOfApartmenetPage from "../../pageobjects/House_Rental_POM/UserListOfApartmenetPage.js"
import UserComplaintPage from "../../pageobjects/House_Rental_POM/UserComplaintPage.js"
import AdminHomePage from "../../pageobjects/House_Rental_POM/AdminHomePage.js"
import AdminComplaintListPage from "../../pageobjects/House_Rental_POM/AdminComplaintListPage.js"

describe("Complaint",async()=>{
    it("testComplaint",async()=>{
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
        let fullname=await ExcelUtility1.getExcelDataBasedOnTestcaseID("tc_01","RegisterRoom","FullName")+ran
        let mobileno=mobile
        let emailid=await ExcelUtility1.getExcelDataBasedOnTestcaseID("tc_01","RegisterRoom","Email_ID")+ran
        let houseno=ran
        let availableroom=await ExcelUtility1.getExcelDataBasedOnTestcaseID("tc_01","RegisterRoom","Available_Rooms")
        let country=await ExcelUtility1.getExcelDataBasedOnTestcaseID("tc_01","RegisterRoom","Country")
        let state=await ExcelUtility1.getExcelDataBasedOnTestcaseID("tc_01","RegisterRoom","State")
        let city=await ExcelUtility1.getExcelDataBasedOnTestcaseID("tc_01","RegisterRoom","City")
        let rent=await ExcelUtility1.getExcelDataBasedOnTestcaseID("tc_01","RegisterRoom","Rent")
        let deposit=await ExcelUtility1.getExcelDataBasedOnTestcaseID("tc_01","RegisterRoom","Deposit")+ran
        let address=await ExcelUtility1.getExcelDataBasedOnTestcaseID("tc_01","RegisterRoom","Address")+ran
         
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
        await UserRegisterRoomPage.image("C:/Users/mkits/OneDrive/Pictures/Screenshots/Screenshot (1).png")
        await UserRegisterRoomPage.submitBtn()

        //get the username
        var cname=await UserHomePage.getUserName()

        //click on details/update tab
        await UserHomePage.updateTab.click()

        //click on complaint button
        await UserListOfApartmenetPage.complaintButton.click()

        //read the complaint from the excel
        let com=await ExcelUtility1.getExcelDataBasedOnTestcaseID("tc_02","Complaint","Complaint")

        //enter the complaint and verify the successfull message
        await UserComplaintPage.enterTheComplaint(houseno,com)
        await UserComplaintPage.verifySentSuccessfullMeassage()

        //logout from the application
        await UserHomePage.logoutTab.click()

        //click on login tab
        await AppliHomePage.loginTab.click()

        //reading the admin username and password from the excel
        let adminUN=await ExcelUtility1.getAdminUserName()
        let adminPW=await ExcelUtility1.getAdminPassword()

        //login as a admin
        await LoginPage.loginToApplication(adminUN,adminPW)

        //click on complaint list tab and verify user raised complaint
        await AdminHomePage.complaintListTab.click()
        await AdminComplaintListPage.verifyRaisedComplaintInAdminPage(houseno,com,cname)

        //click on logout tab
        await AdminHomePage.logoutTab.click()

        await browser.pause(5000)
        
    })
})