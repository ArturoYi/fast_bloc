<script setup lang="ts">
import { homepageBlocs } from '~/data/homepage.mock'

const personName = '你的名字'
const title = `${personName}｜个人主页 / 作品集`
const description = '个人主页模板：关于我、经历、作品集、写作、联系方式与社交账号，一页展示你的线上名片。'
const keywords = 'Nuxt,Vue,个人主页,作品集,简历,博客,Tailwind'

useSeoMeta({
  title,
  description,
  keywords,
  ogTitle: title,
  ogDescription: description,
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        'name': personName,
        'url': 'https://example.com',
        'jobTitle': '你的职位 / 方向',
        'email': 'mailto:you@example.com',
        'sameAs': ['https://github.com/yourname', 'https://www.linkedin.com/in/yourname/'],
      }),
    },
  ],
})
</script>

<template>
  <div>
    <BlocRenderer :blocs="homepageBlocs" />
  </div>
</template>
