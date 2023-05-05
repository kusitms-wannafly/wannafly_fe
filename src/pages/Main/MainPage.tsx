import styled from 'styled-components';
import { PageContainer } from '@components/Layout/PageContainer';
import { ClubBox } from '@components/ClubBox';

const ClubBoxGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 100px;
  margin-top: 142px;
`;

export const MainPage = () => {
  return (
    <PageContainer header banner>
      <ClubBoxGrid>
        <ClubBox clubName="IT 동아리" date="2023년 상반기" isApplied={false} />
        <ClubBox clubName="경영학회" date="2023년 상반기" isApplied={false} />
        <ClubBox clubName="여행 동아리" date="2023년 상반기" isApplied={false} />
        <ClubBox clubName="창업 동아리" date="2021년 하반기" isApplied={true} />
        <ClubBox clubName="대외활동" date="2020년 상반기" isApplied={true} />
        <ClubBox clubName="서포터즈" date="2019년 상반기" isApplied={true} />
        <ClubBox clubName="청년 기자단" date="2020년 하반기" isApplied={true} />
        <ClubBox clubName="친목 동아리" date="2020년 하반기" isApplied={true} />
        <ClubBox clubName="개발 동아리" date="2020년 하반기" isApplied={true} />
      </ClubBoxGrid>
    </PageContainer>
  );
};
