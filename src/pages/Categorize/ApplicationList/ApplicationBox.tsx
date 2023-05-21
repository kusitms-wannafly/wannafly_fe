import styled from 'styled-components';

interface propsType {
  recruiter: string;
}
export const ApplicationBox = ({ recruiter }: propsType) => {
  return <ApplicationBoxContainer>{recruiter}</ApplicationBoxContainer>;
};

const ApplicationBoxContainer = styled.div`
  width: 100%;
  height: 70px;

  background-color: ${({ theme }) => theme.colors.grey6};
  border-radius: 6px;
  margin-bottom: 10px;

  display: flex;
`;
