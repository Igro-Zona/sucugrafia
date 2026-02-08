import useImagesFetcher from "./useImagesFetcher";

export default async function (limit = 48, page = 1, sliceStart = 0, sliceEnd?: number) {
	const images = await useImagesFetcher(limit, page);

	return images.slice(sliceStart, sliceEnd ?? images.length);
}
