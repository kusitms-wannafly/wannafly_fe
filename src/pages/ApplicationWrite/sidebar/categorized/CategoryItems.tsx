import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { CategorizedItem as CategorizedItemType } from '@pages/Categorize/Edit/Categorized';
import { CategorizedItem } from '@pages/Categorize/Edit/CategorizedItem';
import { CostModal } from '@components/modals/CostModal';
import { getCategorizedItemsAPI } from '@api/categoryAPIS';

interface propsType {
  selectedCategoryId: number;
}
export const CategoryItems = ({ selectedCategoryId }: propsType) => {
  const [items, setItems] = useState<CategorizedItemType[]>([]);
  const [isOpenCostModal, setIsOpenCostModal] = useState<boolean>(false);

  useEffect(() => {
    const apireturn = getCategorizedItemsAPI(selectedCategoryId);
    apireturn
      .then((res) => {
        setItems(res);
      })
      .catch(() => {
        setItems([]);
      });
  }, [selectedCategoryId]);

  return (
    <CategoryItemsContainer>
      {items.slice(0, 3)?.map((el, idx) => {
        return <CategorizedItem key={idx} index={idx} item={el} />;
      })}
      {items.length > 3 ? (
        <ShowMoreContainer>
          <ShowMoreBtn
            onClick={() => {
              setIsOpenCostModal(!isOpenCostModal);
            }}
          >
            더보기
          </ShowMoreBtn>
        </ShowMoreContainer>
      ) : null}
      <CostModal isOpen={isOpenCostModal} setIsOpen={setIsOpenCostModal} />
    </CategoryItemsContainer>
  );
};

const CategoryItemsContainer = styled.div`
  width: 100%;
  height: calc(100% - 60px);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  padding-bottom: 40px;
`;

const ShowMoreContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ShowMoreBtn = styled.button`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.wht};
  font-family: 'PretendardBold';
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.navy2};
  }
`;
