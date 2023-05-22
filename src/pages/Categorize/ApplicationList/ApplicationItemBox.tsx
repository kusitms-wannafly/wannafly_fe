import styled from 'styled-components';
import icon_plus_black from '@assets/icons/icon-plus-black.svg';

import { addItemToCategory } from '@api/categoryAPIS';

interface propsType {
  index: number;
  itemId: number;
  question: string;
  answer: string;
  selectedCategoryId: number;
}

export const ApplicationItemBox = ({
  index,
  itemId,
  question,
  answer,
  selectedCategoryId,
}: propsType) => {
  //카테고리에 지원항목 등록
  const handleClickAddCateogryBtn = () => {
    const apireturn = addItemToCategory(selectedCategoryId, itemId);
    apireturn
      .then(() => {
        window.location.reload();
      })
      .catch(() => {});
  };

  return (
    <ApplicationItemBoxContainer>
      <QuestionContainer>
        <QuestionNumber>{`Q${index + 1}`}</QuestionNumber>
        <Question>{question}</Question>
        <PlusBtn onClick={handleClickAddCateogryBtn}>
          <img src={icon_plus_black} alt="카테고리에 추가" />
        </PlusBtn>
      </QuestionContainer>
      <Answer>{answer}</Answer>
    </ApplicationItemBoxContainer>
  );
};

const ApplicationItemBoxContainer = styled.div`
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

const PlusBtn = styled.button`
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
