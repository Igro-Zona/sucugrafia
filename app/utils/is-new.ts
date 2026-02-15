export default function (input?: Date | string, days = 7) {
	const date = toDate(input);
	if (!date) return false;

	const diff = Math.abs(Date.now() - date.getTime());
	return diff < 8.64e7 * days;
}
