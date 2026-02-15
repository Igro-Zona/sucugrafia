export default function (input?: Date | string) {
	if (!input) return null;

	const date = typeof input === "string" ? new Date(input) : input;
	if (isNaN(date.getTime())) return null;

	return date;
}
