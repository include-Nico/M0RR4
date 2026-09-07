/**
 * Motore di combattimento RPS Plus
 * Basato su 7 classi (ID da 0 a 6).
 * Regola: Ogni classe (X) batte (X+1, X+2, X+3) e perde contro (X+4, X+5, X+6).
 */

export function resolveMatch(cardPlayer1, cardPlayer2) {
  const id1 = cardPlayer1.classId;
  const id2 = cardPlayer2.classId;

  // Se le carte sono della stessa classe, è pareggio
  if (id1 === id2) {
    return {
      winner: null,
      resultText: "Pareggio!",
      damage: 0,
      winningCard: null
    };
  }

  // Calcolo matematico per le 7 classi (aritmetica modulare)
  // Restituisce un numero da 1 a 6
  const outcome = (id1 - id2 + 7) % 7;

  let winner, resultText, damage, winningCard;

  // Se il risultato è 1, 2 o 3, vince il Giocatore 1
  if (outcome >= 1 && outcome <= 3) {
    winner = "player1";
    resultText = `${cardPlayer1.name} batte ${cardPlayer2.name}!`;
    winningCard = cardPlayer1;
  } 
  // Se il risultato è 4, 5 o 6, vince il Giocatore 2
  else {
    winner = "player2";
    resultText = `${cardPlayer2.name} batte ${cardPlayer1.name}!`;
    winningCard = cardPlayer2;
  }

  // Calcolo del danno base: 
  // Es: 10 danni base + (Costo Energia della carta vincente * 5)
  damage = 10 + (winningCard.energy * 5);

  return {
    winner,
    resultText,
    damage,
    winningCard
  };
}