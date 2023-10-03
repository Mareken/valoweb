import React from 'react';
import { useParams } from 'react-router-dom';

function GamePage() {
  const { gameId } = useParams();

  if (!gameId) return null;

  return <span>{gameId}</span>;
}

export default GamePage;
