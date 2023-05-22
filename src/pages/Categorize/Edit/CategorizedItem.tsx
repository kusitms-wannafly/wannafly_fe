import styled from 'styled-components';
import icon_minus from '@assets/icons/icon-minus-black.png';

export const CategorizedItem = () => {
  return (
    <CategorizedItemContainer>
      <QuestionContainer>
        <QuestionNumber>{`Q1`}</QuestionNumber>
        <Question>{'질문'}</Question>
        <MinusBtn>
          <img src={icon_minus} alt="제거하기" />
        </MinusBtn>
      </QuestionContainer>
      <Answer>
        {
          '답변을 입력해주세요.안녕하세요, 저는 한국대학교 경영학과에 재학 중인 김아무라고 합니다. 큐시즘 활동을 하며 많은 것을 보고 맛보고 즐기고 뜯고 했답니다. 안녕하세요, 저는 한국대학교 경영학과에 재학 중인 김아무라고 합니다. 큐시즘 활동을 하며 많은 것을 보고 맛보고 즐기고 뜯고 했답니다.답변을 입력해주세요.안녕하세요, 저는 한국대학교 경영학과에 재학 중인 김아무라고 합니다. 큐시즘 활동을 하'
        }
      </Answer>
      <InfoConatiner>
        <span className="recruiter">큐시즘</span>
        <span className="year">2023년 상반기</span>
      </InfoConatiner>
    </CategorizedItemContainer>
  );
};

const CategorizedItemContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.grey6};

  border-radius: 6px;
  margin: 10px 0;
  padding: 25px 30px;
`;

const QuestionContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  margin-bottom: 30px;
  padding-right: 100px;
`;

const QuestionNumber = styled.div`
  color: ${({ theme }) => theme.colors.navy2};
  font-family: 'PretendardMedium';
  margin-right: 10px;
`;

const Question = styled.div`
  color: ${({ theme }) => theme.colors.grey1};
  font-family: 'PretendardMedium';
  flex: 1;
  line-height: 20px;
`;

const MinusBtn = styled.button`
  position: absolute;
  right: 0;

  background-color: transparent;
  border: none;
  margin: 0;
  img {
    width: 15px;
  }
  &:hover {
    cursor: pointer;
  }
`;

const Answer = styled.div`
  color: ${({ theme }) => theme.colors.grey3};
  font-family: 'PretendardLight';
  font-size: 15px;
  line-height: 20px;
  word-wrap: break-all;
`;

const InfoConatiner = styled.div`
  margin-top: 24px;
  span.recruiter {
    font-family: 'PretendardMedium';
    font-size: 15px;
    color: ${({ theme }) => theme.colors.grey2};
    border-right: 2px solid ${({ theme }) => theme.colors.grey5};
    padding-right: 10px;
  }
  span.year {
    font-family: 'PretendardLight';
    font-size: 15px;
    color: ${({ theme }) => theme.colors.grey3};
    padding-left: 10px;
  }
`;
