import { CLASSES } from '../core/cards.js';

export function renderCards(cardsArray, containerId) {
  const container = document.getElementById(containerId);
  
  if (!container) {
    console.error(`Contenitore con id '${containerId}' non trovato nel DOM.`);
    return;
  }
  
  container.innerHTML = ''; 

  cardsArray.forEach(card => {
    const classIcon = CLASSES[card.classId].icon;
    const cardElement = document.createElement('div');
    cardElement.className = `card ${card.rarity}`;

    cardElement.innerHTML = `
      <div class="card-header">
        <span class="card-class">${classIcon}</span>
        <span class="card-energy">${card.energy}</span>
      </div>
      <div class="card-art">${card.emoji}</div>
      <h3 class="card-name">${card.name}</h3>
      ${card.ability ? `<div class="card-ability"><p>${card.ability}</p></div>` : ''}
    `;

    cardElement.addEventListener('click', () => {
      console.log(`Selezionato: ${card.name} (ID: ${card.id})`);
    });

    container.appendChild(cardElement);
  });
}