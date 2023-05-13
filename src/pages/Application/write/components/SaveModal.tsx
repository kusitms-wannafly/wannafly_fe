import styled from 'styled-components';

interface propsType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export const SaveModal = ({ isOpen, setIsOpen }: propsType) => {
  const openModalHandler = () => {
    setIsOpen(!isOpen);
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
              <NoBtn>아니요, 그냥 저장할게요</NoBtn>
              <YesBtn>네, 표시해주세요</YesBtn>
            </BtnsContainer>
          </ModalView>
        </ModalBackdrop>
      ) : null}
    </ModalContainer>
  );
};

const ModalContainer = styled.div``;

const ModalBackdrop = styled.div`
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
  width: 420px;
  height: 400px;

  background-color: rgba(30, 31, 32, 1);
  border: 1px solid #686a70;
  border-radius: 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GuideText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  color: ${({ theme }) => theme.colors.grey1};
  font-size: 16px;

  margin-top: 40px;
`;

const ApplicationBox = styled.div`
  width: 280px;
  height: 150px;
  margin: 40px 0;

  background-color: #47494b;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ApplicationBoxHeader = styled.div``;

const ApplicationBoxFooter = styled.div``;

const BtnsContainer = styled.div``;

const NoBtn = styled.button`
  width: 160px;
  height: 50px;
  margin: 0 5px;

  border: none;
  border-radius: 4px;
  color: #ffffff;
  background-color: ${({ theme }) => theme.colors.grey6};

  &:hover {
    cursor: pointer;
  }
`;

const YesBtn = styled.button`
  width: 160px;
  height: 50px;
  margin: 0 5px;

  border: none;
  border-radius: 4px;
  color: #ffffff;
  background-color: ${({ theme }) => theme.colors.navy4};

  &:hover {
    cursor: pointer;
  }
`;
