// SCHALTWERK_NC_ENGINE.js
// Positive/Negative Wellen + org/reorg + NC + TMP + QI/IQQ

function WELLEN(raw) {
    return {
        positiv: raw.filter(x => x > 0),
        negativ: raw.filter(x => x < 0)
    };
}

function QI(welle) {
    return Math.abs(welle) % 9;
}

function IQQ(welle) {
    return Math.abs(welle) % 81;
}

function TMP(qi, iqq) {
    return (qi + iqq) * 1.333;
}

function ORG_REORG(tmp) {
    return tmp > 50 ? "ORG" : "REORG";
}

function TAKT(welle) {
    return welle % 4; // 1/4-Takt
}

function EPOCHE(welle) {
    return Math.floor(welle / 100); // Epoche
}

function SYNC(hin, zurueck) {
    return (hin + zurueck) / 2;
}

function NC(tmp, sync) {
    return (tmp + sync) / 2;
}

function SCHALTWERK_NC_ENGINE(wellen, hin, zurueck) {
    const sort = WELLEN(wellen);

    const qi = QI(wellen[0] || 0);
    const iqq = IQQ(wellen[0] || 0);

    const tmp = TMP(qi, iqq);
    const org = ORG_REORG(tmp);

    const takt = TAKT(wellen[0] || 0);
    const epoche = EPOCHE(wellen[0] || 0);

    const sync = SYNC(hin, zurueck);
    const nc = NC(tmp, sync);

    return {
        typ: "SCHALTWERK_NC_ENGINE",
        sort,
        qi,
        iqq,
        tmp,
        org,
        takt,
        epoche,
        sync,
        nc,
        ausgang: org
    };
}

module.exports = { SCHALTWERK_NC_ENGINE };
