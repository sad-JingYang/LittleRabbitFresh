<script setup lang="ts">
import CustomNavbar from './components/CustomNavbar.vue'
import { onLoad } from '@dcloudio/uni-app'
import { FetchHomeBanner } from '@/services/home'
import { ref } from 'vue'

const bannerList = ref([])

const GetHomeData = async () => {
  const res = await FetchHomeBanner()
  bannerList.value = res.result
}

onLoad(() => {
  GetHomeData()
})
</script>

<template>
  <!-- 自定义导航栏 -->
  <CustomNavbar />
  <!-- 自定义轮播图 -->
  <XtxSwiper />
  <view class="index">index</view>
</template>

<style lang="scss">
//
</style>
