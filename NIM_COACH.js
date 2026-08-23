// NIM_COACH.js
// Coach-Motor: nim → Handlung → Führung

function NIM_COACH(nim, hin, zurueck) {
    const atom = nim.length;

    const qi = atom % 9;
    const iqq = atom % 81;
    const tmp = (qi + iqq) * 1.333;

    const sync = (hin + zurueck) / 2;
    const nc = (tmp + sync) / 2;

    const coach = {
        soll: atom > 3,
        darfst: atom === 3,
        nein: atom === 0,
        ueberlege: atom === 2,
        kern: atom === 1
    };

    return {
        typ: "NIM_COACH",
        nim,
        atom,
        qi,
        iqq,
        tmp,
        sync,
        nc,
        coach,
        ausgang: coach
    };
}

module.exports = { NIM_COACH };
