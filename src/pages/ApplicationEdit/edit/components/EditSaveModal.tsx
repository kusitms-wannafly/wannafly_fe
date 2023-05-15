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
import { ApplicationEditItem, ApplicationEditData } from '..';
import { patchApplicationAPI } from '@api/applicationAPIS';
import { axiosInstance } from '@api/HttpClient';

interface propsType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  form: ApplicationEditData;
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

  //새로운 지원항목추가 post api request
  const postNewItems = async (newItems: ApplicationEditItem[]) => {
    const postedItems: ApplicationEditItem[] = [];
    newItems.forEach((item) => {
      axiosInstance
        .post(`/api/application-forms/${formId}/items`, item)
        .then((response) => {
          const location = response.headers['location'];
          const postedItemId = Number(location.split('/').pop());
          postedItems.push({ ...item, applicationItemId: postedItemId });
        })
        .catch((error) => {
          console.error(error);
        });
    });

    return postedItems;
  };

  const patchApplication = (allItems: ApplicationEditItem[]) => {
    //기존 질문답변셋과 새로 등록할 질문답변셋 분리
    const existedItems = allItems.filter(
      (item) => item.applicationItemId !== null
    );
    const newItems = allItems.filter((item) => item.applicationItemId === null);

    //새로운 지원항목들 추가 api request
    postNewItems(newItems)
      .then((postedItems) => {
        const postForm: ApplicationEditData = {
          ...form!,
          applicationItems: [...existedItems, ...postedItems],
        };
        const patchResponse = patchApplicationAPI(formId, postForm);
        return patchResponse;
      })
      .then(() => {
        navigate('/');
      })
      .catch(() => {
        setIsOpen(false);
      });
  };

  const handleClickNoBtn = () => {
    //TODO: 작성완료로 저장
    patchApplication(form.applicationItems);
  };

  const handleClickYesBtn = () => {
    //TODO: 작성중으로 저장
    patchApplication(form.applicationItems);
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
