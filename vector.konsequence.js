// vector.konsequence.js
// Konsequenz im VECTOR – reine Bewegung

const { VECTOR_ENERGIE } = require("./brand");

function VECTOR_KONSEQUENCE(qi, iqq) {
    const energie = VECTOR_ENERGIE(qi, iqq);
    const kon = energie * 1.111; // deine 360°-Achse

    return {
        typ: "VECTOR_KONSEQUENCE",
        energie,
        kon,
        ausgang: kon
    };
}

module.exports = { VECTOR_KONSEQUENCE };
