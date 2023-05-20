import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

interface propsType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export const LeaveModal = ({ isOpen, setIsOpen }: propsType) => {
  const navigate = useNavigate();

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ModalContainer>
      {isOpen ? (
        <ModalBackdrop onClick={openModalHandler}>
          <ModalView onClick={(e) => e.stopPropagation()}>
            <GuideText>
              <div className="guide">
                지금 나가실 경우 해당 지원서는 저장되지 않습니다.
              </div>
              <div className="ask">그래도 나가실 건가요?</div>
            </GuideText>
            <BtnsContainer>
              <NoBtn
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                아니요
              </NoBtn>
              <YesBtn
                onClick={() => {
                  navigate('/applications');
                }}
              >
                네, 나갈래요
              </YesBtn>
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
  height: 300px;

  background-color: rgba(30, 31, 32, 1);
  border: 1px solid #686a70;
  border-radius: 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const GuideText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div.guide {
    color: ${({ theme }) => theme.colors.grey3};
    font-size: 13px;
    margin-bottom: 20px;
    font-family: 'PretendardLight';
  }

  div.ask {
    color: ${({ theme }) => theme.colors.grey1};
    font-family: 'PretendardMedium';
  }

  margin-top: 20px;
  margin-bottom: 70px;
`;

const BtnsContainer = styled.div`
  display: flex;
`;

const NoBtn = styled.button`
  width: 160px;
  height: 50px;
  margin: 0 5px;

  font-family: 'PretendardMedium';
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

  font-family: 'PretendardMedium';
  border: none;
  border-radius: 4px;
  color: #ffffff;
  background-color: ${({ theme }) => theme.colors.navy4};

  &:hover {
    cursor: pointer;
  }
`;
