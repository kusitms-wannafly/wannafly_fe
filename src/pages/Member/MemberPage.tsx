import { useState, useEffect } from 'react';
import { PageContainer } from '@components/Layout/PageContainer';

import { GoogleLoginBtn } from '@components/buttons/GoogleLoginBtn';
import { LogoutBtn } from '@components/buttons/LogoutBtn';

export const MemberPage = () => {
  const [isLogin, setIsLogin] = useState<string | null>(null);

  useEffect(() => {
    setIsLogin(localStorage.getItem('isLogin'));
  }, []);

  return (
    <PageContainer header>
      <h1>로그인 테스트용 페이지</h1>
      <div>isLogin: {isLogin}</div>
      <GoogleLoginBtn />
      <LogoutBtn />
    </PageContainer>
  );
};
