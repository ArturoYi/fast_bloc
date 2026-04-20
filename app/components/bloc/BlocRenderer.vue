<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import type { Component } from 'vue'
import type { Bloc } from '~/types/bloc'

defineProps<{
  blocs: Bloc[]
}>()

const componentByType = {
  hero: defineAsyncComponent(() => import('~/sections/HeroSection.vue')),
  about: defineAsyncComponent(() => import('~/sections/AboutSection.vue')),
  experience: defineAsyncComponent(() => import('~/sections/ExperienceSection.vue')),
  projects: defineAsyncComponent(() => import('~/sections/ProjectsSection.vue')),
  writing: defineAsyncComponent(() => import('~/sections/WritingSection.vue')),
  contact: defineAsyncComponent(() => import('~/sections/ContactSection.vue')),
} satisfies Record<Bloc['type'], Component>
</script>

<template>
  <div>
    <component
      :is="componentByType[bloc.type]"
      v-for="(bloc, idx) in blocs"
      :key="`${bloc.type}-${idx}`"
      v-bind="bloc.props"
    />
  </div>
</template>
