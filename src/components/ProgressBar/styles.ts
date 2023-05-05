import styled, { css, keyframes } from 'styled-components';

type SizeProps = {
  size: number;
}

type CircleIndicatorProps = {
  isSpinner: boolean;
  animationDuration: string;
}

type LabelProps = {
  labelColor: string;
}

const spinner = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Wrapper = styled.div<SizeProps>`
  width: ${props => props.size};
  height: ${props => props.size};
  position: relative;
`;

export const Svg = styled.svg<SizeProps>`
  @extend Wrapper;
  transform: rotate(-90deg);
`;

export const CircleTrack = styled.circle``;

export const CircleIndicator = styled.circle<CircleIndicatorProps>`
  animation-duration: ${props => props.animationDuration};
  
  ${props => props.isSpinner && css`
    animation: spinner .75s linear infinite;
    transform-origin: center;
  `}
`;

export const LabelContainer = styled.div<LabelProps>`
  color: ${props => props.labelColor};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

export const LabelLoading = styled.span`
  display: block;
  opacity: .5;
  font-size: 0.75em;
`;

export const LabelProgress = styled.span`
  display: block;
  font-size: 1.5em;
  font-weight: bold;
`;