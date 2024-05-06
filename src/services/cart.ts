import { http } from '@/utils/http'

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
