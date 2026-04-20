<template>
  <div class="min-h-dvh bg-[color:var(--c-bg)] text-[color:var(--c-text)] antialiased">
    <AppHeader />
    <main
      id="main"
      class="min-h-[60dvh]"
    >
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
