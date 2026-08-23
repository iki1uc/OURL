// SCHALTWERK_NC_ENGINE.js
// Atom-Schaltwerk für org/reorg + NC + TMP + QI/IQQ

function ATOM_SORT(raw) {
    return {
        positive: raw.filter(x => x.includes("+")),
        negative: raw.filter(x => x.includes("-"))
    };
}

function QI_SWITCH(atom) {
    return atom.length % 9;
}

function IQQ_SWITCH(atom) {
    return atom.length % 81;
}

function TMP_GUIDE(qi, iqq) {
    return (qi + iqq) * 1.333;
}

function ORG_REORG(tmp) {
    return tmp > 50 ? "ORG" : "REORG";
}

function NC_CONTINUUM(tmp, sync) {
    return (tmp + sync) / 2;
}

function SCHALTWERK_NC_ENGINE(rawAtoms, hin, zurueck) {
    const sorted = ATOM_SORT(rawAtoms);

    const qi = QI_SWITCH(sorted.positive.join(""));
    const iqq = IQQ_SWITCH(sorted.negative.join(""));

    const tmp = TMP_GUIDE(qi, iqq);
    const orgState = ORG_REORG(tmp);

    const sync = (hin + zurueck) / 2;
    const nc = NC_CONTINUUM(tmp, sync);

    return {
        typ: "SCHALTWERK_NC_ENGINE",
        sorted,
        qi,
        iqq,
        tmp,
        orgState,
        sync,
        nc,
        ausgang: orgState
    };
}

module.exports = { SCHALTWERK_NC_ENGINE };
