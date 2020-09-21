import request from '@/utils/request'

export function test(data=null) {
  return request({
    url: '/topic_collect/collect',
    method: 'post',
    data
  })
}