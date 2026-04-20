# 个人主页模板（Nuxt 4 + Tailwind）

把“官网主页”改成“个人主页”的核心，是从展示公司/产品，切换为展示**你这个人**：个人介绍、经历、作品、写作、联系方式、社交账号。一页即可成为你的线上名片 + 作品集。

## 页面结构

当前默认是一个单页（锚点导航）：

- **Hero**：姓名、标题、简介、社交链接、主按钮
- **关于我**：自我介绍 + 亮点信息
- **经历**：工作/学习经历时间线
- **项目**：作品集卡片（预览/源码/标签/亮点）
- **写作**：文章列表（可先放占位链接）
- **联系**：邮箱/社交链接

## 快速开始

安装依赖：

```bash
npm install
```

本地开发：

```bash
npm run dev
```

构建与预览：

```bash
npm run build
npm run preview
```

## 如何改成你的个人主页（最重要）

你只需要改一处数据文件：

- **内容数据**：`app/data/homepage.mock.ts`
  - 修改 `name/headline/summary`
  - 替换 `socials`（GitHub、博客、LinkedIn 等）
  - 填充 `experience/projects/writing/contact` 的内容

同时建议改两处 SEO：

- **SEO 标题与描述**：`app/pages/index.vue`
- **结构化数据 JSON-LD（Person）**：`app/pages/index.vue`
  - `name/url/jobTitle/email/sameAs` 换成你的真实信息

## 组件与区块（sections）

区块由 `BlocRenderer` 按 `type` 渲染：

- `app/components/bloc/BlocRenderer.vue`
- `app/types/bloc.ts`
- `app/sections/*Section.vue`

如果你想新增区块（例如“技能栈/开源/演讲”）：

1. 在 `app/types/bloc.ts` 增加一个 bloc 类型
2. 新增一个 `app/sections/XXXSection.vue`
3. 在 `BlocRenderer.vue` 里注册映射
4. 在 `app/data/homepage.mock.ts` 里插入该 bloc

## 导航与布局

- **导航锚点**：`app/components/AppHeader.vue`
- **页脚信息**：`app/components/AppFooter.vue`
- **布局**：`app/layouts/default.vue`

## 部署

这是标准 Nuxt 应用，可部署到任意支持 Node 的平台。更多请参考 Nuxt 官方部署文档：
`https://nuxt.com/docs/getting-started/deployment`
