import styled from 'styled-components';
import { useState } from 'react';
import { ApplicationInfo } from './components/ApplicationInfo';
import { AnswerForm } from './components/AnswerForm';
import { SaveLeaveBox } from './components/SaveLeaveBox';

export interface ApplicationItem {
  applicationQuestion: string;
  applicationAnswer: string;
}

export interface ApplicationData {
  recruiter: string;
  year: number;
  semester: 'first_half' | 'second_half';
  applicationItems: ApplicationItem[];
}

export const ApplicationWrite = () => {
  const [form, setForm] = useState<ApplicationData>({
    recruiter: '',
    year: 2023,
    semester: 'first_half',
    applicationItems: [
      {
        applicationQuestion: '',
        applicationAnswer: '',
      },
    ],
  });

  const handleClickAddQuestionBtn = () => {
    const newApplicationItems = [
      ...form.applicationItems,
      {
        applicationQuestion: '',
        applicationAnswer: '',
      },
    ];
    setForm({ ...form!, applicationItems: newApplicationItems });
  };

  return (
    <ApplicationWriteContainer>
      <FormContainer>
        <ApplicationInfo form={form} setForm={setForm} />
        {form.applicationItems.map((item, idx) => {
          return (
            <AnswerForm
              key={idx}
              index={idx}
              item={item}
              form={form}
              setForm={setForm}
            />
          );
        })}
        <AddQuestion>
          <div className="top"></div>
          <div className="bottom"></div>
          <AddQuestionBtn onClick={handleClickAddQuestionBtn}>+</AddQuestionBtn>
        </AddQuestion>
      </FormContainer>
      <SaveLeaveBox form={form} />
    </ApplicationWriteContainer>
  );
};

const ApplicationWriteContainer = styled.div`
  position: relative;
  width: 90%;
  min-width: 600px;
  max-width: 1000px;
`;

const FormContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.grey8};
  width: 100%;
  height: 100%;
  position: relative;

  display: flex;
  flex-direction: column;

  padding-top: 20px;
  padding: 30px 30px 0;

  overflow-y: scroll;
  /* ( 크롬, 사파리, 오페라, 엣지 ) 동작 */
  &::-webkit-scrollbar {
    display: none;
  }
`;

const AddQuestion = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  margin: 10px 0 100px 0;

  div {
    width: 100%;
    height: 20px;
  }
  div.top {
    border-bottom: 0.5px solid ${({ theme }) => theme.colors.grey5};
  }
  div.bottom {
    border-top: 0.5px solid ${({ theme }) => theme.colors.grey5};
  }
`;

const AddQuestionBtn = styled.button`
  position: absolute;
  top: 25%;
  left: 50%;
`;
