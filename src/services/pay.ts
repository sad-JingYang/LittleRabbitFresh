import { http } from '@/utils/http'
import type { OrderResult } from '@/types/order'

/**
 * 获取微信支付参数
 * @param data orderId 订单id
 */
export const FetchPayWxPayMiniPay = (data: { orderId: string }) => {
  return http<WechatMiniprogram.RequestPaymentOption>({
    method: 'GET',
    url: '/pay/wxPay/miniPay',
    data,
  })
}

/**
 * 模拟支付-内测版
 * @param data orderId 订单id
 */
export const FetchPayMock = (data: { orderId: string }) => {
  return http({
    method: 'GET',
    url: '/pay/mock',
    data,
  })
}
