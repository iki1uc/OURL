// SCHALTWERK_WELLEN_ENGINE.js
// Wellenmotor für Sein → Fluss → Ankunft

function WELLEN(raw) {
    return raw.map(w => ({
        wert: w,
        positiv: w > 0,
        negativ: w < 0,
        amplitude: Math.abs(w),
        takt: w % 4,              // 1/4-Takt
        epoche: Math.floor(w / 100)
    }));
}

function QI(w) {
    return Math.abs(w) % 9;       // Themen-Schaltung
}

function IQQ(w) {
    return Math.abs(w) % 81;      // Unterthemen-Schaltung
}

function TMP(qi, iqq) {
    return (qi + iqq) * 1.333;    // Führungs-Schaltung
}

function SYNC(hin, zurueck) {
    return (hin + zurueck) / 2;   // Fluss ↔ Ankunft
}

function NC(tmp, sync) {
    return (tmp + sync) / 2;      // Sein-Träger
}

function SCHALTWERK_WELLEN_ENGINE(wellen, hin, zurueck) {
    const w = WELLEN(wellen);

    const qi = QI(wellen[0] || 0);
    const iqq = IQQ(wellen[0] || 0);

    const tmp = TMP(qi, iqq);
    const sync = SYNC(hin, zurueck);
    const nc = NC(tmp, sync);

    return {
        typ: "SCHALTWERK_WELLEN_ENGINE",
        w,
        qi,
        iqq,
        tmp,
        sync,
        nc,
        ausgang: nc
    };
}

module.exports = { SCHALTWERK_WELLEN_ENGINE };
