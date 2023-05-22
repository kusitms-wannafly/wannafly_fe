import styled from 'styled-components';
import icon_minus from '@assets/icons/icon-minus-black.png';

import { CategorizedItem as CategorizedItemType } from './Categorized';

interface propsType {
  index: number;
  item: CategorizedItemType;
}

export const CategorizedItem = ({ index, item }: propsType) => {
  return (
    <CategorizedItemContainer>
      <QuestionContainer>
        <QuestionNumber>{`Q${index + 1}`}</QuestionNumber>
        <Question>{item.applicationItem.applicationQuestion}</Question>
        <MinusBtn>
          <img src={icon_minus} alt="제거하기" />
        </MinusBtn>
      </QuestionContainer>
      <Answer>{item.applicationItem.applicationAnswer}</Answer>
      <InfoConatiner>
        <span className="recruiter">{item.recruiter}</span>
        <span className="year">{`${item.year}년 ${
          item.semester === 'first_half' ? '상반기' : '하반기'
        }`}</span>
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
