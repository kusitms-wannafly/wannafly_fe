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
import { ApplicationEditData } from '..';
import {
  patchApplicationAPI,
  patchApplicationStateAPI,
} from '@api/applicationAPIS';

interface propsType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  form: ApplicationEditData | null;
  formId: number;
}
export const EditSaveModal = ({
  isOpen,
  setIsOpen,
  form,
  formId,
}: propsType) => {
  const navigate = useNavigate();

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  const handleClickNoBtn = () => {
    const patchapireturn = patchApplicationAPI(formId, form);
    patchapireturn
      .then(() => {
        //작성완료로 저장
        patchApplicationStateAPI(formId, true);
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
    const patchapireturn = patchApplicationAPI(formId, form);
    patchapireturn
      .then(() => {
        //작성완료로 저장
        patchApplicationStateAPI(formId, false);
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
                <div>큐시즘</div>
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
