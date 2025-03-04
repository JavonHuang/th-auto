import { request } from '@/service';
export default {
  pageList(data: { name: string, passworld: string }) {
    return request({
      url: '/api/user/pageList',
      type: 'post',
      data
    })
  },
}