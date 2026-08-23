// USE_USER_MATRIX.js
// Matrix: USE + USER → gemeinsame Schaltung

function USE_USER_MATRIX(use, user) {
    return {
        typ: "USE_USER_MATRIX",
        nim: use.nim,
        user: user.name,
        atom_use: use.atom,
        atom_user: user.atom,
        qi: (use.qi + user.qi) / 2,
        iqq: (use.iqq + user.iqq) / 2,
        tmp: (use.tmp + user.tmp) / 2,
        sync: (use.sync + user.sync) / 2,
        nc: (use.nc + user.nc) / 2,
        ausgang: (use.tmp + user.nc) / 2
    };
}

module.exports = { USE_USER_MATRIX };
