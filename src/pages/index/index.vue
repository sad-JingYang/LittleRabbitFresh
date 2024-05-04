<script setup lang="ts">
import CustomNavbar from './components/CustomNavbar.vue'
import { onLoad } from '@dcloudio/uni-app'
import { FetchHomeBanner, FetchHomeCategory, FetchHomeHot } from '@/services/home'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import { ref } from 'vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import type { XtxGuessInstance } from '@/types/component'

const bannerList = ref<BannerItem[]>([])
const categoryList = ref<CategoryItem[]>([])
const hotList = ref<HotItem[]>([])
const guessRef = ref<XtxGuessInstance>() // 获取猜你喜欢组件实例
const isTriggered = ref(false)

// 获取轮播图数据
const BannerList = async () => {
  const res = await FetchHomeBanner()
  bannerList.value = res.result
}

// 获取前台分类数据
const getHomeCategoryData = async () => {
  const res = await FetchHomeCategory()
  categoryList.value = res.result
}

// 获取热门推荐数据
const GetHomeHot = async () => {
  const res = await FetchHomeHot()
  hotList.value = res.result
}

// 滚动触底
const onScrolltolower = () => {
  guessRef.value?.getMore()
}

// 自定义下拉刷新
const onRefresherrefresh = async () => {
  // 开启动画
  isTriggered.value = true
  // 加载数据
  await Promise.all([BannerList(), getHomeCategoryData(), GetHomeHot()])
  // 关闭动画
  isTriggered.value = false
}

onLoad(() => {
  BannerList()
  getHomeCategoryData()
  GetHomeHot()
})
</script>

<template>
  <!-- 自定义导航栏 -->
  <CustomNavbar />
  <!-- 滚动容器 -->
  <scroll-view
    :refresher-enabled="true"
    @refresherrefresh="onRefresherrefresh"
    :refresher-triggered="isTriggered"
    @scrolltolower="onScrolltolower"
    class="scroll-view"
    :scroll-y="true"
  >
    <!-- 自定义轮播图 -->
    <XtxSwiper :list="bannerList" />
    <!-- 分类面板 -->
    <CategoryPanel :list="categoryList" />
    <!-- 热门推荐 -->
    <HotPanel :list="hotList" />
    <!-- 猜你喜欢 -->
    <XtxGuess ref="guessRef" />
  </scroll-view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.scroll-view {
  flex: 1;
}
</style>
