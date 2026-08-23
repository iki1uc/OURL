// tmp.js
// TMP = Tiefen-Mechanische-Prüfung
// Wahrheit entsteht durch Führung, nicht durch Verbindung

function TMP_FRAGE(frage) {
    return {
        typ: "TMP_FRAGE",
        frage,
        kenntnis: frage.length // einfache mechanische Kenntnissteigerung
    };
}

function TMP_SERIE(fragen) {
    const kenntnis = fragen.reduce((sum, f) => sum + f.length, 0);

    return {
        typ: "TMP_SERIE",
        fragen,
        kenntnis
    };
}

function TMP_WAHRHEIT(earn, vector, ourl, tmp) {
    const wahrheit = (earn + vector + ourl + tmp.kenntnis) / 4;

    return {
        typ: "TMP_WAHRHEIT",
        earn,
        vector,
        ourl,
        tmp: tmp.kenntnis,
        wahrheit,
        ausgang: wahrheit
    };
}

module.exports = {
    TMP_FRAGE,
    TMP_SERIE,
    TMP_WAHRHEIT
};
