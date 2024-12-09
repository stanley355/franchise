export const formatCurrencyToIndonesian = (num: number) => {
    return Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(num);
}