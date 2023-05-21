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
} from '@components/application/SaveModal';
import { axiosInstance } from '@api/HttpClient';
import { patchApplicationStateAPI } from '@api/applicationAPIS';
import { ApplicationData } from '..';

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
                <div>야호</div>
              </ApplicationBoxHeader>
              <ApplicationBoxFooter></ApplicationBoxFooter>
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
