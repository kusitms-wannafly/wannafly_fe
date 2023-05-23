import styled from 'styled-components';

import { Category } from './Categories';

interface propsType {
  categories: Category[];
  selectedCategoryId: number;
  setSelectedCategoryId: React.Dispatch<React.SetStateAction<number>>;
}
export const CategoryHeader = ({
  categories,
  selectedCategoryId,
  setSelectedCategoryId,
}: propsType) => {
  const handleClickCategoryBtn = (categoryId: number) => {
    setSelectedCategoryId(categoryId);
  };

  return (
    <CategoryHeaderContainer>
      {categories.map((el) => {
        return (
          <CategoryBtn
            key={el.categoryId}
            className={el.categoryId === selectedCategoryId ? 'selected' : ''}
            onClick={() => {
              handleClickCategoryBtn(el.categoryId);
            }}
          >
            {el.name}
          </CategoryBtn>
        );
      })}
    </CategoryHeaderContainer>
  );
};

const CategoryHeaderContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-wrap: wrap;
`;

const CategoryBtn = styled.button`
  height: 36px;
  border: none;
  margin: 0;
  padding: 10px 15px;
  border-radius: 18px;
  margin-right: 8px;
  margin-bottom: 8px;

  background-color: ${({ theme }) => theme.colors.grey6};
  color: ${({ theme }) => theme.colors.navy2};
  font-family: 'PretendardMedium';

  display: flex;
  align-content: center;

  &:hover {
    cursor: pointer;
  }

  &.selected {
    background-color: ${({ theme }) => theme.colors.navy2};
    color: ${({ theme }) => theme.colors.navy5};
  }
`;
