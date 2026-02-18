export default function (input?: Date | string) {
	const date = toDate(input);
	if (!date) return "Fecha inválida";

	const formatter = new Intl.DateTimeFormat("es-ES", {
		day: "2-digit",
		month: "short",
		year: "numeric",
	});

	return formatter.format(date).replace(".", "");
}
