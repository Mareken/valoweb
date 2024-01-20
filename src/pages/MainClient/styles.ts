import { ReactComponent as RiotLogo } from 'assets/image/riot-logo.svg';
import ImgWithFallback from 'components/ImgWithFallback';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.2) rgba(255, 255, 255, 0.7);
  background: #141212;
  height: 100%;
  will-change: opacity;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.2);
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.7);
  }
`;

type RiotLogoProps = {
  hide: number;
};

export const RLogo = styled(RiotLogo)<RiotLogoProps>`
  height: 40px;
  position: absolute;
  top: 34px;
  left: 50%;
  transform: translateX(-50%);
  opacity: ${(props) => props.hide};
  transition: all 0.1s ease;

  path {
    fill: #f0f4f0;
  }

  @media screen and (max-width: 600px) {
    height: 32px;
  }
`;

export const MyGamesSection = styled.div`
  padding: 160px 80px 120px 80px;
  background: #1c1c1c;

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
  margin-bottom: 36px;
`;

export const SpecialEventsTitle = styled.h6`
  font-weight: 600;
  font-size: 2rem;
  color: #f0f4f0;
  margin-bottom: 16px;
  width: 50%;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
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
  color: #f0f4f0;
  opacity: 0.7;
  line-height: 1.5;
  font-weight: 500;
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
  font-weight: 600;
  font-size: 1.15rem;
  transition: all 0.15s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f0f4f0;
  text-align: center;
  background: #292727;
  gap: 12px;

  > span {
    margin-top: 4px;
  }

  &:hover {
    background: #211e1f;
  }

  &:active {
    background: #141212;
  }

  @media screen and (max-width: 600px) {
    flex: 0 0 60px;
  }
`;
