import { useCallback } from 'react';

interface IGameTile {
  gameTitle?: string;
}

function GameTile({ gameTitle = 'lol' }: IGameTile) {
  const gameThumb = useCallback(() => {
    switch (gameTitle) {
      case 'valorant':
        return;
    }
  }, []);
}

export default GameTile;
