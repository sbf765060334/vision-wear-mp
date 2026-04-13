<template>
  <view class="flex flex-col items-center justify-center">
    <image class="w-[200rpx] h-[200rpx] mt-[200rpx] mx-auto mb-[50rpx]" src="/static/logo.png" />
    <view class="flex justify-center">
      <text class="text-[36rpx] text-[#8f8f94]">{{ title }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const title = ref('Hello')
</script>
