import excel from "exceljs"
describe('ExcelData',async()=>{
    it("readExcelData",async()=>{
        const book=new excel.Workbook()
        await book.xlsx.readFile("C:/Users/mkits/OneDrive/Desktop/House_Rental_webdriverio/HouseRentalDemo.xlsx")
         const sheet=book.getWorksheet("sdet49")
         var text=sheet.getRow(1).getCell(1).toString()
         console.log(text);
    })
    // it("new",async()=>{
    //     const book=new excel.Workbook()
    //     var sheet=book.addWorksheet("sdet49")
    //     sheet.getRow(1).getCell(1).value='jack'
    //    await  book.xlsx.writeFile("C:/Users/mkits/OneDrive/Desktop/House_Rental_webdriverio/HouseRentalDemo.xlsx")

    // })
    it("write",async()=>{
        const book=new excel.Workbook()
        await book.xlsx.readFile("C:/Users/mkits/OneDrive/Desktop/House_Rental_webdriverio/HouseRentalDemo.xlsx")
        var sheet=book.addWorksheet("sdet50")
        sheet.getRow(1).getCell(1).value='jack'
        sheet.getRow(1).getCell(2).value='jhon'
        sheet.getRow(1).getCell(3).value='rock'
       await book.xlsx.writeFile("C:/Users/mkits/OneDrive/Desktop/House_Rental_webdriverio/HouseRentalDemo.xlsx")

    })
})