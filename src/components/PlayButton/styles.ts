import { rgba } from 'polished';
import styled from 'styled-components';

export const Button = styled.button`
  padding: 12px 32px 12px 12px;
  border-radius: 24px;
  background: linear-gradient(
    88deg,
    #ff3742 1.49%,
    #ff5c58 28.65%,
    #fe7563 98.48%
  );
  display: flex;
  align-items: center;
  box-shadow: 0px 2px 15px 0px rgba(254, 68, 73, 0.4);
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover {
    box-shadow: 0px 2px 30px 0px rgba(254, 68, 73, 0.6);

    > div {
      &::before {
        transform: scale(1.1);
      }
    }
  }

  .play-button__progress {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const PlayWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  aspect-ratio: 1 / 1;
  padding-left: 2px;
  isolation: isolate;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: #141213;
    border-radius: 50%;
    transition: all 0.15s ease;
    box-shadow: 0 4px 8px ${rgba('#141213', 0.3)};
    z-index: -1;
  }
`;

export const Label = styled.span`
  font-size: 2rem;
  font-weight: 600;
  color: #f0f4f0;
  margin-left: 12px;
  letter-spacing: -0.1rem;
  margin-top: 4px;
`;
