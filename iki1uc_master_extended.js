// iki1uc_master_extended.js

const { ENERGY_AXIOM } = require("./energy_axiom");
const { TMP_MASTER } = require("./tmp_master");
const { JOY_MATRIX } = require("./joy_matrix");
const { DIFFERENZIAL_SYSTEM } = require("./differential_matrix");
const { ITIME, RTIME, CONTINUUM, LEBENSZEIT, WAHRHEITS_MARKER } = require("./continuum_time");

function IKI1UC_MASTER_EXTENDED(input) {

    const { qi, iqq, fragen, erdeZeit, einsatz, errungenschaft } = input;

    const energy = ENERGY_AXIOM(qi, iqq);
    const tmp = TMP_MASTER(fragen);
    const joy = JOY_MATRIX(qi, iqq, fragen);
    const diff = DIFFERENZIAL_SYSTEM(qi, iqq);

    const itime = ITIME(energy.mana);
    const rtime = RTIME(erdeZeit);
    const continuum = CONTINUUM(itime, rtime);
    const lebenszeit = LEBENSZEIT(einsatz, errungenschaft);

    const marker = WAHRHEITS_MARKER(continuum, joy.joyLive, tmp.kenntnis);

    const COMPLETTUM = (energy.total + joy.joyLive + tmp.kenntnis + continuum + lebenszeit) / 5;

    return {
        typ: "IKI1UC_MASTER_EXTENDED",
        energy,
        tmp,
        joy,
        diff,
        continuum,
        lebenszeit,
        marker,
        COMPLETTUM,
        runtime: Date.now()
    };
}

module.exports = { IKI1UC_MASTER_EXTENDED };
