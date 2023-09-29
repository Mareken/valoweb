import { Grid, User } from 'lucide-react';
import React from 'react';

import * as S from './styles';

function MainClient() {
  return (
    <S.Container>
      <S.Header>
        <S.RoundedButton>
          <Grid />
        </S.RoundedButton>
        <S.RoundedButton>
          <User />
        </S.RoundedButton>
      </S.Header>

      <S.MyGamesSection>
        <S.SectionTitle>Meus jogos</S.SectionTitle>
        <S.MyGamesContainer>
          <S.GameTile>
            <S.GameThumb>
              <S.GameThumbInner src={lolIcon} />
            </S.GameThumb>
          </S.GameTile>
        </S.MyGamesContainer>
      </S.MyGamesSection>
    </S.Container>
  );
}

export default MainClient;
