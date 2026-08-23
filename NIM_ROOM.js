// NIM_ROOM.js
// Raum für nim-Wellen: Sein → Fluss → Ankunft

function NIM_ROOM(nim) {
    const atom = nim.length;

    const room = {
        nim,
        atom,
        sein: atom,
        fluss: atom % 4,
        ankunft: Math.floor(atom / 2),
        qi: atom % 9,
        iqq: atom % 81,
        tmp: (atom % 9 + atom % 81) * 1.333,
        epoche: Math.floor(atom / 100),
        takt: atom % 4
    };

    return {
        typ: "NIM_ROOM",
        ...room,
        ausgang: room.tmp
    };
}

module.exports = { NIM_ROOM };
