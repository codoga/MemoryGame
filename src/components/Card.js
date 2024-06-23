import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { flipCard } from '../actions';

const Card = ({ id }) => {
  const dispatch = useDispatch();
  const card = useSelector(state => state.cards[id]);
  const flippedCards = useSelector(state => state.flippedCards);
  const matchedCards = useSelector(state => state.matchedCards);
  const cards = useSelector(state => state.cards);

  const isFlipped = flippedCards.includes(id) || matchedCards.includes(id);

  const handleClick = () => {
    if (!isFlipped && flippedCards.length < 2) {
      dispatch(flipCard(id, flippedCards));
    }

    if (flippedCards.length === 1) {
      setTimeout(() => {
        dispatch({ type: 'CHECK_MATCH', flippedCards: [...flippedCards, id], cards });
      }, 1000); // Delay to allow the user to see the cards
    }
  };

  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
      {isFlipped ? <img src={card} alt="card" /> : 'X'}
    </div>
  );
};

export default Card;
