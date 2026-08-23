// ATTIKULATE_RUNTIME.js
// Laufende Entscheidungsachse mit QI/IQQ + TMP + arg.sync

const { ATTIKULATE } = require("./ATTIKULATE");

function ATTIKULATE_RUNTIME(topic, value, hin, zurueck) {
    const state = ATTIKULATE(topic, value, hin, zurueck);

    return {
        typ: "ATTIKULATE_RUNTIME",
        state,
        tick: () => ATTIKULATE(topic, value, hin, zurueck),
        ausgang: state.base
    };
}

module.exports = { ATTIKULATE_RUNTIME };
