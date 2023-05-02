import { useEffect } from 'react';
import { PageContainer } from '@components/Layout/PageContainer';

import { useRecoilState } from 'recoil';
import { Auth, AuthState } from '@recoil/atom/auth';
import { Member, MemberState } from '@recoil/atom/member';

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
    </PageContainer>
  );
};
