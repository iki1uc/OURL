// ice.js
// ICE = Internal Combustion Engine

const { MOTOR } = require("./motor");
const { KRAFTSTOFF } = require("./kraftstoff");

function ICE(qi, iqq) {
    const motor = MOTOR(qi, iqq);
    const fuel = KRAFTSTOFF(qi, iqq);

    const verbrennung = motor.leistung * fuel.reinheit;

    return {
        typ: "ICE",
        leistung: motor.leistung,
        kraftstoff: fuel.reinheit,
        verbrennung,
        ausgang: verbrennung
    };
}

module.exports = { ICE };
