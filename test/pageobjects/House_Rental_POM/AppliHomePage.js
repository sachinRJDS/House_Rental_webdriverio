class AppliHomePage{
    get loginTab(){
        return $("//a[text()='Login']")
    }
    get searcghTab(){
        return $("//a[text()='Search']")
    }
    get registerTab(){
        return $("//a[text()='Register']")
    }

}
export default new AppliHomePage()