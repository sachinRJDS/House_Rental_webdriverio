import excel from "exceljs"
class ExcelUtility1{
  async  getExcelData(path,sheetname,row,cell){
        const book =new excel.Workbook()
        await  book.xlsx.readFile(path)
        const sheet=book.getWorksheet(sheetname)
        var data=sheet.getRow(row).getCell(cell).toString()
        return data
    }
    async getExcelDataBasedOnTestcaseID(testid,sheetname,colname){
        const book =new excel.Workbook()
        await book.xlsx.readFile("C:/Users/mkits/OneDrive/Desktop/House_Rental_webdriverio/homeCredentatial.xlsx")
        const sheet=book.getWorksheet(sheetname)
        let lastrow=sheet.rowCount
        let actTestID=""
        let rowCount=1
        for(let i=1;i<=lastrow;i++){
            actTestID=sheet.getRow(i).getCell(1).toString()
            if(actTestID==testid){
                break;
            }
            rowCount++;
        }
        let lastcell=sheet.getRow(rowCount-1).cellCount;
        let actColName=""
        let cellCount=1
        for(let j=1;j<=lastcell;j++){
            actColName=sheet.getRow(rowCount-1).getCell(j).toString()
            if(actColName==colname){
                break;
            }
            cellCount++;
        }
        var data=sheet.getRow(rowCount).getCell(cellCount).toString()
        return data
    }

    async getUrl(){
        const book =new excel.Workbook()
        await  book.xlsx.readFile("C:/Users/mkits/OneDrive/Desktop/House_Rental_webdriverio/homeCredentatial.xlsx")
        const sheet=book.getWorksheet("UrlAndUserLogin")
        var data=sheet.getRow(1).getCell(2).toString()   
        return data;
    }
    async getUserName(){
        const book =new excel.Workbook()
        await  book.xlsx.readFile("C:/Users/mkits/OneDrive/Desktop/House_Rental_webdriverio/homeCredentatial.xlsx")
        const sheet=book.getWorksheet("UrlAndUserLogin")
        var data=sheet.getRow(2).getCell(2).toString()   
        return data;
    }
    async getUserPassword(){
        const book =new excel.Workbook()
        await  book.xlsx.readFile("C:/Users/mkits/OneDrive/Desktop/House_Rental_webdriverio/homeCredentatial.xlsx")
        const sheet=book.getWorksheet("UrlAndUserLogin")
        var data=sheet.getRow(3).getCell(2).toString()   
        return data;
    }
    async getAdminUserName(){
        const book =new excel.Workbook()
        await  book.xlsx.readFile("C:/Users/mkits/OneDrive/Desktop/House_Rental_webdriverio/homeCredentatial.xlsx")
        const sheet=book.getWorksheet("UrlAndUserLogin")
        var data=sheet.getRow(4).getCell(2).toString()   
        return data;   
    }
    async getAdminPassword(){
        const book =new excel.Workbook()
        await  book.xlsx.readFile("C:/Users/mkits/OneDrive/Desktop/House_Rental_webdriverio/homeCredentatial.xlsx")
        const sheet=book.getWorksheet("UrlAndUserLogin")
        var data=sheet.getRow(5).getCell(2).toString()   
        return data;
    }
}
export default new ExcelUtility1()