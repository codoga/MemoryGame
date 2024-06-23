import React from 'react';
import { useSelector } from 'react-redux';

const Score = () => {
  const score = useSelector(state => state.score);

  return (
    <div className="score">
      Score: {score}
    </div>
  );
};

export default Score;
