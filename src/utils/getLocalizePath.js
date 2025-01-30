import i18n from 'i18next'; // Mengimpor i18n untuk mendapatkan bahasa aktif

export const getLocalizedPath = (path) => {
    const lang = i18n.language; // Mengambil bahasa aktif dari i18n
    return `/${lang}${path}`;   // Mengembalikan path yang sudah dilokalisasi
};