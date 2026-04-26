export default defineEventHandler(async (event) => {
	setHeader(event, "Cache-Control", "public, max-age=86400, s-maxage=86400");

	const config = useRuntimeConfig(event);
	const query = getQuery(event);
	const page = query.page ? Number(query.page) : 1;
	const res = await $fetch<{ resources: { public_id: string; context?: { custom: { alt?: string; caption?: string } } }[] }>(
		`https://api.cloudinary.com/v1_1/${config.cloudinaryCloudName}/resources/by_asset_folder`,
		{
			method: "GET",
			headers: {
				Authorization: "Basic " + Buffer.from(`${config.cloudinaryApiKey}:${config.cloudinaryApiSecret}`).toString("base64"),
			},
			query: {
				asset_folder: `gallery/${page}`,
				max_results: 48,
			},
		},
	);
	return res.resources.map((image) => ({
		src: image.public_id,
		title: image.context?.custom.caption,
		description: image.context?.custom.alt,
	}));
});
