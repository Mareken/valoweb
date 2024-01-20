import { ReactComponent as PlayIcon } from 'assets/icons/play-icon.svg';
import ProgressBar from 'components/ProgressBar';
import React from 'react';
import { useTranslation } from 'react-i18next';
import * as S from './styles';

function PlayButton() {
  const { t } = useTranslation();

  return (
    <S.Button className="play-button">
      <S.PlayWrapper>
        <PlayIcon />
        <ProgressBar
          progress={30}
          size={48}
          className="play-button__progress"
        />
      </S.PlayWrapper>
      <S.Label>{t('playButton')}</S.Label>
    </S.Button>
  );
}

export default PlayButton;
