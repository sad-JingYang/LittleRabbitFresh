import type { BannerItem, CategoryItem, HotItem, GuessItem } from '@/types/home'
import { http } from '@/utils/http'
import Category from '@/pages/category/category.vue'
import type { PageResult } from '@/types/global'

/**
 * 首页-广告区域-小程序
 * @param distributionSite 广告区域展示位置，1为首页，2为商品分类页 默认值为1
 * */

export function FetchHomeBanner(distributionSite = 1) {
  return http<BannerItem[]>({
    method: 'GET',
    url: '/home/banner',
    data: {
      distributionSite,
    },
  })
}

/**
 * 首页-前台分类-小程序
 * */
export function FetchHomeCategory() {
  return http<CategoryItem[]>({
    method: 'GET',
    url: '/home/category/mutli',
  })
}

/**
 * 首页-热门推荐-小程序
 * */
export function FetchHomeHot() {
  return http<HotItem[]>({
    method: 'GET',
    url: '/home/hot/mutli',
  })
}

/**
 * 猜你喜欢-小程序
 * */
export function FetchHomeGoodsGuessLike() {
  return http<PageResult<GuessItem>>({
    method: 'GET',
    url: '/home/goods/guessLike',
  })
}
