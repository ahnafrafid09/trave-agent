export const getLowestPrice = (hargaObj) => {
    const allPrices = Object.values(hargaObj).flatMap((price) =>
        typeof price === "object" ? Object.values(price) : price
    );
    const validPrices = allPrices.filter(
        (price) => !isNaN(price) && typeof price === "number"
    );
    if (validPrices.length === 0) {
        return "Hubungi Kami";
    }
    const lowestPrice = Math.min(...validPrices);
    return lowestPrice.toLocaleString();
};