import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  height: 100%;
`;

export const LeftSide = styled.div`
  flex: 0 0 500px;
  padding: 80px 40px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

	@media screen and (max-height: 800px) {
		padding: 40px;
	}
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
	width: 100%;

	i {
		color: #c9c9c9;
	}
`;

export const Logo = styled.img`
  width: 48px;
  aspect-ratio: 1;
  object-fit: contain;
  color: #191307;
`;

export const Headline = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: #191307;
  margin-bottom: 2rem;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const RememberMeCheckbox = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const CheckboxBox = styled.div`
  flex: 0 0 24px;
  height: 24px;
  border-radius: 4px;
  background: #EDEDED;
  margin-right: 4px;
  transition: all .15s ease;
`;

export const CheckboxInput = styled.input`
  display: none;

  &:checked {
    + ${CheckboxBox} {
      background: orangered;
    }
  }
`;

export const CheckboxLabel = styled.span`
  color: #989898;
	margin-left: 4px;
  font-weight: 600;
`;

export const ButtonLogin = styled.button`
  width: 96px;
  height: 96px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  align-self: center;
  border-radius: 24px;
  border: 3px solid #c9c9c9;
  cursor: pointer;
  transition: all .15s ease;
	margin-top: 32px;

  i {
    transition: all .15s ease;
		font-size: 2rem;
		color: #c9c9c9;
  }

  &:hover,
	&:focus {
    border-color: #191307;

    i {
      color: #191307;
    }
  }

	@media screen and (max-height: 800px) {
		width: 80px;
 		height: 80px;
		border-width: 2px;
		margin-top: 16px;
	}
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: auto;
  width: 100%;
`;

export const FooterWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

export const FooterLink = styled.a`
  color: #989898;
  font-weight: 700;
  cursor: pointer;
	font-size: .875rem;
	text-transform: uppercase;
	transition: all .15s ease;

	&:hover {
		color: ${darken(.1, '#989898')};
	}
  
  &:not(:last-child) {  
		margin-bottom: 4px;
	}
`;

export const FooterText = styled(FooterLink)`
  opacity: .8;
	cursor: default;
	pointer-events: none;
`;

export const RightSide = styled.div`
  flex: 1;
  height: 100%;
  background: url('src/assets/image/client-bg.webp');
  background-size: cover;
  background-position: center;
`;
