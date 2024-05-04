import { http } from '@/utils/http'
import type { PageParams } from '@/types/global'
import type { HotResult } from '@/types/hot'

type HotParams = PageParams & { subType?: string }
/**
 * 通用热门推荐类型
 * @param url 请求地址
 * @param data 请求参数
 */
export function FetchHotRecommend(url: string, data?: HotParams) {
  return http<HotResult>({ url, method: 'GET', data })
}
