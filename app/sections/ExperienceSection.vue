<script setup lang="ts">
defineProps<{
  id?: string
  title: string
  items: Array<{
    title: string
    org?: string
    start: string
    end?: string
    location?: string
    summary: string
    tags?: string[]
    links?: Array<{ label: string, href: string }>
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

      <ol class="mt-10 grid gap-4">
        <li
          v-for="(it, idx) in items"
          :key="idx"
          class="rounded-3xl border border-(--c-border) bg-(--c-surface) p-6 shadow-sm"
        >
          <div class="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div class="text-sm font-semibold text-(--c-text)">
                {{ it.title }}
                <span
                  v-if="it.org"
                  class="text-(--c-text-muted)"
                > · {{ it.org }}</span>
              </div>
              <div class="mt-1 text-xs text-(--c-text-subtle)">
                <span>{{ it.start }}</span>
                <span v-if="it.end"> — {{ it.end }}</span>
                <span v-if="it.location"> · {{ it.location }}</span>
              </div>
            </div>
          </div>

          <p class="mt-4 text-sm leading-7 text-(--c-text-muted)">
            {{ it.summary }}
          </p>

          <div
            v-if="it.tags?.length"
            class="mt-4 flex flex-wrap gap-2"
          >
            <span
              v-for="(t, tIdx) in it.tags"
              :key="tIdx"
              class="inline-flex items-center rounded-full border border-(--c-border) bg-(--c-surface) px-3 py-1 text-xs text-(--c-text-muted)"
            >
              {{ t }}
            </span>
          </div>

          <div
            v-if="it.links?.length"
            class="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-(--c-text-muted)"
          >
            <a
              v-for="(l, lIdx) in it.links"
              :key="lIdx"
              :href="l.href"
              class="hover:text-(--c-text)"
            >
              {{ l.label }}
            </a>
          </div>
        </li>
      </ol>
    </Container>
  </section>
</template>
