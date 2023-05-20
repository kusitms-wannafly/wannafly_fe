import { useState } from 'react';
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
import { checkGrammar } from '@features/grammar/checkGrammar';
import { GrammarCheck } from '@features/grammar/GrammarCheck';

interface propsType {
  index: number;
  item: ApplicationEditItem;
  form: ApplicationEditData;
  setForm: React.Dispatch<React.SetStateAction<ApplicationEditData | null>>;
}
export const AnswerEditForm = ({ index, item, form, setForm }: propsType) => {
  const [showGrammarCheck, setShowGrammarCheck] = useState<boolean>(false);
  const [checkedAnswer, setCheckedAnswer] = useState<string>('');

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

  const handleClickSpellCheckBtn = async () => {
    checkGrammar(item.applicationAnswer).then((res) => {
      setCheckedAnswer(res);
    });
    setShowGrammarCheck(true);
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
        {showGrammarCheck ? (
          <GrammarCheck
            setShowGrammarCheck={setShowGrammarCheck}
            originalAnswer={item.applicationAnswer}
            checkedAnswer={checkedAnswer}
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
          맞춤법 검사
        </SpellCheckBtn>
      </QuestionEtcBox>
    </AnswerFormContainer>
  );
};
