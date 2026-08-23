// joy_matrix.js
// joy.live in der 12-Achsen-Matrix

const { ENERGY_AXIOM } = require("./energy_axiom");
const { TMP_MASTER } = require("./tmp_master");

function JOY_MATRIX(qi, iqq, frageSerie) {
    const energy = ENERGY_AXIOM(qi, iqq);
    const tmp = TMP_MASTER(frageSerie);

    const joyLive = (energy.total + tmp.kenntnis) / 2;

    return {
        typ: "JOY_MATRIX",
        energy: energy.total,
        tmp: tmp.kenntnis,
        joyLive,
        ausgang: joyLive
    };
}

module.exports = { JOY_MATRIX };
