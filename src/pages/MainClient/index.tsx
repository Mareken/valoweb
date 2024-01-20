import React, { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BsApple, BsGooglePlay } from 'react-icons/bs';

import specialNewsBannerPng from 'assets/image/png/riot-mobile.png';
import specialNewsBannerWebp from 'assets/image/webp/riot-mobile.webp';
import GameTile from './components/GameTile';
import * as S from './styles';

function MainClient() {
  const { t, i18n } = useTranslation();

  const gamesList = ['lol', 'tft', 'valorant'];
  const gamesGrid = ['lol', 'wr', 'lor', 'tft', 'valorant'];
  const [shouldLogoHide, setShouldLogoHide] = useState(false);

  const handleContainerScroll = useCallback(
    (evt: React.UIEvent<HTMLDivElement>) => {
      const st = (evt.target as HTMLElement).scrollTop;

      if (st > 0) {
        setShouldLogoHide(true);
      } else {
        setShouldLogoHide(false);
      }
    },
    []
  );

  const specialNewsLink = useMemo(() => {
    switch (i18n.language) {
      case 'pt-BR':
        return 'https://convrgencegame.com/pt-br/';
      case 'es':
        return 'https://convrgencegame.com/es-mx/';
      default:
        return 'https://convrgencegame.com/en-us/';
    }
  }, [i18n.language]);

  const gameTileAnimation = {
    initial: {
      y: '50%',
      scale: 1,
      opacity: 0
    },
    animate: (index: number) => ({
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        ease: [0.785, 0.135, 0.15, 0.86],
        duration: 0.6,
        delay: 0.1 * index + 0.3
      }
    }),
    exit: {
      y: 0,
      scale: 0.97,
      opacity: 0,
      transition: {
        ease: [0.785, 0.135, 0.15, 0.86],
        duration: 0.3
      }
    }
  };

  return (
    <S.Container
      onScroll={handleContainerScroll}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { delay: 0.6 } }}
      key="main-client"
    >
      <S.RLogo hide={shouldLogoHide ? 0 : 1} />

      <S.MyGamesSection>
        <S.SectionTitle>{t('mainClient.myGames')}</S.SectionTitle>
        <S.MyGamesContainer>
          {gamesList.map((game, index) => (
            <GameTile
              game={game}
              key={game}
              useVideo
              custom={index}
              variants={gameTileAnimation}
              initial="initial"
              animate="animate"
              exit="exit"
            />
          ))}
        </S.MyGamesContainer>
      </S.MyGamesSection>

      <S.AllGamesSection>
        <S.SectionTitle>{t('mainClient.allGames')}</S.SectionTitle>
        <S.AllGamesContainer>
          {gamesGrid.map((game, index) => (
            <GameTile
              game={game}
              key={game}
              showGameStatus
              custom={index}
              variants={gameTileAnimation}
              initial="initial"
              animate="animate"
              exit="exit"
            />
          ))}
        </S.AllGamesContainer>
      </S.AllGamesSection>

      <S.SpecialEventsSection>
        <S.SectionTitle>
          {t('mainClient.specialNewsSectionTitle')}
        </S.SectionTitle>
        <S.SpecialEventsBanner
          src={specialNewsBannerWebp}
          fallback={specialNewsBannerPng}
        />
        <S.SpecialEventsTitle>
          {t('mainClient.specialNewsTitle')}
        </S.SpecialEventsTitle>
        <S.SpecialEventsDetails>
          <S.SpecialEventsParagraph>
            {t('mainClient.specialNewsContent')}
          </S.SpecialEventsParagraph>

          <S.SpecialEventsButtons>
            <S.SpecialEventsButton
              href={`${specialNewsLink}purchase/`}
              target="_blank"
              rel="noreferrer"
              className="primary"
            >
              <BsApple size={18} />
              <span>{t('mainClient.specialNewsBtn')}</span>
            </S.SpecialEventsButton>
            <S.SpecialEventsButton
              href={specialNewsLink}
              target="_blank"
              rel="noreferrer"
              className="secondary"
            >
              <BsGooglePlay size={18} />
              <span>{t('mainClient.specialNewsBtn2')}</span>
            </S.SpecialEventsButton>
          </S.SpecialEventsButtons>
        </S.SpecialEventsDetails>
      </S.SpecialEventsSection>
    </S.Container>
  );
}

export default MainClient;
