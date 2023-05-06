import { useEffect } from 'react';
import { PageContainer } from '@components/Layout/PageContainer';

import { useRecoilState } from 'recoil';
import { Auth, AuthState } from '@recoil/atom/auth';
import { Member, MemberState } from '@recoil/atom/member';

import { GoogleLoginBtn } from '@components/buttons/GoogleLoginBtn';

import {
  accessTokenReissue,
  logout,
} from '@features/social-login/googleSocialLogin';

export const MemberPage = () => {
  //recoil의 member, auth atom을 가져와 활용하는 코드
  const [member, setMember] = useRecoilState<Member>(MemberState);
  const [auth, setAuth] = useRecoilState<Auth>(AuthState);

  const setMemberState: () => void = () => {
    setMember({
      memberId: 1,
      memberName: 'jwoo',
      email: 'test@email.com',
      profileUrl: 'profileUrl',
    });
  };
  const setAuthState: () => void = () => {
    setAuth({
      isLogin: true,
      accessToken: 'Bearer',
    });
  };

  useEffect(() => {
    //atom 값 지정하기
    setAuthState();
    setMemberState();
  }, []);

  return (
    <PageContainer header>
      <div>recoil test용 member 페이지</div>
      <div>memberId: {member.memberId}</div>
      <div>email: {member.email}</div>
      <div>isLogin: {auth.isLogin}</div>
      <div>accessToken: {auth.accessToken}</div>
      <GoogleLoginBtn />
      <a href="https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=753969290116-kingfhk4rh3sogmgjptgt5cjukkv3r5k.apps.googleusercontent.com&scope=profile%20email&state=jf3W6L7bJON103sP32GDTKczOEnlOtOdC_c7lFG5vBA%3D&redirect_uri=http://localhost:8080/login/oauth2/code/google">
        구글 로그인
      </a>
      <button onClick={accessTokenReissue}>accessToken 재발급</button>
      <button onClick={logout}>로그아웃</button>
    </PageContainer>
  );
};
