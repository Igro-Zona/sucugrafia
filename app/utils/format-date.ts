export default function (dateInput: Date) {
	const date = new Date(dateInput);

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
