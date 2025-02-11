import {ThmButtonProps} from './src/button/button'
import {ThmCellProps} from './src/cell/cell'
import {ThmCellGroupProps} from './src/cell/cellGroup'
import {ThmRowProps} from './src/row/row'
import {ThmColProps} from './src/col/col'

declare module 'vue' {
  export interface GlobalComponents {
    ThmButton:ThmButtonProps
    ThmCell:ThmCellProps,
    ThmCellGroup:ThmCellGroupProps,
    ThmRow:ThmRowProps,
    ThmCol:ThmColProps,
  }
}