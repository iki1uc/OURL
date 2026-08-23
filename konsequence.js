// konsequence.js
// Konsequenz = Energie, die nicht gestoppt werden kann

const { MANA, AURA, VECTOR_ENERGIE } = require("./brand");

function KONSEQUENCE(qi, iqq) {
    const mana = MANA(qi, iqq);
    const aura = AURA(qi, iqq);
    const vector = VECTOR_ENERGIE(qi, iqq);

    const kon = mana + aura + vector;

    return {
        typ: "KONSEQUENCE",
        mana,
        aura,
        vector,
        kon,
        ausgang: kon
    };
}

module.exports = { KONSEQUENCE };
