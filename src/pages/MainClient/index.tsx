import { LayoutGrid, User } from 'lucide-react';
import React from 'react';

import * as S from './styles';
import GameTile from './components/GameTile';

function MainClient() {
	const gamesList = ['lol', 'tft', 'val'];
	const gamesGrid = ['lol', 'wr', 'lor', 'tft', 'val'];

  return (
    <S.Container>
      <S.Header>
        <S.RoundedButton>
          <LayoutGrid />
        </S.RoundedButton>
        <S.RoundedButton>
          <User />
        </S.RoundedButton>
      </S.Header>

      <S.MyGamesSection>
        <S.SectionTitle>Meus jogos</S.SectionTitle>
        <S.MyGamesContainer>
          {gamesList.map(game => <GameTile game={game} key={game} />)}
        </S.MyGamesContainer>
      </S.MyGamesSection>
    </S.Container>
  );
}

export default MainClient;
