import styled from 'styled-components';
import { useState } from 'react';
import { ApplicationForm } from '..';
import { getModifiedDateString } from '../util/getModifiedDateString';
import icon_edit from '@assets/icons/icon-edit.svg';
import icon_trash from '@assets/icons/icon-trash.svg';

import { DeleteModal } from '@components/modals/DeleteModal';
import { ApplicationModal } from '@components/modals/ApplicationModal';
import { useNavigate } from 'react-router-dom';

interface propsType {
  form: ApplicationForm;
}
export const Application = ({ form }: propsType) => {
  const navigate = useNavigate();
  const [isOpenDelete, setIsOpenDelete] = useState<boolean>(false);
  const [isOpenDetail, setIsOpenDetail] = useState<boolean>(false);

  const handleClickEditBtn = () => {
    navigate(`/edit/${form.applicationFormId}`);
  };

  return (
    <ApplicationContainer>
      <Container_1
        onClick={() => {
          setIsOpenDetail(true);
        }}
      >
        <Recruiter>
          <span className="recruiter">{form.recruiter}</span>
          {form.isCompleted ? null : <Completed>작성중</Completed>}
        </Recruiter>
        <ModifiedDate>
          {getModifiedDateString(form.lastModifiedTime)}
        </ModifiedDate>
      </Container_1>
      <Container_2>
        <DateInfo>
          {form.year}년 {form.semester === 'first_half' ? '상반기' : '하반기'}
        </DateInfo>
        <Btns>
          <EditBtn onClick={handleClickEditBtn}>
            <img src={icon_edit} alt="편집" />
          </EditBtn>
          <DeleteBtn
            onClick={() => {
              setIsOpenDelete(true);
            }}
          >
            <img src={icon_trash} alt="삭제" />
          </DeleteBtn>
        </Btns>
      </Container_2>
      <DeleteModal
        isOpen={isOpenDelete}
        setIsOpen={setIsOpenDelete}
        formId={form.applicationFormId}
      />
      <ApplicationModal
        isOpen={isOpenDetail}
        setIsOpen={setIsOpenDetail}
        formId={form.applicationFormId}
      />
    </ApplicationContainer>
  );
};

const ApplicationContainer = styled.div`
  width: 255px;
  height: 140px;
  margin: 8px 0;
  border-radius: 6px;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.grey6};
`;

const Container_1 = styled.div`
  display: flex;
  height: 80px;
  &:hover {
    cursor: pointer;
  }
`;

const Container_2 = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Recruiter = styled.div`
  font-family: 'PretendardMedium';
  color: ${({ theme }) => theme.colors.wht};
  flex: 1;
  span.recruiter {
    margin-right: 8px;
    line-height: 20px;
  }
  &:hover {
    color: ${({ theme }) => theme.colors.navy1};
  }
`;

const ModifiedDate = styled.div`
  font-family: 'PretendardMedium';
  color: ${({ theme }) => theme.colors.grey3};
  font-size: 12px;
  margin-top: 4px;
`;

const Completed = styled.span`
  background-color: #ffe79e;
  color: ${({ theme }) => theme.colors.yellow5};
  font-family: 'PretendardMedium';
  font-size: 12px;
  padding: 5px;
  border-radius: 3px;
  white-space: nowrap;
`;

const DateInfo = styled.div`
  font-family: 'PretendardMedium';
  color: ${({ theme }) => theme.colors.grey3};
  font-size: 14px;
`;

const Btns = styled.div`
  display: flex;
`;

const EditBtn = styled.button`
  background-color: transparent;
  border: none;
  margin: 0;
  width: 28px;
  img {
    width: 24px;
  }

  &:hover {
    cursor: pointer;
    img {
      filter: brightness(1.5);
    }
  }
`;

const DeleteBtn = styled.button`
  background-color: transparent;
  border: none;
  margin: 0;
  width: 28px;
  img {
    width: 24px;
  }

  &:hover {
    cursor: pointer;
    img {
      filter: brightness(1.5);
    }
  }
`;
