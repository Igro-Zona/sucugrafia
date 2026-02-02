export default function (url?: string) {
	if (!url) return false;
	const EXTERNAL_URL_REGEX = /^(https?:)?\/\//;
	return EXTERNAL_URL_REGEX.test(url);
}
