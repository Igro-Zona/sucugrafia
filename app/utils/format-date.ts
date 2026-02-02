export default function (dateInput?: Date | string) {
	if (!dateInput) {
		return "Fecha inválida";
	}

	const date = typeof dateInput === "string" ? new Date(dateInput) : dateInput;

	if (isNaN(date.getTime())) {
		return "Fecha inválida";
	}

	const formatter = new Intl.DateTimeFormat("es-ES", {
		day: "2-digit",
		month: "short",
		year: "numeric",
	});

	return formatter.format(date).replace(".", "");
}
