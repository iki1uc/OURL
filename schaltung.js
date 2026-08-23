// ============================================================
// SCHALTUNG · HELP · ERROR · 7SENSE · WRAIGHT · COACH · TMP
// ============================================================

// ===== 1. HELP – Soforthilfe =====
function HELP(zustand) {
  if (zustand === "notfall") return { hilfe: true, modus: "sofort" };
  if (zustand === "unsicher") return { hilfe: true, modus: "sanft" };
  return { hilfe: false, modus: "ruhig" };
}

// ===== 2. ERROR – Fehlererkennung =====
function ERROR(input) {
  const fehler = [];
  if (!input) fehler.push("kein Input");
  if (typeof input !== "object") fehler.push("falscher Typ");
  if (!input.x && !input.y && !input.z) fehler.push("keine Achsen");
  return {
    hatFehler: fehler.length > 0,
    fehler,
    status: fehler.length === 0 ? "klar" : "fehlerhaft"
  };
}

// ===== 3. 7SENSE – Wahrnehmung =====
function SENSE(input) {
  const klarheit = input?.klarheit || 0.5;
  const intuition = input?.intuition || 0.5;
  const score = (klarheit + intuition) / 2;
  return {
    klar: score > 0.7,
    unscharf: score > 0.3 && score <= 0.7,
    blind: score <= 0.3,
    score
  };
}

// ===== 4. WRAIGHT – Erlaubnis =====
function WRAIGHT(sense, error) {
  if (error.hatFehler) return { erlaubt: false, grund: "Fehler erkannt" };
  if (!sense.klar) return { erlaubt: false, grund: "Wahrnehmung unscharf" };
  return { erlaubt: true, grund: "✅ GRÜN – Zugang erlaubt" };
}

// ===== 5. COACH – Führung =====
function COACH(zustand, wraight) {
  if (!wraight.erlaubt) {
    return {
      modus: "blockiert",
      hinweis: "Warte, bis WRAIGHT grün wird.",
      nächsterSchritt: "TMP"
    };
  }
  return {
    modus: "führend",
    hinweis: "Ich führe dich – aber ich werde nicht geführt.",
    nächsterSchritt: zustand?.ziel || "Weiter"
  };
}

// ===== 6. TMP – Temporäre Brücke =====
function TMP(zustand, coach, error) {
  if (error.hatFehler) {
    return {
      modus: "korrektur",
      buffer: "Fehler wird abgefangen – Warte auf HELP",
      nächsterSchritt: "HELP"
    };
  }
  if (coach.modus === "blockiert") {
    return {
      modus: "pause",
      buffer: "WRAIGHT ist rot – System wartet",
      nächsterSchritt: "WRAIGHT"
    };
  }
  return {
    modus: "durchfluss",
    buffer: "TMP leitet weiter – alles stabil",
    nächsterSchritt: "COACH"
  };
}

// ===== 7. GESAMTSCHALTUNG – Soll & sowohl als auch =====
function SCHALTUNG(input) {
  const help = HELP(input?.zustand || "ruhig");
  const error = ERROR(input);
  const sense = SENSE(input);
  const wraight = WRAIGHT(sense, error);
  const coach = COACH(input, wraight);
  const tmp = TMP(input, coach, error);

  return {
    help,
    error,
    sense,
    wraight,
    coach,
    tmp,
    gesamtStatus: wraight.erlaubt ? "✅ System aktiv – Führung möglich" : "⛔ System blockiert – Hilfe nötig"
  };
}

// ===== EXPORT =====
module.exports = {
  HELP,
  ERROR,
  SENSE,
  WRAIGHT,
  COACH,
  TMP,
  SCHALTUNG
};
