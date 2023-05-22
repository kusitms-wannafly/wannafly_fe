import styled from 'styled-components';
import { useState, useEffect } from 'react';

import { CategorizedItem } from './CategorizedItem';

import { getCategorizedItemsAPI } from '@api/categoryAPIS';

export interface ApplicationItem {
  applicationItemId: number;
  applicationQuestion: string;
  applicationAnswer: string;
}
export interface CategorizedItem {
  applicationItem: ApplicationItem;
  applicationFormId: number;
  recruiter: string;
  year: number;
  semester: 'first_half' | 'second_half';
}
interface propsType {
  selectedCategoryId: number;
}
export const Categorized = ({ selectedCategoryId }: propsType) => {
  const [categorizedItems, setCategorizedItems] = useState<CategorizedItem[]>();

  useEffect(() => {
    const apireturn = getCategorizedItemsAPI(selectedCategoryId);
    apireturn
      .then((res) => {
        console.log(res);
        setCategorizedItems(res);
      })
      .catch(() => {
        setCategorizedItems([]);
      });
  }, [selectedCategoryId]);

  return (
    <CategorizedContainer>
      {categorizedItems?.map((el, idx) => {
        return (
          <CategorizedItem key={el.applicationFormId} index={idx} item={el} />
        );
      })}
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
