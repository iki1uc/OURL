// ruuf_rooms.js
// RUUF.md → QI / IQQ / 243 → neue Room-Matrix

const { DIFFERENZIAL_SYSTEM } = require("./differential_matrix");

function RUUF_ROOMS(qi, iqq) {

    const diff = DIFFERENZIAL_SYSTEM(qi, iqq);

    return {
        typ: "RUUF_ROOMS",
        QI: diff.qi9,
        IQQ: diff.iqq81,
        FULL243: diff.full243,
        room9: diff.qi9,
        room81: diff.iqq81,
        room243: diff.full243,
        ausgang: diff.full243
    };
}

module.exports = { RUUF_ROOMS };
