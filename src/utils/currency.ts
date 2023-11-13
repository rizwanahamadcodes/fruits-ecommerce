export const formatCurrency = (amount: number) => {
    const formatter = new Intl.NumberFormat(undefined, {
        style: "currency",
        currency: "NPR",
        currencyDisplay: "narrowSymbol",
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    });
    return formatter.format(amount).replace("Rs", "Rs.");
};
