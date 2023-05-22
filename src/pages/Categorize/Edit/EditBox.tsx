import styled from 'styled-components';
import icon_plus from '@assets/icons/icon-plus-dark.svg';

import { Category } from '.';
import { useState } from 'react';

interface propsType {
  categories: Category[] | undefined;
  setCategories: React.Dispatch<React.SetStateAction<Category[] | undefined>>;
  selectedCategoryId: number;
  setSelecteCategorydId: React.Dispatch<React.SetStateAction<number>>;
}
export const EditBox = ({
  categories,
  selectedCategoryId,
  setSelecteCategorydId,
}: propsType) => {
  const handleClickCategoryBtn = (id: number) => {
    console.log(id);
    setSelecteCategorydId(id);
  };

  const [categoryInputValue, setCategoryInputValue] = useState('');
  const [editMode, setEditMode] = useState<boolean>(false);

  const handleChangeCategoryInput = (e: React.FormEvent<HTMLInputElement>) => {
    setCategoryInputValue(e.currentTarget.value);
  };

  const handleKeyPressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setEditMode(!editMode);
    }
  };

  const handleClickAddBtn = () => {
    setEditMode(!editMode);
  };

  const handleClickEditBtn = () => {
    setEditMode(!editMode);
  };

  return (
    <EditBoxContainer>
      <CategoryBox>
        {categories?.map((el) => {
          return (
            <CategoryBtn
              key={el.categoryId}
              className={selectedCategoryId === el.categoryId ? 'selected' : ''}
              onClick={() => {
                handleClickCategoryBtn(el.categoryId);
              }}
            >
              {el.name}
            </CategoryBtn>
          );
        })}
        {editMode ? (
          <CategoryInput
            value={categoryInputValue}
            placeholder="카테고리"
            onChange={handleChangeCategoryInput}
            onKeyPress={handleKeyPressEnter}
            maxLength={20}
          />
        ) : (
          <AddBtn onClick={handleClickAddBtn}>
            <img src={icon_plus} alt="추가하기" />
            추가하기
          </AddBtn>
        )}
      </CategoryBox>
      <EditBtn onClick={handleClickEditBtn}>
        {editMode ? '완료' : '편집'}
      </EditBtn>
    </EditBoxContainer>
  );
};

const EditBoxContainer = styled.div`
  display: flex;
  background-color: #2a2c2c;
`;

const CategoryBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
`;

const EditBtn = styled.button`
  border: none;
  margin: 0;
  width: 96px;
  height: 36px;
  border-radius: 17px;
  background-color: ${({ theme }) => theme.colors.navy4};
  color: ${({ theme }) => theme.colors.wht};
  font-family: 'PretendardMedium';
  font-size: 14px;

  &:hover {
    cursor: pointer;
  }
`;

const CategoryBtn = styled.button`
  border: none;
  margin: 0;
  padding: 10px 15px;
  border-radius: 18px;
  margin-right: 8px;
  margin-bottom: 8px;

  background-color: ${({ theme }) => theme.colors.grey6};
  color: ${({ theme }) => theme.colors.navy2};
  font-family: 'PretendardMedium';

  &:hover {
    cursor: pointer;
  }

  &.selected {
    background-color: ${({ theme }) => theme.colors.navy2};
    color: ${({ theme }) => theme.colors.navy5};
  }
`;

const AddBtn = styled.button`
  height: 36px;
  border: none;
  margin: 0;
  border-radius: 18px;
  padding: 0 12px;
  margin-right: 8px;
  margin-bottom: 8px;

  background-color: ${({ theme }) => theme.colors.grey8};
  color: ${({ theme }) => theme.colors.grey3};
  font-family: 'PretendardMedium';

  display: flex;
  align-items: center;
  img {
    width: 15px;
    margin-right: 4px;
  }

  &:hover {
    cursor: pointer;
  }
`;

const CategoryInput = styled.input`
  width: 100px;
  border: none;
  margin: 0;
  padding: 9px 15px;
  border-radius: 18px;
  margin-right: 8px;
  margin-bottom: 8px;

  background-color: ${({ theme }) => theme.colors.grey6};
  color: ${({ theme }) => theme.colors.navy2};
  border: 1px solid ${({ theme }) => theme.colors.navy2};
  font-family: 'PretendardMedium';

  &:focus {
    outline: none;
  }
`;
