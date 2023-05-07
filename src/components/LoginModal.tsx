import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

interface ModalDefaultType {
  onClickToggleModal: () => void;
}

export const LoginModal = ({
  onClickToggleModal,
  children,
}: PropsWithChildren<ModalDefaultType>) => {
  return (
    <ModalContainer>
      <DialogBox>
        <SmallBox>{children}</SmallBox>
        <LoginBoxWrapper>
          <LoginBox>Google 로그인</LoginBox>
          <LoginBox>카카오 로그인</LoginBox>
          <LoginBox>네이버 로그인</LoginBox>
        </LoginBoxWrapper>
      </DialogBox>
      <Backdrop
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();

          if (onClickToggleModal) {
            onClickToggleModal();
          }
        }}
      />
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
`;

const DialogBox = styled.dialog`
  width: 795px;
  height: 699px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  border-radius: 3px;
  box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);
  box-sizing: border-box;
  background-color: white;
  z-index: 10000;
`;

const SmallBox = styled.div`
  width: 528px;
  height: 333px;
  margin-top: 20px;
  background-color: #eeeeee;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  border: solid 3px;
`;

const LoginBoxWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  width: 648px;
  flex-direction: column;
  gap: 10px;
`;

const LoginBox = styled.div`
  width: 648px;
  height: 85px;
  color: ${(props) => props.theme.colors.blk};
  border-radius: 3px;
  border: 3px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 35px;
  font-weight: bold;
`;

const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.2);
`;
