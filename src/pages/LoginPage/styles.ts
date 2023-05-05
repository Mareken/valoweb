import styled from 'styled-components';

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
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const Logo = styled.img`
  width: 60px;
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
    + CheckboxBox {
      background: #191307;
    }
  }
`;

export const CheckboxLabel = styled.span`
  color: #989898;
  font-weight: 400;
`;

export const ButtonLogin = styled.button`
  width: 96px;
  height: 96px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  align-self: center;
  border-radius: 16px;
  border: 3px solid #EDEDED;
  cursor: pointer;
  transition: all .15s ease;

  * {
    transition: all .15s ease;
  }

  &:hover {
    border-color: #191307;

    * {
      color: #191307;
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
`;

export const FooterWrapper = styled.div``;

export const FooterLink = styled.a`
  color: #989898;
  font-weight: 700;
  cursor: pointer;
`;

export const FooterText = styled(FooterLink)`
  opacity: .8;
`;

export const RightSide = styled.div`
  flex: 1;
  height: 100%;
  background: url('src/assets/image/client-bg.webp');
  background-size: cover;
  background-position: right center;
`;
