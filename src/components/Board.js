import React from 'react';
import '../styles.css'; // styles.css dosyasını import ediyoruz
import { useSelector } from 'react-redux';
import Card from './Card';

const Board = () => {
  const cards = useSelector(state => state.cards);

  return (
    <div className="board">
      {cards.map((card, index) => (
        <Card key={index} id={index} />
      ))}
    </div>
  );
};

export default Board;
