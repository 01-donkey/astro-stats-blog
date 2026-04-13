// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
  // 1. 這裡保留您原本 Tailwind v4 的 Vite 設定
  vite: {
    plugins: [tailwindcss()]
  },

  // 2. 這裡放入 MDX 以及數學引擎的外掛
  integrations: [
    mdx({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    })
  ]
});