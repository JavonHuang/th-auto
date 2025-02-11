import ThButtonSet from './src/button.ts'
import ThCheckboxSet from './src/checkbox.ts'
import ThRowSet from './src/row.ts'
import ThColSet from './src/col.ts'
import ThFormSet from './src/form.ts'
import ThFormItemSet from './src/formItem.ts'
import ThInputSet from './src/input.ts'


import { ComponentSetProps,SetProps } from "./src/interface.ts"

const components: {
  [propName: string]: ()=>ComponentSetProps
} = {
  ThButtonSet,
  ThCheckboxSet,
  ThColSet,
  ThRowSet,
  ThFormSet,
  ThFormItemSet,
  ThInputSet,
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