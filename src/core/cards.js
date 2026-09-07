export const CLASSES = {
  0: { name: "Lama", icon: "⚔️" },
  1: { name: "Natura", icon: "🌿" },
  2: { name: "Macchina", icon: "⚙️" },
  3: { name: "Magia", icon: "✨" },
  4: { name: "Impatto", icon: "🔨" },
  5: { name: "Ombra", icon: "🌑" },
  6: { name: "Scudo", icon: "🛡️" }
};

export const cardsDatabase = [
  {
    id: 1,
    name: "Forbici",
    classId: 0, 
    rarity: "common",
    energy: 1,
    emoji: "✂️",
    ability: null
  },
  {
    id: 2,
    name: "Drago Antico",
    classId: 1, 
    rarity: "legendary",
    energy: 6,
    emoji: "🐉",
    ability: "Se perde, infligge 10 danni da bruciatura."
  },
  {
    id: 3,
    name: "Raggio Laser",
    classId: 2, 
    rarity: "rare",
    energy: 3,
    emoji: "🔫",
    ability: "Ignora la difesa dello Scudo avversario."
  },
  {
    id: 4,
    name: "Carta",
    classId: 3, 
    rarity: "common",
    energy: 1,
    emoji: "📜",
    ability: null
  },
  {
    id: 5,
    name: "Sasso",
    classId: 4, 
    rarity: "common",
    energy: 1,
    emoji: "🪨",
    ability: null
  },
  {
    id: 6,
    name: "Ninja",
    classId: 5, 
    rarity: "epic",
    energy: 4,
    emoji: "🥷",
    ability: "20% di probabilità di schivare l'attacco nemico."
  },
  {
    id: 7,
    name: "Muro di Mattoni",
    classId: 6, 
    rarity: "common",
    energy: 2,
    emoji: "🧱",
    ability: null
  }
];