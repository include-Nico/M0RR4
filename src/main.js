import { cardsDatabase } from './core/cards.js';
import { renderCards } from './components/CardRenderer.js';

document.addEventListener('DOMContentLoaded', () => {
  renderCards(cardsDatabase, 'inventory-grid');
});