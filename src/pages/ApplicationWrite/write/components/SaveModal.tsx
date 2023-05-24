import { useNavigate } from 'react-router-dom';
import {
  ModalContainer,
  ModalBackdrop,
  GuideText,
  BtnsContainer,
  NoBtn,
  YesBtn,
} from '@components/application/SaveModal';
import { axiosInstance } from '@api/HttpClient';
import { patchApplicationStateAPI } from '@api/applicationAPIS';
import { ApplicationData } from '..';
import { formatISO } from 'date-fns';
import { getModifiedDateString } from '@pages/Applications/util/getModifiedDateString';

import styled from 'styled-components';

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
              <InfoText>아직 지원서를 작성중이라면</InfoText>
              <InfoText>아래와 같이 '작성중'을 표시할까요?</InfoText>
            </GuideText>
            <ExampleBox>
              <Recruiter>
                {form.recruiter}
                <IsWriting>작성중</IsWriting>
              </Recruiter>
              <DateInfo>
                {getModifiedDateString(formatISO(new Date()))}
              </DateInfo>
            </ExampleBox>
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

export const ModalView = styled.div`
  width: 420px;
  height: 340px;

  background-color: rgba(30, 31, 32, 1);
  border: 1px solid #686a70;
  border-radius: 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InfoText = styled.div`
  color: ${(props) => props.theme.colors.wht};
  font-family: 'PretendardMedium';
`;

const ExampleBox = styled.div`
  width: 280px;
  height: 100px;
  background-color: #47494b;
  border-radius: 8px;
  margin: 30px 0;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Recruiter = styled.div`
  color: ${(props) => props.theme.colors.wht};
  font-family: 'PretendardMedium';
  line-height: 24px;
`;

const IsWriting = styled.span`
  border-radius: 4px;
  color: ${(props) => props.theme.colors.yellow5};
  background-color: ${(props) => props.theme.colors.yellow2};
  font-size: 12px;
  font-family: 'PretendardMedium';
  padding: 5px;
  border-radius: 3px;
  margin-left: 8px;
  white-space: nowrap;
`;

const DateInfo = styled.div`
  font-size: 12px;
  font-family: 'PretendardMedium';
  color: ${(props) => props.theme.colors.grey3};
`;
