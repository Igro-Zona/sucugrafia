export default function <T>(arr1?: T[], arr2?: T[]): T[] {
	if (!arr1 || !arr2) return [];
	const set2 = new Set(arr2);
	return arr1.filter((item) => set2.has(item));
}
