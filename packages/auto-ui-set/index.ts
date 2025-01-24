import ThButtonSet from './src/button.ts'
import ThRowSet from './src/row.ts'
import ThColSet from './src/col.ts'

import { ComponentSetProps,SetProps } from "./src/interface.ts"

const components: {
  [propName: string]: ()=>ComponentSetProps
} = {
  ThButtonSet,
  ThColSet,
  ThRowSet,
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