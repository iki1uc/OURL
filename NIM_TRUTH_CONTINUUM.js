// NIM_TRUTH_CONTINUUM.js
// Kontinuierliche Wahrheit: nim → Welle → Fluss → Ankunft

function NIM_TRUTH_CONTINUUM(nim, hin, zurueck) {
    const atom = nim.length;

    const qi = atom % 9;
    const iqq = atom % 81;
    const tmp = (qi + iqq) * 1.333;

    const takt = atom % 4;
    const epoche = Math.floor(atom / 100);

    const sync = (hin + zurueck) / 2;
    const nc = (tmp + sync) / 2;

    const wahrheit = (tmp + takt + epoche + sync + nc) / 5;

    return {
        typ: "NIM_TRUTH_CONTINUUM",
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

module.exports = { NIM_TRUTH_CONTINUUM };
