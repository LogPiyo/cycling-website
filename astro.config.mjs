// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import rehypeShiki from '@shikijs/rehype';
import rehypeMermaid from 'rehype-mermaid';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com', // Replace with your site URL
  integrations: [
    tailwind(),
    sitemap(),
  ],
  markdown: {
    syntaxHighlight: {
      type: 'shiki',
      excludeLangs: ['mermaid', `js`, `math`]
    },
    rehypePlugins: [
      [
        rehypeMermaid,
        {
          theme: 'default',
        }
      ],
      [
        rehypeShiki,
        {
          inline: 'tailing-curly-colon',
          theme: 'github-dark-default',
        }
      ],
    ]
  }
});