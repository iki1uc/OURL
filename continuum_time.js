// continuum_time.js
// Zeit-Continuum + Wahrheitsmarker

function ITIME(mana) {
    return mana * 1.111; // innere Zeit
}

function RTIME(erdeZeit) {
    return erdeZeit * 0.999; // reale Zeit
}

function CONTINUUM(itime, rtime) {
    return (itime + rtime) / 2; // Verbindung
}

function LEBENSZEIT(einsatz, errungenschaft) {
    return einsatz + (errungenschaft * 1.333);
}

function WAHRHEITS_MARKER(continuum, joyLive, tmp) {
    return continuum + joyLive + (tmp * 0.333);
}

module.exports = {
    ITIME,
    RTIME,
    CONTINUUM,
    LEBENSZEIT,
    WAHRHEITS_MARKER
};
