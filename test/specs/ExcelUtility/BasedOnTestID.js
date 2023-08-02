import ExcelUtility1 from "../../houserental.libraries/ExcelUtility1.js";
describe("BasedOnTestId",async()=>{
    it("testBasedOnTestId",async()=>{
     var   data=await ExcelUtility1.getExcelDataBasedOnTestcaseID("tc_04","Sheet1","FullName")
        console.log(data);
    })
})