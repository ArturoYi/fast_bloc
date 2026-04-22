<script setup lang="ts">
defineProps<{
  id?: string
  title: string
  items: Array<{ q: string, a: string }>
}>()
</script>

<template>
  <section
    :id="id"
    class="bg-c-bg"
  >
    <Container class="py-14 sm:py-18">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-balance text-2xl font-semibold tracking-tight text-c-text sm:text-3xl">
          {{ title }}
        </h2>
      </div>

      <div
        class="mx-auto mt-10 max-w-3xl divide-y divide-c-border rounded-2xl border border-c-border bg-c-surface"
      >
        <details
          v-for="(it, idx) in items"
          :key="idx"
          class="group p-5"
        >
          <summary class="flex cursor-pointer list-none items-center justify-between gap-6">
            <h3 class="text-sm font-semibold text-c-text">
              {{ it.q }}
            </h3>
            <span
              class="text-c-text-subtle group-open:rotate-45"
              aria-hidden="true"
            >+</span>
          </summary>
          <p class="mt-3 text-sm leading-6 text-c-text-muted">
            {{ it.a }}
          </p>
        </details>
      </div>
    </Container>
  </section>
</template>
