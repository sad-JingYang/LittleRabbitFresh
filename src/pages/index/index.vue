<script setup lang="ts">
import CustomNavbar from './components/CustomNavbar.vue'
import { onLoad } from '@dcloudio/uni-app'
import { FetchHomeBanner, FetchHomeCategory, FetchHomeHot } from '@/services/home'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import { ref } from 'vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'

const bannerList = ref<BannerItem[]>([])
const categoryList = ref<CategoryItem[]>([])
const hotList = ref<HotItem[]>([])

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

onLoad(() => {
  BannerList()
  getHomeCategoryData()
  GetHomeHot()
})
</script>

<template>
  <!-- 自定义导航栏 -->
  <CustomNavbar />
  <!-- 自定义轮播图 -->
  <XtxSwiper :list="bannerList" />
  <!-- 分类面板 -->
  <CategoryPanel :list="categoryList" />
  <!-- 热门推荐 -->
  <HotPanel :list="hotList" />
  <view class="index">index</view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
}
</style>
