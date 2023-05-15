import styled from 'styled-components';

export const AnswerFormContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const QuestionAnswerBox = styled.div`
  width: 100%;
  background-color: rgba(71, 73, 75, 0.5);

  //height: 280px;
  margin: 15px 0;
  padding: 15px 15px;
  border-radius: 8px;
`;

export const Question = styled.div`
  display: flex;

  height: 40px;
`;

export const QuestionNumber = styled.div`
  width: 50px;
  color: ${({ theme }) => theme.colors.navy2};
  font-weight: 600;
  font-size: 18px;
  text-align: center;
  line-height: 40px;
`;

export const QuestionInput = styled.input`
  flex: 1;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.grey1};
  &::placeholder {
    color: ${({ theme }) => theme.colors.grey1};
  }
  &:focus {
    outline: none;
  }
`;

export const AnswerInput = styled.textarea`
  width: 100%;
  height: 200px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.grey6};
  border: none;
  color: ${({ theme }) => theme.colors.grey1};
  &::placeholder {
    color: ${({ theme }) => theme.colors.grey1};
  }
  &:focus {
    outline: none;
  }
  padding: 20px;
  margin: 10px 0;
`;

export const QuestionEtcBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const LengthCount = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.grey3};

  font-size: 12px;
  div {
    margin: 0 10px;
    width: 80px;
  }
  span {
    color: ${({ theme }) => theme.colors.navy2};
  }
`;

export const SpellCheckBtn = styled.button`
  background-color: rgba(30, 31, 32, 1);
  border: 1px solid ${({ theme }) => theme.colors.grey2};
  color: ${({ theme }) => theme.colors.grey2};

  padding: 10px 20px;
  border-radius: 8px;

  &:hover {
    cursor: pointer;
  }
`;
