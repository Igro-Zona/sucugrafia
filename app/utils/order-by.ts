// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function <T>(arr: T[], iteratee: (item: T) => any, order: "asc" | "desc" = "asc"): T[] {
	return [...arr].sort((a, b) => {
		const valA = iteratee(a);
		const valB = iteratee(b);

		if (valA < valB) return order === "asc" ? -1 : 1;
		if (valA > valB) return order === "asc" ? 1 : -1;
		return 0;
	});
}
