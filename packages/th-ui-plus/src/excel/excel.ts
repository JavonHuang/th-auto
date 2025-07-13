import { Workbook } from 'exceljs';

class ThExcel {
  file:Buffer | undefined
  workbook:Workbook | undefined
  constructor(file:Buffer){
    this.file = file
    this.workbook=new Workbook()
  }

  public readSheet=async (sheet:number)=>{
    await this.workbook!.xlsx.load(this.file!)
    const worksheet = this.workbook!.getWorksheet();
    return worksheet
  }
}

export { 
  ThExcel
} 