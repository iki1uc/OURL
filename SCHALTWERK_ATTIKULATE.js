// SCHALTWERK_ATTIKULATE.js
// JA / NEIN / ÜBERLEGE über QI/IQQ + TMP + org/reorg

function BASE(tmp) {
    if (tmp > 0.66) return "JA";
    if (tmp < 0.33) return "NEIN";
    return "ÜBERLEGE";
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

function SCHALTWERK_ATTIKULATE(text) {
    const qi = QI(text);
    const iqq = IQQ(text);
    const tmp = TMP(qi, iqq);
    const decision = BASE(tmp);

    return {
        typ: "SCHALTWERK_ATTIKULATE",
        qi,
        iqq,
        tmp,
        decision,
        ausgang: decision
    };
}

module.exports = { SCHALTWERK_ATTIKULATE };
