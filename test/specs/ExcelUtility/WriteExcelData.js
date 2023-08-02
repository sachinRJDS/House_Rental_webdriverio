import excel from "exceljs"
describe("readExcelData",async()=>{
    it('testReadExcelData',async()=>{
        
        const book=new excel.Workbook()
        var sheet=book.addWorksheet("NewData")
        sheet.getRow(1).getCell(1).value="jack"
        sheet.getRow(1).getCell(2).value="rock"
        sheet.getRow(1).getCell(3).value="jhon"
        book.xlsx.writeFile("C:/Users/mkits/OneDrive/Desktop/House_Rental_webdriverio/NewExcel.xlsx")
    })
})