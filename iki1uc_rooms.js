// iki1uc_rooms.js
// Rooms + Differenzial-Matrix verbinden

const { DIFFERENZIAL_SYSTEM } = require("./differential_matrix");

function ROOM_CONNECT(qi, iqq) {

    const diff = DIFFERENZIAL_SYSTEM(qi, iqq);

    const room9 = diff.qi9;        // 9 Felder
    const room81 = diff.iqq81;     // 81 Felder
    const room243 = diff.full243;  // 243 Ableitungen

    return {
        typ: "IKI1UC_ROOMS",
        room9,
        room81,
        room243,
        ausgang: room243
    };
}

module.exports = { ROOM_CONNECT };
