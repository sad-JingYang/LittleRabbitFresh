import { http } from '@/utils/http'
import type { AddressParams } from '@/types/address'

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
