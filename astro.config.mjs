import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  site: 'https://fasulkey.com',
  integrations: [mdx(), tailwind()],
  prefetch: true,
  build: {
    inlineStylesheets: 'always',
  },
})
