<template>
  <footer class="border-t border-c-border bg-c-bg">
    <Container class="py-10">
      <div class="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div class="flex items-center gap-2">
          <span
            class="grid size-8 place-items-center rounded-lg bg-c-accent text-sm font-bold text-c-accent-contrast"
            aria-hidden="true"
          >
            我
          </span>
          <div class="text-sm text-c-text-muted">
            <div class="font-medium text-c-text">
              个人主页 / 作品集
            </div>
            <div>一页展示：关于 · 经历 · 项目 · 写作 · 联系方式</div>
          </div>
        </div>

        <div class="flex flex-wrap gap-x-6 gap-y-2 text-sm text-c-text-muted">
          <a
            href="/"
            class="hover:text-c-text"
          >主页</a>
          <a
            href="#projects"
            class="hover:text-c-text"
          >项目</a>
          <a
            href="#writing"
            class="hover:text-c-text"
          >写作</a>
          <a
            href="#contact"
            class="hover:text-c-text"
          >联系</a>
        </div>
      </div>

      <div class="mt-8 text-xs text-c-text-subtle">
        © {{ new Date().getFullYear() }} Your Name. Built with Nuxt + Tailwind.
      </div>
    </Container>
  </footer>
</template>
