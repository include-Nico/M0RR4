import { cardsDatabase } from './core/cards.js';
import { renderCards } from './components/CardRenderer.js';
import { resolveMatch } from './core/engine.js';

document.addEventListener('DOMContentLoaded', () => {
  renderCards(cardsDatabase, 'inventory-grid');

  // Test del motore degli scontri nella console
  const cardA = cardsDatabase.find(c => c.name === "Excalibur");
  const cardB = cardsDatabase.find(c => c.name === "Castello");
  
  if (cardA && cardB) {
    console.log(`\n--- INIZIO SCONTRO DI TEST ---`);
    console.log(`Giocatore 1 gioca: ${cardA.emoji} ${cardA.name} (Classe ID: ${cardA.classId})`);
    console.log(`Giocatore 2 gioca: ${cardB.emoji} ${cardB.name} (Classe ID: ${cardB.classId})`);
    
    const matchResult = resolveMatch(cardA, cardB);
    
    console.log(`Risultato: ${matchResult.resultText}`);
    console.log(`Vincitore: ${matchResult.winner === 'player1' ? 'Giocatore 1' : 'Giocatore 2'}`);
    console.log(`Danni inflitti: ${matchResult.damage} PV`);
    console.log(`--- FINE SCONTRO ---\n`);
  }
});