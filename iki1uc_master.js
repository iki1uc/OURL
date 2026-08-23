// iki1uc_master.js
// Vollständige 12-Achsen-Matrix als EIN Modul

const { ENERGY_AXIOM } = require("./energy_axiom");
const { TMP_MASTER } = require("./tmp_master");
const { JOY_MATRIX } = require("./joy_matrix");
const { DIFFERENZIAL_SYSTEM } = require("./differential_matrix");
const { ITIME, RTIME, CONTINUUM, LEBENSZEIT, WAHRHEITS_MARKER } = require("./continuum_time");

function IKI1UC_MASTER(qi, iqq, frageSerie, erdeZeit, einsatz, errungenschaft) {

    // 1. Energie-Axiom
    const energy = ENERGY_AXIOM(qi, iqq);

    // 2. TMP als Master-Achse
    const tmp = TMP_MASTER(frageSerie);

    // 3. joy.live in Matrix
    const joy = JOY_MATRIX(qi, iqq, frageSerie);

    // 4. Differenzial-Matrix (QI / IQQ / 243)
    const diff = DIFFERENZIAL_SYSTEM(qi, iqq);

    // 5. Zeit-Continuum
    const itime = ITIME(energy.mana);
    const rtime = RTIME(erdeZeit);
    const continuum = CONTINUUM(itime, rtime);
    const lebenszeit = LEBENSZEIT(einsatz, errungenschaft);

    // 6. Wahrheitsmarker
    const marker = WAHRHEITS_MARKER(continuum, joy.joyLive, tmp.kenntnis);

    // 7. COMPLETTUM (End-Nachweis)
    const COMPLETTUM = (energy.total + joy.joyLive + tmp.kenntnis + continuum + lebenszeit) / 5;

    return {
        typ: "IKI1UC_MASTER",
        energy,
        tmp,
        joy,
        diff,
        continuum,
        lebenszeit,
        marker,
        COMPLETTUM,
        ausgang: COMPLETTUM
    };
}

module.exports = { IKI1UC_MASTER };
