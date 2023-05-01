import { useRecoilState } from 'recoil';
import { Member, MemberState } from '@recoil/states/member';

//recoil state를 가져와서 활용하는 코드
const [member, setMember] = useRecoilState<Member>(MemberState);

console.log(member.name);

const setMemberState: () => void = () => {
  setMember({
    id: 1,
    name: 'jwoo',
    email: 'test@email.com',
    profileUrl: '',
    empty: true,
  });
};

setMemberState();
