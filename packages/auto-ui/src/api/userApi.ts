import { request } from '@/service';
export default {
  pageList(data: { userName: string, password: string }) {
    return request({
      url: '/api/user/pageList',
      type: 'post',
      data
    })
  },
  addUser(data: Array<{ userName: string, password: string }>) {
    return request({
      url: '/api/user/addUser',
      type: 'post',
      data
    })
  },
  deleteUser(data: Array<string>) {
    return request({
      url: '/api/user/deleteUser',
      type: 'post',
      data
    })
  },
}