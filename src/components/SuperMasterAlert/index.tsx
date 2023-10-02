import React, { useState } from 'react';

interface ISuperMasterAlert {
  onClose: () => void;
}

import Checkbox from 'components/Checkbox';
import { useTranslation } from 'react-i18next';
import * as S from './styles';

function SuperMasterAlert({ onClose = () => {} }: ISuperMasterAlert) {
  const [showAgain, setShowAgain] = useState(true);
  const { t } = useTranslation();

  function closeModal() {
    if (!showAgain) {
      localStorage.setItem('valoweb-show_super_master_alert', 'false');
    } else {
      localStorage.removeItem('valoweb-show_super_master_alert');
    }

    if (onClose) onClose();
  }

  const animation = {
    hidden: {
      x: '-50%',
      y: '-20px',
      opacity: 0
    },
    show: {
      x: '-50%',
      y: 0,
      opacity: 1
    }
  };

  return (
    <>
      <S.Overlay
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 0.5,
          transition: {
            duration: 0.15
          }
        }}
        exit={{
          opacity: 0,
          transition: {
            duration: 0.1
          }
        }}
        key="alert-overlay"
      />

      <S.Alert
        variants={animation}
        initial="hidden"
        animate="show"
        exit="hidden"
        key="alert"
      >
        <S.Title>{t('superAlert.title')}</S.Title>
        <S.Content>{t('superAlert.content')}</S.Content>
        <Checkbox
          id="show-again-checkbox"
          label={t('superAlert.checkbox')}
          checked={!showAgain}
          onChange={() => setShowAgain((prevState) => !prevState)}
        />
        <S.Button onClick={closeModal}>{t('superAlert.button')}</S.Button>
      </S.Alert>
    </>
  );
}

export default SuperMasterAlert;
