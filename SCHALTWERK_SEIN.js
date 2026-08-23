// SCHALTWERK_SEIN.js
// Sein-Achse: Atom → Welle → Zustand

function SEIN(atom) {
    return {
        atom,
        positiv: atom > 0,
        negativ: atom < 0,
        amplitude: Math.abs(atom),
        qi: Math.abs(atom) % 9,
        iqq: Math.abs(atom) % 81,
        tmp: (Math.abs(atom) % 9 + Math.abs(atom) % 81) * 1.333
    };
}

module.exports = { SEIN };
