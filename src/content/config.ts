import { defineCollection, z } from 'astro:content';

export const collections = {
  blog: defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string().optional(),
      pubDate: z.coerce.date(),
      tags: z.array(z.string()).optional(),
      slug: z.string().optional(),
    }),
  }),
  fiction: defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string().optional(),
      pubDate: z.coerce.date(),
      author: z.string().optional(),
      tags: z.array(z.string()).optional(),
      slug: z.string().optional(),
    }),
  }),
};
