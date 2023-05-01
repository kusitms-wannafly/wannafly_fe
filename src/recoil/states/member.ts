import { atom } from 'recoil';

export interface Member {
  id: number;
  name: string;
  email: string;
  profileUrl: string;
  empty: boolean; //신규 사용자 여부
}

export const MemberState = atom<Member>({
  key: 'member',
  default: {
    id: 0,
    name: '',
    email: '',
    profileUrl: '',
    empty: false,
  },
});
