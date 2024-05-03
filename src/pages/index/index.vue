<script setup lang="ts">
import CustomNavbar from './components/CustomNavbar.vue'
import { onLoad } from '@dcloudio/uni-app'
import { FetchHomeBanner, FetchHomeCategory } from '@/services/home'
import type { BannerItem } from '@/types/home'
import { ref } from 'vue'
import CategoryPanel from './components/CategoryPanel.vue'

const bannerList = ref<BannerItem[]>([])

// 获取轮播图数据
const BannerList = async () => {
  const res = await FetchHomeBanner()
  bannerList.value = res.result
}

// 获取前台分类数据
const getHomeCategoryData = async () => {
  const res = await FetchHomeCategory()
  console.log(res)
}

onLoad(() => {
  BannerList()
  getHomeCategoryData()
})
</script>

<template>
  <!-- 自定义导航栏 -->
  <CustomNavbar />
  <!-- 自定义轮播图 -->
  <XtxSwiper :list="bannerList" />
  <!-- 分类面板 -->
  <CategoryPanel />
  <view class="index">index</view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
}
</style>
