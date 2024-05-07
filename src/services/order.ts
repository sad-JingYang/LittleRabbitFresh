import { http } from '@/utils/http'
import type {
  OrderCreateParams,
  OrderLogisticResult,
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

/**
 * 模拟发货-内测版
 * @description 在DEV环境下使用，仅在订单状态为待发货时，可模拟发货，调用后订单状态修改为待收货，包含模拟物流。
 * @param id 订单id
 */
export const FetchMemberOrderConsignmentById = (id: string) => {
  return http({
    method: 'GET',
    url: `/member/order/consignment/${id}`,
  })
}

/**
 * 确认收货
 * @description 仅在订单状态为待收货时，可确认收货。
 * @param id 订单id
 */
export const putMemberOrderReceiptById = (id: string) => {
  return http<OrderResult>({
    method: 'PUT',
    url: `/member/order/${id}/receipt`,
  })
}

/**
 * 获取订单物流
 * @description 仅在订单状态为待收货，待评价，已完成时，可获取物流信息。
 * @param id 订单id
 */
export const FetchMemberOrderLogisticsById = (id: string) => {
  return http<OrderLogisticResult>({
    method: 'GET',
    url: `/member/order/${id}/logistics`,
  })
}
