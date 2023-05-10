import { useState, useEffect } from 'react';
import { PageContainer } from '@components/Layout/PageContainer';

import { GoogleLoginBtn } from '@components/buttons/GoogleLoginBtn';
import { LogoutBtn } from '@components/buttons/LogoutBtn';

import { accessTokenAPI } from '@features/social-login/signupAPIS';
import axios from 'axios';

export const MemberPage = () => {
  const [isLogin, setIsLogin] = useState<string | null>(null);

  useEffect(() => {
    setIsLogin(localStorage.getItem('isLogin'));
  }, []);

  const handleClickAccessTokenBtn = () => {
    const apiresult: Promise<any> = accessTokenAPI();
    apiresult
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => console.error(error));
  };

  const handleLogout = async () => {
    const response = await axios.delete('/api/refreshtoken');
    return response;
  };

  return (
    <PageContainer header>
      <div>로그인 테스트용 페이지</div>
      <div>isLogin: {isLogin}</div>
      <GoogleLoginBtn />
      <LogoutBtn />
      <button onClick={handleClickAccessTokenBtn}>accessToken 재발급</button>
      <button
        onClick={() => {
          handleLogout()
            .then((res) => {
              console.log(res.data);
            })
            .catch((error) => {
              console.error(error);
            });
        }}
      >
        로그아웃
      </button>
    </PageContainer>
  );
};
