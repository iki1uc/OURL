// SCHALTWERK_EPOCHEN_MATRIX.js
// Epoche-Raster für Wellen + Atome

function EPOCHEN_MATRIX(wellen) {
    return wellen.map(w => ({
        atom: w,
        epoche: Math.floor(w / 100),
        takt: w % 4,
        qi: Math.abs(w) % 9,
        iqq: Math.abs(w) % 81
    }));
}

module.exports = { EPOCHEN_MATRIX };
