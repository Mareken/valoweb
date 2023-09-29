import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
  padding: 0 120px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: rgba(255,255,255,.2) rgba(255,255,255,.7);

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

export const Header = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px;
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
  margin-left: 16px;
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
  padding: 160px 0 120px 0;
  background: #1C1C1C;
`;

export const SectionTitle = styled.h6`
  font-weight: 600;
  color: white;
  margin-bottom: 40px;
`;

export const MyGamesContainer = styled.div`
  display: flex;
  gap: 24px;
`;

export const GameTile = styled.div`
  cursor: pointer;
`;

export const GameThumb = styled.div`
  border-radius: 8px;
  position: relative;
  border: 2px solid #1C1C1C;
`;

export const GameThumbInner = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

export const GameThumbVideo = styled.video`
  width: 100%;
  height: 100%;
`;

export const GameTitle = styled.div`
  color: white;
  font-weight: 600;
`;