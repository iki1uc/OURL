// tmp_joy.js
// TMP führt joy.live – aber verbindet es NICHT kreuz/quer

const { TMP_FRAGE, TMP_SERIE } = require("./tmp");
const { JOY_LIVE } = require("./joy");

function TMP_JOY_LIVE(frageSerie, earn, our, L) {
    // TMP erzeugt Kenntnisstand
    const tmp = TMP_SERIE(frageSerie);

    // joy.live entsteht unabhängig
    const joy = JOY_LIVE(earn, our, L);

    // TMP führt joy.live, aber verbindet NICHT die Achsen
    const gefuehrt = joy.joyLive + (tmp.kenntnis * 0.1);

    return {
        typ: "TMP_JOY_LIVE",
        tmp_kenntnis: tmp.kenntnis,
        joy_live: joy.joyLive,
        gefuehrt,
        ausgang: gefuehrt
    };
}

module.exports = { TMP_JOY_LIVE };
