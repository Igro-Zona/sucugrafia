export default function (input?: number) {
	if (!input) return null;

	const readingTime = Math.ceil(input);
	return `${readingTime} minutos de lectura`;
}
