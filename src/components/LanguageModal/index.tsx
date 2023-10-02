import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import * as S from './styles';

interface ILanguageModal {
  onClose?: () => void;
  theme?: 'light' | 'dark';
}

function LanguageModal({
  onClose = () => {},
  theme = 'light'
}: ILanguageModal) {
  const { t, i18n } = useTranslation();
  const background = useMemo(
    () => (theme === 'light' ? 'white' : '#1C1C1C'),
    [theme]
  );
  const foreground = useMemo(
    () => (theme === 'light' ? '#191307' : 'white'),
    [theme]
  );

  const languages = useMemo(
    () => [
      { key: 'pt-BR', label: 'Português (BR)' },
      { key: 'es', label: 'Español' },
      { key: 'en', label: 'English' }
    ],
    []
  );

  function handleChangeLanguage(lng: string) {
    i18n.changeLanguage(lng);
  }

  return (
    <>
      <S.Overlay
        initial={{
          opacity: 0,
          pointerEvents: 'none'
        }}
        animate={{
          opacity: 0.5,
          pointerEvents: 'auto',
          transition: {
            duration: 0.15
          }
        }}
        exit={{
          opacity: 0,
          pointerEvents: 'none',
          transition: {
            duration: 0.1
          }
        }}
        key="language-overlay"
        onClick={onClose}
      />

      <S.LangModal
        initial={{
          x: '-50%',
          y: '-50%',
          pointerEvents: 'none',
          scale: 1.02,
          opacity: 0
        }}
        animate={{
          x: '-50%',
          y: '-50%',
          pointerEvents: 'auto',
          scale: 1,
          opacity: 1,
          transition: {
            duration: 0.15,
            delay: 0.1
          }
        }}
        exit={{
          x: '-50%',
          y: '-50%',
          pointerEvents: 'none',
          scale: 1,
          opacity: 0,
          transition: {
            duration: 0.1
          }
        }}
        key="language-modal"
        {...{ background }}
      >
        <S.ModalHeading {...{ foreground }}>
          {t('langModal.heading')}
        </S.ModalHeading>

        {languages.map((lang) => (
          <S.ButtonChangeLanguage
            onClick={() => handleChangeLanguage(lang.key)}
            selected={i18n.language === lang.key}
            {...{ background }}
          >
            <S.Radio
              selected={i18n.language === lang.key}
              {...{ background }}
            />
            <S.Language {...{ foreground }}>{lang.label}</S.Language>
          </S.ButtonChangeLanguage>
        ))}
      </S.LangModal>
    </>
  );
}

export default LanguageModal;
