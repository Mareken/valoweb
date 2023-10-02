import { ReactComponent as RiotLogo } from 'assets/image/riot-logo.svg';
import ImgWithFallback from 'components/ImgWithFallback';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: rgba(255,255,255,.2) rgba(255,255,255,.7);
	background: #141212;
	height: 100%;
  will-change: opacity;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 4px;
    background: rgba(255,255,255,.2);
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: rgba(255,255,255,.7);
  }
`;

type RiotLogoProps = {
  hide: number;
}

export const RLogo = styled(RiotLogo)<RiotLogoProps>`
  height: 40px;
  position: absolute;
  top: 34px;
  left: 50%;
  transform: translateX(-50%);
  opacity: ${props => props.hide};
  transition: all .1s ease;
  
  path {
    fill: #F0F4F0;
  }

  @media screen and (max-width: 600px) {
    height: 32px;
  }
`;

export const Header = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  height: 100px;
	width: 100%;
	z-index: 10;

  @media screen and (max-width: 600px) {
    padding: 0 24px;
  }
`;

export const RoundedButton = styled.button`
  width: 48px;
  height: 48px;
  background: rgba(255,255,255,.2);
  box-shadow: 0px 0px 5px rgba(0, 0, 0, .13);
  backdrop-filter: blur(1.5px);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .1s ease;
  cursor: pointer;
  color: rgba(255, 255, 255, .7);

  &:hover {
    background: rgba(255,255,255,.3);
    color: rgba(255, 255, 255, .9);
  }
`;

export const MyGamesSection = styled.div`
  padding: 160px 80px 120px 80px;
  background: #1C1C1C;

  @media screen and (max-width: 600px) {
    padding: 120px 24px 80px 24px;
  }
`;

export const SectionTitle = styled.h6`
  font-weight: 600;
	font-size: 2rem;
  color: white;
  margin-bottom: 40px;

  @media screen and (max-width: 600px) {
    text-align: center;
  }
`;

export const MyGamesContainer = styled(motion.div)`
  display: grid;
  gap: 32px;
	grid-template-columns: repeat(auto-fill, 260px);

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 40px;
  }
`;

export const AllGamesSection = styled.div`
  padding: 80px;

  @media screen and (max-width: 600px) {
    padding: 80px 24px;
  }
`;

export const AllGamesContainer = styled(motion.div)`
  display: grid;
  gap: 40px;
	grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 40px;
    width: 100%;
  }

  @media screen and (max-width: 980px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const SpecialEventsSection = styled.div`
  padding: 80px;

  @media screen and (max-width: 600px) {
    padding: 40px 24px;
  }
`;

export const SpecialEventsBanner = styled(ImgWithFallback)`
  width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 8px;
  margin-bottom: 24px;
`;

export const SpecialEventsTitle = styled.h6`
  font-weight: 600;
  font-size: 2rem;
  color: #F0F4F0;
  margin-bottom: 16px;
`;

export const SpecialEventsDetails = styled.div`
  width: 100%;
  display: flex;
  gap: 24px;
  align-items: flex-start;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: unset;
  }
`;

export const SpecialEventsParagraph = styled.p`
  flex: 1;
  color: #F0F4F0;
  opacity: .7;
  line-height: 1.5;
  font-weight: 600;
  font-size: 1.125rem;
`;

export const SpecialEventsButtons = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 24px;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }
`;

export const SpecialEventsButton = styled.a`
  flex: 1;
  border-radius: 24px;
  height: 60px;
  cursor: pointer;
  font-weight: 700;
  font-size: 1.15rem;
  transition: all .15s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #F0F4F0;
  text-align: center;
  line-height: 1.15rem;

  &.primary {
    background: #E60062;

    &:hover {
      background: #BE0051;
    }

    &:active {
      background: #950040;
    }
  }

  &.secondary {
    background: #292727;

    &:hover {
      background: #211E1F;
    }

    &:active {
      background: #141212;
    }
  }

  @media screen and (max-width: 600px) {
    flex: 0 0 60px;
  }
`;