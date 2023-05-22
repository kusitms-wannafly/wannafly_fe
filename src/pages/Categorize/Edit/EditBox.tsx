import styled from 'styled-components';
import { useState } from 'react';
import icon_plus from '@assets/icons/icon-plus-dark.svg';
import icon_minus_blue from '@assets/icons/icon-minus-blue.png';

import { CostModal } from '@components/modals/CostModal';
import { Category } from '.';
import { addCategoryAPI, deleteCategoryAPI } from '@api/categoryAPIS';

interface propsType {
  categories: Category[];
  setCategories: React.Dispatch<React.SetStateAction<Category[]>>;
  selectedCategoryId: number;
  setSelecteCategorydId: React.Dispatch<React.SetStateAction<number>>;
  getAllCategories: () => void;
}
export const EditBox = ({
  categories,
  selectedCategoryId,
  setSelecteCategorydId,
  getAllCategories,
}: propsType) => {
  const handleClickCategoryBtn = (id: number) => {
    console.log(id);
    setSelecteCategorydId(id);
  };

  const [categoryInputValue, setCategoryInputValue] = useState('');
  const [editMode, setEditMode] = useState<boolean>(false); //카테고리 추가
  const [deleteMode, setDeleteMode] = useState<boolean>(false); //카테고리 삭제
  const [isOpenCostModal, setIsOpenCostModal] = useState<boolean>(false);

  const handleChangeCategoryInput = (e: React.FormEvent<HTMLInputElement>) => {
    setCategoryInputValue(e.currentTarget.value);
  };

  //카테고리 추가
  const handleKeyPressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      //카테고리 개수 제한 3개
      if (categories.length < 3) {
        const apireturn = addCategoryAPI(categoryInputValue);
        apireturn
          .then(() => {
            setEditMode(!editMode);
            setCategoryInputValue('');
            getAllCategories();
          })
          .catch(() => {
            setEditMode(!editMode);
          });
      } else {
        setIsOpenCostModal(true);
        setEditMode(!editMode);
      }
    }
  };

  //카테고리 삭제
  const handleClickMinusBtn = (id: number) => {
    const apireturn = deleteCategoryAPI(id);
    apireturn
      .then(() => {
        //setDeleteMode(!deleteMode);
        getAllCategories();
        setSelecteCategorydId(categories[0].categoryId);
      })
      .catch(() => {
        setDeleteMode(!deleteMode);
      });
  };

  const handleClickAddBtn = () => {
    setCategoryInputValue('');
    setEditMode(!editMode);
  };

  const handleClickEditBtn = () => {
    setCategoryInputValue('');
    setDeleteMode(!deleteMode);
  };

  return (
    <EditBoxContainer>
      <CategoryBox>
        {categories?.map((el) => {
          return (
            <CategoryBtn
              key={el.categoryId}
              className={selectedCategoryId === el.categoryId ? 'selected' : ''}
            >
              {deleteMode ? (
                <MinusCategoryBtn
                  onClick={() => {
                    handleClickMinusBtn(el.categoryId);
                  }}
                >
                  <img src={icon_minus_blue} alt="카테고리 제거" />
                </MinusCategoryBtn>
              ) : null}
              <span
                onClick={() => {
                  handleClickCategoryBtn(el.categoryId);
                }}
              >
                {el.name}
              </span>
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
        {deleteMode ? '완료' : '편집'}
      </EditBtn>
      <CostModal isOpen={isOpenCostModal} setIsOpen={setIsOpenCostModal} />
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

const MinusCategoryBtn = styled.div`
  border: none;
  margin: 0;
  padding: 0;
  margin-right: 4px;
  background-color: transparent;
  width: 14px;
  height: 14px;
  img {
    width: 14px;
  }
`;
