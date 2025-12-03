import { defineCollection, z } from 'astro:content';

const routesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(), // Auto-generated if not provided
    date: z.date(),
    category: z.string().optional(),
    image: z.string().startsWith('/uploads/routes/').optional(), // Thumbnail
    summary: z.string().optional(),
    prefecture: z.string().optional(),
    prefectures: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
  }),
});

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    pubDate: z.date(),
    description: z.string(), // Short description for previews
    image: z.object({
      url: z.string().startsWith('/uploads/blog/'),
      alt: z.string()
    }).optional(),
    tags: z.array(z.string()).default(["general"]),
    draft: z.boolean().default(false),
  }),
});

const siteInfoCollection = defineCollection({
  type: 'content', // Could be 'data' if only frontmatter is needed
  schema: z.object({
    title: z.string(), // For identifying the content block
  }),
});

export const collections = {
  routes: routesCollection,
  blog: blogCollection,
  siteInfo: siteInfoCollection,
};