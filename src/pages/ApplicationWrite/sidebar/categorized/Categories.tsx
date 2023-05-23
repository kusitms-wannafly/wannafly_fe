import styled from 'styled-components';
import { useState, useEffect } from 'react';

import { CategoryHeader } from './CategoryHeader';
import { CategoryItems } from './CategoryItems';
import { getAllCategoriesAPI } from '@api/categoryAPIS';

export interface Category {
  categoryId: number;
  name: string;
}

export const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState<number>(0);

  const getAllCategories = () => {
    const apireturn = getAllCategoriesAPI();
    apireturn
      .then((res) => {
        setCategories(res);
        setSelectedCategoryId(res[0].categoryId);
      })
      .catch(() => {
        setCategories([]);
      });
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <CategoriesContainer>
      <CategoryHeader
        categories={categories}
        selectedCategoryId={selectedCategoryId}
        setSelectedCategoryId={setSelectedCategoryId}
      />
      <CategoryItems selectedCategoryId={selectedCategoryId} />
    </CategoriesContainer>
  );
};

const CategoriesContainer = styled.div`
  width: 100%;
  height: 85%;
  padding: 0 20px;
`;
