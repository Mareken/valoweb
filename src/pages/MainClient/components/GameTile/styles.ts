import { motion } from 'framer-motion';
import { rgba } from 'polished';
import styled, { keyframes } from 'styled-components';
import ImgWithFallback from '../../../../components/ImgWithFallback';

const lolGradient = `linear-gradient(0deg, #2A8FC4 0%, ${rgba(
  '#2A8FC4',
  0.2
)} 100%);`;
const tftGradient = `linear-gradient(0deg, #FF8626 0%, ${rgba(
  '#FF8626',
  0.2
)} 100%)`;
const valGradient = `linear-gradient(0deg, #FF3945 0%, ${rgba(
  '#FF3945',
  0.2
)} 100%)`;
const lorGradient = `linear-gradient(0deg, #967E4E 0%, ${rgba(
  '#967E4E',
  0.2
)} 100%)`;
const wrGradient = `linear-gradient(0deg, #004DCF 0%, ${rgba(
  '#967E4E',
  0.2
)} 100%)`;

function chooseGradient(gameName: string) {
  switch (gameName) {
    case 'lol':
      return lolGradient;
    case 'tft':
      return tftGradient;
    case 'valorant':
      return valGradient;
    case 'wr':
      return wrGradient;
    case 'lor':
      return lorGradient;
    default:
      return '';
  }
}

const shine = keyframes`
	0%, 100% {
		opacity: 0;
	}
	50% {
		opacity: .8;
	}
`;

export const GameStatus = styled.div<GameStatusProps>`
  position: absolute;
  bottom: 1px;
  left: 0;
  width: 100%;
  padding: 15px;
  background: ${(props) => props.background};
  color: #141212;
  font-size: 1.15rem;
  font-weight: 600;
  border-radius: 0 0 8px 8px;
  transition: all 0.15s ease;
  z-index: 5;
  pointer-events: none;
`;

type GameThumbProps = {
  gameName: string;
};

export const GameThumb = styled.div<GameThumbProps>`
  border-radius: 10px;
  position: relative;
  display: flex;
  transition: all 0.3s cubic-bezier(0.74, -0.29, 0.43, 2.02);
  will-change: transform;

  &::before {
    content: '';
    position: absolute;
    inset: 50% auto auto 50%;
    transform: translate(-50%, -50%);
    width: calc(100% + 6px);
    height: calc(100% + 5px);
    border: 4px solid rgba(255, 255, 255, 0.5);
    border-radius: 15px;
    opacity: 0;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.3);
  }

  &:has(> ${GameStatus}) {
    &::after {
      content: '';
      background: rgba(0, 0, 0, 0.4);
      width: 100%;
      height: 100%;
      border-radius: 8px;
      position: absolute;
      top: 0;
      left: 0;
      transition: all 0.15s ease;
    }
  }

  > picture {
    position: relative;
    width: 100%;

    &::before {
      content: '';
      position: absolute;
      inset: 50% auto auto 50%;
      width: 110%;
      height: 120%;
      border-radius: 40%;
      background: ${(props) => chooseGradient(props.gameName)};
      transform: translate(-50%, -50%);
      z-index: -1;
      filter: blur(20px);
      opacity: 0;
    }
  }
`;

type GameStatusProps = {
  background: string;
};

export const GameTile = styled(motion.div)`
  cursor: pointer;
  position: relative;

  &:hover {
    > ${GameThumb} {
      transform: scale(1.03);

      &::before {
        opacity: 1;
      }

      &::after {
        opacity: 0;
      }

      > picture {
        &::before {
          animation: ${shine} 0.6s ease forwards 1;
        }
      }
    }

    ${GameStatus} {
      opacity: 0;
    }
  }
`;

type GameThumbInnerProps = {
  hide: number;
};

export const GameThumbInner = styled(ImgWithFallback)<GameThumbInnerProps>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  position: relative;
  opacity: ${(props) => props.hide};
  transition: all 0.15s ease;
  transition-delay: ${(props) => (props.hide ? '0' : '.3s')};
`;

type GameThumbVideoProps = {
  show: number;
};

export const GameThumbVideo = styled.video<GameThumbVideoProps>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  position: absolute;
  opacity: ${(props) => props.show};
  transition: all 0.15s ease;
  transition-delay: ${(props) => (props.show ? '.45s' : '0')};
`;

export const GameTitle = styled.div`
  color: #f0f4f0;
  font-weight: 500;
  margin-top: 12px;
  font-size: 1rem;
  letter-spacing: 0.02rem;
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: 2px;

  > svg {
    transform: translateY(-2px);
    width: 1.75rem;
  }
`;
