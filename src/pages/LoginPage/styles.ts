import { motion } from 'framer-motion';
import { rgba } from 'polished';
import styled, { css, keyframes } from 'styled-components';

export const Container = styled(motion.div)`
  display: flex;
  height: 100%;
  user-select: none;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border: 8px solid #f9f9f9;
    pointer-events: none;
  }
`;

export const LeftSide = styled.div`
  flex: 0 0 480px;
  padding: 40px 40px 20px 40px;
  background: #f9f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  height: 32px;
  object-fit: contain;
`;

export const WrapperDiv = styled(motion.div)`
  width: 100%;
`;

export const Headline = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  color: #191307;
  margin: 64px 0 24px 0;
  text-align: center;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const LoginAltButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`;

export const RememberMeCheckbox = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: fit-content;
`;

export const CheckboxBox = styled.div`
  flex: 0 0 20px;
  height: 20px;
  border-radius: 6px;
  background: #EDEDED;
  margin-right: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all .15s ease;

  &::before,
  &::after {
    content: '';
    position: absolute;
    background: white;
    height: 2px;
    opacity: 0;
    transition: opacity .15s ease;
  }

  &::before {
    width: 25%;
    border-radius: 1px;
    transform: translate(-55%, 60%) rotate(45deg);
  }

  &::after {
    width: 50%;
    border-radius: 1px;
    transform: translate(15%, 20%) rotate(-45deg);
  }
`;

export const CheckboxInput = styled.input`
  display: none;

  &:checked {
    + ${CheckboxBox} {
      background: #E60062;

      &::before, &::after {
        opacity: 1;
      }
    }
  }
`;

export const CheckboxLabel = styled.span`
  color: #191307;
	margin-left: 4px;
  flex: 1;
  font-weight: 600;
  white-space: nowrap;
`;

export const ButtonLogin = styled(motion.button)`
  width: 72px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #E60062;
  align-self: center;
  border-radius: 20px;
  border: 2px solid #E60062;
  cursor: pointer;
  transition: all .15s ease;
	margin-bottom: 40px;

  .button-login-icon {
    color: white;
  }

  &:disabled {
    pointer-events: none;
    border: 2px solid #E8E8E8;
    background: transparent;

    .button-login-icon {
      color: #E8E8E8;
    }
  }
`;

const loadAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoginLoaderWrapper = styled(motion.div)`
  @extend WrapperDiv;
  position: absolute;
  top: 50%; 
`;

export const LoginLoader = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 4px solid #191307;
  border-top-color: #E60062;
  animation: ${loadAnimation} 1.5s linear 2;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
  text-align: center;
  width: 100%;
`;

export const FooterWrapper = styled.div`
	display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
`;

export const FooterLink = styled.a`
  color: #989898;
  font-weight: 800;
  cursor: pointer;
	font-size: .75rem;
	text-transform: uppercase;
	transition: all .15s ease;

	&:hover {
		color: #191307;
	}
  
  &:not(:last-child) {  
		margin-bottom: 2px;
	}
`;

export const FooterText = styled.span`
  position: absolute;
  right: 0;
  color: #989898;
  font-weight: 800;
  opacity: .5;
  font-size: .75rem;
	text-transform: uppercase;
	transition: all .15s ease;
  align-self: flex-end;
`;

export const FooterDisclaimer = styled.span`
  align-self: center;
  position: relative;
  margin-top: 16px;
  color: #989898;
  font-weight: 800;
  opacity: .5;
  font-size: .75rem;
	text-transform: uppercase;

  > a {
    color: inherit;
    cursor: pointer;
    text-decoration: underline;
    pointer-events: auto;
  }
`;

export const RightSide = styled.div`
  flex: 1;
  height: 100%;
  background: url('src/assets/image/png/client-bg.png');
  background-size: cover;
  background-position: 10% center;
`;

export const RightSideButtons = styled.div`
  position: absolute;
  top: 40px;
  right: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

type RoundedButtonProps = {
  highlight?: boolean;
}

export const RoundedButton = styled.button<RoundedButtonProps>`
  width: 48px;
  height: 48px;
  background: ${rgba('#f9f9f9', .7)};
  box-shadow: 0px 0px 5px rgba(0, 0, 0, .13);
  backdrop-filter: blur(1.5px);
  border-radius: 16px;
  display: flex;
  align-items: center;
  margin-left: 16px;
  justify-content: center;
  transition: all .1s ease;

  &:hover {
    background: ${rgba('#f9f9f9', 1)};
  }

  &:last-of-type {
    cursor: pointer;

    ${props => props.highlight && css`
        background: rgba(255,255,255,.3);
    `}
  }
`;