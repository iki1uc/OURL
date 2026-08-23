// ATTIKULATE_DECISION_TREE.js
// 12+ Beam-Signal Entscheidungsbaum für QI/IQQ + TMP

function DECISION_NODE(name, condition, yes, no, ueberlege) {
    return { name, condition, yes, no, ueberlege };
}

function ATTIKULATE_DECISION_TREE(value) {
    return [
        DECISION_NODE("Beam-Signal-1", value > 0.9, "JA", "NEIN", "ÜBERLEGE"),
        DECISION_NODE("Beam-Signal-2", value > 0.8, "JA", "NEIN", "ÜBERLEGE"),
        DECISION_NODE("Beam-Signal-3", value > 0.7, "JA", "NEIN", "ÜBERLEGE"),
        DECISION_NODE("Beam-Signal-4", value > 0.6, "JA", "NEIN", "ÜBERLEGE"),
        DECISION_NODE("Beam-Signal-5", value > 0.5, "JA", "NEIN", "ÜBERLEGE"),
        DECISION_NODE("Beam-Signal-6", value > 0.4, "JA", "NEIN", "ÜBERLEGE"),
        DECISION_NODE("Beam-Signal-7", value > 0.3, "JA", "NEIN", "ÜBERLEGE"),
        DECISION_NODE("Beam-Signal-8", value > 0.2, "JA", "NEIN", "ÜBERLEGE"),
        DECISION_NODE("Beam-Signal-9", value > 0.1, "JA", "NEIN", "ÜBERLEGE"),
        DECISION_NODE("Beam-Signal-10", value > 0.05, "JA", "NEIN", "ÜBERLEGE"),
        DECISION_NODE("Beam-Signal-11", value > 0.025, "JA", "NEIN", "ÜBERLEGE"),
        DECISION_NODE("Beam-Signal-12", value > 0.01, "JA", "NEIN", "ÜBERLEGE")
    ];
}

module.exports = { ATTIKULATE_DECISION_TREE };
