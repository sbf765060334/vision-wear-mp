import { defineConfig } from 'unocss'
import { presetApplet, presetRemRpx } from 'unocss-applet'

export default defineConfig({
  presets: [
    presetApplet(), // 小程序适配，处理特殊字符
    presetRemRpx() // rem 转 rpx
  ]
})
