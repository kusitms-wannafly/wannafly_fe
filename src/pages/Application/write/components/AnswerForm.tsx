import styled from 'styled-components';
import { ApplicationItem, ApplicationData } from '..';
import { getTrimmedLength } from '../util/getTrimmedLength';

interface propsType {
  index: number;
  item: ApplicationItem;
  form: ApplicationData;
  setForm: React.Dispatch<React.SetStateAction<ApplicationData>>;
}
export const AnswerForm = ({ index, item, form, setForm }: propsType) => {
  const handleChangeQuestionInput = (e: React.FormEvent<HTMLInputElement>) => {
    const newItems = [...form.applicationItems];
    newItems[index] = {
      applicationQuestion: e.currentTarget.value,
      applicationAnswer: item.applicationAnswer,
    };
    setForm({ ...form!, applicationItems: newItems });
  };

  const handleChangeAnswerInput = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const newItems = [...form.applicationItems];
    newItems[index] = {
      applicationQuestion: item.applicationQuestion,
      applicationAnswer: e.currentTarget.value,
    };
    setForm({ ...form!, applicationItems: newItems });
  };

  return (
    <AnswerFormContainer>
      <QuestionAnswerBox>
        <Question>
          <QuestionNumber>Q{index + 1}</QuestionNumber>
          <QuestionInput
            placeholder="질문을 입력해주세요."
            value={form.applicationItems[index].applicationQuestion}
            onChange={handleChangeQuestionInput}
          />
        </Question>
        <AnswerInput
          placeholder="답변을 입력해주세요."
          value={form.applicationItems[index].applicationAnswer}
          onChange={handleChangeAnswerInput}
        />
      </QuestionAnswerBox>
      <QuestionEtcBox>
        <LengthCount>
          <div>
            공백포함 총
            <span>{form.applicationItems[index].applicationAnswer.length}</span>
            자
          </div>
          <div>
            공백제외 총
            <span>
              {getTrimmedLength(form.applicationItems[index].applicationAnswer)}
            </span>
            자
          </div>
        </LengthCount>
        <SpellCheckBtn>맞춤법 검사</SpellCheckBtn>
      </QuestionEtcBox>
    </AnswerFormContainer>
  );
};

const AnswerFormContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

const QuestionAnswerBox = styled.div`
  width: 100%;
  background-color: rgba(71, 73, 75, 0.5);

  //height: 280px;
  margin: 15px 0;
  padding: 15px 15px;
  border-radius: 8px;
`;

const Question = styled.div`
  display: flex;

  height: 40px;
`;

const QuestionNumber = styled.div`
  width: 50px;
  color: ${({ theme }) => theme.colors.navy2};
  font-weight: 600;
  font-size: 18px;
  text-align: center;
  line-height: 40px;
`;

const QuestionInput = styled.input`
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

const AnswerInput = styled.textarea`
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

const QuestionEtcBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const LengthCount = styled.div`
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

const SpellCheckBtn = styled.button`
  background-color: rgba(30, 31, 32, 1);
  border: 1px solid ${({ theme }) => theme.colors.grey2};
  color: ${({ theme }) => theme.colors.grey2};

  padding: 10px 20px;
  border-radius: 8px;

  &:hover {
    cursor: pointer;
  }
`;
