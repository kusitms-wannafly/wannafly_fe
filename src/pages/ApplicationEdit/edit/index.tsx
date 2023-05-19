import styled from 'styled-components';
import { useState, useEffect } from 'react';

import { getApplicationDetailAPI } from '@api/applicationAPIS';
import { ApplicationEditInfo } from './components/ApplicationEditInfo';
import { AnswerEditForm } from './components/AnswerEditForm';
import { SaveLeaveEditBox } from './components/SaveLeaveEditBox';
import question_add_icon from '@assets/icons/icon-question-add.svg';

//새로 등록된 지원 항목은 applicationItemId: null
export interface ApplicationEditItem {
  applicationItemId: number | null;
  applicationQuestion: string;
  applicationAnswer: string;
}

export interface ApplicationEditData {
  recruiter: string;
  year: number;
  semester: 'first_half' | 'second_half';
  applicationItems: ApplicationEditItem[];
}

interface propsType {
  formId: number;
}
export const ApplicationEditForm = ({ formId }: propsType) => {
  const [form, setForm] = useState<ApplicationEditData>({
    recruiter: '',
    year: 2023,
    semester: 'first_half',
    applicationItems: [
      {
        applicationItemId: null,
        applicationQuestion: '',
        applicationAnswer: '',
      },
    ],
  });

  useEffect(() => {
    const apireturn = getApplicationDetailAPI(formId);
    apireturn
      .then((res) => {
        setForm(res);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleClickAddQuestionBtn = () => {
    const newApplicationItems = [
      ...form.applicationItems,
      {
        applicationItemId: null,
        applicationQuestion: '',
        applicationAnswer: '',
      },
    ];
    setForm({ ...form!, applicationItems: newApplicationItems });
  };

  return (
    <ApplicationWriteContainer>
      <FormContainer>
        <ApplicationEditInfo form={form} setForm={setForm} />
        {form.applicationItems.map((item, idx) => {
          return (
            <AnswerEditForm
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
          <AddQuestionBtn onClick={handleClickAddQuestionBtn}>
            <img src={question_add_icon} alt="질문추가" />
          </AddQuestionBtn>
        </AddQuestion>
      </FormContainer>
      <SaveLeaveEditBox formId={formId} form={form} />
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
  top: 0%;
  left: 50%;
  background-color: transparent;
  margin: 0;
  border: none;
  img {
    width: 40px;
  }
  &:hover {
    cursor: pointer;
  }
`;
