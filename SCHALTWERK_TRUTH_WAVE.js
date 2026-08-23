// SCHALTWERK_TRUTH_WAVE.js
// Wahrheits-Wellen-Motor für positive/negative Wellen

function TRUTH_WAVE(welle) {
    const qi = Math.abs(welle) % 9;
    const iqq = Math.abs(welle) % 81;

    const tmp = (qi + iqq) * 1.333;
    const takt = welle % 4;
    const epoche = Math.floor(welle / 100);

    const wahrheit = (tmp + takt + epoche) / 3;

    return {
        typ: "SCHALTWERK_TRUTH_WAVE",
        welle,
        qi,
        iqq,
        tmp,
        takt,
        epoche,
        wahrheit,
        ausgang: wahrheit
    };
}

module.exports = { TRUTH_WAVE };
