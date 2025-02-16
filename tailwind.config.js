import { fontFamily as _fontFamily } from 'tailwindcss/defaultTheme'

export const content = ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}']

export const theme = {
  extend: {
    colors: {
      primary: {
        100: '#E6F0FF',
        500: '#ECE8E4',
        600: '#D8C6BE',
      },
    },
    fontFamily: {
      sans: ['Inter', ..._fontFamily.sans],
      serif: ['Merriweather', ..._fontFamily.serif],
    },
  },
}

export const plugins = [
  require('@tailwindcss/aspect-ratio'),
]
