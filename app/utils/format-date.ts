export default function (dateInput: Date) {
	const date = new Date(dateInput);

	if (isNaN(date.getTime())) {
		return "Fecha inválida";
	}

	const months = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];

	const day = String(date.getDate()).padStart(2, "0");
	const month = months[date.getMonth()];
	const year = date.getFullYear();
	return `${day} ${month} ${year}`;
}
