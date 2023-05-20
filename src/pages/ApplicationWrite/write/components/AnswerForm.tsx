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
import { GrammarCheck } from '@features/grammar/GrammarCheck';
import { ApplicationItem, ApplicationData } from '..';
import { getTrimmedLength } from '../util/getTrimmedLength';
import { useState } from 'react';

interface propsType {
  index: number;
  item: ApplicationItem;
  form: ApplicationData;
  setForm: React.Dispatch<React.SetStateAction<ApplicationData>>;
}
export const AnswerForm = ({ index, item, form, setForm }: propsType) => {
  const [showGrammarCheck, setShowGrammarCheck] = useState<boolean>(false);

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

  const handleClickSpellCheckBtn = () => {
    setShowGrammarCheck(true);
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
        {showGrammarCheck ? (
          <GrammarCheck
            showGrammarCheck={showGrammarCheck}
            setShowGrammarCheck={setShowGrammarCheck}
          />
        ) : null}
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
        <SpellCheckBtn onClick={handleClickSpellCheckBtn}>
          맞춤법 검사하기
        </SpellCheckBtn>
      </QuestionEtcBox>
    </AnswerFormContainer>
  );
};
