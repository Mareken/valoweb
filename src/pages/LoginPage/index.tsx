import Input from 'components/Input';
import React, { useEffect, useMemo, useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import logo from 'assets/image/riot-logo.svg';

import BrandButton from 'components/BrandButton';
import { AnimatePresence } from 'framer-motion';
import { ArrowRight, Globe, User } from 'lucide-react';
import * as S from './styles';

function LoginPage() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const [canLogin, setCanLogin] = useState(false);
  const [isLogging, setIsLogging] = useState(false);
  const [rememberCrendentials, setRememberCredentials] = useState(false);
  const [languageModalOpen, setLanguageModalOpen] = useState(false);
  const [credentials, setCredentials] = useState({
    user: '',
    password: ''
  });

  const languages = useMemo(
    () => [
      { key: 'pt-BR', label: 'Português (BR)' },
      { key: 'es', label: 'Español' },
      { key: 'en', label: 'English' }
    ],
    []
  );

  const loginMethods = useMemo(
    () => ['facebook', 'google', 'apple', 'xbox'],
    []
  );

  useEffect(() => {
    if (credentials.user.trim() !== '' && credentials.password.trim() !== '') {
      setCanLogin(true);
    } else {
      setCanLogin(false);
    }
  }, [credentials]);

  function handleChangeLanguage(lng: string) {
    i18n.changeLanguage(lng);
  }

  function handleInputChange(
    evt: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) {
    const { value } = evt.target;

    setCredentials((prevState) => ({
      ...prevState,
      [field]: value
    }));
  }

  function redirectToClient() {
    navigate('/client');
  }

  const cantLoginLink = useMemo(() => {
    switch (i18n.language) {
      case 'pt-BR':
        return 'https://recovery.riotgames.com/pt-br?region=BR1';
      case 'es':
        return 'https://recovery.riotgames.com/es?region=LA1';
      default:
        return 'https://recovery.riotgames.com/en?region=NA1';
    }
  }, [i18n.language]);

  const createAccountLink = useMemo(() => {
    switch (i18n.language) {
      case 'pt-BR':
        return 'https://playvalorant.com/pt-br/';
      case 'es':
        return 'https://playvalorant.com/es-es/';
      default:
        return 'https://playvalorant.com/en-us/';
    }
  }, [i18n.language]);

  return (
    <S.Container
      animate={{ opacity: 1 }}
      initial={{ scale: 1, opacity: 0 }}
      exit={{
        scale: 1.15,
        opacity: 0,
        transition: { ease: [0.785, 0.135, 0.15, 0.86], duration: 0.4 }
      }}
    >
      <S.LeftSide>
        <S.Logo draggable="false" src={logo} />

        <AnimatePresence mode="wait">
          {!isLogging && (
            <S.WrapperDiv
              initial={{
                scale: 1,
                opacity: 1
              }}
              exit={{
                opacity: 0,
                scale: 0.95
              }}
              transition={{
                ease: 'easeOut',
                duration: 0.15
              }}
            >
              <S.Headline>{t('login.headline')}</S.Headline>

              <S.LoginForm>
                <Input
                  type="text"
                  label={t('login.userInput')}
                  onChange={(evt) => handleInputChange(evt, 'user')}
                  value={credentials.user}
                />
                <Input
                  type="password"
                  label={t('login.passwordInput')}
                  onChange={(evt) => handleInputChange(evt, 'password')}
                  value={credentials.password}
                />

                <S.LoginAltButtons>
                  {loginMethods.map((brand) => (
                    <BrandButton key={brand} brand={brand} />
                  ))}
                </S.LoginAltButtons>

                <S.RememberMeCheckbox
                  htmlFor="remember-me-checkbox"
                  tabIndex={0}
                >
                  <S.CheckboxInput
                    type="checkbox"
                    id="remember-me-checkbox"
                    checked={rememberCrendentials}
                    onChange={() =>
                      setRememberCredentials((prevState) => !prevState)
                    }
                  />
                  <S.CheckboxBox />
                  <S.CheckboxLabel>
                    {t('login.rememberMeCheckbox')}
                  </S.CheckboxLabel>
                </S.RememberMeCheckbox>
              </S.LoginForm>
            </S.WrapperDiv>
          )}

          {isLogging && (
            <S.LoginLoaderWrapper
              initial={{ y: '-50%', scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{
                ease: 'easeIn',
                duration: 0.15,
                delay: 0.3
              }}
            >
              <S.LoginLoader onAnimationEnd={redirectToClient} />
            </S.LoginLoaderWrapper>
          )}
        </AnimatePresence>

        <S.Footer>
          <AnimatePresence mode="wait">
            {!isLogging && (
              <S.ButtonLogin
                disabled={!canLogin}
                initial={{
                  scale: 1,
                  opacity: 1
                }}
                exit={{
                  opacity: 0,
                  scale: 0.95
                }}
                transition={{
                  ease: 'easeOut',
                  duration: 0.15
                }}
                onClick={() => setIsLogging(true)}
              >
                <ArrowRight
                  color="#E8E8E8"
                  size="2rem"
                  className="button-login-icon"
                />
              </S.ButtonLogin>
            )}
          </AnimatePresence>

          <S.FooterLink href={cantLoginLink} target="_blank" rel="noreferrer">
            {t('login.cantLogin')}
          </S.FooterLink>

          <S.FooterWrapper>
            <S.FooterLink
              href={createAccountLink}
              target="_blank"
              rel="noreferrer"
            >
              {t('login.createAccount')}
            </S.FooterLink>
            <S.FooterText>V72.0.0</S.FooterText>
          </S.FooterWrapper>

          <S.FooterDisclaimer>
            {ReactHtmlParser(t('footer.disclaimer'))}
          </S.FooterDisclaimer>
        </S.Footer>
      </S.LeftSide>

      <S.RightSide>
        <S.RightSideButtons>
          <S.RoundedButton onClick={(evt) => evt.preventDefault()}>
            <User color="#A2A4AA" />
          </S.RoundedButton>
          <S.RoundedButton
            onClick={() => setLanguageModalOpen(true)}
            highlight={languageModalOpen}
          >
            <Globe color="#A2A4AA" />
          </S.RoundedButton>
        </S.RightSideButtons>

        <AnimatePresence mode="wait">
          {languageModalOpen && (
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
                key="languageOverlay"
                onClick={() => setLanguageModalOpen(false)}
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
                key="languageModal"
              >
                <S.ModalHeading>{t('langModal.heading')}</S.ModalHeading>

                {languages.map((lang) => (
                  <S.ButtonChangeLanguage
                    onClick={() => handleChangeLanguage(lang.key)}
                    selected={i18n.language === lang.key}
                  >
                    <S.Radio selected={i18n.language === lang.key} />
                    <S.Language>{lang.label}</S.Language>
                  </S.ButtonChangeLanguage>
                ))}
              </S.LangModal>
            </>
          )}
        </AnimatePresence>
      </S.RightSide>
    </S.Container>
  );
}

export default LoginPage;
