// brand.js
// EVOLUTION-Axiom für OURL / iki1uc
// Keine Demokratie-Achse, kein Glaubens-Axiom – nur Energie

// Mana = innere Energie
function MANA(qi, iqq) {
    return (qi + iqq) * 0.5; // innere Reinheit
}

// Aura = äußere Energie
function AURA(qi, iqq) {
    return (qi * 0.3) + (iqq * 0.7); // äußere Ausstrahlung
}

// Vector = Bewegungsenergie
function VECTOR_ENERGIE(qi, iqq) {
    return (qi * 0.6) + (iqq * 0.4); // reine Bewegung
}

// Evolution = Mana + Aura + Vector
function EVOLUTION(qi, iqq) {
    const mana = MANA(qi, iqq);
    const aura = AURA(qi, iqq);
    const vector = VECTOR_ENERGIE(qi, iqq);

    const evolution = (mana + aura + vector) / 3;

    return {
        typ: "EVOLUTION",
        mana,
        aura,
        vector,
        evolution,
        ausgang: evolution
    };
}

module.exports = {
    MANA,
    AURA,
    VECTOR_ENERGIE,
    EVOLUTION
};
