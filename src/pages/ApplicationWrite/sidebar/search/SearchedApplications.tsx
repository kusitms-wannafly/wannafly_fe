import styled from 'styled-components';

import { CategorizedItem } from '@pages/Categorize/Edit/CategorizedItem';
import { CategorizedItem as CategorizedItemType } from '@pages/Categorize/Edit/Categorized';
interface propsType {
  applications: CategorizedItemType[];
}

const dummy: CategorizedItemType = {
  applicationItem: {
    applicationItemId: 1,
    applicationQuestion: '지원동는 무엇인가요',
    applicationAnswer: '저의 지원 동기는...',
  },
  applicationFormId: 1,
  recruiter: '큐시즘',
  year: 2023,
  semester: 'first_half',
};
export const SearchedApplications = ({ applications }: propsType) => {
  return (
    <ApplicationsContainer>
      <CategorizedItem key={1} index={1} item={dummy} />
      {applications.map((el, idx) => {
        return <CategorizedItem key={idx} index={idx} item={el} />;
      })}
      {applications.length === 0 ? (
        <EmptyContainer>검색 결과가 없어요</EmptyContainer>
      ) : null}
    </ApplicationsContainer>
  );
};
const ApplicationsContainer = styled.div`
  width: 100%;
  height: calc(100% - 90px);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const EmptyContainer = styled.div`
  width: 100%;
  height: 300px;
  text-align: center;
  color: ${({ theme }) => theme.colors.wht};
  font-family: 'HappinessSansBold';
  font-size: 14px;
  line-height: 300px;
`;
