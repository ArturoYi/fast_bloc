<script setup lang="ts">
defineProps<{
  name: string
  headline: string
  summary: string
  location?: string
  availability?: string
  avatar?: { src: string, alt: string }
  primaryCta: { label: string, href: string }
  secondaryCta?: { label: string, href: string }
  socials?: Array<{ label: string, href: string }>
}>()
</script>

<template>
  <section class="relative overflow-hidden border-b border-[color:var(--c-border)] bg-[color:var(--c-bg)]">
    <Container class="py-16 sm:py-20">
      <div class="grid items-center gap-10 lg:grid-cols-12">
        <div class="lg:col-span-7">
          <h1 class="text-balance text-4xl font-semibold tracking-tight text-[color:var(--c-text)] sm:text-5xl">
            {{ name }}
          </h1>
          <p class="mt-3 text-pretty text-lg font-medium leading-7 text-[color:var(--c-text)] sm:text-xl">
            {{ headline }}
          </p>
          <p class="mt-5 text-pretty text-sm leading-7 text-[color:var(--c-text-muted)] sm:text-base">
            {{ summary }}
          </p>

          <div class="mt-6 flex flex-wrap items-center gap-2 text-xs text-[color:var(--c-text-muted)]">
            <span
              v-if="location"
              class="inline-flex items-center rounded-full border border-[color:var(--c-border)] bg-[color:var(--c-surface)] px-3 py-1"
            >
              {{ location }}
            </span>
            <span
              v-if="availability"
              class="inline-flex items-center rounded-full border border-[color:var(--c-border)] bg-[color:var(--c-surface)] px-3 py-1"
            >
              {{ availability }}
            </span>
          </div>

          <div class="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <a
              :href="primaryCta.href"
              class="inline-flex h-11 items-center justify-center rounded-xl bg-[color:var(--c-accent)] px-6 text-sm font-medium text-[color:var(--c-accent-contrast)] hover:opacity-90"
            >
              {{ primaryCta.label }}
            </a>
            <a
              v-if="secondaryCta"
              :href="secondaryCta.href"
              class="inline-flex h-11 items-center justify-center rounded-xl border border-[color:var(--c-border)] bg-[color:var(--c-surface)] px-6 text-sm font-medium text-[color:var(--c-text)] hover:bg-[color:var(--c-surface-muted)]"
            >
              {{ secondaryCta.label }}
            </a>
          </div>

          <div
            v-if="socials?.length"
            class="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[color:var(--c-text-muted)]"
          >
            <a
              v-for="(s, idx) in socials"
              :key="idx"
              :href="s.href"
              class="hover:text-[color:var(--c-text)]"
            >
              {{ s.label }}
            </a>
          </div>
        </div>

        <div class="lg:col-span-5">
          <div class="mx-auto max-w-sm">
            <div
              class="relative overflow-hidden rounded-3xl border border-[color:var(--c-border)] bg-[color:var(--c-surface-muted)] p-6"
            >
              <div class="flex items-center gap-4">
                <div
                  class="size-14 overflow-hidden rounded-2xl border border-[color:var(--c-border)] bg-[color:var(--c-surface)]"
                >
                  <img
                    v-if="avatar?.src"
                    :src="avatar.src"
                    :alt="avatar.alt"
                    class="h-full w-full object-cover"
                    loading="lazy"
                  >
                  <div
                    v-else
                    class="grid h-full w-full place-items-center text-sm font-semibold text-[color:var(--c-text-muted)]"
                  >
                    {{ name.slice(0, 1) }}
                  </div>
                </div>
                <div>
                  <div class="text-sm font-semibold text-[color:var(--c-text)]">
                    {{ name }}
                  </div>
                  <div class="text-xs text-[color:var(--c-text-muted)]">
                    {{ headline }}
                  </div>
                </div>
              </div>

              <div class="mt-6 grid gap-3">
                <div class="rounded-2xl border border-[color:var(--c-border)] bg-[color:var(--c-surface)] p-4">
                  <div class="text-xs font-medium text-[color:var(--c-text-subtle)]">
                    擅长
                  </div>
                  <div class="mt-1 text-sm font-semibold text-[color:var(--c-text)]">
                    产品化落地 · 体验打磨 · 工程化
                  </div>
                </div>
                <div class="rounded-2xl border border-[color:var(--c-border)] bg-[color:var(--c-surface)] p-4">
                  <div class="text-xs font-medium text-[color:var(--c-text-subtle)]">
                    当前关注
                  </div>
                  <div class="mt-1 text-sm font-semibold text-[color:var(--c-text)]">
                    性能、可维护性、设计系统
                  </div>
                </div>
              </div>

              <div
                aria-hidden="true"
                class="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-[color:var(--c-accent)]/10 blur-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>
