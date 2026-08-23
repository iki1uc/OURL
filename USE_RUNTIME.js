// USE_RUNTIME.js
// nim → Handlung → Bewegung → Zustand

function USE_RUNTIME(nim, hin, zurueck) {
    const atom = nim.length;

    const soll = atom > 3;
    const darfst = atom === 3;
    const nein = atom === 0;
    const ueberlege = atom === 2;
    const kern = atom === 1;

    const qi = atom % 9;
    const iqq = atom % 81;
    const tmp = (qi + iqq) * 1.333;

    const sync = (hin + zurueck) / 2;
    const nc = (tmp + sync) / 2;

    return {
        typ: "USE_RUNTIME",
        nim,
        atom,
        soll,
        darfst,
        nein,
        ueberlege,
        kern,
        qi,
        iqq,
        tmp,
        sync,
        nc,
        ausgang: tmp
    };
}

module.exports = { USE_RUNTIME };
