<script setup lang="ts">
defineProps<{
  id?: string
  title: string
  items: Array<{
    title: string
    description?: string
    date?: string
    href: string
    tag?: string
  }>
}>()
</script>

<template>
  <section
    :id="id"
    class="border-y border-(--c-border) bg-(--c-surface-muted)"
  >
    <Container class="py-14 sm:py-18">
      <div class="flex items-end justify-between gap-6">
        <h2 class="text-balance text-2xl font-semibold tracking-tight text-(--c-text) sm:text-3xl">
          {{ title }}
        </h2>
      </div>

      <div class="mt-10 grid gap-4 md:grid-cols-2">
        <a
          v-for="(w, idx) in items"
          :key="idx"
          :href="w.href"
          class="group block rounded-3xl border border-(--c-border) bg-(--c-surface) p-6 shadow-sm hover:bg-(--c-surface-muted)"
        >
          <div class="flex items-center justify-between gap-4">
            <div class="text-sm font-semibold text-(--c-text) group-hover:underline">
              {{ w.title }}
            </div>
            <span
              v-if="w.tag"
              class="shrink-0 rounded-full border border-(--c-border) bg-(--c-surface) px-3 py-1 text-xs text-(--c-text-muted)"
            >
              {{ w.tag }}
            </span>
          </div>

          <div
            v-if="w.date"
            class="mt-2 text-xs text-(--c-text-subtle)"
          >{{ w.date }}</div>
          <p
            v-if="w.description"
            class="mt-3 text-sm leading-7 text-(--c-text-muted)"
          >
            {{ w.description }}
          </p>
        </a>
      </div>
    </Container>
  </section>
</template>
