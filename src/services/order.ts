import { http } from '@/utils/http'
import type {
  OrderCreateParams,
  OrderCreateResult,
  OrderPreResult,
  OrderResult,
} from '@/types/order'

/**
 * 填写订单-获取预付订单
 * */
export function FetchMemberOrderPre() {
  return http<OrderPreResult>({ method: 'GET', url: '/member/order/pre' })
}

/**
 * 填写订单-获取立即购买订单
 * */
export function FetchMemberOrderPreNow(data: { skuId: string; count: string; addressId?: string }) {
  return http<OrderPreResult>({
    method: 'GET',
    url: '/member/order/pre/now',
    data,
  })
}

/**
 * 提交订单
 * @param data 请求参数
 * */
export function postMemberOrder(data: OrderCreateParams) {
  return http<{ id: string }>({ method: 'POST', url: '/member/order', data })
}

/**
 * 获取订单详情
 * @param id 订单id
 */
export const FetchMemberOrderById = (id: string) => {
  return http<OrderResult>({
    method: 'GET',
    url: `/member/order/${id}`,
  })
}
