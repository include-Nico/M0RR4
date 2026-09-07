export const CLASSES = {
  0: { name: "Lama", icon: "⚔️" },
  1: { name: "Natura", icon: "🌿" },
  2: { name: "Macchina", icon: "⚙️" },
  3: { name: "Magia", icon: "✨" },
  4: { name: "Impatto", icon: "🔨" },
  5: { name: "Oscuro", icon: "🌑" },
  6: { name: "Scudo", icon: "🛡️" }
};

export const cardsDatabase = [
  // --- CLASSE 0: LAMA ---
  { id: 1, name: "Forbice", classId: 0, rarity: "common", energy: 1, emoji: "✂️", ability: null },
  { id: 2, name: "Coltello", classId: 0, rarity: "rare", energy: 2, emoji: "🔪", ability: null },
  { id: 3, name: "Spada", classId: 0, rarity: "epic", energy: 4, emoji: "🗡️", ability: null },
  { id: 4, name: "Excalibur", classId: 0, rarity: "legendary", energy: 7, emoji: "⚔️", ability: "Critico: 50% di danni extra se vince." },

  // --- CLASSE 1: NATURA ---
  { id: 5, name: "Lucertola", classId: 1, rarity: "common", energy: 1, emoji: "🦎", ability: null },
  { id: 6, name: "Bestia", classId: 1, rarity: "rare", energy: 3, emoji: "🦍", ability: null },
  { id: 7, name: "Catastrofe", classId: 1, rarity: "epic", energy: 5, emoji: "🌪️", ability: null },
  { id: 8, name: "I 4 Elementi", classId: 1, rarity: "legendary", energy: 8, emoji: "🔥", ability: "Se perde, l'avversario perde metà della sua energia." },

  // --- CLASSE 2: MACCHINA ---
  { id: 9, name: "Pistola", classId: 2, rarity: "common", energy: 2, emoji: "🔫", ability: null },
  { id: 10, name: "Raggio Laser", classId: 2, rarity: "rare", energy: 4, emoji: "🔦", ability: null },
  { id: 11, name: "Robot", classId: 2, rarity: "epic", energy: 5, emoji: "🤖", ability: null },
  { id: 12, name: "Terminator", classId: 2, rarity: "legendary", energy: 7, emoji: "🦾", ability: "Imbattibile se i Punti Vita sono sotto il 20%." },

  // --- CLASSE 3: MAGIA ---
  { id: 13, name: "Carta", classId: 3, rarity: "common", energy: 1, emoji: "📜", ability: null },
  { id: 14, name: "Bastone Magico", classId: 3, rarity: "rare", energy: 3, emoji: "🪄", ability: null },
  { id: 15, name: "Sfera Energetica", classId: 3, rarity: "epic", energy: 5, emoji: "🔮", ability: null },
  { id: 16, name: "Gran Maestro", classId: 3, rarity: "legendary", energy: 6, emoji: "🧙‍♂️", ability: "Copia la classe dell'ultima carta giocata dall'avversario." },

  // --- CLASSE 4: IMPATTO ---
  { id: 17, name: "Sasso", classId: 4, rarity: "common", energy: 1, emoji: "🪨", ability: null },
  { id: 18, name: "Incudine", classId: 4, rarity: "rare", energy: 3, emoji: "🗜️", ability: null },
  { id: 19, name: "Incidente", classId: 4, rarity: "epic", energy: 5, emoji: "💥", ability: null },
  { id: 20, name: "Meteorite", classId: 4, rarity: "legendary", energy: 8, emoji: "☄️", ability: "Spazza via il prossimo turno (nessuno può giocare)." },

  // --- CLASSE 5: OSCURO ---
  { id: 21, name: "Spock", classId: 5, rarity: "common", energy: 2, emoji: "🖖", ability: null },
  { id: 22, name: "Ninja", classId: 5, rarity: "rare", energy: 3, emoji: "🥷", ability: null },
  { id: 23, name: "Fantasma", classId: 5, rarity: "epic", energy: 4, emoji: "👻", ability: null },
  { id: 24, name: "Eclissi", classId: 5, rarity: "legendary", energy: 6, emoji: "🌘", ability: "Nasconde la tua prossima carta giocata." },

  // --- CLASSE 6: SCUDO ---
  { id: 25, name: "Armatura", classId: 6, rarity: "common", energy: 2, emoji: "🛡️", ability: null },
  { id: 26, name: "Muro Mattoni", classId: 6, rarity: "rare", energy: 3, emoji: "🧱", ability: null },
  { id: 27, name: "Muraglia", classId: 6, rarity: "epic", energy: 5, emoji: "⛩️", ability: null },
  { id: 28, name: "Castello", classId: 6, rarity: "legendary", energy: 7, emoji: "🏰", ability: "Se perdi, annulli tutti i danni subiti (una volta per partita)." }
];