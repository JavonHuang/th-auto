import { request } from '@/service';
export default {
  queryMenu(data={}) {
    return request({
      url: '/api/menu/queryMenuList',
      type: 'post',
      data
    })
  },
}