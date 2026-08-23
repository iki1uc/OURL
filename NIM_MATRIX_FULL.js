// NIM_MATRIX_FULL.js
// 3×81 Schaltmatrix für nim → Atom → Welle → Epoche

function NIM_MATRIX_FULL(nim) {
    const atom = nim.length;

    const matrix = [];

    for (let i = 0; i < 81; i++) {
        matrix.push({
            index: i,
            nim,
            atom,
            qi: (atom + i) % 9,
            iqq: (atom + i) % 81,
            takt: (atom + i) % 4,
            epoche: Math.floor((atom + i) / 100),
            tmp: ((atom + i) % 9 + (atom + i) % 81) * 1.333
        });
    }

    return {
        typ: "NIM_MATRIX_FULL",
        nim,
        atom,
        matrix,
        ausgang: matrix[matrix.length - 1]
    };
}

module.exports = { NIM_MATRIX_FULL };
