// motor.js
// Motor erzeugt mechanische Bewegung

const { ANTRIEB } = require("./antrieb");

function MOTOR(qi, iqq) {
    const a = ANTRIEB(qi, iqq);
    const leistung = a.trieb * 1.2; // Motorverstärkung

    return {
        typ: "MOTOR",
        trieb: a.trieb,
        leistung,
        ausgang: leistung
    };
}

module.exports = { MOTOR };
