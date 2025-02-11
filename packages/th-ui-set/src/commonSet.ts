import { SetProps } from "./interface"

export const commonProps = [
  {
    componentType:'Checkbox',
    propsName:'禁用',
    props:'disabled',
    value:false
  },
] as Array<SetProps>

export const commonStyle = [
  {
    componentType:'AutoNumber',
    propsName:'宽',
    props:'width',
    value:''
  },
  {
    componentType:'AutoNumber',
    propsName:'高',
    props:'height',
    value:''
  },
  {
    componentType:'AutoBoxSize',
    propsName:'内边距',
    props:'padding',
    value:null
  },
  {
    componentType:'AutoBoxSize',
    propsName:'外边距',
    props:'margin',
    value:null
  },
  {
    componentType:'AutoBorder',
    propsName:'边框',
    props:'border',
    value:''
  },
  {
    componentType:'AutoBoxSize',
    propsName:'圆角',
    props:'borderRadius',
    value:null
  },
  {
    componentType:'AutoColorPicker',
    propsName:'底色',
    props:'backgroundColor',
    value:null
  },
  {
    componentType:'AutoTextAlign',
    propsName:'文字对齐',
    props:'textAlign',
    value:null
  },
] as Array<SetProps>

export const commonExtra = [
  {
   
  },
] as Array<SetProps>