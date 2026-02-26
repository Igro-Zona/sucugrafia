export default defineEventHandler(async (event) => {
	setHeader(event, "Cache-Control", "public, max-age=86400, s-maxage=86400");

	const config = useRuntimeConfig(event);
	const query = getQuery(event);
	const page = query.page ? Number(query.page) : 1;
	const maxResults = query.limit ? Number(query.limit) : 20;
	const res = await $fetch<{ resources: { public_id: string }[] }>(
		`https://api.cloudinary.com/v1_1/${config.cloudinaryCloudName}/resources/by_asset_folder`,
		{
			method: "GET",
			headers: {
				Authorization: "Basic " + Buffer.from(`${config.cloudinaryApiKey}:${config.cloudinaryApiSecret}`).toString("base64"),
			},
			query: {
				asset_folder: `gallery/${page}`,
				max_results: maxResults,
			},
		},
	);
	return res.resources.map((image) => image.public_id);
});
