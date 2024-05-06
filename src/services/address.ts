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

/**
 * 获取收货地址详情
 * @param id 地址id（路径参数）
 */
export function FetchMemberAddressById(id: string) {
  return http<AddressItem>({
    method: 'GET',
    url: `/member/address/${id}`,
  })
}

/**
 *  修改收货地址
 *  @param id 地址id（路径参数）
 *  @param data 表单数据(请求体参数)
 */
export function putMemberAddressById(id: string, data: AddressParams) {
  return http({
    method: 'PUT',
    url: `/member/address/${id}`,
    data,
  })
}

/**
 * 删除收货地址
 * @param id 地址id（路径参数）
 * */
export function deleteMemberAddressById(id: string) {
  return http({ method: 'DELETE', url: `/member/address/${id}` })
}
