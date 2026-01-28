import { defineContentConfig, defineCollection } from "@nuxt/content";
import { asSitemapCollection } from "@nuxtjs/sitemap/content";
import * as z from "zod";

const articleSchema = z.object({
	meta: z.object({
		date: z.date(),
		tags: z.optional(z.array(z.string())),
		readingTime: z.object({
			text: z.string(),
		}),
		author: z.string(),
		thumbnail: z.string(),
	}),
});

export default defineContentConfig({
	collections: {
		articles: defineCollection(
			asSitemapCollection({
				type: "page",
				source: "articles/**/*.md",
				schema: articleSchema,
			}),
		),
	},
});
