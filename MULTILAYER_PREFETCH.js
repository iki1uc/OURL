// MULTILAYER_PREFETCH.js
// 3 → 9 → 81 Sprach-Prefetch + QI/IQQ + TMP + arg.sync

function PREFETCH_3(raw) {
    return raw.slice(0, 3);
}

function PREFETCH_9(raw) {
    return raw.slice(0, 9);
}

function PREFETCH_81(raw) {
    return raw.slice(0, 81);
}

function QI_AXIS(word) {
    return word.length % 9;
}

function IQQ_AXIS(word) {
    return word.length % 81;
}

function TMP_FUEHRUNG(qi, iqq) {
    return (qi + iqq) * 1.333;
}

function ARG_SYNC(hin, zurueck) {
    return (hin + zurueck) / 2;
}

function MULTILAYER_PREFETCH(rawWords, hin, zurueck) {
    const layer3 = PREFETCH_3(rawWords);
    const layer9 = PREFETCH_9(rawWords);
    const layer81 = PREFETCH_81(rawWords);

    const qi = QI_AXIS(rawWords[0] || "");
    const iqq = IQQ_AXIS(rawWords[0] || "");

    const tmp = TMP_FUEHRUNG(qi, iqq);
    const sync = ARG_SYNC(hin, zurueck);

    return {
        typ: "MULTILAYER_PREFETCH",
        layer3,
        layer9,
        layer81,
        qi,
        iqq,
        tmp,
        sync,
        ausgang: sync
    };
}

module.exports = { MULTILAYER_PREFETCH };
