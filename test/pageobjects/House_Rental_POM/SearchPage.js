class SearchPage{
    get availableRoom(){
        return $("#keywords")
    }
      get location(){
        return  $("#location")
    }
    get searchBtn(){
        return $("[name=search]")
    }

    //business libraries
    async searchRooms(room,loc,){
        
        await this.availableRoom.setValue(room)
        await this.location.setValue(loc)
        await this.searchBtn.waitForExist()
        await this.searchBtn.click()
    }
}
export default new SearchPage()