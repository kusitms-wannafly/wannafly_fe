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
          공백포함 총<span>{answer.length}</span>자
        </AnswerLength>
      </QuestionContainer>
      <Answer>{answer}</Answer>
    </ApplicationItemContainer>
  );
};

const ApplicationItemContainer = styled.div`
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

const AnswerLength = styled.div`
  width: 100px;
  text-align: end;
  color: ${({ theme }) => theme.colors.grey3};
  span {
    color: ${({ theme }) => theme.colors.navy2};
  }
  position: absolute;
  right: 0;
  font-family: 'PretendardMedium';
  font-size: 12px;
  white-space: nowrap;
`;

const Answer = styled.div`
  color: ${({ theme }) => theme.colors.grey3};
  font-family: 'PretendardLight';
  font-size: 15px;
  line-height: 20px;
  word-wrap: break-all;
`;
