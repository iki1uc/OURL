// HAND_VOKABULAR.js
// Barrierefreie Hand-Signal Integration für QI/IQQ + TMP + arg.sync

function HAND_TO_SIGN(hand) {
    return hand.length; // einfache mechanische Ableitung
}

function QI_AXIS(sign) {
    return sign % 9;
}

function IQQ_AXIS(sign) {
    return sign % 81;
}

function TMP_FUEHRUNG(qi, iqq) {
    return (qi + iqq) * 1.333;
}

function DEUTUNG(tmp) {
    return tmp * 0.777;
}

function ARG_SYNC(hin, zurueck) {
    return (hin + zurueck) / 2;
}

function HAND_VOKABULAR(handSignal, hin, zurueck) {
    const sign = HAND_TO_SIGN(handSignal);
    const qi = QI_AXIS(sign);
    const iqq = IQQ_AXIS(sign);
    const tmp = TMP_FUEHRUNG(qi, iqq);
    const deutung = DEUTUNG(tmp);
    const sync = ARG_SYNC(hin, zurueck);

    return {
        typ: "HAND_VOKABULAR",
        sign,
        qi,
        iqq,
        tmp,
        deutung,
        sync,
        ausgang: deutung
    };
}

module.exports = { HAND_VOKABULAR };
