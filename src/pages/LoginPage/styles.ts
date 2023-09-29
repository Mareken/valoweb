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
  background: rgba(255,255,255,.2);
  box-shadow: 0px 0px 5px rgba(0, 0, 0, .13);
  backdrop-filter: blur(1.5px);
  border-radius: 16px;
  display: flex;
  align-items: center;
  margin-left: 16px;
  justify-content: center;
  transition: all .1s ease;

  &:hover {
    background: rgba(255,255,255,.3);
  }

  &:last-of-type {
    cursor: pointer;

    ${props => props.highlight && css`
        background: rgba(255,255,255,.3);
    `}
  }
`;

export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 15;
  background: rgba(0,0,0,.7);
  opacity: 0;
`;

export const LangModal = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  background: white;
  border-radius: 8px;
  padding: 24px 0px;
  display: flex;
  flex-direction: column;
  z-index: 20;
  width: 300px;
`;

export const ModalHeading = styled.p`
  font-size: 1rem;
  color: #191307;
  display: flex;
  align-items: center;
  margin: 0px 0px 24px 24px;
  font-weight: 500;
`;

type SelectedProps = {
  selected: boolean;
}

export const Radio = styled.div<SelectedProps>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid ${props => props.selected ? '#E60062' : '#989898'};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  transition: all .3s ease;

  &::before {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${props => props.selected ? '#E60062' : '#989898'};
    transition: all .3s ease;
    opacity: ${props => props.selected ? 1 : 0};
    transform: ${props => props.selected ? 'scale(1)' : 'scale(0)'};
  }
`;

export const Language = styled.p`
  color: #191307;
  transition: all .15s ease;
  margin-left: 16px;
  font-size: 1rem;
`;

export const ButtonChangeLanguage = styled.button<SelectedProps>`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all .15s ease;
  height: 50px;
  padding: 0 24px;
  background: ${props => props.selected ? rgba('#E60062', .2) : 'white'};

  &:hover,
  &:active {
    background: ${props => rgba('#E60062', .2)};
  }
`;