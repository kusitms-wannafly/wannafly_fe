import styled from 'styled-components';

interface YearButtonProp {
  year: string;
}

export const YearButton = ({ year }: YearButtonProp) => {
  return (
    <YearButtonContainer>
      <Year>{year}</Year>
    </YearButtonContainer>
  );
};

const YearButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 99px;
  height: 48px;
  padding-top: 15px;
  margin-top: 53px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.navy1};
  &:hover {
    background-color: ${(props) => props.theme.colors.navy4};
  }
`;

const Year = styled.div`
  font-size: 17px;
  font-weight: normal;
  text-align: center;
  color: ${(props) => props.theme.colors.wht};
`;
