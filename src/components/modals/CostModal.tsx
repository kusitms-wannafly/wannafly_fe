import styled from 'styled-components';

interface propsType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export const CostModal = ({ isOpen, setIsOpen }: propsType) => {
  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <CostModalContainer>
      {isOpen ? (
        <ModalBackdrop onClick={openModalHandler}>
          <CostModalView onClick={(e) => e.stopPropagation()}>
            <TextContainer>
              <ProText>pro</ProText>
              <DescriptionsText>
                지원서 작성을 조금 더 빠르고 간편하게 할 수 있는 방법
              </DescriptionsText>
              <PayText>4,900원 월간 결제</PayText>
              <UseBtn>이용하기</UseBtn>
              <FeatureDescriptionText>
                <FeatureTitleText>무료 요금제의 모든 기능 +</FeatureTitleText>
                <FeatureDetail>무제한 카테고리 생성</FeatureDetail>
                <FeatureDetail>무제한 키워드 검색</FeatureDetail>
              </FeatureDescriptionText>
            </TextContainer>
          </CostModalView>
        </ModalBackdrop>
      ) : null}
    </CostModalContainer>
  );
};

const CostModalContainer = styled.div`
  z-index: 500;
`;

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

const CostModalView = styled.div`
  width: 370px;
  height: 430px;

  background-color: rgba(30, 31, 32, 1);
  border: 1px solid #686a70;
  border-radius: 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextContainer = styled.div`
  margin-left: 10px;
`;

const ProText = styled.div`
  color: ${({ theme }) => theme.colors.wht};
  font-family: 'HappinessSansBold';
  font-size: 40px;
  padding-top: 50px;
`;

const DescriptionsText = styled.div`
  color: ${({ theme }) => theme.colors.grey3};
  font-family: 'PretendardMedium';
  font-size: 12px;
  padding-top: 20px;
`;

const PayText = styled.div`
  color: ${({ theme }) => theme.colors.wht};
  font-family: 'PretendardMedium';
  margin-top: 20px;
  font-size: 12px;
`;

const UseBtn = styled.div`
  width: 280px;
  height: 40px;
  border-radius: 4px;
  font-family: 'PretendardMedium';
  background-color: ${({ theme }) => theme.colors.navy4};
  color: ${({ theme }) => theme.colors.wht};
  text-align: center;
  font-size: 13px;
  line-height: 40px;
  &:hover {
    cursor: pointer;
  }
  margin-top: 60px;
`;

const FeatureTitleText = styled.div`
  font-family: 'PretendardMedium';
  font-size: 12px;
  margin-bottom: 30px;
`;

const FeatureDescriptionText = styled.div`
  color: ${({ theme }) => theme.colors.grey1};
  font-family: 'PretendardMedium';
  font-size: 12px;
  margin-top: 50px;
`;

const FeatureDetail = styled.div`
  color: ${({ theme }) => theme.colors.grey3};
  margin-top: 20px;
`;
