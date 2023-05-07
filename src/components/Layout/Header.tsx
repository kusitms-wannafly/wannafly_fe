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
        <Logo src="public/wannafly-logo.png" alt="로고 이미지" />
      </Link>
      <Link to="/apply">
        <MyApplyButton>내 지원서</MyApplyButton>
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
  background-color: ${(props) => props.theme.colors.wht};
`;

const Logo = styled.img`
  margin-left: 84.25px;
`;

const ApplyContainerButton = styled.div`
  font-family: 'HappinessSansBold', sans-serif;
  font-size: 24px;
  color: black;
  &:hover {
    color: ${(props) => props.theme.colors.navy4};
  }
`;

const MyApplyButton = styled.div`
  font-family: 'HappinessSansBold', sans-serif;
  font-size: 24px;
  color: black;
  &:hover {
    color: ${(props) => props.theme.colors.navy4};
  }
`;

const CategoryButton = styled.div`
  font-family: 'HappinessSansBold', sans-serif;
  font-size: 24px;
  cursor: pointer;
  margin-right: 1000px;
  color: black;
  &:hover {
    color: ${(props) => props.theme.colors.navy4};
  }
`;

const LoginButton = styled.div`
  font-family: 'HappinessSansBold', sans-serif;
  font-size: 24px;
  cursor: pointer;
  margin-right: 100px;
  &:hover {
    color: ${(props) => props.theme.colors.navy4};
  }
`;

const ModalContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
`;
