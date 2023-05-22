import styled from 'styled-components';
import { useState, useEffect } from 'react';

import { EditBox } from './EditBox';
import { Categorized } from './Categorized';

import { getAllCategoriesAPI } from '@api/categoryAPIS';

export interface Category {
  categoryId: number;
  name: string;
}

interface propsType {
  selectedCategoryId: number;
  setSelecteCategorydId: React.Dispatch<React.SetStateAction<number>>;
}
export const CategoryEdit = ({
  selectedCategoryId,
  setSelecteCategorydId,
}: propsType) => {
  const [categories, setCategories] = useState<Category[]>([]);

  const getAllCategories = () => {
    const apireturn = getAllCategoriesAPI();
    apireturn
      .then((res) => {
        setCategories(res);
        setSelecteCategorydId(res[0].categoryId);
      })
      .catch(() => {
        setCategories([]);
      });
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <CategoryEditContainer>
      <EditFixedContainer>
        <EditHeader>카테고리 만들기</EditHeader>
        <EditBox
          categories={categories}
          setCategories={setCategories}
          selectedCategoryId={selectedCategoryId}
          setSelecteCategorydId={setSelecteCategorydId}
          getAllCategories={getAllCategories}
        />
      </EditFixedContainer>
      <Categorized selectedCategoryId={selectedCategoryId} />
    </CategoryEditContainer>
  );
};

const CategoryEditContainer = styled.div`
  background-color: rgba(53, 56, 57, 0.5);
  width: 550px;
  min-width: 550px;
  padding: 0 25px;

  position: relative;
`;

const EditFixedContainer = styled.div`
  background-color: #2a2c2c;
  position: absolute;
  top: 0;
  width: 500px;
  height: 170px;
  z-index: 100;
`;

const EditHeader = styled.div`
  width: 100%;
  margin-top: 15px;
  padding: 15px 0;

  color: ${({ theme }) => theme.colors.wht};
  font-family: 'PretendardMedium';
  font-size: 24px;
`;
