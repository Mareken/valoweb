import { darken, lighten } from 'polished';
import styled from 'styled-components';

type ButtonProps = {
  brand: string;
}

function styleBrandButton(brand: string) {
  switch (brand) {
    case 'facebook':
      return `
        background: #1877f2;

        &:hover {
          background: ${darken(.1, '#1877F2')};
        }`;
    case 'google':
      return `
        box-shadow: 0 0 0 2px #ededed inset;
        background: white;
        position: relative;

        &:hover {
          background: ${darken(.02, 'white')};
        }
      `;
    case 'apple':
      return `
        background: black;

        &:hover {
          background: ${lighten(.2, 'black')};
        }
      `;
    case 'xbox':
      return `
        background: #107c10;

        &:hover {
          background: ${darken(.1, '#107C10')};
        }
      `;
    default:
      return '';
  }
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  border-radius: 6px;
  height: 40px;
  transition: all 0.15s ease;

  svg {
    width: 24px;
    height: 24px;
    color: white;
  }
  
  ${props => styleBrandButton(props.brand)};
`;