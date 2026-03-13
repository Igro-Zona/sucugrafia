import { defineContentConfig, defineCollection } from "@nuxt/content";
import { asSeoCollection } from "@nuxtjs/seo/content";
import { z } from "zod";

const articleSchema = z.object({
	meta: z.object({
		date: z.optional(z.date()),
		tags: z.optional(z.array(z.string())),
		readingTime: z.object({ text: z.string() }),
		author: z.optional(z.string()),
		thumbnail: z.optional(z.string()),
		contentDescription: z.optional(z.string()),
	}),
});

export default defineContentConfig({
	collections: {
		articles: defineCollection(
			asSeoCollection({
				type: "page",
				source: "articulos/**/*.md",
				schema: articleSchema,
				indexes: [{ columns: ["path"], unique: true }],
			}),
		),
	},
});
