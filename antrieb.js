// antrieb.js
// Antrieb aus Energie

const { ENERGY } = require("./energy");

function ANTRIEB(qi, iqq) {
    const e = ENERGY(qi, iqq);
    const trieb = e.total * 0.9; // 90% wird zu Bewegung

    return {
        typ: "ANTRIEB",
        energie: e.total,
        trieb,
        ausgang: trieb
    };
}

module.exports = { ANTRIEB };
