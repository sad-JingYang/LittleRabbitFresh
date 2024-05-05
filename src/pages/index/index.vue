<script setup lang="ts">
import CustomNavbar from './components/CustomNavbar.vue'
import { onLoad } from '@dcloudio/uni-app'
import { FetchHomeBanner, FetchHomeCategory, FetchHomeHot } from '@/services/home'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import { ref } from 'vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import PageSkeleton from './components/PageSkeleton.vue'
import { useGuessList } from '@/composables'

const bannerList = ref<BannerItem[]>([])
const categoryList = ref<CategoryItem[]>([])
const hotList = ref<HotItem[]>([])
const isTriggered = ref(false)
const isLoading = ref(false) // 是否加载中标记

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

// 猜你喜欢组合式函数调用
const { guessRef, onScrolltolower } = useGuessList()

// 自定义下拉刷新
const onRefresherrefresh = async () => {
  // 开启动画
  isTriggered.value = true
  // 重置猜你喜欢组件数据
  guessRef.value?.resetData()
  // 加载数据
  await Promise.all([BannerList(), getHomeCategoryData(), GetHomeHot(), guessRef.value?.getMore()])
  // 关闭动画
  isTriggered.value = false
}

// 页面加载
onLoad(async () => {
  isLoading.value = true
  await Promise.all([BannerList(), getHomeCategoryData(), GetHomeHot()])
  isLoading.value = false
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
    <PageSkeleton v-if="isLoading" />
    <template v-else>
      <!-- 自定义轮播图 -->
      <XtxSwiper :list="bannerList" />
      <!-- 分类面板 -->
      <CategoryPanel :list="categoryList" />
      <!-- 热门推荐 -->
      <HotPanel :list="hotList" />
      <!-- 猜你喜欢 -->
      <XtxGuess ref="guessRef" />
    </template>
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
