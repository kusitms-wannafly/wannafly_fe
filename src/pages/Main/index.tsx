import { PageContainer } from '@components/Layout/PageContainer';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { LoginAlert } from '@features/oauth/LoginAlert';
import { NotLoginPage } from './components/NotLoginPage';
import { LoginPage } from './components/LoginPage';

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
        {isLogin ? <LoginPage /> : <NotLoginPage />}
        <LoginAlert />
      </MainPageContainer>
    </PageContainer>
  );
};

const MainPageContainer = styled.div`
  padding-top: 75px;
  width: 100vw;
`;
