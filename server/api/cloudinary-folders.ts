export default defineEventHandler(async (event) => {
	setHeader(event, "Cache-Control", "public, max-age=86400, s-maxage=86400");

	const config = useRuntimeConfig(event);
	const res = await $fetch<{ total_count: number }>(
		`https://api.cloudinary.com/v1_1/${config.cloudinaryCloudName}/folders/gallery`,
		{
			method: "GET",
			headers: {
				Authorization:
					"Basic " +
					Buffer.from(`${config.cloudinaryApiKey}:${config.cloudinaryApiSecret}`).toString("base64"),
			},
		},
	);
	return res.total_count;
});
