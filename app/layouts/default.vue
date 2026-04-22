<template>
  <div class="min-h-dvh bg-(--c-bg) text-(--c-text) antialiased">
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
