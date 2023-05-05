import styled from 'styled-components';

export const Input = styled.input`
  flex: 1;
  width: 100%;
  height: 70px;
  padding: 0 16px;
  font-size: 1rem;
  color: #191307;
  background: transparent;
  border: none;

  &:focus {
    outline: none;
  }
`;

export const Label = styled.span`
  position: absolute;
  top: 50%;
  left: 16px;
  text-transform: uppercase;
  transform: scale(1) translate(0, -50%);
  color: #989898;
  font-weight: 600;
  transition: all .15s ease;
  pointer-events: none;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background: #EDEDED;
  margin-bottom: 16px;
  border-radius: 8px;
  box-shadow: 0 0 0 2px transparent inset;
  position: relative;
  transition: all .15s ease;

  &:focus-within {
    box-shadow: 0 0 0 2px #191307 inset;
    background: white;

    > Label {
      transform: scale(.7) translate(-4px, -100%);
      transform-origin: left top;
    }
  }
`;
