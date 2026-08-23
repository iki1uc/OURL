// NIM_SPACE_FULL.js
// Vollständiger Raum für nim → Atom → Welle → Epoche → Sein/Fluss/Ankunft

function NIM_SPACE_FULL(nim) {
    const atom = nim.length;

    const space = {
        nim,
        atom,
        sein: atom,
        fluss: atom % 4,
        ankunft: Math.floor(atom / 2),
        qi: atom % 9,
        iqq: atom % 81,
        tmp: (atom % 9 + atom % 81) * 1.333,
        epoche: Math.floor(atom / 100),
        takt: atom % 4,
        nc: ((atom % 9 + atom % 81) * 1.333) / 2
    };

    return {
        typ: "NIM_SPACE_FULL",
        ...space,
        ausgang: space.nc
    };
}

module.exports = { NIM_SPACE_FULL };
