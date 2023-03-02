// 定义分类接口的API

import request from '@/utils/request'

// 定义首页需要的接口函数
export const findAllCateGory = () => {
  return request('/home/category/head', 'get')
}
