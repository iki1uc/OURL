// brücke.js – erweitert um Rolle + Sperre
const { V3EWCTOR_ENGINE } = require('./v3ewctor.engine');

// ===== vector.rolle (Autorisation) =====
function VECTOR_ROLLE(rolle, ort, home) {
    const summe = rolle + ort + home;
    return summe > 0 ? "aktiviert" : "blockiert";
}

// ===== nochance.vector (Sperre) =====
function NOCHANCE_VECTOR(qi, iqq) {
    const summe = qi + iqq;
    return summe <= 0 ? "gesperrt" : "offen";
}

// ===== BRÜCKE (vollständig) =====
function BRUECKE(rolle, ort, home, suite, bildung, hin, zurueck) {
    const autorisation = VECTOR_ROLLE(rolle, ort, home);
    if (autorisation === "blockiert") {
        return { status: "blockiert", grund: "Rolle nicht ausreichend" };
    }

    const engine = V3EWCTOR_ENGINE(rolle, ort, home, suite, bildung, hin, zurueck);
    const sperre = NOCHANCE_VECTOR(engine.qi, engine.iqq);

    return {
        status: autorisation,
        sperre,
        engine,
        ausgang: sperre === "offen" ? engine.ausgang : "kein Zugang"
    };
}

module.exports = {
    VECTOR_ROLLE,
    NOCHANCE_VECTOR,
    BRUECKE
};
