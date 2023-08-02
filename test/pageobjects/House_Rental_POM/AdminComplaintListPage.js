class AdminComplaintListPage{
    get listOfComplaints(){
        return $$("//tbody/tr")
    }

    async verifyRaisedComplaintInAdminPage(houseno,complaint,username){
        var userDetails=houseno+" "+complaint+" "+username
        var allUser=await this.listOfComplaints.map(ele=>{return ele.getText()})
        for(let i=0;i<allUser.length;i++){
          var text=allUser[i]
          if(text==userDetails){
            console.log("complaint is updated");
          }
        }
    }
}
export default new AdminComplaintListPage()