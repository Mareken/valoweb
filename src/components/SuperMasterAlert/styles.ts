import { motion } from 'framer-motion';
import styled from 'styled-components';

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

export const Alert = styled(motion.div)`
  position: fixed;
  top: 40px;
  left: 50%;
  width: 90vw;
  max-width: 500px;
  background: #f9f9f9;
  border-radius: 8px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  z-index: 20;

  > label {
    transform: translate(-8px);
  }
`;

export const Title = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 16px;
  color: #191307;
`;

export const Content = styled.p`
  font-size: 1.125rem;
  color: #1C1C1C;
  margin-bottom: 24px;
  line-height: 1.25;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 0 24px;
  border-radius: 8px;
  background: #E60062;
  color: #f9f9f9;
  font-size: 1.125rem;
  align-self: stretch;
  margin-top: 32px;
  cursor: pointer;
  transition: all .15s ease;

  &:hover {
    background: #BE0051;
  }

  &:active {
    background: #950040;
  }
`;
