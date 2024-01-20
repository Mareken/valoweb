import React from 'react';

import valPoster from 'assets/image/val-video-poster.png';
import valVideo from 'assets/video/val-client-video.mp4';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';

function NotFound() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  function goBack() {
    navigate('/', { replace: true });
  }

  return (
    <S.Container>
      <S.BgVideo
        src={valVideo}
        preload="none"
        loop
        poster={valPoster}
        autoPlay
        muted
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { delay: 0.3 } }}
      />
      <S.Title
        initial={{ y: '-40px', opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            ease: [0.785, 0.135, 0.15, 0.86]
          }
        }}
        exit={{
          y: '-40px',
          opacity: 0,
          transition: {
            ease: [0.785, 0.135, 0.15, 0.86]
          }
        }}
      >
        {t('notFound.title').toUpperCase()}
      </S.Title>

      <S.ButtonWrapper
        initial={{ y: '40px', opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            ease: [0.785, 0.135, 0.15, 0.86]
          }
        }}
        exit={{
          y: '40px',
          opacity: 0,
          transition: {
            ease: [0.785, 0.135, 0.15, 0.86]
          }
        }}
      >
        <S.Button onClick={goBack}>{t('notFound.button')}</S.Button>
      </S.ButtonWrapper>
    </S.Container>
  );
}

export default NotFound;
