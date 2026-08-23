// kraftstoff.js
// Kraftstoff = Reinheitsquelle für ICE

function KRAFTSTOFF(qi, iqq) {
    const reinheit = (qi + iqq) / 2;

    return {
        typ: "KRAFTSTOFF",
        reinheit,
        ausgang: reinheit
    };
}

module.exports = { KRAFTSTOFF };
