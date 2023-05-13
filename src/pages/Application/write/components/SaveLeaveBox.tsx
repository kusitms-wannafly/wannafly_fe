import styled from 'styled-components';
import { useState } from 'react';

import { LeaveModal } from './LeaveModal';
import { SaveModal } from './SaveModal';

export const SaveLeaveBox = () => {
  const [isOpenLeaveModal, setIsOpenLeaveModal] = useState<boolean>(false);
  const [isOpenSaveModal, setIsOpenSaveModal] = useState<boolean>(false);

  return (
    <SaveLeaveBoxContainer>
      <LeaveBtn
        onClick={() => {
          setIsOpenLeaveModal(true);
        }}
      >
        나가기
      </LeaveBtn>
      <SaveBtn
        onClick={() => {
          setIsOpenSaveModal(true);
        }}
      >
        저장하기
      </SaveBtn>
      <LeaveModal isOpen={isOpenLeaveModal} setIsOpen={setIsOpenLeaveModal} />
      <SaveModal isOpen={isOpenSaveModal} setIsOpen={setIsOpenSaveModal} />
    </SaveLeaveBoxContainer>
  );
};

const SaveLeaveBoxContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: end;
  width: 100%;
  height: 100px;
  padding: 0 20px 20px 0;

  position: absolute;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, rgba(30, 31, 32, 0) 0%, #1e1f20 91.87%);
`;

const LeaveBtn = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.colors.grey6};
  color: ${({ theme }) => theme.colors.wht};

  width: 200px;
  height: 45px;
  border-radius: 8px;
  margin: 0 6px;
`;

const SaveBtn = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.colors.navy4};
  color: ${({ theme }) => theme.colors.wht};

  width: 200px;
  height: 45px;
  border-radius: 8px;
  margin: 0 6px;
`;
