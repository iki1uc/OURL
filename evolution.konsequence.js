// evolution.konsequence.js
// Konsequenz der Evolution – Energie, Mana, Aura

const { EVOLUTION } = require("./brand");

function EVOLUTION_KONSEQUENCE(qi, iqq) {
    const evo = EVOLUTION(qi, iqq);
    const kon = evo.evolution * 3; // Evolution verstärkt sich selbst

    return {
        typ: "EVOLUTION_KONSEQUENCE",
        evolution: evo.evolution,
        kon,
        ausgang: kon
    };
}

module.exports = { EVOLUTION_KONSEQUENCE };
