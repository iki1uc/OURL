// energy.js
// Grundenergie für OURL / iki1uc

function MANA(qi, iqq) {
    return (qi + iqq) * 0.5;
}

function AURA(qi, iqq) {
    return (qi * 0.3) + (iqq * 0.7);
}

function VECTOR(qi, iqq) {
    return (qi * 0.6) + (iqq * 0.4);
}

function ENERGY(qi, iqq) {
    const mana = MANA(qi, iqq);
    const aura = AURA(qi, iqq);
    const vector = VECTOR(qi, iqq);

    return {
        typ: "ENERGY",
        mana,
        aura,
        vector,
        total: mana + aura + vector
    };
}

module.exports = { MANA, AURA, VECTOR, ENERGY };
