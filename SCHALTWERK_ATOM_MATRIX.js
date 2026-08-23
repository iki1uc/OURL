// SCHALTWERK_ATOM_MATRIX.js
// Atom-Matrix für positive/negative Wellen + QI/IQQ

function ATOM_MATRIX(wellen) {
    return wellen.map(w => ({
        atom: w,
        qi: Math.abs(w) % 9,
        iqq: Math.abs(w) % 81,
        positiv: w > 0,
        negativ: w < 0
    }));
}

module.exports = { ATOM_MATRIX };
