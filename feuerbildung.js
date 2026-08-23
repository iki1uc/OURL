// feuerbildung.js
// Feuerbildung = ICE + Aura

const { ICE } = require("./ice");
const { AURA } = require("./energy");

function FEUERBILDUNG(qi, iqq) {
    const ice = ICE(qi, iqq);
    const aura = AURA(qi, iqq);

    const feuer = ice.verbrennung * aura;

    return {
        typ: "FEUERBILDUNG",
        ice: ice.verbrennung,
        aura,
        feuer,
        ausgang: feuer
    };
}

module.exports = { FEUERBILDUNG };
