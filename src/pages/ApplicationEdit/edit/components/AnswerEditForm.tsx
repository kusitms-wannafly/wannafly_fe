import {
  AnswerFormContainer,
  QuestionAnswerBox,
  Question,
  QuestionNumber,
  QuestionInput,
  AnswerInput,
  QuestionEtcBox,
  LengthCount,
  SpellCheckBtn,
} from '@components/application/AnswerForm';
import { ApplicationEditItem, ApplicationEditData } from '..';
import { getTrimmedLength } from '@pages/ApplicationWrite/write/util/getTrimmedLength';

interface propsType {
  index: number;
  item: ApplicationEditItem;
  form: ApplicationEditData;
  setForm: React.Dispatch<React.SetStateAction<ApplicationEditData>>;
}
export const AnswerEditForm = ({ index, item, form, setForm }: propsType) => {
  const handleChangeQuestionInput = (e: React.FormEvent<HTMLInputElement>) => {
    const newItems = [...form.applicationItems];
    newItems[index] = {
      applicationItemId: null,
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
      applicationItemId: null,
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
