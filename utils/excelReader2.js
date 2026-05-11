const XLSX=require('xlsx') //importing the library for the  xlsx library
//ES6 modern technique
//import *as XLSX from 'xlsx'
function getCellData(row,column){
    const workbook=XLSX.readFile('testdata/applicationdata.xlsx') // excel file path paranje koduthal, need to open the file in the TestData folder.
    const sheet=workbook.Sheets['logindata'] //sheet name specified as loginpage
    const cellValue=XLSX.utils.encode_cell({
        r:row-1,//excel first row= 0th row in javascript 
        c:column-1
    })//to fetch data from cell

    const cell=sheet[cellValue]//to retrive cell address
    return cell?cell.v:undefined //ternary operator

}
module.exports={getCellData} //This function will available in other filesconst XLSX=require('xlsx') //importing the library for the  xlsx library

