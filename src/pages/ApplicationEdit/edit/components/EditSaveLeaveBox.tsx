import { useState } from 'react';

import {
  SaveLeaveBoxContainer,
  LeaveBtn,
  SaveBtn,
} from '@components/application/SaveLeaveBox';
import { ApplicationEditData } from '..';
import { LeaveModal } from '@pages/Application/write/components/LeaveModal';
import { SaveModal } from '@pages/Application/write/components/SaveModal';

interface propsType {
  form: ApplicationEditData;
}

export const SaveLeaveEditBox = ({ form }: propsType) => {
  const [isOpenLeaveModal, setIsOpenLeaveModal] = useState<boolean>(false);
  const [isOpenSaveModal, setIsOpenSaveModal] = useState<boolean>(false);

  const handleClickSaveBtn = () => {
    const hasEmptyQuestion = form.applicationItems.some(
      (item) => item.applicationQuestion.trim() === ''
    );
    if (form.recruiter !== '' && !hasEmptyQuestion) {
      setIsOpenSaveModal(true);
    }
  };

  return (
    <SaveLeaveBoxContainer>
      <LeaveBtn
        onClick={() => {
          setIsOpenLeaveModal(true);
        }}
      >
        나가기
      </LeaveBtn>
      <SaveBtn onClick={handleClickSaveBtn}>저장하기</SaveBtn>
      <LeaveModal isOpen={isOpenLeaveModal} setIsOpen={setIsOpenLeaveModal} />
      <SaveModal
        isOpen={isOpenSaveModal}
        setIsOpen={setIsOpenSaveModal}
        form={form}
      />
    </SaveLeaveBoxContainer>
  );
};
