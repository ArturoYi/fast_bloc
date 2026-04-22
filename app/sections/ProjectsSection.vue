<script setup lang="ts">
defineProps<{
  id?: string
  title: string
  items: Array<{
    name: string
    description: string
    href?: string
    repo?: string
    tags?: string[]
    highlights?: string[]
  }>
}>()
</script>

<template>
  <section
    :id="id"
    class="bg-(--c-bg)"
  >
    <Container class="py-14 sm:py-18">
      <div class="flex items-end justify-between gap-6">
        <h2 class="text-balance text-2xl font-semibold tracking-tight text-(--c-text) sm:text-3xl">
          {{ title }}
        </h2>
      </div>

      <div class="mt-10 grid gap-4 md:grid-cols-2">
        <article
          v-for="(p, idx) in items"
          :key="idx"
          class="group rounded-3xl border border-(--c-border) bg-(--c-surface) p-6 shadow-sm"
        >
          <div class="flex items-start justify-between gap-4">
            <h3 class="text-sm font-semibold text-(--c-text)">
              <a
                v-if="p.href"
                :href="p.href"
                class="hover:underline"
              >
                {{ p.name }}
              </a>
              <span v-else>{{ p.name }}</span>
            </h3>
          </div>

          <p class="mt-3 text-sm leading-7 text-(--c-text-muted)">
            {{ p.description }}
          </p>

          <ul
            v-if="p.highlights?.length"
            class="mt-4 list-disc space-y-1 pl-5 text-sm text-(--c-text-muted)"
          >
            <li
              v-for="(h, hIdx) in p.highlights"
              :key="hIdx"
            >
              {{ h }}
            </li>
          </ul>

          <div
            v-if="p.tags?.length"
            class="mt-4 flex flex-wrap gap-2"
          >
            <span
              v-for="(t, tIdx) in p.tags"
              :key="tIdx"
              class="inline-flex items-center rounded-full border border-(--c-border) bg-(--c-surface-muted) px-3 py-1 text-xs text-(--c-text-muted)"
            >
              {{ t }}
            </span>
          </div>

          <div class="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-(--c-text-muted)">
            <a
              v-if="p.href"
              :href="p.href"
              class="hover:text-(--c-text)"
            >在线预览</a>
            <a
              v-if="p.repo"
              :href="p.repo"
              class="hover:text-(--c-text)"
            >源码</a>
          </div>
        </article>
      </div>
    </Container>
  </section>
</template>
