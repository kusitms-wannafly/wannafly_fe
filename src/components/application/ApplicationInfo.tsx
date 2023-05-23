import styled from 'styled-components';

export const ApplicationInfoContainer = styled.div`
  display: flex;
`;

export const RecruiterInput = styled.input`
  flex: 1;
  background-color: rgba(71, 73, 75, 0.5);
  border: none;
  color: ${({ theme }) => theme.colors.grey1};
  &:focus {
    outline: none;
  }

  height: 50px;
  border-radius: 6px;
  padding: 0 20px;
  font-family: 'PretendardMedium';
  font-size: 16px;
  &::placeholder {
    color: ${({ theme }) => theme.colors.grey3};
  }
`;

export const YearSelect = styled.select`
  background-color: rgba(71, 73, 75, 0.5);
  border: none;
  color: ${({ theme }) => theme.colors.grey1};
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
  text-align-last: center;

  width: 100px;
  height: 50px;
  border-radius: 6px;
  padding: 0 20px;
  margin: 0 10px;
  font-family: 'PretendardMedium';
  -webkit-appearance: none; /* 크롬 화살표 없애기 */
  -moz-appearance: none; /* 파이어폭스 화살표 없애기 */
  appearance: none; /* 화살표 없애기 */
`;

export const SemesterSelectBox = styled.div`
  display: flex;
  background-color: rgba(71, 73, 75, 0.5);

  width: 160px;
  height: 50px;
  border-radius: 6px;
  font-family: 'PretendardMedium';
  font-size: 13px;
`;

export const Semester = styled.div`
  width: 100%;
  margin: 0 5px;
  text-align: center;
  line-height: 50px;

  color: ${({ theme }) => theme.colors.grey4};
  &.selected,
  &:hover {
    color: ${({ theme }) => theme.colors.grey1};
    cursor: pointer;
  }
`;
