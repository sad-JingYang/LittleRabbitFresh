import { http } from '@/utils/http'

/**
 * 首页-广告区域-小程序
 * @param distributionSite 广告区域展示位置，1为首页，2为商品分类页 默认值为1
 * */

export function FetchHomeBanner(distributionSite = 1) {
  return http({
    method: 'GET',
    url: '/home/banner',
    data: {
      distributionSite,
    },
  })
}
