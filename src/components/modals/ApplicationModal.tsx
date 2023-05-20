import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getApplicationDetailAPI } from '@api/applicationAPIS';

interface applicationItem {
  applicationItemId: number;
  applicationQuestion: string;
  applicationAnswer: string;
}
interface applicationForm {
  recruiter: string;
  year: number;
  semester: 'first_half' | 'second_half';
  applicationItems: applicationItem[];
}
interface propsType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  formId?: number;
}
export const ApplicationModal = ({
  isOpen,
  setIsOpen,
  formId = 1,
}: propsType) => {
  const [applicationForm, setApplicationForm] = useState<applicationForm>();
  const navigate = useNavigate();

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  const handleClickEditBtn = () => {
    navigate(`/edit/${formId}`);
  };

  useEffect(() => {
    const apireturn = getApplicationDetailAPI(formId);
    apireturn.then((res) => {
      setApplicationForm(res);
      setApplicationForm({
        recruiter: '큐시즘',
        year: 2023,
        semester: 'first_half',
        applicationItems: [
          {
            applicationItemId: 1,
            applicationQuestion: '지원동는 무엇인가요',
            applicationAnswer: `답변을 입력해주세요.안녕하세요, 저는 한국대학교 경영학과에 재학 중인 김아무라고 합니다.
큐시즘 활동을 하며 많은 것을 보고 맛보고 즐기고 뜯고 했답니다. 안녕하세요, 저는 한국대학교 경영학과에 재학 중인 김아무라고 합니다. 큐시즘 활동을 하며 많은 것을 보고 맛보고 즐기고 뜯고 했답니다.답변을 입력해주세요.안녕하세요, 저는 한국대학교 경영학과에 재학 중인 김아무라고 합니다. 큐시즘 활동을 하며 많은 것을 보고 맛보고 즐기고 뜯고 했답니다. 안녕하세요, 저는 한국대학교 경영학과에 재학 중인 김아무라고 합니다. 답변을 입력해주세요.안녕하세요, 저는 한국대학교 경영학과에 재학 중인 김아무라고 합니다.
큐시즘 활동을 하며 많은 것을 보고 맛보고 즐기고 뜯고 했답니다. 안녕하세요, 저는 한국대학교 경영학과에 재학 중인 김아무라고 합니다. 큐시즘 활동을 하며 많은 것을 보고 맛보고 즐기고 뜯고 했답니다.답변을 입력해주세요.안녕하세요, 저는 한국대학교 경영학과에 재학 중인 김아무라고 합니다. 큐시즘 활동을 하며 많은 것을 보고 맛보고 즐기고 뜯고 했답니다. 안녕하세요, 저는 한국대학교 경영학과에 재학 중인 김아무라고 합니다. 답변을 입력해주세요.안녕하세요, 저는 한국대학교 경영학과에 재학 중인 김아무라고 합니다.
큐시즘 활동을 하며 많은 것을 보고 맛보고 즐기고 뜯고 했답니다. 안녕하세요, 저는 한국대학교 경영학과에 재학 중인 김아무라고 합니다. 큐시즘 활동을 하며 많은 것을 보고 맛보고 즐기고 뜯고 했답니다.답변을 입력해주세요.안녕하세요, 저는 한국대학교 경영학과에 재학 중인 김아무라고 합니다. 큐시즘 활동을 하며 많은 것을 보고 맛보고 즐기고 뜯고 했답니다. 안녕하세요, 저는 한국대학교 경영학과에 재학 중인 김아무라고 합니다. `,
          },
          {
            applicationItemId: 2,
            applicationQuestion: '관련 경험은 무엇인가요',
            applicationAnswer: `답변을 입력해주세요.안녕하세요, 저는 한국대학교 경영학과에 재학 중인 김아무라고 합니다.
큐시즘 활동을 하며 많은 것을 보고 맛보고 즐기고 뜯고 했답니다. 안녕하세요, 저는 한국대학교 경영학과에 재학 중인 김아무라고 합니다. 큐시즘 활동을 하며 많은 것을 보고 맛보고 즐기고 뜯고 했답니다.답변을 입력해주세요.안녕하세요, 저는 한국대학교 경영학과에 재학 중인 김아무라고 합니다. 큐시즘 활동을 하며 많은 것을 보고 맛보고 즐기고 뜯고 했답니다. 안녕하세요, 저는 한국대학교 경영학과에 재학 중인 김아무라고 합니다. 답변을 입력해주세요.안녕하세요, 저는 한국대학교 경영학과에 재학 중인 김아무라고 합니다.
큐시즘 활동을 하며 많은 것을 보고 맛보고 즐기고 뜯고 했답니다. 안녕하세요, 저는 한국대학교 경영학과에 재학 중인 김아무라고 합니다. 큐시즘 활동을 하며 많은 것을 보고 맛보고 즐기고 뜯고 했답니다.답변을 입력해주세요.안녕하세요, 저는 한국대학교 경영학과에 재학 중인 김아무라고 합니다. 큐시즘 활동을 하며 많은 것을 보고 맛보고 즐기고 뜯고 했답니다. 안녕하세요, 저는 한국대학교 경영학과에 재학 중인 김아무라고 합니다. 답변을 입력해주세요.안녕하세요, 저는 한국대학교 경영학과에 재학 중인 김아무라고 합니다.
큐시즘 활동을 하며 많은 것을 보고 맛보고 즐기고 뜯고 했답니다. 안녕하세요, 저는 한국대학교 경영학과에 재학 중인 김아무라고 합니다. 큐시즘 활동을 하며 많은 것을 보고 맛보고 즐기고 뜯고 했답니다.답변을 입력해주세요.안녕하세요, 저는 한국대학교 경영학과에 재학 중인 김아무라고 합니다. 큐시즘 활동을 하며 많은 것을 보고 맛보고 즐기고 뜯고 했답니다. 안녕하세요, 저는 한국대학교 경영학과에 재학 중인 김아무라고 합니다. `,
          },
        ],
      });
    });
  }, []);

  return (
    <ApplicationModalContainer>
      {isOpen ? (
        <ModalBackdrop onClick={openModalHandler}>
          <ModalView onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <HeaderInfo>
                <div className="recruiter">{applicationForm?.recruiter}</div>
                <div className="year">
                  {applicationForm?.year}년{' '}
                  {applicationForm?.semester === 'first_half'
                    ? '상반기'
                    : '하반기'}
                </div>
              </HeaderInfo>
              <EditBtn onClick={handleClickEditBtn}>수정하기</EditBtn>
            </ModalHeader>
            <ApplicationForms>
              {applicationForm?.applicationItems.map((item, idx) => {
                return (
                  <FormContainer key={item.applicationItemId}>
                    <FormHeader>
                      <QuestionNumber>Q{idx + 1}</QuestionNumber>
                      <ApplicationQuestion>
                        {item.applicationQuestion}
                      </ApplicationQuestion>
                      <AnswerCount>
                        공백포함 총 <span>{item.applicationAnswer.length}</span>
                        자
                      </AnswerCount>
                    </FormHeader>
                    <FormAnswer>{item.applicationAnswer}</FormAnswer>
                  </FormContainer>
                );
              })}
            </ApplicationForms>
          </ModalView>
        </ModalBackdrop>
      ) : null}
    </ApplicationModalContainer>
  );
};

