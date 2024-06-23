export const flipCard = (id, flippedCards) => ({
    type: 'FLIP_CARD',
    id,
    flippedCards
  });
  
  export const resetGame = () => ({
    type: 'RESET_GAME'
  });
  