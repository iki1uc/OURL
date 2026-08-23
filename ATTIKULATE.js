// ATTIKULATE.js
// 3x81 Entscheidungssystem mit TMP-Führung + arg.sync + QI/IQQ

// 1. Grundformen (JA / NEIN / ÜBERLEGE)
function BASE_DECISION(value) {
    if (value > 0.66) return "JA";
    if (value < 0.33) return "NEIN";
    return "ÜBERLEGE";
}

// 2. QI-Achse (9 Themen)
function QI_AXIS(topic) {
    return topic % 9;
}

// 3. IQQ-Achse (81 Unterthemen)
function IQQ_AXIS(topic) {
    return topic % 81;
}

// 4. TMP-Führung (help/error/miss/fit/fix/org/reorg)
function TMP_FUEHRUNG(value) {
    return value * 1.333;
}

// 5. arg.sync (Hin ↔ Zurück)
function ARG_SYNC(hin, zurueck) {
    return (hin + zurueck) / 2;
}

// 6. 243 Teilungen (81 × 3)
function PARTITION_243(optionIndex) {
    return {
        ja: optionIndex * 3,
        nein: optionIndex * 3 + 1,
        ueberlege: optionIndex * 3 + 2
    };
}

// 7. Komplettes Modul
function ATTIKULATE(topic, value, hin, zurueck) {
    const qi = QI_AXIS(topic);
    const iqq = IQQ_AXIS(topic);
    const tmp = TMP_FUEHRUNG(value);
    const base = BASE_DECISION(tmp);
    const sync = ARG_SYNC(hin, zurueck);

    const optionIndex = iqq; // 81 Optionen
    const partition = PARTITION_243(optionIndex);

    return {
        typ: "ATTIKULATE",
        qi,
        iqq,
        tmp,
        base,
        sync,
        optionIndex,
        partition,
        ausgang: base
    };
}

module.exports = { ATTIKULATE };
