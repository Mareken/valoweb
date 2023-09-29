import { darken } from 'polished';
import styled, { css } from 'styled-components';

type LabelProps = {
	shouldGoUp: boolean;
}

export const Input = styled.input`
  flex: 1;
  width: 100%;
  height: 56px;
  padding: 12px 8px 0 8px;
  font-size: 1rem;
  color: #191307;
  font-weight: 600;
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
  left: 12px;
  text-transform: uppercase;
  transform: translate(0, -50%) scale(1);
  color: #989898;
  font-weight: 700;
  transition: all .1s ease;
  pointer-events: none;
  transform-origin: top left;

	${({ shouldGoUp }) => shouldGoUp && css`
		transform: translate(-4px, -20px) scale(.7);
	`}
`;

export const ButtonTogglePasswordVisibility = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  cursor: pointer;
  opacity: 0;
  pointer-events: none;
  background: transparent;
  transition: all .1s ease;
  margin-right: 10px;

  &:hover {
    background: #EDEDED;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background: #EDEDED;
  margin-bottom: 16px;
  border-radius: 6px;
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
    background: #f9f9f9;

    ${ButtonTogglePasswordVisibility} {
      opacity: 1;
      pointer-events: auto;
    }
  }
`;