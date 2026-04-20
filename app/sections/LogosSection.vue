<script setup lang="ts">
defineProps<{
  id?: string
  title: string
  logos: Array<{ name: string, src?: string, alt: string }>
}>()
</script>

<template>
  <section
    :id="id"
    class="border-y border-[color:var(--c-border)] bg-[color:var(--c-surface-muted)]"
  >
    <Container class="py-14 sm:py-18">
      <div class="flex items-end justify-between gap-6">
        <h2 class="text-xl font-semibold tracking-tight text-[color:var(--c-text)] sm:text-2xl">
          {{ title }}
        </h2>
        <p class="text-sm text-[color:var(--c-text-muted)]">
          图片/Logo 后续可由 bloc 后端下发
        </p>
      </div>

      <div class="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <div
          v-for="(l, idx) in logos"
          :key="idx"
          class="flex h-20 items-center justify-center rounded-2xl border border-[color:var(--c-border)] bg-[color:var(--c-surface)] px-4"
        >
          <img
            v-if="l.src"
            :src="l.src"
            :alt="l.alt"
            loading="lazy"
            class="max-h-10 w-auto object-contain"
          >
          <span
            v-else
            class="text-sm font-medium text-[color:var(--c-text-muted)]"
          >{{ l.name }}</span>
        </div>
      </div>
    </Container>
  </section>
</template>
