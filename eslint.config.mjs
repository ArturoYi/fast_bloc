import { createConfigForNuxt } from '@nuxt/eslint-config'

export default createConfigForNuxt({
  features: {
    stylistic: true,
    // 未在 package.json 中安装 `typescript` 时，需显式开启，否则 .vue 内 <script lang="ts"> 会按 JS 解析。
    typescript: true,
  },
})
