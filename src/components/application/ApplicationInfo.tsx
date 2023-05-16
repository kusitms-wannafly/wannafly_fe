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

  height: 45px;
  border-radius: 8px;
  padding: 0 20px;
  font-size: 16px;
`;

export const YearSelect = styled.select`
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

export const SemesterSelectBox = styled.div`
  display: flex;
  background-color: rgba(71, 73, 75, 0.5);

  width: 140px;
  height: 45px;
  border-radius: 8px;
`;

export const Semester = styled.div`
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
