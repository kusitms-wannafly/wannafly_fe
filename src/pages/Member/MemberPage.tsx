import { useEffect } from 'react';
import { PageContainer } from '@components/Layout/PageContainer';

import { useRecoilState } from 'recoil';
import { Member, MemberState } from '@recoil/atom/member';
import { Auth, AuthState } from '@recoil/atom/auth';

export const MemberPage = () => {
  //recoil의 member, auth atom을 가져와 활용하는 코드
  const [member, setMember] = useRecoilState<Member>(MemberState);
  const [auth, setAuth] = useRecoilState<Auth>(AuthState);

  const setMemberState: () => void = () => {
    setMember({
      id: 1,
      name: 'jwoo',
      email: 'test@email.com',
      profileUrl: 'profileurl',
    });
  };

  useEffect(() => {
    //atom의 member 정보 설정
    setMemberState();
  }, []);

  return (
    <PageContainer header>
      <div>recoil test용 member 페이지</div>
      <div>id: {member.id}</div>
      <div>name: {member.name}</div>
      <div>email: {member.email}</div>
      <div>profileUrl: {member.profileUrl}</div>
      <h3>auth 정보</h3>
      <div>isLogin: {String(auth.isLogin)}</div>
      <div>AccessToekn: {auth.accessToken}</div>
    </PageContainer>
  );
};
