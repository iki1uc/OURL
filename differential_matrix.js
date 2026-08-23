// differential_matrix.js
// QI / IQQ → 81 → 243 Ableitungen

function DIFFERENZIAL_QI(qi) {
    return Array.from({ length: 9 }, (_, i) => qi + i);
}

function DIFFERENZIAL_IQQ(iqq) {
    return Array.from({ length: 81 }, (_, i) => iqq + i);
}

function DIFFERENZIAL_243(base) {
    return Array.from({ length: 243 }, (_, i) => base + i);
}

function DIFFERENZIAL_SYSTEM(qi, iqq) {
    const qi9 = DIFFERENZIAL_QI(qi);
    const iqq81 = DIFFERENZIAL_IQQ(iqq);
    const full243 = DIFFERENZIAL_243(qi + iqq);

    return {
        typ: "DIFFERENZIAL_SYSTEM",
        qi9,
        iqq81,
        full243,
        ausgang: full243
    };
}

module.exports = {
    DIFFERENZIAL_QI,
    DIFFERENZIAL_IQQ,
    DIFFERENZIAL_243,
    DIFFERENZIAL_SYSTEM
};
