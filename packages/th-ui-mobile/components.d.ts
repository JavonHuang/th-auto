import {ThmButtonProps} from './src/button/button'

declare module 'vue' {
  export interface GlobalComponents {
    ThmButton:ThmButtonProps
  }
}