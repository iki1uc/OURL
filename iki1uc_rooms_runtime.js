// iki1uc_rooms_runtime.js

const { ROOM_CONNECT } = require("./iki1uc_rooms");

function ROOM_RUNTIME(qi, iqq) {
    const state = ROOM_CONNECT(qi, iqq);

    return {
        typ: "IKI1UC_ROOMS_RUNTIME",
        state,
        tick: () => ROOM_CONNECT(qi, iqq)
    };
}

module.exports = { ROOM_RUNTIME };
