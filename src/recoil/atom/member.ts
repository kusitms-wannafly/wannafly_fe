import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

export interface Member {
  memberId: number | null;
  memberName: string;
  email: string;
  profileUrl: string;
}

//recoil-persist로 localStorage에 저장
const { persistAtom } = recoilPersist({
  key: 'member',
});

export const MemberState = atom<Member>({
  key: 'member',
  default: {
    memberId: null,
    memberName: '',
    email: '',
    profileUrl: '',
  },
  effects_UNSTABLE: [persistAtom], //recoil-persist 설정
});
