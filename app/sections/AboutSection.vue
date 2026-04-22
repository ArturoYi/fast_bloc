<script setup lang="ts">
defineProps<{
  id?: string
  title: string
  paragraphs: string[]
  highlights?: Array<{ label: string, value: string }>
}>()
</script>

<template>
  <section
    :id="id"
    class="bg-c-bg"
  >
    <Container class="py-14 sm:py-18">
      <div class="grid gap-10 lg:grid-cols-12 lg:items-start">
        <div class="lg:col-span-5">
          <h2 class="text-balance text-2xl font-semibold tracking-tight text-c-text sm:text-3xl">
            {{ title }}
          </h2>
        </div>

        <div class="lg:col-span-7">
          <div class="space-y-4 text-sm leading-7 text-c-text-muted sm:text-base">
            <p
              v-for="(p, idx) in paragraphs"
              :key="idx"
            >
              {{ p }}
            </p>
          </div>

          <dl
            v-if="highlights?.length"
            class="mt-8 grid gap-3 sm:grid-cols-3"
          >
            <div
              v-for="(h, idx) in highlights"
              :key="idx"
              class="rounded-2xl border border-c-border bg-c-surface-muted p-4"
            >
              <dt class="text-xs font-medium text-c-text-subtle">
                {{ h.label }}
              </dt>
              <dd class="mt-1 text-sm font-semibold text-c-text">
                {{ h.value }}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </Container>
  </section>
</template>
