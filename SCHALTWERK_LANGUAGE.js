// SCHALTWERK_LANGUAGE.js
// Sprache → einfache Sprache über QI/IQQ + TMP + arg.sync

function SIMPLE(raw) {
    return raw
        .replace(/[,;:]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}

function QI(text) {
    return text.length % 9;
}

function IQQ(text) {
    return text.length % 81;
}

function TMP(qi, iqq) {
    return (qi + iqq) * 1.333;
}

function SYNC(hin, zurueck) {
    return (hin + zurueck) / 2;
}

function SCHALTWERK_LANGUAGE(rawText, hin, zurueck) {
    const simple = SIMPLE(rawText);
    const qi = QI(simple);
    const iqq = IQQ(simple);
    const tmp = TMP(qi, iqq);
    const sync = SYNC(hin, zurueck);

    return {
        typ: "SCHALTWERK_LANGUAGE",
        raw: rawText,
        simple,
        qi,
        iqq,
        tmp,
        sync,
        ausgang: simple
    };
}

module.exports = { SCHALTWERK_LANGUAGE };
