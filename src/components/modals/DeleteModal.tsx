import styled from 'styled-components';
import { deleteApplicationAPI } from '@api/applicationAPIS';

interface propsType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export const DeleteModal = ({ isOpen, setIsOpen }: propsType) => {
  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  //TODO: 삭제할 지원서 formId 수정
  const handleClickYesDeleteBtn = (formId: number) => {
    const apireturn = deleteApplicationAPI(formId);
    apireturn
      .then(() => {
        setIsOpen(false);
      })
      .catch(() => {
        setIsOpen(false);
      });
  };

  return (
    <DeleteModalContainer>
      {isOpen ? (
        <ModalBackdrop onClick={openModalHandler}>
          <ModalView onClick={(e) => e.stopPropagation()}>
            <GuideText>해당 지원서를 삭제하시겠어요?</GuideText>
            <BtContainer>
              <NotDeleteBtn
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                아니요
              </NotDeleteBtn>
              <YesDeleteBtn
                onClick={() => {
                  handleClickYesDeleteBtn(0);
                }}
              >
                네, 삭제할래요
              </YesDeleteBtn>
            </BtContainer>
          </ModalView>
        </ModalBackdrop>
      ) : null}
    </DeleteModalContainer>
  );
};

const DeleteModalContainer = styled.div`
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
  width: 380px;
  height: 200px;

  background-color: rgba(30, 31, 32, 1);
  border: 1px solid #686a70;
  border-radius: 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GuideText = styled.div`
  width: 100%;
  height: 120px;
  color: ${({ theme }) => theme.colors.grey1};
  font-family: 'PretendardMedium';
  text-align: center;
  line-height: 120px;
`;

const BtContainer = styled.div`
  display: flex;
`;

const NotDeleteBtn = styled.div`
  width: 120px;
  height: 40px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.grey6};
  color: ${({ theme }) => theme.colors.wht};
  text-align: center;
  font-size: 13px;
  line-height: 40px;
  &:hover {
    cursor: pointer;
  }
  margin: 0 3px;
`;

const YesDeleteBtn = styled.div`
  width: 120px;
  height: 40px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.navy4};
  color: ${({ theme }) => theme.colors.wht};
  text-align: center;
  font-size: 13px;
  line-height: 40px;
  &:hover {
    cursor: pointer;
  }
  margin: 0 3px;
`;