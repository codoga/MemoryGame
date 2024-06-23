import { combineReducers } from 'redux';
import generateShuffledCards from '../utils/generateShuffledCards';
import '../styles.css';
const initialState = {
  cards: generateShuffledCards(),
  flippedCards: [],
  matchedCards: [],
  score: 0
};

const cardsReducer = (state = initialState.cards, action) => {
  switch(action.type) {
    case 'RESET_GAME':
      return generateShuffledCards();
    default:
      return state;
  }
};

const flippedCardsReducer = (state = initialState.flippedCards, action) => {
  switch(action.type) {
    case 'FLIP_CARD':
      if (state.length < 2) {
        return [...state, action.id];
      }
      return state;
    case 'CHECK_MATCH':
      return [];
    case 'RESET_GAME':
      return [];
    default:
      return state;
  }
};

const matchedCardsReducer = (state = initialState.matchedCards, action) => {
  switch(action.type) {
    case 'CHECK_MATCH':
      const [firstCard, secondCard] = action.flippedCards;
      if (action.cards[firstCard] === action.cards[secondCard]) {
        return [...state, firstCard, secondCard];
      }
      return state;
    case 'RESET_GAME':
      return [];
    default:
      return state;
  }
};

const scoreReducer = (state = initialState.score, action) => {
  switch(action.type) {
    case 'CHECK_MATCH':
      const [firstCard, secondCard] = action.flippedCards;
      if (action.cards[firstCard] === action.cards[secondCard]) {
        return state + 50;
      } else {
        return state - 10;
      }
    case 'RESET_GAME':
      return 0;
    default:
      return state;
  }
};

export default combineReducers({
  cards: cardsReducer,
  flippedCards: flippedCardsReducer,
  matchedCards: matchedCardsReducer,
  score: scoreReducer
});
