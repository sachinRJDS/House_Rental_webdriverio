import exe from "../../houserental.libraries/ExcelUtility1.js"
import excel from "exceljs"
describe("fromExcel",async()=>{
    it("testExcel",async()=>{
        var data=await exe.getExcelData("C:/Users/mkits/OneDrive/Desktop/House_Rental_webdriverio/NewExcel.xlsx","NewData",1,1)
        console.log(data);
    })
    it("lastRow",async()=>{
        const book=new excel.Workbook()
        await book.xlsx.readFile("C:/Users/mkits/OneDrive/Desktop/House_Rental_webdriverio/NewExcel.xlsx")
        var sheet=book.getWorksheet("NewData")
        var rowcount=sheet.rowCount
        var cellcount=sheet.columnCount
        console.log(rowcount);
        console.log(cellcount);

    })
})

