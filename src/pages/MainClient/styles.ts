import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: rgba(255,255,255,.2) rgba(255,255,255,.7);
	background: #141212;
	height: 100%;

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
	width: 100%;
	z-index: 10;
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
`;

export const SectionTitle = styled.h6`
  font-weight: 600;
	font-size: 2rem;
  color: white;
  margin-bottom: 40px;
`;

export const MyGamesContainer = styled.div`
  display: grid;
  gap: 40px;
	grid-template-columns: repeat(auto-fill, minmax(250px, .3fr));
`;