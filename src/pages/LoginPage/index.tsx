import React from 'react';
import Input from 'components/Input';

import logo from 'assets/image/val-logo.svg';

import * as S from './styles';

function LoginPage() {
  return (
    <S.Container>
      <S.LeftSide>
        <S.Header>
          <S.Logo draggable="false" src={logo} />
          <i className="icon-help-circle" />
        </S.Header>

        <S.Headline>Sign in with your Riot Account</S.Headline>

        <S.LoginForm>
          <Input type="text" label="Username" />
          <Input type="password" label="Password" />

          <S.RememberMeCheckbox htmlFor="remember-me-checkbox">
            <S.CheckboxInput
              type="checkbox"
              id="remember-me-checkbox"
              checked
              onChange={() => {}}
            />
            <S.CheckboxBox />
            <S.CheckboxLabel>Stay signed in</S.CheckboxLabel>
          </S.RememberMeCheckbox>

          <S.ButtonLogin>
            <i className="icon-arrow-right" />
          </S.ButtonLogin>
        </S.LoginForm>

        <S.Footer>
          <S.FooterWrapper>
            <S.FooterLink href="">Create Account</S.FooterLink>
            <S.FooterLink href="">Can't sign in?</S.FooterLink>
          </S.FooterWrapper>

          <S.FooterText as="span">V20.7.0</S.FooterText>
        </S.Footer>
      </S.LeftSide>

      <S.RightSide />
    </S.Container>
  );
}

export default LoginPage;
