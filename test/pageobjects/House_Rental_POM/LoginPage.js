class LoginPage{
    get usernameTextField(){
        return $("#exampleInputEmail1")
    }
    get passwordTextField(){
        return $("#exampleInputPassword1")
    }
    get submitBtn(){
        return $("[name=login]")
    }

    //Business libraries
    async loginToApplication(username,password){
        await this.usernameTextField.setValue(username)
        await this.passwordTextField.setValue(password)
        await this.submitBtn.click()
    }
}
export default new LoginPage()