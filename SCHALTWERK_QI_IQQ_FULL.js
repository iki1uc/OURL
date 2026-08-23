// SCHALTWERK_QI_IQQ_FULL.js
// Vollschaltung für QI/IQQ über Wellen + Atome + Epoche

function FULL_QI_IQQ(wellen) {
    return wellen.map(w => ({
        welle: w,
        qi: Math.abs(w) % 9,
        iqq: Math.abs(w) % 81,
        takt: w % 4,
        epoche: Math.floor(w / 100)
    }));
}

module.exports = { FULL_QI_IQQ };
