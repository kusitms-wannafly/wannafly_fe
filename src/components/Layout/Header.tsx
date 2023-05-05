import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { LoginModal } from '@components/LoginModal';

export const Header = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleLoginButtonClick = () => {
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  return (
    <HeaderContainer>
      <Link to="/">
        <Logo>로고</Logo>
      </Link>
      <Link to="/apply">
        <ApplyContainerButton>지원서보관함</ApplyContainerButton>
      </Link>
      <Link to="/category">
        <CategoryButton>유형별카테고리</CategoryButton>
      </Link>
      <LoginButton onClick={handleLoginButtonClick}>로그인</LoginButton>
      <ModalContainer>
        {modalVisible && <LoginModal onClickToggleModal={handleModalClose} />}
      </ModalContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  justify-content: space-between;
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: 130px;
  background-color: ${(props) => props.theme.colors.grey};
`;

const Logo = styled.div`
  font-size: 36px;
  cursor: pointer;
  margin-left: 27px;
`;

const ApplyContainerButton = styled.div`
  font-size: 24px;
  cursor: pointer;
`;

const CategoryButton = styled.div`
  font-size: 24px;
  cursor: pointer;
  margin-right: 1000px;
`;

const LoginButton = styled.div`
  font-size: 24px;
  cursor: pointer;
  margin-right: 100px;
`;

const ModalContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
`;
