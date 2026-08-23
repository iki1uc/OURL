// njoy.js
// aktive Zustandsachse des iki1uc-Systems

function ENERGY_AXIS(mana, aura, vector) {
    return mana + aura + vector;
}

function TMP_AXIS(value) {
    return value * 1.333; // Führung
}

function QI_AXIS(topic) {
    return topic % 9; // 9 Themen
}

function IQQ_AXIS(topic) {
    return topic % 81; // 81 Unterthemen
}

function ARG_SYNC(a, b) {
    return (a + b) / 2; // Hin ↔ Zurück
}

function COMPLETTUM(energy, tmp, qi, iqq, sync) {
    return (energy + tmp + qi + iqq + sync) / 5;
}

function NJOY(mana, aura, vector, tmpValue, topic, hin, zurueck) {
    const energy = ENERGY_AXIS(mana, aura, vector);
    const tmp = TMP_AXIS(tmpValue);
    const qi = QI_AXIS(topic);
    const iqq = IQQ_AXIS(topic);
    const sync = ARG_SYNC(hin, zurueck);
    const comp = COMPLETTUM(energy, tmp, qi, iqq, sync);

    return {
        typ: "NJOY",
        energy,
        tmp,
        qi,
        iqq,
        sync,
        COMPLETTUM: comp,
        ausgang: comp
    };
}

module.exports = { NJOY };
