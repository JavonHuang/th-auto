import ThFormItemSet from './src/form/formItem.ts'
import ThRowSet from './src/row/row.ts'
import ThColSet from './src/col/col.ts'

import { ComponentSetProps } from "./src/common.ts"

const components: {
  [propName: string]: ()=>Array<ComponentSetProps>
} = {
  ThFormItemSet,
  ThColSet,
  ThRowSet,
}

export default components

export type {ComponentSetProps} from './src/common.ts'
