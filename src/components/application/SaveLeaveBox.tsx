import styled from 'styled-components';

export const SaveLeaveBoxContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: end;
  width: 100%;
  height: 100px;
  padding: 0 20px 20px 0;

  position: absolute;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, rgba(30, 31, 32, 0) 0%, #1e1f20 91.87%);
`;

export const LeaveBtn = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.colors.grey6};
  color: ${({ theme }) => theme.colors.wht};

  width: 200px;
  height: 45px;
  border-radius: 6px;
  margin: 0 6px;
  font-family: 'PretendardMedium';

  &:hover {
    cursor: pointer;
  }
`;

export const SaveBtn = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.colors.navy4};
  color: ${({ theme }) => theme.colors.wht};

  width: 200px;
  height: 45px;
  border-radius: 6px;
  margin: 0 6px;
  font-family: 'PretendardMedium';

  &:hover {
    cursor: pointer;
  }
`;