const ApplicationModalContainer = styled.div`
  z-index: 500;
`;

export const ModalBackdrop = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalView = styled.div`
  width: 700px;
  height: 600px;
  padding: 0 35px;

  background-color: rgba(30, 31, 32, 1);
  border: 1px solid #686a70;
  border-radius: 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey6};
  margin-bottom: 10px;
`;

const HeaderInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 25px 0;

  div.recruiter {
    font-family: 'PretendardBold';
    color: ${({ theme }) => theme.colors.grey1};
    margin-right: 20px;
  }
  div.year {
    font-family: 'PretendardMedium';
    color: ${({ theme }) => theme.colors.grey3};
    font-size: 13px;
  }
`;

const EditBtn = styled.button`
  font-family: 'PretendardMedium';
  border: none;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.navy4};
  color: ${({ theme }) => theme.colors.wht};
  font-size: 12px;
  width: 65px;
  height: 35px;
  &:hover {
    cursor: pointer;
  }
`;

const ApplicationForms = styled.div`
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  width: 100%;
  height: 100%;
`;

const FormContainer = styled.div`
  width: 100%;
  background-color: rgba(71, 73, 75, 0.5);
  border-radius: 4px;
  padding: 20px 20px;
  margin: 15px 0;
`;

const FormHeader = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

const QuestionNumber = styled.div`
  color: ${({ theme }) => theme.colors.navy2};
  font-family: 'PretendardMedium';
  font-size: 14px;
  width: 30px;
`;

const ApplicationQuestion = styled.div`
  color: ${({ theme }) => theme.colors.grey1};
  font-family: 'PretendardMedium';
  font-size: 14px;
  flex: 1;
`;

const AnswerCount = styled.div`
  width: 100px;
  color: ${({ theme }) => theme.colors.grey3};
  font-family: 'PretendardMedium';
  font-size: 11px;
  span {
    color: ${({ theme }) => theme.colors.navy2};
  }
  text-align: end;
`;

const FormAnswer = styled.div`
  font-family: 'PretendardLight';
  color: ${({ theme }) => theme.colors.grey3};
  font-size: 13px;
  line-height: 20px;
`;
