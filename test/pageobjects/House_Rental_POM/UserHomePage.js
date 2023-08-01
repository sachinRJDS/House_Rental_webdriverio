class UserHomePage{
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
        return $("//b[text()='Registered Rooms: ']")
    }
    get registeredRoomCount(){
        return $("//b[text()='Registered Rooms: ']/span")
    }
    get logoutTab(){
        return $("//a[text()='Logout']")
    }
    async getUserName(){
        var text=await $("//a[text()='sachinraj ']").getText()
        var username=text.toLowerCase()
        return username;
    }
}

export default new UserHomePage()