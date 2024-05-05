import { http } from '@/utils/http'
import type { LoginResult } from '@/types/member'

type LoginParams = {
  code: string
  encryptedData: string
  iv: string
}

/*
 * 小程序登录
 * @param data 请求参数
 * */
export function postLoginWxMin(data: LoginParams) {
  return http<LoginResult>({
    method: 'POST',
    url: '/login/wxMin',
    data,
  })
}

/*
 * 小程序登录-内测版
 * @param phoneNumber 模拟手机号码
 * */
export function postLoginWxMinsimple(phoneNumber: string) {
  return http<LoginResult>({
    method: 'POST',
    url: '/login/wxMin/simple',
    data: {
      phoneNumber,
    },
  })
}
