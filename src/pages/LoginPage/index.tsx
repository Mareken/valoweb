import Input from 'components/Input';
import React, { useEffect, useMemo, useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { useTranslation } from 'react-i18next';

import logo from 'assets/image/riot-logo.svg';

import BrandButton from 'components/BrandButton';
import Checkbox from 'components/Checkbox';
import LanguageModal from 'components/LanguageModal';
import SuperMasterAlert from 'components/SuperMasterAlert';
import { AnimatePresence } from 'framer-motion';
import { ArrowRight, Globe, User } from 'lucide-react';
import * as S from './styles';
import useUser from '../../context/UserContext';

function LoginPage() {
  const { t, i18n } = useTranslation();
  const { signIn } = useUser();

  const [canLogin, setCanLogin] = useState(false);
  const [isLogging, setIsLogging] = useState(false);
  const [rememberCredentials, setRememberCredentials] = useState(false);
  const [languageModalOpen, setLanguageModalOpen] = useState(false);
  const [showAttentionAlert, setShowAttentionAlert] = useState(false);
  const [credentials, setCredentials] = useState({
    user: '',
    password: ''
  });

  useEffect(() => {
    const savedCredentials = localStorage.getItem('valoweb');
    if (savedCredentials) {
      setCredentials(JSON.parse(savedCredentials));
    }
  }, []);

  useEffect(() => {
    const attentionAlert = localStorage.getItem(
      'valoweb-show_super_master_alert'
    );
    if (attentionAlert) {
      setShowAttentionAlert(false);
    } else {
      setTimeout(() => {
        setShowAttentionAlert(true);
      }, 200);
    }
  }, []);

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
      key="login-page"
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
                scale: 0.98
              }}
              transition={{
                ease: 'easeOut',
                duration: 0.15
              }}
              key="wrapper-div"
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

                <Checkbox
                  id="remember-me-checkbox"
                  label={t('login.rememberMeCheckbox')}
                  checked={rememberCredentials}
                  onChange={() =>
                    setRememberCredentials((prevState) => !prevState)
                  }
                />
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
              key="login-loader-wrapper"
            >
              <S.LoginLoader
                onAnimationEnd={() => signIn(rememberCredentials, credentials)}
              />
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
                key="button-login"
              >
                <ArrowRight
                  color={canLogin ? '#f9f9f9' : '#E8E8E8'}
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
            <User color=" #191307" />
          </S.RoundedButton>
          <S.RoundedButton
            onClick={() => setLanguageModalOpen(true)}
            highlight={languageModalOpen}
          >
            <Globe color=" #191307" />
          </S.RoundedButton>
        </S.RightSideButtons>

        <AnimatePresence mode="wait">
          {languageModalOpen && (
            <LanguageModal
              key="lang-modal-login"
              onClose={() => setLanguageModalOpen(false)}
            />
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {showAttentionAlert && (
            <SuperMasterAlert onClose={() => setShowAttentionAlert(false)} />
          )}
        </AnimatePresence>
      </S.RightSide>
    </S.Container>
  );
}

export default LoginPage;
