import styled, { css } from 'styled-components';
import { darken } from 'polished';

type LabelProps = {
	shouldGoUp: boolean;
}

export const Input = styled.input`
  flex: 1;
  width: 100%;
  height: 64px;
  padding: 8px 12px 0 12px;
  font-size: 1rem;
  color: #191307;
  background: transparent;
	font-size: 1.25rem;
  border: none;

  &:focus {
    outline: none;
		border: none;
  }
`;

export const Label = styled.span<LabelProps>`
  position: absolute;
  top: 50%;
  left: 16px;
  text-transform: uppercase;
  transform: translate(0, -50%) scale(1);
  color: #989898;
  font-weight: 600;
  transition: all .15s ease;
  pointer-events: none;
  transform-origin: top left;

	${({ shouldGoUp }) => shouldGoUp && css`
		transform: translate(-4px, -24px) scale(.7);
	`}
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background: #EDEDED;
  margin-bottom: 16px;
  border-radius: 4px;
	border: 2px solid transparent;
  position: relative;
  transition: all .15s ease;
	overflow: hidden;
	will-change: transform;

  &:hover {
		background: ${darken(.03, '#EDEDED')};
  }

  &:focus-within {
    border-color: #191307;
    background: white;
  }
`;
