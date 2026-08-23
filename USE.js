// USE.js
function USE(nim) {
    return {
        nim,
        soll: nim === "soll",
        darfst: nim === "darfst",
        nein: nim === "nein",
        ueberlege: nim === "ueberlege",
        kern: nim === "nim"
    };
}

module.exports = { USE };
