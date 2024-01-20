import valLogoText from 'assets/image/val-logo-text.svg';
import React, { useCallback, useMemo, useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { SiWindows11 } from 'react-icons/si';

import PlayButton from 'components/PlayButton';
import useGamePage from 'hooks/useGamePage';
import { Monitor } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import * as S from './styles';

function GamePage() {
  const { news } = useGamePage();
  const { t, i18n } = useTranslation();
  const [headerShow, setHeaderShow] = useState(false);

  const handleScroll = (evt) => {
    if (evt.target.scrollTop > 360) {
      setHeaderShow(true);
    } else {
      setHeaderShow(false);
    }
  };

  const siteUrl = useMemo(() => {
    switch (i18n.language) {
      case 'pt-BR':
        return 'https://playvalorant.com/pt-br/';
      case 'es':
        return 'https://playvalorant.com/es-mx/';
      default:
        return 'https://playvalorant.com/en-us/';
    }
  }, [i18n.language]);

  const openHeroLink = useCallback(() => {
    let destination: string;

    switch (i18n.language) {
      case 'pt-BR':
        destination = 'https://www.youtube.com/watch?v=aL-BcdVE4BA';
      case 'es':
        destination = 'https://playvalorant.com/es-mx/';
      default:
        destination = 'https://www.youtube.com/watch?v=8OgcHAv6Jvk';
    }

    window.open(destination, '_blank');
  }, [i18n.language]);

  return (
    <S.Container onScroll={handleScroll}>
      <S.Header show={headerShow}>
        <PlayButton />
        <S.ValLogo src={valLogoText} draggable="false" />
        <S.HeaderHelper />
      </S.Header>

      <S.Hero>
        <S.HeroContent>
          <S.HeroValLogo src={valLogoText} draggable="false" />
          <PlayButton />
          <S.SubTitle>{ReactHtmlParser(t('gamePage.hero.title'))}</S.SubTitle>
          <S.Text>{t('gamePage.hero.text')}</S.Text>
          <S.Button onClick={openHeroLink}>
            {t('gamePage.hero.button')}
          </S.Button>
        </S.HeroContent>
      </S.Hero>

      <S.NewsWrapper>
        {news.map((tile) => {
          return (
            <S.Tile key={tile.id}>
              <S.TileThumb
                background={tile.background.webp}
                fallback={tile.background.png}
              />
              <S.CategoryTag>{tile.category}</S.CategoryTag>
              <S.TileText>{tile.text}</S.TileText>
            </S.Tile>
          );
        })}
      </S.NewsWrapper>

      <S.Section>
        <S.SectionTitle>{t('gamePage.availablePlatforms')}</S.SectionTitle>
        <S.SectionContent>
          <Monitor size={32} />
          <S.AvailablePlatformsButton>
            <SiWindows11 />
            <span>Windows</span>
          </S.AvailablePlatformsButton>
        </S.SectionContent>
      </S.Section>

      <S.Section>
        <S.SectionTitle>{t('gamePage.additionalDetails.title')}</S.SectionTitle>
        <S.SectionContent columnOnMobile>
          <S.AdditionalDetailsBlock>
            <p>{t('gamePage.additionalDetails.site')}</p>
            <a href={siteUrl} rel="noreferrer" target="_blank">
              playvalorant.com
            </a>
          </S.AdditionalDetailsBlock>
          <S.AdditionalDetailsBlock>
            <p>{t('gamePage.additionalDetails.developer')}</p>
            <span>Riot Games</span>
          </S.AdditionalDetailsBlock>
          <S.AdditionalDetailsBlock>
            <p>{t('gamePage.additionalDetails.distributor')}</p>
            <span>Riot Games</span>
          </S.AdditionalDetailsBlock>
          <S.AdditionalDetailsBlock>
            <p>{t('gamePage.additionalDetails.releaseDate.title')}</p>
            <span>{t('gamePage.additionalDetails.releaseDate.date')}</span>
          </S.AdditionalDetailsBlock>
        </S.SectionContent>
      </S.Section>
    </S.Container>
  );
}

export default GamePage;
