import styled from 'styled-components';

export const Checkbox = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: fit-content;
`;

export const CheckboxBox = styled.div`
  flex: 0 0 20px;
  height: 20px;
  border-radius: 6px;
  background: #EDEDED;
  margin-right: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all .15s ease;

  &::before,
  &::after {
    content: '';
    position: absolute;
    background: white;
    height: 2px;
    opacity: 0;
    transition: opacity .15s ease;
  }

  &::before {
    width: 25%;
    border-radius: 1px;
    transform: translate(-55%, 60%) rotate(45deg);
  }

  &::after {
    width: 50%;
    border-radius: 1px;
    transform: translate(15%, 20%) rotate(-45deg);
  }
`;

export const CheckboxInput = styled.input`
  display: none;

  &:checked {
    + ${CheckboxBox} {
      background: #E60062;

      &::before, &::after {
        opacity: 1;
      }
    }
  }
`;

export const CheckboxLabel = styled.span`
  color: #191307;
	margin-left: 4px;
  flex: 1;
  font-weight: 600;
  white-space: nowrap;
`;
