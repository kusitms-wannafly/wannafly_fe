import React from 'react';
import styled from 'styled-components';
import { ModalContainer, ModalBackdrop } from './application/SaveModal';
import logo_grey from '@assets/logo/logo-grey.svg';
import { GoogleLoginBtn } from '@components/buttons/GoogleLoginBtn';

interface propsType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export const LoginModal = ({ isOpen, setIsOpen }: propsType) => {
  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ModalContainer>
      {isOpen ? (
        <ModalBackdrop onClick={openModalHandler}>
          <ModalView onClick={(e) => e.stopPropagation()}>
            <GuideText>
              <LogoContainer src={logo_grey} alt="logo" />
              <TextContainer>
                <div>작성 완료한 지원서, 작성 중인 지원서를</div>
                <div>한 곳에 보관하여 한 번에 확인하세요.</div>
              </TextContainer>
            </GuideText>
            <LoginBtnsContainer>
              <SocialLogin>간편 로그인</SocialLogin>
              <GoogleLoginBtn />
            </LoginBtnsContainer>
          </ModalView>
        </ModalBackdrop>
      ) : null}
    </ModalContainer>
  );
};

const ModalView = styled.div`
  width: 420px;
  height: 450px;

  background-color: rgba(30, 31, 32, 1);
  border: 1px solid #686a70;
  border-radius: 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GuideText = styled.div`
  width: 100%;
  height: 180px;
  border-radius: 15px 15px 0 0;
  background-color: ${({ theme }) => theme.colors.grey1};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LogoContainer = styled.img`
  width: 200px;
  margin-bottom: 5px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.grey8};
  font-size: 15px;
  div {
    margin: 4px 0;
  }
`;

const LoginBtnsContainer = styled.div`
  width: 100%;
  flex: 1;
  padding: 30px 40px 0;

  a {
    width: 200px;
  }
`;

const SocialLogin = styled.div`
  color: ${({ theme }) => theme.colors.wht};
  font-size: 13px;
`;
