import request from '@/utils/request'

export function test(data=null) {
  return request({
    url: '/api/goods/moduleGoodsList',
    method: 'post',
    data
  })
}