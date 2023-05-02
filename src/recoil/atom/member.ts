import { atom } from 'recoil';

export interface Member {
  id: number;
  name: string;
  email: string;
  profileUrl: string;
}

export const MemberState = atom<Member>({
  key: 'member',
  default: {
    id: 0,
    name: '',
    email: '',
    profileUrl: '',
  },
});
