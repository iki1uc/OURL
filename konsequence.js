// konsequence.js
// Konsequenz = Feuerbildung + Evolution

const { FEUERBILDUNG } = require("./feuerbildung");
const { ENERGY } = require("./energy");

function KONSEQUENCE(qi, iqq) {
    const feuer = FEUERBILDUNG(qi, iqq);
    const energy = ENERGY(qi, iqq);

    const kon = feuer.feuer + energy.total;

    return {
        typ: "KONSEQUENCE",
        feuer: feuer.feuer,
        energie: energy.total,
        kon,
        ausgang: kon
    };
}

module.exports = { KONSEQUENCE };
