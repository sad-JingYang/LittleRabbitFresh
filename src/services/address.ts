import { http } from '@/utils/http'
import type { AddressItem, AddressParams } from '@/types/address'

/**
 * 添加收货地址
 * @param data 请求参数
 * */
export function postMemberAddress(data: AddressParams) {
  return http({
    method: 'POST',
    url: '/member/address',
    data,
  })
}

/**
 * 获取收货地址列表
 * */
export function FetchMemberAddress() {
  return http<AddressItem[]>({
    method: 'GET',
    url: '/member/address',
  })
}
