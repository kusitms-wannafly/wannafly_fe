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
  item?: ApplicationEditItem;
  form: ApplicationEditData;
  setForm: React.Dispatch<React.SetStateAction<ApplicationEditData | null>>;
}
export const AnswerEditForm = ({ index, form, setForm }: propsType) => {
  const handleChangeQuestion = (e: React.FormEvent<HTMLInputElement>) => {
    let newItems = form.applicationItems;
    newItems[index] = {
      ...newItems[index],
      applicationQuestion: e.currentTarget.value,
    };
    setForm({ ...form!, applicationItems: newItems });
  };

  const handleChangeAnswer = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    let newItems = form.applicationItems;
    newItems[index] = {
      ...newItems[index],
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
            value={form.applicationItems[index].applicationQuestion || ''}
            onChange={handleChangeQuestion}
          />
        </Question>
        <AnswerInput
          placeholder="답변을 입력해주세요."
          value={form.applicationItems[index].applicationAnswer || ''}
          onChange={handleChangeAnswer}
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
