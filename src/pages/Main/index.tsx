import { PageContainer } from '@components/Layout/PageContainer';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { LoginAlert } from '@features/oauth/LoginAlert';
import { NotLoginPage } from './components/NotLoginPage';
import { LoginPage } from './components/LoginPage';
import background_butterfly from '@assets/images/background-butterfly.svg';

export const MainPage = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  useEffect(() => {
    const localStorageIsLogin = localStorage.getItem('isLogin');
    if (localStorageIsLogin === 'true') {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  return (
    <PageContainer header>
      <MainPageContainer>
        <ButterflyImage src={background_butterfly} alt="wannafly" />
        {isLogin ? <LoginPage /> : <NotLoginPage />}
        <LoginAlert />
      </MainPageContainer>
    </PageContainer>
  );
};

const MainPageContainer = styled.div`
  position: relative;
  padding-top: 75px;
  width: 100vw;
  background: linear-gradient(
      180deg,
      rgba(253, 209, 106, 0.2) -9.81%,
      rgba(253, 209, 106, 0) 50%
    ),
    #1e1f20;
`;

const ButterflyImage = styled.img`
  position: absolute;
  width: 200px;
  top: 120px;
  right: 100px;
  transform: rotate(4deg);
`;
