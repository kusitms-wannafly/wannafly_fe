import { useNavigate } from 'react-router-dom';
import {
  ModalContainer,
  ModalBackdrop,
  ModalView,
  GuideText,
  ApplicationBox,
  ApplicationBoxHeader,
  ApplicationBoxFooter,
  BtnsContainer,
  NoBtn,
  YesBtn,
  ButtonsInBox,
  EditButton,
  TrashButton,
  ApplicationBoxClubName,
  IsWritingBox,
  YearSemester,
  ModifiedDateBox,
} from '@components/application/SaveModal';
import { axiosInstance } from '@api/HttpClient';
import { patchApplicationStateAPI } from '@api/applicationAPIS';
import { ApplicationData } from '..';
import { getModifiedDateString } from '@pages/Applications/util/getModifiedDateString';

import edit_icon from '@assets/icons/icon-edit.svg';
import delete_icon from '@assets/icons/icon-trash.svg';

//TODO: UI 추가 구현 필요

interface propsType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  form: ApplicationData;
}
export const SaveModal = ({ isOpen, setIsOpen, form }: propsType) => {
  const navigate = useNavigate();

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  const handleClickNoBtn = () => {
    //작성완료로 저장
    axiosInstance
      .post('/api/application-forms', form)
      .then((response) => {
        const headers = response.headers;
        const location = headers['location'];
        const formId = Number(location.split('/').pop());
        return patchApplicationStateAPI(formId, true);
      })
      .then(() => {
        navigate('/applications');
        window.location.reload();
      })
      .catch(() => {
        navigate('/applications');
        window.location.reload();
      });
  };

  const handleClickYesBtn = () => {
    //작성중으로 저장
    axiosInstance
      .post('/api/application-forms', form)
      .then((response) => {
        const headers = response.headers;
        const location = headers['location'];
        const formId = Number(location.split('/').pop());
        return patchApplicationStateAPI(formId, false);
      })
      .then(() => {
        navigate('/applications');
        window.location.reload();
      })
      .catch(() => {
        navigate('/applications');
        window.location.reload();
      });
  };

  const semesterText = form.semester === 'first_half' ? '상반기' : '하반기';

  return (
    <ModalContainer>
      {isOpen ? (
        <ModalBackdrop onClick={openModalHandler}>
          <ModalView onClick={(e) => e.stopPropagation()}>
            <GuideText>
              <div>아직 지원서를 작성중이라면</div>
              <div>아래와 같이 '작성중'을 표시할까요?</div>
            </GuideText>
            <ApplicationBox>
              <ApplicationBoxHeader>
                <ApplicationBoxClubName>
                  <div>{form.recruiter}</div>
                  <IsWritingBox>작성중</IsWritingBox>
                </ApplicationBoxClubName>
                <ModifiedDateBox>
                  <div>4월 2일 수정</div>
                </ModifiedDateBox>
              </ApplicationBoxHeader>
              <ApplicationBoxFooter>
                <YearSemester>
                  <div>
                    {form.year}년 {semesterText}
                  </div>
                </YearSemester>
                <ButtonsInBox>
                  <EditButton src={edit_icon} alt="수정하기 버튼" />
                  <TrashButton src={delete_icon} alt="삭제하기 버튼" />
                </ButtonsInBox>
              </ApplicationBoxFooter>
            </ApplicationBox>
            <BtnsContainer>
              <NoBtn onClick={handleClickNoBtn}>아니요, 그냥 저장할게요</NoBtn>
              <YesBtn onClick={handleClickYesBtn}>네, 표시해주세요</YesBtn>
            </BtnsContainer>
          </ModalView>
        </ModalBackdrop>
      ) : null}
    </ModalContainer>
  );
};
