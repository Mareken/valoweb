import React, { useCallback } from 'react';

import { ReactComponent as AppleLogo } from 'assets/icons/logo-apple.svg';
import { ReactComponent as FacebookLogo } from 'assets/icons/logo-facebook.svg';
import { ReactComponent as GoogleLogo } from 'assets/icons/logo-google.svg';
import { ReactComponent as XboxLogo } from 'assets/icons/logo-xbox.svg';

interface IBrandButtonProps {
  brand?: string;
  iconColor?: string;
}

import * as S from './styles';

function BrandButton({
  brand = 'google',
  iconColor = '#000',
  ...props
}: IBrandButtonProps) {
  const renderBrandIcon = useCallback(() => {
    switch (brand) {
      case 'apple':
        return <AppleLogo />;
      case 'facebook':
        return <FacebookLogo />;
      case 'google':
        return <GoogleLogo />;
      case 'xbox':
        return <XboxLogo />;
      default:
        return <FacebookLogo />;
    }
  }, [brand]);

  return (
    <S.Button brand={brand} onClick={(evt) => evt.preventDefault()} {...props}>
      {renderBrandIcon()}
    </S.Button>
  );
}

export default BrandButton;
