import styled from 'styled-components';
import { PageContainer } from '@components/Layout/PageContainer';
import { Banner } from './Banner';
import { ClubBox } from '@pages/Applications/ClubBox';

const ClubBoxGrid = styled.div`
  font-family: 'PretendardBold';
  display: grid;
  flex-direction: row;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 20px;
  margin-top: 142px;
`;

export const ApplicationsPage = () => {
  return (
    <PageContainer header>
      <Banner />
      <ClubBoxGrid>
        <ClubBox
          clubName="큐시즘"
          modifiedDate="4월 13일 수정"
          date="2023년 상반기"
          isApplying={false}
        />
        <ClubBox
          clubName="큐시즘"
          modifiedDate="4월 13일 수정"
          date="2023년 상반기"
          isApplying={true}
        />
      </ClubBoxGrid>
    </PageContainer>
  );
};
