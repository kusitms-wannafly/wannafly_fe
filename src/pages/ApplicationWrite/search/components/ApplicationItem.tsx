import styled from 'styled-components';

interface propsType {
  index: number;
  question: string;
  answer: string;
}

export const ApplicationItem = ({ index, question, answer }: propsType) => {
  return (
    <ApplicationItemContainer>
      <QuestionContainer>
        <QuestionNumber>{`Q${index + 1}`}</QuestionNumber>
        <Question>{question}</Question>
        <AnswerLength>
          공백포함 총<span>{answer.length}자</span>
        </AnswerLength>
      </QuestionContainer>
      <Answer>{answer}</Answer>
    </ApplicationItemContainer>
  );
};

const ApplicationItemContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.grey6};

  border-radius: 8px;
  margin: 10px 0;
  padding: 25px 30px;
`;

const QuestionContainer = styled.div`
  display: flex;
  position: relative;

  margin-bottom: 30px;
`;

const QuestionNumber = styled.div`
  color: ${({ theme }) => theme.colors.navy2};
`;

const Question = styled.div`
  color: ${({ theme }) => theme.colors.grey1};
`;

const AnswerLength = styled.div`
  color: ${({ theme }) => theme.colors.grey3};
  span {
    color: ${({ theme }) => theme.colors.navy2};
  }
  position: absolute;
  right: 0;
`;

const Answer = styled.div`
  color: ${({ theme }) => theme.colors.grey3};
`;
