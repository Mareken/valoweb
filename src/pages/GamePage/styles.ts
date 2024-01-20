import { rgba } from 'polished';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  background: #1f1f1f;
  height: 100%;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.2) rgba(255, 255, 255, 0.7);
  padding-bottom: 120px;
  overflow-x: hidden;

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

type HeaderProps = {
  show: boolean;
};

export const Header = styled.div<HeaderProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background: ${rgba('#1f1f1f', 0.8)};
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 10;
  transform: ${(props) => (props.show ? 'translateY(0)' : 'translateY(-100%)')};
  transition: all 0.15s ease;

  > .play-button {
    transform: scale(0.7);
    transform-origin: left;
  }
`;

export const HeaderHelper = styled.div`
  width: 185px;
`;

export const ValLogo = styled.img`
  height: 50%;
  object-fit: contain;
  align-self: center;
`;

export const Hero = styled.main`
  height: 100vh;
  padding: 160px 80px 120px 80px;
  display: flex;
  align-items: center;
  position: relative;
  isolation: isolate;

  &::before,
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
  }

  &::before {
    background: url('image/game-client-bg.png');
    background-size: cover;
    background-position: right top;
    z-index: -1;
  }

  &::after {
    z-index: -1;
    background: radial-gradient(
      71.49% 71.13% at 68.26% 38.61%,
      rgba(31, 31, 31, 0) 0%,
      #1f1f1f 82.85%
    );
  }

  @media screen and (max-width: 850px) {
    padding: 120px 24px 80px 24px;

    &::before {
      background-size: cover;
      background-position: 50%;
    }

    &::after {
      background: radial-gradient(
        58.59% 65.44% at 83.56% 29.61%,
        rgba(31, 31, 31, 0) 0%,
        #1f1f1f 100%
      );
    }
  }
`;

export const HeroValLogo = styled.img`
  object-fit: contain;
  height: 50px;
  margin-bottom: 32px;

  @media screen and (max-width: 850px) {
    height: 60px;
    width: auto;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;

  @media screen and (min-width: 600px) and (max-width: 850px) {
    height: 80%;
  }
`;

export const SubTitle = styled.h1`
  font-weight: 700;
  font-size: 1.5rem;
  color: #f0f4f0;
  margin-top: auto;
`;

export const Text = styled.p`
  color: #f0f4f0;
  opacity: 0.8;
  max-width: 500px;
  line-height: 1.5;
  font-weight: 500;
  font-size: 1.125rem;
  margin: 8px 0 16px 0;
`;

export const BaseButton = styled.button`
  text-align: center;
  padding: 16px 24px;
  border-radius: 8px;
  background: #28292b;
  transition: all 0.15s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  color: #f0f4f0;
  cursor: pointer;
  letter-spacing: 0.01rem;
  font-weight: 600;

  &:hover {
    background: #2e2e30;
  }

  &:active {
    background: #333436;
  }
`;

export const Button = styled(BaseButton)`
  text-transform: uppercase;
`;

export const NewsWrapper = styled.div`
  display: flex;
  gap: 32px;
  padding: 0 80px 40px 80px;
  margin-top: -40px;

  @media screen and (max-width: 1200px) {
    gap: 24px;
  }

  @media screen and (max-width: 850px) {
    padding: 0 24px 40px 24px;
    flex-direction: column;
    align-items: stretch;
  }
`;

export const Tile = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px;
  border-radius: 8px;
  flex: 1;
  isolation: isolate;
  overflow: hidden;
  border-radius: 16px;
  aspect-ratio: 1.75 / 1;
  cursor: pointer;
`;

type TileThumbProps = {
  background: string;
  fallback: string;
};

export const TileThumb = styled.div<TileThumbProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
      to bottom,
      rgba(31, 31, 31, 0),
      rgba(31, 31, 31, 0.8)
    ),
    ${(props) => `url('${props.background}')`};
  background-blend-mode: multiply;
  background-size: 120%;
  background-repeat: no-repeat;
  background-position: center;
  transition: background-size 0.3s ease;
  z-index: -1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    isolation: isolate;
    left: 0;
    width: calc(150%);
    height: 100%;
    background: #910800;
    opacity: 0.4;
    transform: translateX(-130%) skewX(-10deg);
    transition: transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  &:hover {
    background-size: 125%;

    &::before {
      transform: skew(-15deg) translateX(-10%);
    }
  }
`;

export const CategoryTag = styled.span`
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.6);
  background: rgba(255, 255, 255, 0.6);
  border-radius: 16px;
  padding: 4px 8px;
  font-weight: 700;
  font-size: 0.75rem;
  align-self: flex-end;
  pointer-events: none;
`;

export const TileText = styled.p`
  font-weight: 600;
  font-size: 1.5rem;
  color: #f0f4f0;
  text-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
  max-width: 90%;
  pointer-events: none;

  @media screen and (max-width: 1200px) {
    font-size: 1.125rem;
  }
`;

export const Section = styled.section`
  display: flex;
  align-items: center;
  padding: 80px;
  gap: 64px;

  @media screen and (max-width: 850px) {
    padding: 40px 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
  }
`;

export const SectionTitle = styled.h2`
  font-family: 'Gabarito', sans-serif;
  font-weight: 500;
  font-size: 2rem;
  width: 250px;
  color: #f0f4f0;

  @media screen and (max-width: 850px) {
    width: 100%;
  }
`;

type SectionContentProps = {
  columnOnMobile?: boolean;
};

export const SectionContent = styled.div<SectionContentProps>`
  display: flex;
  align-items: center;

  > svg {
    color: #f0f4f0;
    opacity: 0.7;
  }

  @media screen and (max-width: 850px) {
    ${(props) =>
      props.columnOnMobile &&
      css`
        flex-direction: column;
        align-items: flex-start;
        gap: 32px;
      `}
  }
`;

export const AvailablePlatformsButton = styled(BaseButton)`
  padding: 16px;
  margin-left: 32px;
  font-size: 1rem;

  > span {
    margin-top: 4px;
    font-weight: 500;
  }

  @media screen and (max-width: 850px) {
    margin-left: 16px;
  }
`;

export const WindowsIcon = styled.div`
  height: 20px;
  aspect-ratio: 1 / 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 2px;

  > span {
    background: #f0f4f0;
    opacity: 0.7;
  }
`;

export const AdditionalDetailsBlock = styled.div`
  margin-right: 5vw;
  letter-spacing: 0.02rem;

  @media screen and (max-width: 850px) {
    margin: 0;
  }

  > * {
    color: #f0f4f0;
    font-weight: 600;
  }

  > p {
    opacity: 0.3;
    text-transform: uppercase;
    margin-bottom: 4px;
    font-size: 0.825rem;
  }

  > span,
  > a {
    opacity: 0.8;
    font-size: 1.125rem;
  }
`;
