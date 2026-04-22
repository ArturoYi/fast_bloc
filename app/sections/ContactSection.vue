<script setup lang="ts">
defineProps<{
  id?: string
  title: string
  description: string
  email?: string
  primaryCta?: { label: string, href: string }
  socials?: Array<{ label: string, href: string }>
}>()
</script>

<template>
  <section
    :id="id"
    class="bg-c-bg"
  >
    <Container class="py-14 sm:py-18">
      <div
        class="relative overflow-hidden rounded-3xl border border-c-border bg-c-accent px-6 py-10 text-c-accent-contrast sm:px-10"
      >
        <div class="max-w-2xl">
          <h2 class="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
            {{ title }}
          </h2>
          <p class="mt-3 text-pretty text-sm leading-6 text-c-accent-contrast/80 sm:text-base">
            {{ description }}
          </p>
        </div>

        <div class="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            v-if="primaryCta"
            :href="primaryCta.href"
            class="inline-flex h-11 items-center justify-center rounded-xl bg-c-bg px-6 text-sm font-medium text-c-text hover:bg-c-surface-muted"
          >
            {{ primaryCta.label }}
          </a>
          <div
            v-else-if="email"
            class="text-sm text-c-accent-contrast/90"
          >
            <span class="text-c-accent-contrast/70">Email：</span>
            <a
              :href="`mailto:${email}`"
              class="font-medium hover:underline"
            >{{ email }}</a>
          </div>
        </div>

        <div
          v-if="socials?.length"
          class="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-c-accent-contrast/80"
        >
          <a
            v-for="(s, idx) in socials"
            :key="idx"
            :href="s.href"
            class="hover:text-c-accent-contrast"
          >
            {{ s.label }}
          </a>
        </div>

        <div
          aria-hidden="true"
          class="pointer-events-none absolute -right-20 -top-24 size-72 rounded-full bg-c-accent-contrast/10 blur-3xl"
        />
      </div>
    </Container>
  </section>
</template>
