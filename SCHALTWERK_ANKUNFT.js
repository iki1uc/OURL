// SCHALTWERK_ANKUNFT.js
// Ankunft-Achse: Fluss → Wahrheit → Zustand

function ANKUNFT(atom, hin, zurueck) {
    const qi = Math.abs(atom) % 9;
    const iqq = Math.abs(atom) % 81;
    const tmp = (qi + iqq) * 1.333;

    const sync = (hin + zurueck) / 2;      // arg.sync
    const nc = (tmp + sync) / 2;           // Neural Continuum

    const wahrheit = (tmp + sync) / 2;     // Wahrheit der Ankunft

    return {
        atom,
        qi,
        iqq,
        tmp,
        sync,
        nc,
        wahrheit,
        ausgang: wahrheit
    };
}

module.exports = { ANKUNFT };
