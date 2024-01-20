import styled from 'styled-components';

type HeaderProps = {
  moveUp: boolean;
};

export const Header = styled.div<HeaderProps>`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  height: 100px;
  width: 100%;
  z-index: 10;
  transition: all 0.3s ease;
  transform: ${(props) =>
    props.moveUp ? 'translateY(-8px)' : 'translateY(0)'};

  @media screen and (max-width: 600px) {
    padding: 0 24px;
  }
`;

export const RoundedButton = styled.button`
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.13);
  backdrop-filter: blur(1.5px);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.1s ease;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.7);

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    color: rgba(255, 255, 255, 0.9);
  }
`;
