// energy_axiom.js
// Energie-Axiom für iki1uc / OURL

function MANA(qi, iqq) {
    return (qi + iqq) * 0.5;
}

function AURA(qi, iqq) {
    return (qi * 0.3) + (iqq * 0.7);
}

function VECTOR(qi, iqq) {
    return (qi * 0.6) + (iqq * 0.4);
}

function ENERGY_AXIOM(qi, iqq) {
    const mana = MANA(qi, iqq);
    const aura = AURA(qi, iqq);
    const vector = VECTOR(qi, iqq);

    return {
        typ: "ENERGY_AXIOM",
        mana,
        aura,
        vector,
        total: mana + aura + vector
    };
}

module.exports = { MANA, AURA, VECTOR, ENERGY_AXIOM };
