import { request } from '@/service';
export default {
  queryShopCategory(data: { userName: string, password: string }) {
    return request({
      url: '/api/shop/queryShopCategory',
      type: 'post',
      data
    })
  },
  addShopCategory(data:any) {
    return request({
      url: '/api/shop/addShopCategory',
      type: 'post',
      data
    })
  },
  updateShopCategory(data:any) {
    return request({
      url: '/api/shop/updateShopCategory',
      type: 'post',
      data
    })
  },
  delShopCategory(data: Array<string>) {
    return request({
      url: '/api/shop/delShopCategory',
      type: 'post',
      data
    })
  },
  getDetailShopCategory(data: any) {
    return request({
      url: '/api/shop/getDetailShopCategory',
      type: 'post',
      data
    })
  },
  shopCategoryList(data: any) {
    return request({
      url: '/api/shop/shopCategoryList',
      type: 'post',
      data
    })
  },
  queryShopComponent(data: { userName: string, password: string }) {
    return request({
      url: '/api/shop/queryShopComponent',
      type: 'post',
      data
    })
  },
  addShopComponent(data: any) {
    return request({
      url: '/api/shop/addShopComponent',
      type: 'post',
      data
    })
  },
  updateShopComponent(data:any) {
    return request({
      url: '/api/shop/updateShopComponent',
      type: 'post',
      data
    })
  },
  delShopComponent(data: Array<string>) {
    return request({
      url: '/api/shop/delShopComponent',
      type: 'post',
      data
    })
  },
  getDetailShopComponent(data: any) {
    return request({
      url: '/api/shop/getDetailShopComponent',
      type: 'post',
      data
    })
  },
  getComponentShowTool(data: any) {
    return request({
      url: '/api/shop/getComponentShowTool',
      type: 'post',
      data
    })
  },
}