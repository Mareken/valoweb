import { Globe, Power } from 'lucide-react';
import React, { useCallback, useMemo, useState } from 'react';

import convergenceBannerPng from 'assets/image/png/convergence.png';
import convergenceBannerWebp from 'assets/image/webp/convergence.webp';
import LanguageModal from 'components/LanguageModal';
import { AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import GameTile from './components/GameTile';
import * as S from './styles';

function MainClient() {
  const gamesList = ['lol', 'tft', 'val'];
  const gamesGrid = ['lol', 'wr', 'lor', 'tft', 'val'];
  const [shouldLogoHide, setShouldLogoHide] = useState(false);
  const [languageModalOpen, setLanguageModalOpen] = useState(false);

  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

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

  const goToLogin = () => {
    navigate('/');
  };

  const convergenceLink = useMemo(() => {
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

      <S.Header>
        <S.RoundedButton onClick={goToLogin}>
          <Power />
        </S.RoundedButton>
        <S.RoundedButton onClick={() => setLanguageModalOpen(true)}>
          <Globe />
        </S.RoundedButton>
      </S.Header>

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
          {t('mainClient.convergenceSectionTitle')}
        </S.SectionTitle>
        <S.SpecialEventsBanner
          src={convergenceBannerWebp}
          fallback={convergenceBannerPng}
        />
        <S.SpecialEventsTitle>
          {t('mainClient.convergenceTitle')}
        </S.SpecialEventsTitle>
        <S.SpecialEventsDetails>
          <S.SpecialEventsParagraph>
            {t('mainClient.convergenceContent')}
          </S.SpecialEventsParagraph>

          <S.SpecialEventsButtons>
            <S.SpecialEventsButton
              href={`${convergenceLink}purchase/`}
              className="primary"
            >
              {t('mainClient.convergenceBuyNow')}
            </S.SpecialEventsButton>
            <S.SpecialEventsButton href={convergenceLink} className="secondary">
              {t('mainClient.convergence')}
            </S.SpecialEventsButton>
          </S.SpecialEventsButtons>
        </S.SpecialEventsDetails>
      </S.SpecialEventsSection>

      <AnimatePresence mode="wait">
        {languageModalOpen && (
          <LanguageModal
            onClose={() => setLanguageModalOpen(false)}
            theme="dark"
          />
        )}
      </AnimatePresence>
    </S.Container>
  );
}

export default MainClient;
