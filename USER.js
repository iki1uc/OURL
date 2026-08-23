// USER.js
function USER(name) {
    return {
        name,
        sein: name.length,
        fluss: name.length % 4,
        ankunft: Math.floor(name.length / 2),
        qi: name.length % 9,
        iqq: name.length % 81
    };
}

module.exports = { USER };
