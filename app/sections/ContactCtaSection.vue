<script setup lang="ts">
defineProps<{
  id?: string
  title: string
  description: string
  cta: { label: string, href: string }
}>()
</script>

<template>
  <section
    :id="id"
    class="bg-(--c-bg)"
  >
    <Container class="py-14 sm:py-18">
      <div
        class="relative overflow-hidden rounded-3xl border border-(--c-border) bg-(--c-accent) px-6 py-10 text-(--c-accent-contrast) sm:px-10"
      >
        <div class="max-w-2xl">
          <h2 class="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
            {{ title }}
          </h2>
          <p class="mt-3 text-pretty text-sm leading-6 text-(--c-accent-contrast)/80 sm:text-base">
            {{ description }}
          </p>
        </div>

        <div class="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            :href="cta.href"
            class="inline-flex h-11 items-center justify-center rounded-xl bg-(--c-bg) px-6 text-sm font-medium text-(--c-text) hover:bg-(--c-surface-muted)"
          >
            {{ cta.label }}
          </a>
          <p class="text-xs text-(--c-accent-contrast)/70">
            表单与后端对接稍后再做；这里先保留结构与锚点。
          </p>
        </div>

        <div
          aria-hidden="true"
          class="pointer-events-none absolute -right-20 -top-24 size-72 rounded-full bg-(--c-accent-contrast)/10 blur-3xl"
        />
      </div>
    </Container>
  </section>
</template>
