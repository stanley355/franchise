
export const formatDateToIndonesian = (dateString: string) => {
    const date = new Date(dateString);
    return Intl.DateTimeFormat("id-ID", {dateStyle: "medium", timeStyle: "short"}).format(date);
}