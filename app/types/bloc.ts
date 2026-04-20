export type BlocType = 'hero' | 'about' | 'experience' | 'projects' | 'writing' | 'contact'

export type BlocHero = {
  type: 'hero'
  props: {
    name: string
    headline: string
    summary: string
    location?: string
    availability?: string
    avatar?: { src: string, alt: string }
    primaryCta: { label: string, href: string }
    secondaryCta?: { label: string, href: string }
    socials?: Array<{ label: string, href: string }>
  }
}

export type BlocAbout = {
  type: 'about'
  props: {
    id?: string
    title: string
    paragraphs: string[]
    highlights?: Array<{ label: string, value: string }>
  }
}

export type BlocExperience = {
  type: 'experience'
  props: {
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
  }
}

export type BlocProjects = {
  type: 'projects'
  props: {
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
  }
}

export type BlocWriting = {
  type: 'writing'
  props: {
    id?: string
    title: string
    items: Array<{
      title: string
      description?: string
      date?: string
      href: string
      tag?: string
    }>
  }
}

export type BlocContact = {
  type: 'contact'
  props: {
    id?: string
    title: string
    description: string
    email?: string
    primaryCta?: { label: string, href: string }
    socials?: Array<{ label: string, href: string }>
  }
}

export type Bloc
  = | BlocHero
    | BlocAbout
    | BlocExperience
    | BlocProjects
    | BlocWriting
    | BlocContact
