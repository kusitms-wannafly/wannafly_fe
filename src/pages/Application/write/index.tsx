import styled from 'styled-components';

export const ApplicationWrite = () => {
  return (
    <ApplicationWriteContainer>
      <div>지원서 작성</div>
    </ApplicationWriteContainer>
  );
};

const ApplicationWriteContainer = styled.div`
  flex: 1;

  padding-right: 100px;

  div {
    min-width: 500px;
    height: 100%;
    background-color: aliceblue;
  }
`;
