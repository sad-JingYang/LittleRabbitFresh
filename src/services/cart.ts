import { http } from '@/utils/http'
import type { CartItem } from '@/types/cart'

/**
 * 加入购物车
 * @param data 请求体参数
 * */
export function postMemberCart(data: { skuId: string; count: number }) {
  return http({
    method: 'POST',
    url: '/member/cart',
    data,
  })
}

/**
 * 获取购物车列表
 */
export function FetchMemberCart() {
  return http<CartItem[]>({
    method: 'GET',
    url: '/member/cart',
  })
}
