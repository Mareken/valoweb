import { motion } from 'framer-motion';
import { rgba } from 'polished';
import styled from 'styled-components';

type ForegroundProps = {
  foreground: string;
}

type BackgroundProps = {
  background: string;
}

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

export const LangModal = styled(motion.div)<BackgroundProps>`
  position: fixed;
  top: 50%;
  left: 50%;
  background: ${props => props.background};
  border-radius: 8px;
  padding: 24px 0px;
  display: flex;
  flex-direction: column;
  z-index: 20;
  width: 300px;
`;

export const ModalHeading = styled.p<ForegroundProps>`
  font-size: 1rem;
  color: ${props => props.foreground};
  display: flex;
  align-items: center;
  margin: 0px 0px 24px 24px;
  font-weight: 500;
`;

type SelectedProps = {
  selected: boolean;
  background: string;
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
  background: ${props => props.background};
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

export const Language = styled.p<ForegroundProps>`
  color: ${props => props.foreground};
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
  background: ${props => props.selected ? rgba('#E60062', .2) : props.background};

  &:hover,
  &:active {
    background: ${props => rgba('#E60062', .2)};
  }
`;
