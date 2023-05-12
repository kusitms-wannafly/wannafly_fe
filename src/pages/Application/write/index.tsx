import styled from 'styled-components';

export const ApplicationWrite = () => {
  return (
    <ApplicationWriteContainer>
      <div>color</div>
    </ApplicationWriteContainer>
  );
};

const ApplicationWriteContainer = styled.div`
  border: 1px solid red;
  flex: 1;

  padding-right: 100px;

  div {
    min-width: 700px;
    height: 100%;
    background-color: aliceblue;
  }
`;
