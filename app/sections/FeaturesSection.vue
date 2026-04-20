<script setup lang="ts">
defineProps<{
  id?: string
  title: string
  items: Array<{ title: string, description: string }>
}>()
</script>

<template>
  <section
    :id="id"
    class="bg-[color:var(--c-bg)]"
  >
    <Container class="py-14 sm:py-18">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-balance text-2xl font-semibold tracking-tight text-[color:var(--c-text)] sm:text-3xl">
          {{ title }}
        </h2>
      </div>

      <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="(it, idx) in items"
          :key="idx"
          class="rounded-2xl border border-[color:var(--c-border)] bg-[color:var(--c-surface)] p-5 shadow-sm"
        >
          <h3 class="text-sm font-semibold text-[color:var(--c-text)]">
            {{ it.title }}
          </h3>
          <p class="mt-2 text-sm leading-6 text-[color:var(--c-text-muted)]">
            {{ it.description }}
          </p>
        </div>
      </div>
    </Container>
  </section>
</template>
