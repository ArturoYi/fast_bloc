<template>
  <header
    class="sticky top-0 z-40 border-b border-[color:var(--c-border)] bg-[color:var(--c-bg)]/90 backdrop-blur"
  >
    <Container class="flex h-16 items-center justify-between">
      <a
        href="/"
        class="flex items-center gap-2 font-semibold tracking-tight"
      >
        <span
          class="grid size-8 place-items-center rounded-lg bg-[color:var(--c-accent)] text-sm font-bold text-[color:var(--c-accent-contrast)]"
          aria-hidden="true"
        >
          我
        </span>
        <span>个人主页</span>
      </a>

      <nav
        aria-label="主导航"
        class="hidden items-center gap-6 md:flex"
      >
        <a
          href="#about"
          class="text-sm text-[color:var(--c-text-muted)] hover:text-[color:var(--c-text)]"
        >关于</a>
        <a
          href="#experience"
          class="text-sm text-[color:var(--c-text-muted)] hover:text-[color:var(--c-text)]"
        >经历</a>
        <a
          href="#projects"
          class="text-sm text-[color:var(--c-text-muted)] hover:text-[color:var(--c-text)]"
        >项目</a>
        <a
          href="#writing"
          class="text-sm text-[color:var(--c-text-muted)] hover:text-[color:var(--c-text)]"
        >写作</a>
        <a
          href="#contact"
          class="text-sm text-[color:var(--c-text-muted)] hover:text-[color:var(--c-text)]"
        >联系</a>
      </nav>

      <div class="flex items-center gap-2">
        <ColorModeToggle />
        <a
          href="#contact"
          class="inline-flex h-9 items-center rounded-lg bg-[color:var(--c-accent)] px-4 text-sm font-medium text-[color:var(--c-accent-contrast)] hover:opacity-90"
        >
          联系我
        </a>
      </div>
    </Container>
  </header>
</template>
