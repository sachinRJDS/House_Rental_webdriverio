import excel from "exceljs"
describe('ReadData',async()=>{
    it("testReadData",async()=>{

        const book=new excel.Workbook() 
        await  book.xlsx.readFile("C:/Users/mkits/OneDrive/Desktop/House_Rental_webdriverio/NewExcel.xlsx")
        const sheet=book.getWorksheet("NewData")
        var text=sheet.getRow(1).getCell(1).toString()
        var text1=sheet.getRow(1).getCell(2).toString()
        var text2=sheet.getRow(1).getCell(3).toString()
        console.log(text);
        console.log(text1);
        console.log(text2);
       })
       it("newTest",async()=>{
        const book=new excel.Workbook()
        await book.xlsx.readFile("C:/Users/mkits/OneDrive/Desktop/House_Rental_webdriverio/NewExcel.xlsx")
        const sheet=book.addWorksheet("sdet49")
        sheet.getRow(1).getCell(1).value='madhu'
        await book.xlsx.writeFile("C:/Users/mkits/OneDrive/Desktop/House_Rental_webdriverio/NewExcel.xlsx")

       })
})

