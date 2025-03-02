import ThButtonSet from './src/button.ts'
import ThCascaderSet from './src/cascader.ts'
import ThCheckboxSet from './src/checkbox.ts'
import ThColSet from './src/col.ts'
import ThColorPickerSet from './src/colorPicker.ts'
import ThDatePickerSet from './src/datePicker.ts'
import ThFormSet from './src/form.ts'
import ThFormItemSet from './src/formItem.ts'
import ThInputSet from './src/input.ts'
import ThInputNumberSet from './src/inputNumber.ts'
import ThLinkSet from './src/link.ts'
import ThQueryTableSet from './src/queryTable.ts'
import ThRowSet from './src/row.ts'


import { ComponentSetProps,SetProps } from "./src/interface.ts"

const components: {
  [propName: string]: ()=>ComponentSetProps
} = {
  ThButtonSet,
  ThCascaderSet,
  ThCheckboxSet,
  ThColSet,
  ThColorPickerSet,
  ThDatePickerSet,
  ThRowSet,
  ThFormSet,
  ThFormItemSet,
  ThInputSet,
  ThInputNumberSet,
  ThLinkSet,
  ThQueryTableSet,
}

export default components

export type {ComponentSetProps} from './src/interface.ts'

export const getProps=(propsList:Array<SetProps>)=>{
  let props:any={}
  propsList.forEach((e)=>{
    props[e.props]=e.value
  })
  return props
}