class UserEditRegisterRoomPage{
    async accommondation(accom){
        await $("#accommodation").setValue(accom)
    }
    async description(description){
        await $("#description").setValue(description)
    }
    async landmark(landmark){
        await $("#landmark").setValue(landmark)
    }
    async other(value){
    await $("#other").setValue(value)
    }
    async submitBtn(){
        await $("[name=register_individuals]").click()
    }
}
export default new UserEditRegisterRoomPage()