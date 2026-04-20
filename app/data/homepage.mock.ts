import type { Bloc } from '~/types/bloc'

export const homepageBlocs: Bloc[] = [
  {
    type: 'hero',
    props: {
      name: '你的名字',
      headline: '前端工程师 / 全栈 / 设计工程师（按需修改）',
      summary:
        '我关注用户体验与工程质量，擅长把复杂需求拆解成可落地的产品与代码。这里是我的线上名片：经历、项目、写作与联系方式都在这。',
      location: '中国·城市（可选）',
      availability: '可接私单 / 正在看机会（可选）',
      primaryCta: { label: '看项目', href: '#projects' },
      secondaryCta: { label: '联系我', href: '#contact' },
      socials: [
        { label: 'GitHub', href: 'https://github.com/yourname' },
        { label: '掘金 / 博客', href: 'https://example.com' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/yourname/' },
      ],
    },
  },
  {
    type: 'about',
    props: {
      id: 'about',
      title: '关于我',
      paragraphs: [
        '我热衷于构建干净、可维护、可扩展的前端应用，并与设计/产品/后端紧密协作把想法快速落地。',
        '我喜欢在真实业务里做性能优化、交互打磨与工程化建设（组件库、规范、CI、监控等）。',
      ],
      highlights: [
        { label: '方向', value: 'Web / 移动端 / 工程化' },
        { label: '技能栈', value: 'Nuxt/Vue、TypeScript、Tailwind、Node' },
        { label: '偏好', value: '可读性、可观测性、稳定交付' },
      ],
    },
  },
  {
    type: 'experience',
    props: {
      id: 'experience',
      title: '经历',
      items: [
        {
          title: '高级前端工程师',
          org: '某科技公司',
          start: '2023',
          end: '至今',
          location: '上海（示例）',
          summary:
            '负责核心业务增长与性能优化，推进组件化与工程规范建设；与多团队协作交付关键项目。',
          tags: ['Nuxt', 'TypeScript', '性能优化', '工程化'],
          links: [{ label: '项目复盘（可选）', href: '#' }],
        },
        {
          title: '前端工程师',
          org: '某创业团队',
          start: '2021',
          end: '2023',
          summary: '从 0 到 1 搭建多端应用，沉淀可复用组件与工具链，提升迭代效率与质量。',
          tags: ['Vue', '组件库', 'CI/CD'],
        },
      ],
    },
  },
  {
    type: 'projects',
    props: {
      id: 'projects',
      title: '作品集 / 项目',
      items: [
        {
          name: '项目 A（示例）',
          description: '一个解决 XX 问题的产品/组件/工具，强调你做了什么与产生的结果。',
          href: 'https://example.com',
          repo: 'https://github.com/yourname/project-a',
          tags: ['Nuxt', 'SSR', 'SEO'],
          highlights: ['首屏耗时下降 30%', '沉淀通用模块 5+'],
        },
        {
          name: '项目 B（示例）',
          description: '另一个更偏工程/性能/体验的代表作，突出方法与取舍。',
          repo: 'https://github.com/yourname/project-b',
          tags: ['TypeScript', 'Tailwind'],
        },
      ],
    },
  },
  {
    type: 'writing',
    props: {
      id: 'writing',
      title: '写作 / 博客',
      items: [
        {
          title: '如何做一个更像“个人主页”的首页',
          description: '把官网的“业务入口”换成个人的“线上名片”。',
          date: '2026-04',
          tag: '思考',
          href: '#',
        },
        {
          title: 'Nuxt SSR 的 SEO 实战清单',
          date: '2026-03',
          tag: '技术',
          href: '#',
        },
      ],
    },
  },
  {
    type: 'contact',
    props: {
      id: 'contact',
      title: '联系方式',
      description: '欢迎交流合作、工作机会或技术讨论。你也可以通过社交平台找到我。',
      email: 'you@example.com',
      primaryCta: { label: '发邮件', href: 'mailto:you@example.com' },
      socials: [
        { label: 'GitHub', href: 'https://github.com/yourname' },
        { label: 'X / Twitter', href: 'https://x.com/yourname' },
        { label: '微信公众号/即刻（可选）', href: '#' },
      ],
    },
  },
]
