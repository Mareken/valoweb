import React, { useState } from 'react';

import LanguageModal from 'components/LanguageModal';
import useUser from 'context/UserContext';
import { AnimatePresence } from 'framer-motion';
import { Globe, LayoutGrid, Power } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from './styles';

function Header({ modalTheme = 'dark' }: { modalTheme?: 'dark' | 'light' }) {
  const { signOut } = useUser();
  const { gameId } = useParams();
  const navigate = useNavigate();
  const [languageModalOpen, setLanguageModalOpen] = useState(false);

  const handleLeftButtonClick = () => {
    if (gameId) {
      navigate('/client', { replace: true });
      return;
    }

    signOut();
  };

  return (
    <S.Header moveUp={!!gameId}>
      <S.RoundedButton onClick={handleLeftButtonClick}>
        {gameId ? <LayoutGrid /> : <Power />}
      </S.RoundedButton>
      <S.RoundedButton onClick={() => setLanguageModalOpen(true)}>
        <Globe />
      </S.RoundedButton>

      <AnimatePresence mode="wait">
        {languageModalOpen && (
          <LanguageModal
            onClose={() => setLanguageModalOpen(false)}
            theme={modalTheme}
          />
        )}
      </AnimatePresence>
    </S.Header>
  );
}

export default Header;
