// tmp_master.js
// TMP als Master-Achse

function TMP_MASTER(frageSerie) {
    const kenntnis = frageSerie.reduce((sum, f) => sum + f.length, 0);

    return {
        typ: "TMP_MASTER",
        fragen: frageSerie,
        kenntnis,
        ausgang: kenntnis
    };
}

module.exports = { TMP_MASTER };
