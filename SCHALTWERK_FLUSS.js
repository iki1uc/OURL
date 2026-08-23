// SCHALTWERK_FLUSS.js
// Fluss-Achse: Sein → Richtung → Verlauf

function FLUSS(atom) {
    const qi = Math.abs(atom) % 9;
    const iqq = Math.abs(atom) % 81;
    const tmp = (qi + iqq) * 1.333;

    return {
        atom,
        takt: atom % 4,                 // 1/4-Takt
        epoche: Math.floor(atom / 100), // Epoche
        qi,
        iqq,
        tmp,
        fluss: tmp / 2                  // Bewegung
    };
}

module.exports = { FLUSS };
