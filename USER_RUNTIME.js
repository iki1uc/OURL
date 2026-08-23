// USER_RUNTIME.js
// USER → Sein → Fluss → Ankunft

function USER_RUNTIME(name, hin, zurueck) {
    const atom = name.length;

    const sein = atom;
    const fluss = atom % 4;
    const ankunft = Math.floor(atom / 2);

    const qi = atom % 9;
    const iqq = atom % 81;
    const tmp = (qi + iqq) * 1.333;

    const sync = (hin + zurueck) / 2;
    const nc = (tmp + sync) / 2;

    return {
        typ: "USER_RUNTIME",
        name,
        atom,
        sein,
        fluss,
        ankunft,
        qi,
        iqq,
        tmp,
        sync,
        nc,
        ausgang: nc
    };
}

module.exports = { USER_RUNTIME };
