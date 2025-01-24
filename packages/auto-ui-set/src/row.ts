import { ComponentSetProps } from "./interface"

const ThRowSet=():ComponentSetProps=>{
  return {
    style:[],
    props:[
      {
        componentType:'InputNumber',
        propsName:'列宽',
        props:'span',
        value:12
      }
    ],
    extra:[]
  }
}
export default ThRowSet