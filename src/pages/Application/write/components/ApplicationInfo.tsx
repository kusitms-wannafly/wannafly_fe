import styled from 'styled-components';
import { getYearOptions } from '../util/getYearOptions';
import { ApplicationData } from '..';

interface propsType {
  form: ApplicationData | null;
  setForm: React.Dispatch<React.SetStateAction<ApplicationData>>;
}

export const ApplicationInfo = ({ form, setForm }: propsType) => {
  const handleChangeRecruiterInput = (e: React.FormEvent<HTMLInputElement>) => {
    setForm({ ...form!, recruiter: e.currentTarget.value });
  };

  const handleChangeSelectYear = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setForm({ ...form!, year: Number(e.currentTarget.value) });
  };

  const handleClickSemester = (semester: string) => {
    if (semester === 'first_half') {
      setForm({ ...form!, semester: 'first_half' });
    } else {
      setForm({ ...form!, semester: 'second_half' });
    }
  };

  return (
    <ApplicationInfoContainer>
      <RecruiterInput
        value={form?.recruiter}
        onChange={handleChangeRecruiterInput}
      />
      <YearSelect value={form?.year} onChange={handleChangeSelectYear}>
        <option value="" disabled hidden>
          년도 선택
        </option>
        {getYearOptions()}
      </YearSelect>
      <SemesterSelectBox>
        <Semester
          className={form?.semester === 'first_half' ? 'selected' : ''}
          onClick={() => {
            handleClickSemester('first_half');
          }}
        >
          상반기
        </Semester>
        <Semester
          className={form?.semester === 'second_half' ? 'selected' : ''}
          onClick={() => {
            handleClickSemester('second_half');
          }}
        >
          하반기
        </Semester>
      </SemesterSelectBox>
    </ApplicationInfoContainer>
  );
};

const ApplicationInfoContainer = styled.div`
  display: flex;
`;

const RecruiterInput = styled.input`
  flex: 1;
  background-color: rgba(71, 73, 75, 0.5);
  border: none;
  color: ${({ theme }) => theme.colors.grey1};
  &:focus {
    outline: none;
  }

  height: 45px;
  border-radius: 8px;
  padding: 0 20px;
  font-size: 16px;
`;

const YearSelect = styled.select`
  background-color: rgba(71, 73, 75, 0.5);
  border: none;
  color: ${({ theme }) => theme.colors.grey1};
  &:focus {
    outline: none;
  }

  width: 120px;
  height: 45px;
  border-radius: 8px;
  padding: 0 20px;
  margin: 0 10px;
`;

const SemesterSelectBox = styled.div`
  display: flex;
  background-color: rgba(71, 73, 75, 0.5);

  width: 140px;
  height: 45px;
  border-radius: 8px;
`;

const Semester = styled.div`
  width: 100%;
  margin: 0 5px;
  text-align: center;
  line-height: 45px;

  color: ${({ theme }) => theme.colors.grey4};
  &.selected,
  &:hover {
    color: ${({ theme }) => theme.colors.grey1};
    cursor: pointer;
  }
`;
