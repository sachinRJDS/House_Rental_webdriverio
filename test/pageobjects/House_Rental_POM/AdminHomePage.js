class AdminHomePage{
    get homeTab(){
        return $("//a[text()='Home']")
    }
    get registerTab(){
        return $("//a[text()='Register']")
    }
    get updateTab(){
        return $("//a[text()='Details/Update']")
    }
    get registeredRoomLink(){
        return $("//b[text()='Rooms for Rent: ']")
    }
    get registeredRoomCount(){
        return $("//b[text()='Registered Rooms: ']/span")
    }
    get logoutTab(){
        return $("//a[text()='Logout']")
    }
    get registeredUserLink(){
        return $("//b[text()='Registered Users: ']")
    }
    get sendSMSTab(){
        return $("//a[text()='Send SMS']")
    }
    get complaintListTab(){
        return $("//a[text()='Complaint List']")
    }
    async getUserName(){
        var text=await $("//a[text()='sachinraj ']").getText()
        var username=text.toLowerCase()
        return username;
    }
}

export default new AdminHomePage()