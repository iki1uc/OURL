// NIM_ENGINE_FULL.js
// Vollständiger Motor für nim → Atom → Welle → Wahrheit

function NIM_ENGINE_FULL(nim, hin, zurueck) {
    const atom = nim.length;

    const qi = atom % 9;
    const iqq = atom % 81;
    const tmp = (qi + iqq) * 1.333;

    const takt = atom % 4;
    const epoche = Math.floor(atom / 100);

    const sync = (hin + zurueck) / 2;
    const nc = (tmp + sync) / 2;

    const wahrheit = (tmp + takt + epoche + sync) / 4;

    return {
        typ: "NIM_ENGINE_FULL",
        nim,
        atom,
        qi,
        iqq,
        tmp,
        takt,
        epoche,
        sync,
        nc,
        wahrheit,
        ausgang: wahrheit
    };
}

module.exports = { NIM_ENGINE_FULL };
