import styled from 'styled-components';
import { CategorizedItem } from './CategorizedItem';

export const Categorized = () => {
  return (
    <CategorizedContainer>
      <CategorizedItem />
      <CategorizedItem />
      <CategorizedItem />
      <CategorizedItem />
      <CategorizedItem />
      <CategorizedItem />
      <CategorizedItem />
      <CategorizedItem />
      <CategorizedItem />
    </CategorizedContainer>
  );
};

const CategorizedContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 170px;

  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
