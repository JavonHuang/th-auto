  
import { withInstall } from "../withInstall"
import QueryTable from "./queryTable.vue"
export const ThQueryTable = withInstall(QueryTable)

export type IQueryTableColumn={
  isSlot?:Boolean,
  columnType?:'text'|'number'|'thousands'|'year'|'month'|'date'|'dateTime'|'time'|'link'|'action'
  prop:string,
  label:string,
  width?:number,
  minWidth?:number,
  fixed?:'right'|'left'|null,
  show?:boolean,
  children?:Array<IQueryTableColumn>,
  actionList?:Array<IAction>,
  onClick?:(e:{row: any, column: any, cellValue: any, index: number})=>void,
}

export interface IAction{
  onClick:(e:{row: any, column: any, cellValue: any, index: number})=>void,
  type:'delete'|'create'|'edit'
}

export interface IQueryTable{
  api:(e:any)=> Promise<any>,
  columns: Array<IQueryTableColumn>,
  selectable?:boolean,
  border?:boolean,
  queryModel?:any,
  showIndex?:boolean,
  create?:()=> void,
  delete?:()=> void,
  selectionChange?:(...args:any[])=>void
}

export type ThQueryTableProps =  typeof ThQueryTable 
export default ThQueryTable

/**
 * @reflesh 刷新表格数据
 * @getTableData 获取表格数据源
 */
interface QueryTableInstance{
  reflesh:()=>void,
  getTableData:()=>Array<any>
}

export type {QueryTableInstance}