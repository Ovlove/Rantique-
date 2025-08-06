import { defineCollection, z } from 'astro:content';

const fallbackDate = () => new Date().toISOString();

export const collections = {
  blog: defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string().optional(),
      pubDate: z
        .string()
        .or(z.date())
        .default(fallbackDate), // fallback if missing
      tags: z.array(z.string()).optional(),
      slug: z.string().optional(),
    }),
  }),
  fiction: defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string().optional(),
      pubDate: z
        .string()
        .or(z.date())
        .default(fallbackDate), // fallback if missing
      author: z.string().optional(),
      tags: z.array(z.string()).optional(),
      slug: z.string().optional(),
    }),
  }),
};
